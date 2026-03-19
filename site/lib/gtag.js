/**
 * Google Ads / GA4 gtag event helpers.
 * Fire form_start when user begins a form, ads_conversion on successful submit.
 */

const ADS_CONVERSION_SEND_TO = "AW-17963850555/uWuFCKznp_sbELu26vVC";

export function trackFormStart(formName = "unknown") {
  if (typeof window === "undefined" || !window.gtag) return;
  window.gtag("event", "form_start", {
    form_name: formName,
  });
}

export function trackAdsConversion(formName = "unknown", value = 1.0) {
  if (typeof window === "undefined" || !window.gtag) return;
  window.gtag("event", "conversion", {
    send_to: ADS_CONVERSION_SEND_TO,
    value,
    currency: "INR",
  });
  window.gtag("event", "ads_conversion", {
    form_name: formName,
  });
}
