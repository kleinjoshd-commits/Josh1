import assert from "node:assert/strict";
import {
  HSTS_VALUE,
  decideHostRedirect,
  decidePathRedirect,
  headersForPath,
  resolveRedirect,
  type RedirectInput,
} from "../lib/requestPolicy.ts";

let failed = 0;

function check(name: string, fn: () => void) {
  try {
    fn();
    console.log(`ok ${name}`);
  } catch (error) {
    failed += 1;
    console.error(`FAIL ${name}`);
    console.error(error);
  }
}

function withFlags(flags: { redirect?: string; permanent?: string }, fn: () => void) {
  const prevRedirect = process.env.MPE_HOST_REDIRECT;
  const prevPermanent = process.env.MPE_HOST_REDIRECT_PERMANENT;
  if (flags.redirect === undefined) delete process.env.MPE_HOST_REDIRECT;
  else process.env.MPE_HOST_REDIRECT = flags.redirect;
  if (flags.permanent === undefined) delete process.env.MPE_HOST_REDIRECT_PERMANENT;
  else process.env.MPE_HOST_REDIRECT_PERMANENT = flags.permanent;
  try {
    fn();
  } finally {
    if (prevRedirect === undefined) delete process.env.MPE_HOST_REDIRECT;
    else process.env.MPE_HOST_REDIRECT = prevRedirect;
    if (prevPermanent === undefined) delete process.env.MPE_HOST_REDIRECT_PERMANENT;
    else process.env.MPE_HOST_REDIRECT_PERMANENT = prevPermanent;
  }
}

const base: RedirectInput = {
  host: "www.modernpayengine.com",
  protocol: "https",
  pathname: "/platform",
  search: "?a=1",
};

check("flags default off", () => {
  withFlags({}, () => {
    assert.equal(decideHostRedirect(base), null);
    assert.equal(
      decideHostRedirect({ ...base, host: "mpesolutions.ai", protocol: "http", pathname: "/machines", search: "" }),
      null,
    );
  });
});

check("permanent flag alone does not redirect", () => {
  withFlags({ permanent: "1" }, () => {
    assert.equal(decideHostRedirect(base), null);
  });
});

check("enabled flag is temporary 307 and preserves path and query", () => {
  withFlags({ redirect: "1" }, () => {
    assert.deepEqual(decideHostRedirect(base), {
      location: "https://modernpayengine.com/platform?a=1",
      status: 307,
    });
    assert.deepEqual(
      decideHostRedirect({
        host: "www.mpesolutions.ai:443",
        protocol: "http,https",
        pathname: "/",
        search: "",
      }),
      { location: "https://modernpayengine.com/", status: 307 },
    );
    assert.deepEqual(
      decideHostRedirect({
        host: "modernpayengine.com",
        protocol: "http",
        pathname: "/company",
        search: "?x=1",
      }),
      { location: "https://modernpayengine.com/company?x=1", status: 307 },
    );
  });
});

check("both flags use 308", () => {
  withFlags({ redirect: "1", permanent: "1" }, () => {
    assert.equal(decideHostRedirect(base)?.status, 308);
  });
});

check("other hosts are not redirected", () => {
  withFlags({ redirect: "1", permanent: "1" }, () => {
    assert.equal(
      decideHostRedirect({
        host: "localhost:3456",
        protocol: "http",
        pathname: "/",
        search: "",
      }),
      null,
    );
    assert.equal(
      decideHostRedirect({
        host: "preview.example.com",
        protocol: "https",
        pathname: "/platform",
        search: "",
      }),
      null,
    );
  });
});

check("https apex is not redirected", () => {
  withFlags({ redirect: "1" }, () => {
    assert.equal(
      decideHostRedirect({
        host: "modernpayengine.com",
        protocol: "https",
        pathname: "/",
        search: "",
      }),
      null,
    );
  });
});

check("legacy path redirect keeps query and does not run when a host redirect matches", () => {
  withFlags({}, () => {
    const path = resolveRedirect({
      host: "localhost",
      protocol: "http",
      pathname: "/about",
      search: "?from=old",
    });
    assert.equal(path?.status, 301);
    assert.equal(path?.location, "https://modernpayengine.com/company?from=old");
  });
  withFlags({ redirect: "1" }, () => {
    const hostFirst = resolveRedirect({
      host: "www.modernpayengine.com",
      protocol: "https",
      pathname: "/about",
      search: "",
    });
    assert.equal(hostFirst?.location, "https://modernpayengine.com/about");
    assert.equal(hostFirst?.status, 307);
  });
});

check("security headers omit HSTS includeSubDomains and preload", () => {
  for (const pathname of ["/", "/community", "/community/index.html"]) {
    const headers = headersForPath(pathname);
    const hsts = headers.find(([name]) => name === "Strict-Transport-Security")?.[1];
    assert.equal(hsts, HSTS_VALUE);
    assert.equal(hsts, "max-age=63072000");
    assert.doesNotMatch(hsts ?? "", /includeSubDomains|preload/i);
    const csp = headers.find(([name]) => name === "Content-Security-Policy")?.[1] ?? "";
    assert.match(csp, /connect-src 'self'/);
    assert.doesNotMatch(csp, /supabase/);
    assert.match(csp, /frame-ancestors 'none'/);
    assert.equal(headers.find(([name]) => name === "X-Frame-Options")?.[1], "DENY");
    assert.equal(headers.find(([name]) => name === "X-Content-Type-Options")?.[1], "nosniff");
    assert.equal(headers.find(([name]) => name === "Referrer-Policy")?.[1], "strict-origin-when-cross-origin");
    assert.equal(headers.find(([name]) => name === "Permissions-Policy")?.[1], "camera=(), microphone=(), geolocation=()");
  }
  assert.equal(decidePathRedirect("/community", ""), null);
  assert.equal(decidePathRedirect("/community/index.html", ""), null);
});

if (failed > 0) {
  console.error(`${failed} host policy check(s) failed`);
  process.exit(1);
}

console.log("host policy checks passed");
