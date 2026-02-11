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
    // Disable Next.js Image Optimization for Cloud Run standalone deployment
    // This prevents /_next/image API 404 errors in standalone/Docker mode
    unoptimized: true,
    dangerouslyAllowSVG: true,
    // Custom loader to bypass optimization API entirely
    loader: 'custom',
    loaderFile: './lib/imageLoader.js',
  },
  // Enable compression for better performance
  compress: true,
  
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
