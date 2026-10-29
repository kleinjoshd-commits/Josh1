import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import {
  HSTS_VALUE,
  applySecurityHeaders,
  decideHostRedirect,
  decidePathRedirect,
  headersForPath,
  resolveRedirect,
  type RedirectInput,
} from "../lib/requestPolicy.ts";

const APEX = "https://modernpayengine.com";

const PATH_ALIASES: Array<[string, string]> = [
  ["/about/team", "/company"],
  ["/about", "/company"],
  ["/industries", "/solutions"],
  ["/use-cases", "/solutions"],
  ["/unified-approach", "/platform"],
  ["/trust-controls", "/platform"],
  ["/resources/execution-infrastructure", "/developers"],
  ["/resources", "/platform"],
  ["/resources/retired-guide", "/platform"],
  ["/resources/nested/guide", "/platform"],
  ["/solutions/workforce", "/solutions/platforms"],
  ["/solutions/distributors", "/solutions/businesses"],
  ["/solutions/send", "/platform"],
  ["/solutions/network", "/platform"],
  ["/solutions/os", "/platform"],
  ["/solutions/balance", "/"],
  ["/press", "/"],
  ["/satellite", "/"],
  ["/balance", "/"],
  ["/future-commerce", "/"],
];

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

check("legacy path aliases stay 301 to the apex and keep the query", () => {
  withFlags({ redirect: "1", permanent: "1" }, () => {
    for (const [pathname, destination] of PATH_ALIASES) {
      const decision = decidePathRedirect(pathname, "?from=old");
      assert.equal(decision?.status, 301, pathname);
      assert.equal(decision?.location, `${APEX}${destination}?from=old`, pathname);
      const slashed = pathname === "/" ? pathname : `${pathname}/`;
      const normalized = decidePathRedirect(slashed, "");
      assert.equal(normalized?.status, 301, slashed);
      assert.equal(normalized?.location, `${APEX}${destination}`, slashed);
    }
    assert.equal(decidePathRedirect("/about/extra", ""), null);
    assert.equal(decidePathRedirect("/solutions/workforce/extra", ""), null);
    assert.equal(decidePathRedirect("/press/release", ""), null);
    assert.equal(decidePathRedirect("/ABOUT", ""), null);
    assert.equal(decidePathRedirect("/platform", ""), null);

    const onApex = resolveRedirect({
      host: "modernpayengine.com",
      protocol: "https",
      pathname: "/about",
      search: "?from=old",
    });
    assert.equal(onApex?.status, 301);
    assert.equal(onApex?.location, `${APEX}/company?from=old`);
  });
  withFlags({ redirect: "1" }, () => {
    const hostFirst = resolveRedirect({
      host: "www.modernpayengine.com",
      protocol: "https",
      pathname: "/about",
      search: "?from=old",
    });
    assert.equal(hostFirst?.location, `${APEX}/about?from=old`);
    assert.equal(hostFirst?.status, 307);
  });
  withFlags({ redirect: "1", permanent: "1" }, () => {
    const hostFirst = resolveRedirect({
      host: "mpesolutions.ai",
      protocol: "http",
      pathname: "/resources/retired-guide",
      search: "",
    });
    assert.equal(hostFirst?.location, `${APEX}/resources/retired-guide`);
    assert.equal(hostFirst?.status, 308);
  });
});

check("redirect decisions can carry the full security header set", () => {
  const cases: Array<{ flags: { redirect?: string; permanent?: string }; input: RedirectInput; status: number; location: string | null }> = [
    {
      flags: {},
      input: { host: "127.0.0.1:3456", protocol: "http", pathname: "/about", search: "?from=old" },
      status: 301,
      location: `${APEX}/company?from=old`,
    },
    {
      flags: {},
      input: { host: "127.0.0.1:3456", protocol: "http", pathname: "/resources/retired-guide", search: "" },
      status: 301,
      location: `${APEX}/platform`,
    },
    {
      flags: { redirect: "1" },
      input: { host: "www.modernpayengine.com", protocol: "https", pathname: "/about", search: "?from=old" },
      status: 307,
      location: `${APEX}/about?from=old`,
    },
    {
      flags: { redirect: "1", permanent: "1" },
      input: { host: "mpesolutions.ai", protocol: "http", pathname: "/platform", search: "?a=1" },
      status: 308,
      location: `${APEX}/platform?a=1`,
    },
    {
      flags: { permanent: "1" },
      input: { host: "www.modernpayengine.com", protocol: "https", pathname: "/about", search: "" },
      status: 301,
      location: `${APEX}/company`,
    },
    {
      flags: { permanent: "1" },
      input: { host: "www.modernpayengine.com", protocol: "https", pathname: "/platform", search: "" },
      status: 0,
      location: null,
    },
  ];
  for (const item of cases) {
    withFlags(item.flags, () => {
      const decision = resolveRedirect(item.input);
      if (item.location === null) {
        assert.equal(decision, null, item.input.pathname);
      } else {
        assert.equal(decision?.status, item.status, item.input.pathname);
        assert.equal(decision?.location, item.location, item.input.pathname);
      }
      const sent = new Map<string, string>();
      applySecurityHeaders({ headers: { set: (name, value) => sent.set(name, value) } }, item.input.pathname);
      assert.equal(sent.get("Strict-Transport-Security"), "max-age=63072000");
      assert.doesNotMatch(sent.get("Strict-Transport-Security") ?? "", /includeSubDomains|preload/i);
      assert.match(sent.get("Content-Security-Policy") ?? "", /frame-ancestors 'none'/);
      assert.equal(sent.get("X-Frame-Options"), "DENY");
      assert.equal(sent.get("X-Content-Type-Options"), "nosniff");
      assert.equal(sent.get("Referrer-Policy"), "strict-origin-when-cross-origin");
      assert.equal(sent.get("Permissions-Policy"), "camera=(), microphone=(), geolocation=()");
    });
  }
});

check("next.config does not declare redirects", () => {
  const source = readFileSync(new URL("../next.config.ts", import.meta.url), "utf8");
  assert.equal(/\basync\s+redirects\s*\(/.test(source), false);
});

check("proxy applies security headers to the redirect response", () => {
  const source = readFileSync(new URL("../proxy.ts", import.meta.url), "utf8");
  assert.match(source, /resolveRedirect\(/);
  assert.match(source, /NextResponse\.redirect\(decision\.location, decision\.status\)/);
  assert.match(source, /applySecurityHeaders\(response, request\.nextUrl\.pathname\)/);
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
