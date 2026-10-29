import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import {
  HSTS_VALUE,
  applySecurityHeaders,
  decideHostRedirect,
  decidePathRedirect,
  decideTrailingSlashRedirect,
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

function withFlags(flags: { redirect?: string; permanent?: string; vercelEnv?: string }, fn: () => void) {
  const prevRedirect = process.env.MPE_HOST_REDIRECT;
  const prevPermanent = process.env.MPE_HOST_REDIRECT_PERMANENT;
  const prevVercel = process.env.VERCEL_ENV;
  if (flags.redirect === undefined) delete process.env.MPE_HOST_REDIRECT;
  else process.env.MPE_HOST_REDIRECT = flags.redirect;
  if (flags.permanent === undefined) delete process.env.MPE_HOST_REDIRECT_PERMANENT;
  else process.env.MPE_HOST_REDIRECT_PERMANENT = flags.permanent;
  if (flags.vercelEnv === undefined) delete process.env.VERCEL_ENV;
  else process.env.VERCEL_ENV = flags.vercelEnv;
  try {
    fn();
  } finally {
    if (prevRedirect === undefined) delete process.env.MPE_HOST_REDIRECT;
    else process.env.MPE_HOST_REDIRECT = prevRedirect;
    if (prevPermanent === undefined) delete process.env.MPE_HOST_REDIRECT_PERMANENT;
    else process.env.MPE_HOST_REDIRECT_PERMANENT = prevPermanent;
    if (prevVercel === undefined) delete process.env.VERCEL_ENV;
    else process.env.VERCEL_ENV = prevVercel;
  }
}

function mixCase(pathname: string): string {
  let upper = true;
  return pathname.replace(/[a-z]/g, (char) => {
    const next = upper ? char.toUpperCase() : char;
    upper = !upper;
    return next;
  });
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
    assert.equal(decidePathRedirect("/platform", ""), null);
    const mixedAbout = decidePathRedirect("/ABOUT", "?from=old");
    assert.equal(mixedAbout?.status, 301);
    assert.equal(mixedAbout?.location, `${APEX}/company?from=old`);

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
  assert.match(source, /skipTrailingSlashRedirect:\s*true/);
});

check("proxy applies security headers to the redirect response", () => {
  const source = readFileSync(new URL("../proxy.ts", import.meta.url), "utf8");
  assert.match(source, /resolveRedirect\(/);
  assert.match(source, /NextResponse\.redirect\(/);
  assert.match(source, /applySecurityHeaders\(response, request\.nextUrl\.pathname\)/);
  assert.doesNotMatch(source, /https:\/\/\$\{/);
  assert.doesNotMatch(source, /\$\{[^}\n]*headers\.get\(["']host["']\)/);
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

check("alias lookup is case-insensitive and does not follow the request host", () => {
  withFlags({}, () => {
    for (const [pathname, destination] of PATH_ALIASES) {
      const mixed = mixCase(pathname);
      const decision = decidePathRedirect(mixed, "?from=old");
      assert.equal(decision?.status, 301, mixed);
      assert.equal(decision?.location, `${APEX}${destination}?from=old`, mixed);
      const slashed = decidePathRedirect(`${mixed}/`, "");
      assert.equal(slashed?.location, `${APEX}${destination}`, `${mixed}/`);
    }
    const fromEvil = resolveRedirect({
      host: "evil.example",
      protocol: "https",
      pathname: "/AbOuT",
      search: "?from=old",
    });
    assert.equal(fromEvil?.location, `${APEX}/company?from=old`);
    assert.equal(fromEvil?.location.includes("evil.example"), false);
    assert.equal(decidePathRedirect("/Resources/%2F%2Fevil.example", "")?.location, `${APEX}/platform`);
  });
  withFlags({ vercelEnv: "production" }, () => {
    assert.equal(decidePathRedirect("/About", "?from=old")?.location, `${APEX}/company?from=old`);
  });
  withFlags({ vercelEnv: "development" }, () => {
    assert.equal(decidePathRedirect("/About", "")?.location, `${APEX}/company`);
  });
  withFlags({ vercelEnv: "preview" }, () => {
    for (const [pathname, destination] of PATH_ALIASES) {
      const mixed = mixCase(pathname);
      const decision = decidePathRedirect(mixed, "?from=old");
      assert.equal(decision?.status, 301, mixed);
      assert.equal(decision?.location, `${destination}?from=old`, mixed);
      assert.equal(decision?.location.includes("modernpayengine.com"), false, mixed);
      assert.equal(decision?.location.startsWith("//"), false, mixed);
    }
    const fromEvil = resolveRedirect({
      host: "evil.example",
      protocol: "https",
      pathname: "/AbOuT",
      search: "?from=old",
    });
    assert.equal(fromEvil?.status, 301);
    assert.equal(fromEvil?.location, "/company?from=old");
    assert.equal(fromEvil?.location.includes("evil.example"), false);
    assert.equal(fromEvil?.location.includes("modernpayengine.com"), false);
    const encodedPrefix = decidePathRedirect("/Resources/%2F%2Fevil.example", "");
    assert.equal(encodedPrefix?.location, "/platform");
    assert.equal(encodedPrefix?.location.includes("evil.example"), false);
  });
  withFlags({ redirect: "1", vercelEnv: "preview" }, () => {
    const hostFirst = resolveRedirect({
      host: "www.modernpayengine.com",
      protocol: "https",
      pathname: "/About",
      search: "?a=1",
    });
    assert.equal(hostFirst?.status, 307);
    assert.equal(hostFirst?.location, `${APEX}/About?a=1`);
  });
  withFlags({ redirect: "1", permanent: "1", vercelEnv: "preview" }, () => {
    assert.deepEqual(
      decideHostRedirect({
        host: "mpesolutions.ai",
        protocol: "http",
        pathname: "/platform",
        search: "?a=1",
      }),
      { location: `${APEX}/platform?a=1`, status: 308 },
    );
  });
});

check("trailing slash redirects keep the path and query", () => {
  withFlags({}, () => {
    assert.deepEqual(decideTrailingSlashRedirect("/company/", "?from=old"), {
      location: "/company?from=old",
      status: 308,
    });
    assert.deepEqual(decideTrailingSlashRedirect("/solutions/platforms/", ""), {
      location: "/solutions/platforms",
      status: 308,
    });
    assert.deepEqual(decideTrailingSlashRedirect("/Company/", "?x=1"), {
      location: "/Company?x=1",
      status: 308,
    });
    assert.equal(decideTrailingSlashRedirect("/", ""), null);
    assert.equal(decideTrailingSlashRedirect("/company", ""), null);
    assert.equal(decidePathRedirect("/about/", "")?.status, 301);
    assert.equal(decidePathRedirect("/about/", "")?.location, `${APEX}/company`);
    const page = resolveRedirect({
      host: "evil.example",
      protocol: "https",
      pathname: "/company/",
      search: "?from=old",
    });
    assert.equal(page?.status, 308);
    assert.equal(page?.location, "/company?from=old");
    assert.equal(page?.location.includes("evil.example"), false);
  });
  withFlags({ vercelEnv: "preview" }, () => {
    const page = decideTrailingSlashRedirect("/platform/", "?a=1");
    assert.equal(page?.location, "/platform?a=1");
    assert.equal(page?.status, 308);
  });
});

check("protocol-relative, backslash, and encoded paths stay on site", () => {
  const attacks = [
    "//evil.example",
    "//evil.example/",
    "///evil.example",
    "/\\evil.example",
    "/\\evil.example/",
    "/\\\\evil.example",
    "/%2f%2fevil.example",
    "/%2F%2Fevil.example/",
    "/%5c%5cevil.example",
    "/%5C%5Cevil.example/",
    "/%252f%252fevil.example",
    "/%255c%255cevil.example/",
    "/%2f%5cevil.example",
    "/about%2f%2fevil.example",
    "/about%5cevil.example",
  ];
  withFlags({}, () => {
    for (const pathname of attacks) {
      assert.equal(decidePathRedirect(pathname, ""), null, pathname);
      assert.equal(decideTrailingSlashRedirect(pathname, ""), null, pathname);
      assert.equal(
        resolveRedirect({ host: "evil.example", protocol: "https", pathname, search: "?x=1" }),
        null,
        pathname,
      );
    }
    assert.equal(decidePathRedirect("/about", "?\nhttps://evil.example"), null);
    assert.equal(decideTrailingSlashRedirect("/company/", "?\r\nLocation: https://evil.example"), null);
  });
  withFlags({ redirect: "1", permanent: "1" }, () => {
    for (const pathname of attacks) {
      const decision = resolveRedirect({
        host: "www.modernpayengine.com",
        protocol: "https",
        pathname,
        search: "",
      });
      assert.equal(decision?.status, 308, pathname);
      assert.equal(new URL(decision?.location ?? "").origin, APEX, pathname);
    }
  });
  withFlags({ vercelEnv: "preview" }, () => {
    for (const pathname of attacks) {
      const decision = resolveRedirect({
        host: "evil.example",
        protocol: "https",
        pathname,
        search: "",
      });
      if (!decision) continue;
      assert.equal(decision.location.startsWith("//"), false, pathname);
      assert.equal(decision.location.includes("\\"), false, pathname);
      assert.equal(decision.location.includes("evil.example"), false, pathname);
      assert.equal(decision.location.includes("modernpayengine.com"), false, pathname);
    }
  });
});

if (failed > 0) {
  console.error(`${failed} host policy check(s) failed`);
  process.exit(1);
}

console.log("host policy checks passed");
