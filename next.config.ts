import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Allow cross-origin requests during development
  allowedDevOrigins: [
    '192.168.160.152', // Your current IP address
    'localhost',
    '127.0.0.1',
    '0.0.0.0'
  ],
};

export default nextConfig;
