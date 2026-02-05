import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {/* Viewport and Mobile Optimization */}
        <meta name="viewport" content="width=device-width, initial-scale=1.0, viewport-fit=cover, maximum-scale=5" />
        
        {/* Performance: DNS Prefetch for external resources */}
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
        <link rel="dns-prefetch" href="https://www.google-analytics.com" />
        
        {/* Performance: Preconnect for faster loading */}
        <link rel="preconnect" href="https://fonts.googleapis.com" crossOrigin="anonymous" />
        
        {/* Performance: Preload critical font */}
        <link
          rel="preload"
          href="/fonts/Montserrat[wght].ttf"
          as="font"
          type="font/ttf"
          crossOrigin="anonymous"
        />
        
        {/* Cross-platform rendering optimization */}
        <meta name="format-detection" content="telephone=no" />
        <meta name="theme-color" content="#74060D" />
        <meta name="color-scheme" content="light" />
        
        {/* Windows-specific optimizations */}
        <meta name="msapplication-tap-highlight" content="no" />
        
        {/* Note: Google Analytics should be added via environment variable NEXT_PUBLIC_GA_ID */}
        {/* and implemented in _app.js using next/script for better performance */}
        
        {/* Favicon - Multiple formats for best compatibility */}
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="icon" href="/favicon.ico" sizes="32x32" />
        <link rel="apple-touch-icon" href="/assets/logo-navbar.jpg" />
        
        {/* Critical CSS for preventing layout shift */}
        <style
          dangerouslySetInnerHTML={{
            __html: `
              /* Prevent layout shift before CSS loads */
              html { 
                scroll-behavior: auto;
                overflow-x: hidden;
              }
              body { 
                margin: 0; 
                overflow-x: hidden;
                -webkit-font-smoothing: antialiased;
                -moz-osx-font-smoothing: grayscale;
              }
              /* Ensure smooth rendering on all platforms */
              * {
                -webkit-tap-highlight-color: transparent;
              }
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
