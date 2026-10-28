import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Redirects and security headers are applied in proxy.ts so redirect
  // responses carry the same headers as pages. www and mpesolutions.ai
  // redirects stay behind env flags. See docs/host-cutover.md.
};

export default nextConfig;
