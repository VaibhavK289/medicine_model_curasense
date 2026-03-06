import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      {
        source: "/api/:path*",
        destination: "https://vaibhavk289-curasense-backend.hf.space/:path*",
      },
    ];
  },
};

export default nextConfig;
