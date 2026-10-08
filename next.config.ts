import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  // for external image use
  images:{
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'ichef.bbci.co.uk',
        

      },
       {
        protocol: 'https',
        hostname: 'lh3.googleusercontent.com',
        

      }
    ],
    
  }
};



export default nextConfig;
