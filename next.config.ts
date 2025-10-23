import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "images.unsplash.com" },
      { protocol: "https", hostname: "picsum.photos" },
      { protocol: "https", hostname: "images.pexels.com" },
      { protocol: "https", hostname: "cdn.pixabay.com" },
    ],
  },
  async rewrites() {
    return [
      // Map path baru /asset ke folder lama /assest di public
      { source: "/asset/:path*", destination: "/assest/:path*" },
    ];
  },
};

export default nextConfig;
