import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      // The community shell is a static folder under public/; Next does not
      // serve directory indexes, so land visitors on its index.html. Relative
      // asset paths inside the shell require the /community/ base, hence a
      // redirect (visible URL change) rather than a rewrite.
      {
        source: "/community",
        destination: "/community/index.html",
        permanent: false,
      },
      { source: "/about/team", destination: "/company", statusCode: 301 },
      { source: "/about", destination: "/company", statusCode: 301 },
      { source: "/industries", destination: "/solutions", statusCode: 301 },
      { source: "/use-cases", destination: "/solutions", statusCode: 301 },
      { source: "/unified-approach", destination: "/platform", statusCode: 301 },
      { source: "/trust-controls", destination: "/platform", statusCode: 301 },
      {
        source: "/resources/execution-infrastructure",
        destination: "/developers",
        statusCode: 301,
      },
      { source: "/resources", destination: "/platform", statusCode: 301 },
      { source: "/resources/:path*", destination: "/platform", statusCode: 301 },
      { source: "/solutions/workforce", destination: "/solutions/platforms", statusCode: 301 },
      { source: "/solutions/distributors", destination: "/solutions/businesses", statusCode: 301 },
      { source: "/solutions/send", destination: "/platform", statusCode: 301 },
      { source: "/solutions/network", destination: "/platform", statusCode: 301 },
      { source: "/solutions/os", destination: "/platform", statusCode: 301 },
      { source: "/solutions/balance", destination: "/", statusCode: 301 },
      { source: "/press", destination: "/", statusCode: 301 },
      { source: "/satellite", destination: "/", statusCode: 301 },
      { source: "/balance", destination: "/", statusCode: 301 },
      { source: "/future-commerce", destination: "/", statusCode: 301 },
    ];
  },
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          {
            key: "Content-Security-Policy",
            value:
              "default-src 'self'; img-src 'self' data: blob:; style-src 'self' 'unsafe-inline'; script-src 'self' 'unsafe-inline'; font-src 'self' data:; connect-src 'self'; frame-ancestors 'none'; base-uri 'self'; form-action 'self'; object-src 'none'; upgrade-insecure-requests",
          },
          {
            key: "Referrer-Policy",
            value: "strict-origin-when-cross-origin",
          },
          {
            key: "X-Content-Type-Options",
            value: "nosniff",
          },
          {
            key: "X-Frame-Options",
            value: "DENY",
          },
          {
            key: "Permissions-Policy",
            value: "camera=(), microphone=(), geolocation=()",
          },
        ],
      },
      {
        // Community shell: same posture as the site, plus Supabase for the
        // enrollment sync the shell enables when its config keys are filled.
        source: "/community/:path*",
        headers: [
          {
            key: "Content-Security-Policy",
            value:
              "default-src 'self'; img-src 'self' data: blob:; style-src 'self' 'unsafe-inline'; script-src 'self' 'unsafe-inline'; font-src 'self' data:; connect-src 'self' https://*.supabase.co; frame-ancestors 'none'; base-uri 'self'; form-action 'self'; object-src 'none'; upgrade-insecure-requests",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
