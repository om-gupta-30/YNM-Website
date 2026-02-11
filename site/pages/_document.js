import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {/* Performance: DNS Prefetch for external resources */}
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
        <link rel="dns-prefetch" href="https://www.google-analytics.com" />
        <link rel="dns-prefetch" href="https://flagcdn.com" />
        
        {/* Performance: Preconnect for faster loading */}
        <link rel="preconnect" href="https://fonts.googleapis.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://flagcdn.com" crossOrigin="anonymous" />
        
        {/* Performance: Preload critical font */}
        <link
          rel="preload"
          href="/fonts/Montserrat[wght].ttf"
          as="font"
          type="font/ttf"
          crossOrigin="anonymous"
        />
        
        {/* Performance: Preload LCP hero image */}
        <link
          rel="preload"
          href="/assets/hero-image.png"
          as="image"
          type="image/png"
          fetchpriority="high"
        />
        
        
        {/* Cross-platform rendering optimization */}
        <meta name="format-detection" content="telephone=no" />
        <meta name="theme-color" content="#74060D" />
        <meta name="color-scheme" content="light" />
        
        {/* Windows-specific optimizations */}
        <meta name="msapplication-tap-highlight" content="no" />
        <meta name="msapplication-TileColor" content="#74060D" />
        <meta name="msapplication-TileImage" content="/assets/logo-navbar.jpg" />
        
        {/* Note: Google Analytics should be added via environment variable NEXT_PUBLIC_GA_ID */}
        {/* and implemented in _app.js using next/script for better performance */}
        
        {/* Favicon - Use navbar logo everywhere (tabs, address bar, Google) */}
        {/* Multiple formats and sizes for maximum compatibility */}
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon.png" />
        <link rel="shortcut icon" href="/favicon.png" />
        
        {/* Apple Touch Icons */}
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="apple-touch-icon" sizes="152x152" href="/apple-touch-icon.png" />
        <link rel="apple-touch-icon" sizes="120x120" href="/apple-touch-icon.png" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        
        {/* Fallback for older browsers */}
        <link rel="icon" href="/favicon.png" />
        
        {/* Web App Manifest */}
        <link rel="manifest" href="/site.webmanifest" />
        
        {/* Critical CSS for preventing layout shift and faster FCP */}
        <style
          dangerouslySetInnerHTML={{
            __html: `
              /* Prevent layout shift before CSS loads */
              html { scroll-behavior: auto; overflow-x: hidden; }
              body { margin: 0; overflow-x: hidden; }
              /* Critical hero section styles for faster LCP */
              #hero { position: relative; min-height: 100vh; width: 100%; background: #74060D; }
            `,
          }}
        />
      </Head>
      <body className="antialiased">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
