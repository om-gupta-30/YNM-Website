"use client";

import { useRouter } from "next/router";
import Link from "next/link";

export default function FloatingQuoteButton() {
  const router = useRouter();

  // Don't show on the get-quote page itself
  if (router.pathname === "/get-quote") return null;

  return (
    <>
      <Link href="/get-quote" className="floating-quote-btn">
        <svg 
          width="22" 
          height="22" 
          viewBox="0 0 24 24" 
          fill="none" 
          stroke="#74060D" 
          strokeWidth="2.5" 
          strokeLinecap="round" 
          strokeLinejoin="round"
        >
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
          <polyline points="14 2 14 8 20 8"></polyline>
          <line x1="16" y1="13" x2="8" y2="13"></line>
          <line x1="16" y1="17" x2="8" y2="17"></line>
        </svg>
        <span>Get Quote</span>
      </Link>

      <style jsx global>{`
        .floating-quote-btn {
          position: fixed !important;
          top: 120px;
          right: 25px;
          z-index: 99999 !important;
          display: flex !important;
          align-items: center;
          gap: 10px;
          padding: 16px 28px;
          background: linear-gradient(145deg, #E6D3A3 0%, #C9A24D 50%, #B8923D 100%) !important;
          color: #74060D !important;
          font-family: var(--font-primary), sans-serif;
          font-weight: 800 !important;
          font-size: 16px;
          text-transform: uppercase;
          letter-spacing: 1px;
          text-decoration: none !important;
          border-radius: 12px;
          border: 3px solid #A07F35;
          box-shadow: 
            0 8px 32px rgba(201, 162, 77, 0.7),
            0 4px 16px rgba(0, 0, 0, 0.25),
            inset 0 2px 4px rgba(255, 255, 255, 0.5);
          animation: quoteZoomPop 1s ease-in-out infinite !important;
          cursor: pointer;
        }

        @keyframes quoteZoomPop {
          0%, 100% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.1);
          }
        }

        .floating-quote-btn:hover {
          animation: none !important;
          transform: scale(1.15);
          box-shadow: 
            0 12px 48px rgba(201, 162, 77, 0.9),
            0 6px 24px rgba(0, 0, 0, 0.35),
            inset 0 2px 4px rgba(255, 255, 255, 0.6);
        }

        .floating-quote-btn span {
          color: #74060D !important;
          text-shadow: 0 1px 2px rgba(255, 255, 255, 0.4);
        }

        .floating-quote-btn svg {
          flex-shrink: 0;
        }

        /* Responsive */
        @media (max-width: 1200px) {
          .floating-quote-btn {
            top: 110px;
            right: 20px;
            padding: 14px 24px;
            font-size: 15px;
          }
        }

        @media (max-width: 768px) {
          .floating-quote-btn {
            top: 100px;
            right: 15px;
            padding: 12px 20px;
            font-size: 14px;
            gap: 8px;
          }

          .floating-quote-btn svg {
            width: 18px;
            height: 18px;
          }
        }

        @media (max-width: 480px) {
          .floating-quote-btn {
            top: 90px;
            right: 12px;
            padding: 10px 16px;
            font-size: 12px;
            gap: 6px;
          }

          .floating-quote-btn svg {
            width: 16px;
            height: 16px;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .floating-quote-btn {
            animation: none !important;
          }
        }
      `}</style>
    </>
  );
}
