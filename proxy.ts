import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { applySecurityHeaders, resolveRedirect } from "./lib/requestPolicy";

export function proxy(request: NextRequest) {
  const forwarded = request.headers.get("x-forwarded-proto");
  const decision = resolveRedirect({
    host: request.headers.get("host") ?? request.nextUrl.host,
    protocol: forwarded ?? request.nextUrl.protocol,
    pathname: request.nextUrl.pathname,
    search: request.nextUrl.search,
  });

  const response = decision
    ? NextResponse.redirect(decision.location, decision.status)
    : NextResponse.next();

  applySecurityHeaders(response, request.nextUrl.pathname);
  return response;
}

export const config = {
  matcher: ["/((?!_next/static|_next/image).*)"],
};
