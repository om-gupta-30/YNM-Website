"use client";

import { memo } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

function FloatingGetQuote() {
  const router = useRouter();

  if (router.pathname === "/get-quote") return null;

  return (
    <div className="floating-quote-container visible">
      <Link href="/get-quote" className="floating-quote-btn" aria-label="Get a Quote">
        <span className="floating-quote-icon">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
            <polyline points="14 2 14 8 20 8" />
            <line x1="16" y1="13" x2="8" y2="13" />
            <line x1="16" y1="17" x2="8" y2="17" />
          </svg>
        </span>
        <span className="floating-quote-text">GET QUOTE</span>
      </Link>
    </div>
  );
}

export default memo(FloatingGetQuote);
