import { PAINT_PRODUCT_FAQS } from "./paints";
import { BITUMEN_PRODUCT_FAQS } from "./bitumen";
import { CRASH_BARRIER_PRODUCT_FAQS } from "./crashBarriers";
import { SIGNAGE_PRODUCT_FAQS } from "./signages";

/** @typedef {{ question: string; answer: string }} FaqItem */

const MERGED = {
  ...PAINT_PRODUCT_FAQS,
  ...BITUMEN_PRODUCT_FAQS,
  ...CRASH_BARRIER_PRODUCT_FAQS,
  ...SIGNAGE_PRODUCT_FAQS,
};

const DEFAULT_FAQ = [
  {
    question: "Who is YNM Safety?",
    answer:
      "YNM Safety Pan Global Trade Pvt Ltd is an Indian manufacturer and exporter of road marking paints, metal beam crash barriers, retro reflective signages, and related road safety products, based in Telangana with supply across India and 50+ countries.",
  },
  {
    question: "How can I request a quotation?",
    answer:
      "Use the Get Quote page on ynmsafety.com or call +91-9676575770 with product name, quantities, standards, and delivery location.",
  },
  {
    question: "What certifications does YNM Safety hold?",
    answer:
      "YNM Safety maintains ISO 9001:2015 and related quality systems, with product-specific test certificates issued as per order and tender requirements.",
  },
  {
    question: "Do you support export shipments?",
    answer:
      "Yes. YNM Safety provides export packing, documentation, and logistics coordination for sea and air freight subject to destination regulations.",
  },
  {
    question: "Where is YNM Safety located?",
    answer:
      "Our manufacturing and operations are based in Rangareddy, Telangana, India, with pan-India supply and international export programs.",
  },
];

const MAX_FAQ = 5;

/**
 * @param {string} slug - URL slug for /products/[slug]
 * @returns {FaqItem[]}
 */
export function getProductPageFaqs(slug) {
  const list = MERGED[slug];
  const raw = list && list.length > 0 ? list : DEFAULT_FAQ;
  return raw.slice(0, MAX_FAQ);
}

export { MERGED as PRODUCT_FAQ_BY_SLUG };
