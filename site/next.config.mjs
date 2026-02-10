/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Output as standalone for Docker deployment
  output: 'standalone',
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'flagcdn.com',
      },
    ],
    // Disable Next.js Image Optimization - use pre-compressed JPGs directly
    // This avoids /_next/image API issues in Docker/Cloud Run deployments
    unoptimized: true,
    dangerouslyAllowSVG: true,
  },
  // Enable compression for better performance
  compress: true,
  
  // Enable experimental features for better performance
  experimental: {
    optimizePackageImports: ['@/components', '@/lib'],
  },
  
  // Efficient cache lifetimes for static assets (PageSpeed: "Use efficient cache lifetimes")
  async headers() {
    return [
      {
        source: '/assets/:path*',
        headers: [
          { key: 'Cache-Control', value: 'public, max-age=31536000, immutable' },
          { key: 'X-Content-Type-Options', value: 'nosniff' },
        ],
      },
      {
        source: '/fonts/:path*',
        headers: [
          { key: 'Cache-Control', value: 'public, max-age=31536000, immutable' },
        ],
      },
      {
        source: '/_next/static/:path*',
        headers: [
          { key: 'Cache-Control', value: 'public, max-age=31536000, immutable' },
        ],
      },
      {
        source: '/_next/image/:path*',
        headers: [
          { key: 'Cache-Control', value: 'public, max-age=31536000, immutable' },
        ],
      },
    ];
  },
  trailingSlash: false,
  
  // Performance optimizations
  poweredByHeader: false,
  generateEtags: true,
};

export default nextConfig;
