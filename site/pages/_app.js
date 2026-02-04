import "@/styles/globals.css";
import { useEffect, useCallback, useRef, memo } from "react";
import dynamic from "next/dynamic";

// Lazy load heavy components for better initial page load
const Mascot = dynamic(() => import("@/components/Mascot"), { ssr: false });
const FloatingSocialMedia = dynamic(() => import("@/components/FloatingSocialMedia"), { ssr: false });
const Chatbot = dynamic(() => import("@/components/Chatbot"), { ssr: false });
const FloatingQuoteButton = dynamic(() => import("@/components/FloatingQuoteButton"), { ssr: false });

// Fast smooth scroll function (400ms with easeOutQuart - reduced for snappier feel)
const smoothScrollTo = (targetY, duration = 400) => {
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
  const scrollTimeoutRef = useRef(null);
  const isScrollingRef = useRef(false);

  // Optimized scroll handler - minimal work
  const handleScroll = useCallback(() => {
    if (!isScrollingRef.current) {
      document.body.classList.add("is-scrolling");
      isScrollingRef.current = true;
    }

    if (scrollTimeoutRef.current) {
      clearTimeout(scrollTimeoutRef.current);
    }

    scrollTimeoutRef.current = setTimeout(() => {
      document.body.classList.remove("is-scrolling");
      isScrollingRef.current = false;
    }, 80); // Reduced timeout for snappier response
  }, []);

  // Scroll performance optimization + Global anchor handler
  useEffect(() => {
    if (typeof window === "undefined") return;

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
            smoothScrollTo(targetY, 400);
          }
        } catch {
          // Invalid selector, ignore
        }
      }
    };

    // Add scroll listener with passive flag for better scroll performance
    window.addEventListener("scroll", handleScroll, { passive: true });
    document.addEventListener("click", onAnchorClick);

    // Detect platform for specific optimizations - only once
    if (!document.documentElement.classList.contains('platform-detected')) {
      const isWindows = navigator.platform.indexOf('Win') > -1;
      const isMac = navigator.platform.indexOf('Mac') > -1;
      
      if (isWindows) {
        document.documentElement.classList.add('platform-windows');
      } else if (isMac) {
        document.documentElement.classList.add('platform-mac');
      }
      document.documentElement.classList.add('platform-detected');
    }

    // Cleanup
    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("click", onAnchorClick);
      if (scrollTimeoutRef.current) clearTimeout(scrollTimeoutRef.current);
    };
  }, [handleScroll]);

  return (
    <>
      <Component {...pageProps} />
      <Mascot />
      <FloatingQuoteButton />
      <FloatingSocialMedia />
      <Chatbot />
    </>
  );
}
