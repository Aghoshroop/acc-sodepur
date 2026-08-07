import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: '/training/admin',
        destination: '/admin/calendar',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
