/**
 * Security headers and staged host redirects.
 *
 * Stage 1 (always on): every response from proxy.ts gets the security headers,
 * including redirects this module creates. HSTS is max-age=63072000 with no
 * includeSubDomains and no preload.
 *
 * Host redirects (www, mpesolutions.ai, and http on those hosts plus the apex)
 * stay off unless MPE_HOST_REDIRECT=1. They start as 307. Set
 * MPE_HOST_REDIRECT_PERMANENT=1 as well to send 308. The permanent flag does
 * nothing on its own. Any other value, including unset, is off.
 */

export const HSTS_VALUE = "max-age=63072000";

const PAGE_CSP =
  "default-src 'self'; img-src 'self' data: blob:; style-src 'self' 'unsafe-inline'; script-src 'self' 'unsafe-inline'; font-src 'self' data:; connect-src 'self'; frame-ancestors 'none'; base-uri 'self'; form-action 'self'; object-src 'none'; upgrade-insecure-requests";

const COMMUNITY_CSP =
  "default-src 'self'; img-src 'self' data: blob:; style-src 'self' 'unsafe-inline'; script-src 'self' 'unsafe-inline'; font-src 'self' data:; connect-src 'self' https://*.supabase.co; frame-ancestors 'none'; base-uri 'self'; form-action 'self'; object-src 'none'; upgrade-insecure-requests";

const CANONICAL_HOST = "modernpayengine.com";
const CANONICAL_ORIGIN = `https://${CANONICAL_HOST}`;

const ALIAS_HOSTS = new Set([
  "www.modernpayengine.com",
  "mpesolutions.ai",
  "www.mpesolutions.ai",
]);

const KNOWN_HOSTS = new Set([CANONICAL_HOST, ...ALIAS_HOSTS]);

const REDIRECT_FLAG = "MPE_HOST_REDIRECT";
const PERMANENT_FLAG = "MPE_HOST_REDIRECT_PERMANENT";

const EXACT_PATH_REDIRECTS: Record<string, { pathname: string; status: 301 | 307 }> = {
  "/community": { pathname: "/community/index.html", status: 307 },
  "/about/team": { pathname: "/company", status: 301 },
  "/about": { pathname: "/company", status: 301 },
  "/industries": { pathname: "/solutions", status: 301 },
  "/use-cases": { pathname: "/solutions", status: 301 },
  "/unified-approach": { pathname: "/platform", status: 301 },
  "/trust-controls": { pathname: "/platform", status: 301 },
  "/resources/execution-infrastructure": { pathname: "/developers", status: 301 },
  "/resources": { pathname: "/platform", status: 301 },
  "/solutions/workforce": { pathname: "/solutions/platforms", status: 301 },
  "/solutions/distributors": { pathname: "/solutions/businesses", status: 301 },
  "/solutions/send": { pathname: "/platform", status: 301 },
  "/solutions/network": { pathname: "/platform", status: 301 },
  "/solutions/os": { pathname: "/platform", status: 301 },
  "/solutions/balance": { pathname: "/", status: 301 },
  "/press": { pathname: "/", status: 301 },
  "/satellite": { pathname: "/", status: 301 },
  "/balance": { pathname: "/", status: 301 },
  "/future-commerce": { pathname: "/", status: 301 },
};

export type RedirectDecision = {
  location: string;
  status: 301 | 307 | 308;
};

export type RedirectInput = {
  host: string;
  protocol: string;
  pathname: string;
  search: string;
};

function flagOn(name: string): boolean {
  return process.env[name] === "1";
}

export function hostRedirectEnabled(): boolean {
  return flagOn(REDIRECT_FLAG);
}

export function hostRedirectPermanent(): boolean {
  return flagOn(PERMANENT_FLAG);
}

export function normalizeHost(host: string): string {
  return host.replace(/:\d+$/, "").trim().toLowerCase();
}

export function normalizeProtocol(protocol: string): string {
  return protocol.split(",")[0]?.trim().replace(/:$/, "").toLowerCase() ?? "";
}

function normalizePath(pathname: string): string {
  if (pathname.length > 1 && pathname.endsWith("/")) return pathname.slice(0, -1);
  return pathname || "/";
}

export function headersForPath(pathname: string): Array<[string, string]> {
  const csp = pathname === "/community" || pathname.startsWith("/community/") ? COMMUNITY_CSP : PAGE_CSP;
  return [
    ["Strict-Transport-Security", HSTS_VALUE],
    ["Content-Security-Policy", csp],
    ["X-Content-Type-Options", "nosniff"],
    ["X-Frame-Options", "DENY"],
    ["Referrer-Policy", "strict-origin-when-cross-origin"],
    ["Permissions-Policy", "camera=(), microphone=(), geolocation=()"],
  ];
}

export function applySecurityHeaders(response: { headers: { set(name: string, value: string): void } }, pathname: string) {
  if (/includeSubDomains|preload/i.test(HSTS_VALUE)) {
    throw new Error("HSTS must stay max-age=63072000 without includeSubDomains or preload");
  }
  for (const [name, value] of headersForPath(pathname)) {
    response.headers.set(name, value);
  }
}

export function decideHostRedirect(input: RedirectInput): RedirectDecision | null {
  if (!hostRedirectEnabled()) return null;
  const host = normalizeHost(input.host);
  const protocol = normalizeProtocol(input.protocol);
  const alias = ALIAS_HOSTS.has(host);
  const insecureKnownHost = KNOWN_HOSTS.has(host) && protocol === "http";
  if (!alias && !insecureKnownHost) return null;
  return {
    location: `${CANONICAL_ORIGIN}${input.pathname}${input.search}`,
    status: hostRedirectPermanent() ? 308 : 307,
  };
}

/** Legacy aliases always target the fixed apex. Do not use the request Host or origin. */
export function decidePathRedirect(pathname: string, search: string): RedirectDecision | null {
  const path = normalizePath(pathname);
  const exact = EXACT_PATH_REDIRECTS[path];
  const target = exact ?? (path.startsWith("/resources/") ? { pathname: "/platform", status: 301 as const } : null);
  if (!target) return null;
  return { location: `${CANONICAL_ORIGIN}${target.pathname}${search}`, status: target.status };
}

/** Host cutover first (path preserved), then legacy path aliases. */
export function resolveRedirect(input: RedirectInput): RedirectDecision | null {
  return decideHostRedirect(input) ?? decidePathRedirect(input.pathname, input.search);
}
