import type { NextConfig } from "next";

const config: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
  },
  async rewrites() {
    // FORCE PRODUCTION URL
    return [
      {
        source: '/api/index',
        destination: 'https://end-to-end-airbnb-price-prediction.onrender.com/',
      },
    ]
  }
};

export default config;
