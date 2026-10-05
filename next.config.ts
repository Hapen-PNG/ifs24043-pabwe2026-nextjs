import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  turbopack: {
    root: process.cwd(),
  },
  experimental: {
    inlineCss: true,
  },
  async rewrites() {
    return [
      {
        source: "/api/delcom/:path*",
        destination: "https://open-api.delcom.org/api/v1/:path*",
      },
      {
        source: "/api-proxy/:path*",
        destination: "https://open-api.delcom.org/api/v1/:path*",
      },
      {
        source: "/img/:path*",
        destination: "https://open-api.delcom.org/img/:path*",
      },
      {
        source: "/default/img/:path*",
        destination: "https://open-api.delcom.org/default/img/:path*",
      },
    ];
  },
};

export default nextConfig;