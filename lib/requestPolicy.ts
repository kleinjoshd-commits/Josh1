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
 *
 * Legacy path aliases are decided here and issued by proxy.ts. Keep them out
 * of next.config redirects: those run before proxy and finish the response
 * with no security headers. Lookup is case-insensitive. On a Vercel preview
 * deployment the Location is a relative path so the browser stays on that
 * host. Every other deployment keeps the absolute apex. Do not build either
 * target from the Host header.
 *
 * Trailing-slash redirects are decided here too. next.config sets
 * skipTrailingSlashRedirect so Next.js does not emit its own 308 before the
 * proxy runs. A path that is not an alias and ends in a slash is a 308 to the
 * same path and query with that slash removed, and that response gets the
 * headers above. Protocol-relative paths, backslashes, and encoded slash or
 * backslash variants are not turned into a Location.
 */

export const HSTS_VALUE = "max-age=63072000";

const PAGE_CSP =
  "default-src 'self'; img-src 'self' data: blob:; style-src 'self' 'unsafe-inline'; script-src 'self' 'unsafe-inline'; font-src 'self' data:; connect-src 'self'; frame-ancestors 'none'; base-uri 'self'; form-action 'self'; object-src 'none'; upgrade-insecure-requests";

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

function canonicalAliasPath(pathname: string): string {
  const path = pathname || "/";
  const stripped = path.length > 1 && path.endsWith("/") ? path.slice(0, -1) : path;
  return stripped.toLowerCase();
}

function isPreviewDeployment(): boolean {
  // Bracket access stays dynamic so a build does not inline an empty value.
  return process.env["VERCEL_ENV"] === "preview";
}

/** Decodes a path enough times to see through repeated percent-encoding. */
function fullyDecode(value: string): string | null {
  let current = value;
  for (let i = 0; i < 5; i += 1) {
    let decoded: string;
    try {
      decoded = decodeURIComponent(current);
    } catch {
      return null;
    }
    if (decoded === current) return current;
    current = decoded;
  }
  return null;
}

/**
 * True when a path can be placed in a relative Location without leaving the
 * site. Rejects protocol-relative URLs, backslashes, and encoded forms of
 * those, including double encoding.
 */
function isOnSitePath(pathname: string): boolean {
  if (!pathname.startsWith("/") || pathname.startsWith("//")) return false;
  if (pathname.includes("\\") || /[\u0000-\u001F\u007F]/.test(pathname)) return false;
  if (/%(?:2f|5c)/i.test(pathname) || /%25(?:2f|5c)/i.test(pathname)) return false;
  const decoded = fullyDecode(pathname);
  if (decoded == null) return false;
  if (!decoded.startsWith("/") || decoded.startsWith("//")) return false;
  if (decoded.includes("\\") || /[\u0000-\u001F\u007F]/.test(decoded)) return false;
  return true;
}

function isSafeSearch(search: string): boolean {
  if (search === "") return true;
  return search.startsWith("?") && !/[\u0000\r\n]/.test(search);
}

function pathAliasLocation(pathname: string, search: string): string | null {
  if (!isOnSitePath(pathname)) return null;
  if (isPreviewDeployment()) return `${pathname}${search}`;
  return `${CANONICAL_ORIGIN}${pathname}${search}`;
}

export function headersForPath(pathname: string): Array<[string, string]> {
  if (!pathname.startsWith("/")) {
    throw new Error("pathname must start with /");
  }
  return [
    ["Strict-Transport-Security", HSTS_VALUE],
    ["Content-Security-Policy", PAGE_CSP],
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

/**
 * Legacy aliases use the fixed map, looked up without case sensitivity.
 * Preview deployments get a relative Location. All other deployments get the
 * apex. The request Host is not an input.
 */
export function decidePathRedirect(pathname: string, search: string): RedirectDecision | null {
  if (!isSafeSearch(search)) return null;
  const path = canonicalAliasPath(pathname);
  const exact = EXACT_PATH_REDIRECTS[path];
  const target = exact ?? (path.startsWith("/resources/") ? { pathname: "/platform", status: 301 as const } : null);
  if (!target) return null;
  const location = pathAliasLocation(target.pathname, search);
  if (!location) return null;
  return { location, status: target.status };
}

/**
 * Same path and query, one trailing slash removed. Relative so the response
 * stays on the host that received the request. Unsafe paths return null and
 * the request stays on this site.
 */
export function decideTrailingSlashRedirect(pathname: string, search: string): RedirectDecision | null {
  if (pathname.length <= 1 || !pathname.endsWith("/")) return null;
  if (!isSafeSearch(search)) return null;
  const stripped = pathname.slice(0, -1);
  if (!isOnSitePath(stripped)) return null;
  return { location: `${stripped}${search}`, status: 308 };
}

/** Host cutover first (path preserved), then legacy path aliases, then a trailing slash. */
export function resolveRedirect(input: RedirectInput): RedirectDecision | null {
  return (
    decideHostRedirect(input) ??
    decidePathRedirect(input.pathname, input.search) ??
    decideTrailingSlashRedirect(input.pathname, input.search)
  );
}
