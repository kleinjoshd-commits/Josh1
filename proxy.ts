import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { applySecurityHeaders, resolveRedirect } from "./lib/requestPolicy";

const CANONICAL_ORIGIN = "https://modernpayengine.com";

// NextResponse.redirect requires an absolute URL. A relative decision is
// resolved with the standard URL parser against the URL Next already built
// for this request. Cloning that URL and editing pathname keeps the old
// trailing-slash flag and puts the slash back. Next then rewrites a same-host
// Location to a relative path. Do not read the Host header to build that URL.
function redirectResponse(request: NextRequest, location: string, status: number) {
  if (isRelativeOnSiteLocation(location)) {
    return NextResponse.redirect(new URL(location, request.nextUrl), status);
  }
  if (location === CANONICAL_ORIGIN || location.startsWith(`${CANONICAL_ORIGIN}/`)) {
    return NextResponse.redirect(location, status);
  }
  return NextResponse.next();
}

function isRelativeOnSiteLocation(location: string): boolean {
  if (!location.startsWith("/") || location.startsWith("//") || /[\u0000\r\n]/.test(location)) return false;
  const queryAt = location.indexOf("?");
  const path = queryAt === -1 ? location : location.slice(0, queryAt);
  if (path.includes("\\")) return false;
  if (/%(?:2f|5c)/i.test(path) || /%25(?:2f|5c)/i.test(path)) return false;
  return true;
}

// Host cutover, legacy path aliases, and trailing-slash normalization all
// return from here so every redirect gets the same security headers.
export function proxy(request: NextRequest) {
  const forwarded = request.headers.get("x-forwarded-proto");
  const decision = resolveRedirect({
    host: request.headers.get("host") ?? request.nextUrl.host,
    protocol: forwarded ?? request.nextUrl.protocol,
    pathname: request.nextUrl.pathname,
    search: request.nextUrl.search,
  });

  const response = decision
    ? redirectResponse(request, decision.location, decision.status)
    : NextResponse.next();

  applySecurityHeaders(response, request.nextUrl.pathname);
  return response;
}

export const config = {
  matcher: ["/((?!_next/static|_next/image).*)"],
};
