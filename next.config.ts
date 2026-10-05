import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  generateEtags: false,
  turbopack: {
    root: process.cwd(),
  },
  experimental: {
    inlineCss: true,
    optimizePackageImports: ["react-icons"],
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
  async headers() {
    return [
      {
        source: "/auth/login",
        headers: [
          {
            key: "Cache-Control",
            value: "no-store, no-cache, must-revalidate",
          },
        ],
      },
    ];
  },
};

export default nextConfig;