import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  // for external image use
  images:{
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'ichef.bbci.co.uk'

      }
    ]
  }
};

export default nextConfig;
