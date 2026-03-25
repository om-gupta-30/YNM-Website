/**
 * @typedef {{ question: string; answer: string }} FaqItem
 */

/**
 * @param {FaqItem[]} faqs
 * @returns {Record<string, unknown> | null}
 */
export function buildFaqPageJsonLd(faqs) {
  if (!faqs?.length) return null;
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: f.answer,
      },
    })),
  };
}
