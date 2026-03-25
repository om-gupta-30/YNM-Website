import "@/styles/globals.css";
import dynamic from "next/dynamic";
import { useEffect } from "react";
import { useRouter } from "next/router";
import Head from "next/head";
import Script from "next/script";
import { RESOLVED_GA_ID, ADS_ID, trackPageView, trackPhoneClick, trackWhatsAppClick } from "@/lib/gtag";

// Lazy-load below-the-fold / non-critical UI to reduce initial JS (PageSpeed: unused JS)
const Mascot = dynamic(() => import("@/components/Mascot"), { ssr: false });
const FloatingGetQuote = dynamic(() => import("@/components/FloatingGetQuote"), { ssr: false });
const FloatingSocialMedia = dynamic(() => import("@/components/FloatingSocialMedia"), { ssr: false });
const Chatbot = dynamic(() => import("@/components/Chatbot"), { ssr: false });

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
  const router = useRouter();

  // SPA route change → push virtual pageview to GA4 + GTM + Google Ads
  useEffect(() => {
    const handleRouteChange = (url) => trackPageView(url);
    router.events.on("routeChangeComplete", handleRouteChange);
    return () => router.events.off("routeChangeComplete", handleRouteChange);
  }, [router.events]);

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
      const anchor = e.target.closest("a");
      if (!anchor) return;

      const href = anchor.getAttribute("href");
      if (!href) return;

      // Track phone call clicks (tel: links)
      if (href.startsWith("tel:")) {
        const phone = href.replace("tel:", "").trim();
        trackPhoneClick(phone);
        return;
      }

      // Track WhatsApp clicks (wa.me or api.whatsapp.com)
      if (href.includes("wa.me/") || href.includes("api.whatsapp.com")) {
        const match = href.match(/wa\.me\/(\d+)/) || href.match(/phone=(\d+)/);
        const number = match ? match[1] : href;
        trackWhatsAppClick(number);
        return;
      }

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

  const analytics = (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${RESOLVED_GA_ID}`}
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${RESOLVED_GA_ID}', { send_page_view: true });
          gtag('config', '${ADS_ID}');
        `}
      </Script>
    </>
  );

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, viewport-fit=cover, maximum-scale=5" />
      </Head>
      
      {/* GA4 + Google Ads (gtag.js) — GTM is loaded in _document.js */}
      {analytics}
      
      <div id="app-wrapper">
        <Component {...pageProps} />
        <Mascot />
        <FloatingGetQuote />
        <FloatingSocialMedia />
        <Chatbot />
      </div>
    </>
  );
}
