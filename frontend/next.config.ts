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
    const isDev = process.env.NODE_ENV === 'development';
    return [
      {
        source: '/api/index',
        destination: isDev ? 'http://127.0.0.1:8080/' : 'https://end-to-end-airbnb-price-prediction.onrender.com/',
      },
    ]
  }
};

export default config;
