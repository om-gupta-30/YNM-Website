'use client';

/**
 * Custom Image Loader for Cloud Run Deployment
 * 
 * This loader bypasses Next.js Image Optimization API (/_next/image)
 * which doesn't work in standalone/Docker deployments.
 * Images are served directly from their source paths.
 */
export default function cloudRunImageLoader({ src, width, quality }) {
  // If it's already an absolute URL, return as-is
  if (src.startsWith('http://') || src.startsWith('https://') || src.startsWith('//')) {
    return src;
  }
  
  // For local images, return the path directly (no optimization)
  // This serves images from /public folder or static imports
  return src;
}
