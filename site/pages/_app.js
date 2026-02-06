import "@/styles/globals.css";
import { useEffect } from "react";
import Head from "next/head";
import Script from "next/script";
import Mascot from "@/components/Mascot";
import FloatingSocialMedia from "@/components/FloatingSocialMedia";
import Chatbot from "@/components/Chatbot";
import UnderConstruction from "@/components/UnderConstruction";

// Check if under construction mode is enabled
const isUnderConstruction = process.env.NEXT_PUBLIC_UNDER_CONSTRUCTION === 'true';

// Fast smooth scroll function (500ms with easeOutQuart)
const smoothScrollTo = (targetY, duration = 500) => {
  const startY = window.scrollY;
  const diff = targetY - startY;
  let startTime = null;

  const easeOutQuart = (t) => 1 - Math.pow(1 - t, 4);

  const step = (currentTime) => {
    if (!startTime) startTime = currentTime;
    const elapsed = currentTime - startTime;
    const progress = Math.min(elapsed / duration, 1);
    const eased = easeOutQuart(progress);
    
    window.scrollTo(0, startY + diff * eased);
    
    if (progress < 1) {
      requestAnimationFrame(step);
    }
  };

  requestAnimationFrame(step);
};

export default function App({ Component, pageProps }) {
  // Scroll performance optimization + Global anchor handler
  useEffect(() => {
    if (typeof window === "undefined") return;

    let scrollTimeout = null;
    let ticking = false;

    // Scroll class for performance
    const onScroll = () => {
      if (!ticking) {
        document.body.classList.add("is-scrolling");
        ticking = true;
      }

      if (scrollTimeout) clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(() => {
        document.body.classList.remove("is-scrolling");
        ticking = false;
      }, 150);
    };

    // Global anchor click handler for fast smooth scroll
    const onAnchorClick = (e) => {
      const target = e.target.closest("a");
      if (!target) return;

      const href = target.getAttribute("href");
      if (!href) return;

      // Handle hash links (but not just "#")
      if (href.startsWith("#") && href.length > 1) {
        try {
          const el = document.querySelector(href);
          if (el) {
            e.preventDefault();
            const targetY = el.getBoundingClientRect().top + window.scrollY - 80;
            smoothScrollTo(targetY, 500);
          }
        } catch (err) {
          // Invalid selector, ignore
        }
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    document.addEventListener("click", onAnchorClick);

    return () => {
      window.removeEventListener("scroll", onScroll);
      document.removeEventListener("click", onAnchorClick);
      if (scrollTimeout) clearTimeout(scrollTimeout);
    };
  }, []);

  // Show Under Construction page if enabled
  if (isUnderConstruction) {
    return <UnderConstruction />;
  }

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, viewport-fit=cover, maximum-scale=5" />
      </Head>
      
      {/* Google Analytics - Only load if GA_ID is configured */}
      {process.env.NEXT_PUBLIC_GA_ID && (
        <>
          <Script
            src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`}
            strategy="afterInteractive"
          />
          <Script id="google-analytics" strategy="afterInteractive">
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}');
            `}
          </Script>
        </>
      )}
      
      <Component {...pageProps} />
      <Mascot />
      <FloatingSocialMedia />
      <Chatbot />
    </>
  );
}
