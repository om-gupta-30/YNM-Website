/**
 * Google Ads / GA4 / GTM tracking helpers.
 *
 * IDs:
 *   GA4:         G-KXRFYK5QTK
 *   Google Ads:  AW-17963850555
 *   GTM:         GTM-55L72C49
 *
 * - gtag calls: Direct GA4 + Google Ads conversion tracking
 * - dataLayer pushes: GTM custom event triggers (preferred for GTM-managed tags)
 *
 * GTM triggers should listen for these custom events:
 *   page_view      → virtual pageview on SPA route change
 *   form_submit    → form conversions (with form_name)
 *   phone_click    → tel: link clicks (with phone_number)
 *   whatsapp_click → wa.me link clicks (with whatsapp_number)
 */

export const GA_ID = "G-KXRFYK5QTK";
/** Same ID used by gtag.js in _app.js (env overrides default). */
export const RESOLVED_GA_ID =
  (typeof process !== "undefined" && process.env.NEXT_PUBLIC_GA_ID) || GA_ID;
export const ADS_ID = "AW-17963850555";
const ADS_CONVERSION_SEND_TO = "AW-17963850555/uWuFCKznp_sbELu26vVC";

function pushDataLayer(event, params = {}) {
  if (typeof window === "undefined") return;
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({ event, ...params });
}

export function trackPageView(url) {
  if (typeof window === "undefined") return;

  pushDataLayer("page_view", {
    page_path: url,
    page_location: window.location.origin + url,
  });

  if (!window.gtag) return;
  window.gtag("config", RESOLVED_GA_ID, { page_path: url });
  window.gtag("config", ADS_ID, { page_path: url });
}

export function trackFormStart(formName = "unknown") {
  if (typeof window === "undefined" || !window.gtag) return;
  window.gtag("event", "form_start", { form_name: formName });
  pushDataLayer("form_start", { form_name: formName });
}

export function trackAdsConversion(formName = "unknown", value = 1.0) {
  pushDataLayer("form_submit", {
    form_name: formName,
    conversion_value: value,
    currency: "INR",
  });

  if (typeof window === "undefined" || !window.gtag) return;
  window.gtag("event", "conversion", {
    send_to: ADS_CONVERSION_SEND_TO,
    value,
    currency: "INR",
  });
  window.gtag("event", "ads_conversion", { form_name: formName });
}

export function trackPhoneClick(phoneNumber) {
  pushDataLayer("phone_click", {
    phone_number: phoneNumber,
    link_url: `tel:${phoneNumber}`,
  });

  if (typeof window === "undefined" || !window.gtag) return;
  window.gtag("event", "conversion", {
    send_to: ADS_CONVERSION_SEND_TO,
    value: 1.0,
    currency: "INR",
  });
}

export function trackWhatsAppClick(whatsappNumber) {
  pushDataLayer("whatsapp_click", {
    whatsapp_number: whatsappNumber,
    link_url: `https://wa.me/${whatsappNumber}`,
  });

  if (typeof window === "undefined" || !window.gtag) return;
  window.gtag("event", "conversion", {
    send_to: ADS_CONVERSION_SEND_TO,
    value: 1.0,
    currency: "INR",
  });
}
