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
  
  // Experimental performance features
  experimental: {
    // Optimize CSS loading
    optimizeCss: false, // Keep false to avoid crashing
    // Optimize package imports for smaller bundles (reduces unused JS)
    optimizePackageImports: ['framer-motion', 'lucide-react', '@heroicons/react'],
  },
  
  // Efficient cache lifetimes for static assets (PageSpeed: "Use efficient cache lifetimes")
  async headers() {
    // Security headers applied to all pages
    const securityHeaders = [
      // Content Security Policy - Protects against XSS attacks
      {
        key: 'Content-Security-Policy',
        value: [
          "default-src 'self'",
          "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://www.googletagmanager.com https://www.google-analytics.com https://maps.googleapis.com",
          "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
          "img-src 'self' data: blob: https: http:",
          "font-src 'self' https://fonts.gstatic.com",
          "connect-src 'self' https://www.google-analytics.com https://generativelanguage.googleapis.com https://flagcdn.com",
          "frame-ancestors 'self'",
          "base-uri 'self'",
          "form-action 'self'",
        ].join('; '),
      },
      // X-Frame-Options - Prevents clickjacking attacks
      { key: 'X-Frame-Options', value: 'SAMEORIGIN' },
      // Referrer-Policy - Controls how much referrer info is sent
      { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
      // HSTS - Forces HTTPS connections
      { key: 'Strict-Transport-Security', value: 'max-age=31536000; includeSubDomains; preload' },
      // X-Content-Type-Options - Prevents MIME type sniffing
      { key: 'X-Content-Type-Options', value: 'nosniff' },
      // X-DNS-Prefetch-Control - Controls DNS prefetching
      { key: 'X-DNS-Prefetch-Control', value: 'on' },
      // Permissions-Policy - Controls browser features
      { key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=()' },
    ];

    return [
      // HTML pages - Browser cache enabled for SEO, CDN cache disabled for instant deploys
      {
        source: '/:path((?!_next|assets|fonts|api).*)',
        headers: [
          // max-age=300 (5 min browser cache for SEO), s-maxage=0 (no CDN cache for instant deploy)
          { key: 'Cache-Control', value: 'public, max-age=300, s-maxage=0, stale-while-revalidate=60' },
          { key: 'Link', value: '</assets/hero-image.webp>; rel=preload; as=image; type=image/webp; fetchpriority=high' },
          ...securityHeaders,
        ],
      },
      // Static assets - long cache
      {
        source: '/assets/:path*',
        headers: [
          { key: 'Cache-Control', value: 'public, max-age=31536000, s-maxage=31536000, immutable' },
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          ...securityHeaders.filter(h => h.key !== 'X-Content-Type-Options'),
        ],
      },
      {
        source: '/fonts/:path*',
        headers: [
          { key: 'Cache-Control', value: 'public, max-age=31536000, s-maxage=31536000, immutable' },
          ...securityHeaders,
        ],
      },
      {
        source: '/_next/static/:path*',
        headers: [
          { key: 'Cache-Control', value: 'public, max-age=31536000, s-maxage=31536000, immutable' },
          { key: 'X-Robots-Tag', value: 'noindex, nofollow' },
          ...securityHeaders,
        ],
      },
      {
        source: '/_next/image/:path*',
        headers: [
          { key: 'Cache-Control', value: 'public, max-age=31536000, s-maxage=31536000, immutable' },
          ...securityHeaders,
        ],
      },
      // API routes - also need security headers
      {
        source: '/api/:path*',
        headers: securityHeaders,
      },
    ];
  },
  trailingSlash: false,
  
  // Redirects for URL changes (SEO 301 redirects)
  async redirects() {
    return [
      {
        source: '/our-team',
        destination: '/our-director',
        permanent: true, // 301 redirect
      },
      {
        source: '/products/hot-thermoplastic-paint/hot-thermoplastic-paint',
        destination: '/products/hot-thermoplastic-road-marking-paint-manufacturers',
        permanent: true, // 301 redirect - Fix Google indexed incorrect URL
      },
    ];
  },
  
  // Performance optimizations
  poweredByHeader: false,
  generateEtags: true,
  
  // Webpack optimization
  webpack: (config, { isServer }) => {
    // Optimize bundle splitting
    if (!isServer) {
      config.optimization.splitChunks = {
        ...config.optimization.splitChunks,
        cacheGroups: {
          ...config.optimization.splitChunks?.cacheGroups,
          // Split large vendor chunks
          vendor: {
            test: /[\\/]node_modules[\\/]/,
            name: 'vendors',
            chunks: 'all',
            priority: 10,
          },
        },
      };
    }
    return config;
  },
};

export default nextConfig;
