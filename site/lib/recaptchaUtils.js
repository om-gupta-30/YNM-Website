/**
 * Shared reCAPTCHA utilities
 */

/**
 * Check if current domain is allowed for reCAPTCHA
 * reCAPTCHA should ONLY work on production domains
 */
export function isAllowedDomain() {
  if (typeof window === 'undefined') return false;
  
  const hostname = window.location.hostname.toLowerCase().replace(/\.$/, ''); // normalize: lowercase, remove trailing dot
  
  // Allowed production domains
  const allowedDomains = [
    'ynmsafety.com',
    'www.ynmsafety.com',
  ];
  
  // Check exact match first
  if (allowedDomains.includes(hostname)) {
    console.log('[reCAPTCHA] Domain allowed:', hostname);
    return true;
  }
  
  // Check if it's a subdomain of allowed domains (e.g., for GCP Cloud Run staging URLs)
  const isSubdomain = allowedDomains.some(domain => hostname.endsWith('.' + domain));
  if (isSubdomain) {
    console.log('[reCAPTCHA] Subdomain allowed:', hostname);
    return true;
  }
  
  console.log('[reCAPTCHA] Domain NOT allowed:', hostname, '- Allowed domains:', allowedDomains.join(', '));
  return false;
}

/**
 * Get the current hostname for debugging
 */
export function getCurrentHostname() {
  if (typeof window === 'undefined') return 'server-side';
  return window.location.hostname;
}

/**
 * Load Google reCAPTCHA script
 * Call this once when the form component mounts
 * ONLY loads on allowed domains (ynmsafety.com, www.ynmsafety.com)
 */
export function loadRecaptchaScript(callback) {
  if (typeof window === 'undefined') return;
  
  // STRICT: Only load reCAPTCHA on production domains
  if (!isAllowedDomain()) {
    console.log('[reCAPTCHA] Not loading - domain not allowed:', window.location.hostname);
    if (callback) callback(false); // Pass false to indicate not loaded
    return;
  }
  
  // Check if already loaded
  if (window.grecaptcha && window.grecaptcha.render) {
    console.log('[reCAPTCHA] Already loaded');
    if (callback) callback(true);
    return;
  }
  
  // Check if script is already being loaded
  const existingScript = document.querySelector('script[src*="recaptcha"]');
  if (existingScript) {
    console.log('[reCAPTCHA] Script already loading, waiting...');
    // Wait for it to load
    const checkLoaded = setInterval(() => {
      if (window.grecaptcha && window.grecaptcha.render) {
        clearInterval(checkLoaded);
        console.log('[reCAPTCHA] Script loaded after waiting');
        if (callback) callback(true);
      }
    }, 100);
    
    // Timeout after 10 seconds
    setTimeout(() => {
      clearInterval(checkLoaded);
      if (!window.grecaptcha) {
        console.error('[reCAPTCHA] Script loading timeout');
        if (callback) callback(false);
      }
    }, 10000);
    return;
  }
  
  // Load the script
  console.log('[reCAPTCHA] Loading script...');
  const script = document.createElement('script');
  script.src = 'https://www.google.com/recaptcha/api.js';
  script.async = true;
  script.defer = true;
  script.onload = () => {
    console.log('[reCAPTCHA] Script loaded successfully');
    if (callback) callback(true);
  };
  script.onerror = (error) => {
    console.error('[reCAPTCHA] Script loading error:', error);
    if (callback) callback(false);
  };
  document.head.appendChild(script);
}

/**
 * Get reCAPTCHA response token
 * Returns the token if user completed the challenge, null otherwise
 */
export function getRecaptchaToken() {
  if (typeof window === 'undefined' || !window.grecaptcha) {
    console.log('[reCAPTCHA] getRecaptchaToken - grecaptcha not available');
    return null;
  }
  
  try {
    const token = window.grecaptcha.getResponse();
    console.log('[reCAPTCHA] Token retrieved:', token ? 'Yes' : 'No');
    return token || null;
  } catch (error) {
    console.error('[reCAPTCHA] Error getting token:', error);
    return null;
  }
}

/**
 * Reset reCAPTCHA widget
 * Useful after form submission or errors
 */
export function resetRecaptcha() {
  if (typeof window === 'undefined' || !window.grecaptcha) {
    return;
  }
  
  try {
    window.grecaptcha.reset();
    console.log('[reCAPTCHA] Widget reset');
  } catch (error) {
    console.error('[reCAPTCHA] Error resetting:', error);
  }
}

/**
 * Verify reCAPTCHA token on the server
 * This is called from API routes
 */
export async function verifyRecaptchaToken(token) {
  const secretKey = process.env.RECAPTCHA_SECRET_KEY;
  
  // If no secret key is set, skip verification (development mode)
  if (!secretKey) {
    console.log('[reCAPTCHA] Secret key not set, skipping verification');
    return { success: true, dev: true };
  }
  
  // If no token provided, fail
  if (!token) {
    console.log('[reCAPTCHA] No token provided for verification');
    return { success: false, error: 'No reCAPTCHA token provided' };
  }
  
  try {
    console.log('[reCAPTCHA] Verifying token with Google...');
    const response = await fetch('https://www.google.com/recaptcha/api/siteverify', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: `secret=${secretKey}&response=${token}`,
    });
    
    const data = await response.json();
    
    if (data.success) {
      console.log('[reCAPTCHA] Verification successful');
      return { success: true, data };
    } else {
      console.log('[reCAPTCHA] Verification failed:', data['error-codes']);
      return { 
        success: false, 
        error: 'reCAPTCHA verification failed',
        errorCodes: data['error-codes']
      };
    }
  } catch (error) {
    console.error('[reCAPTCHA] Verification error:', error);
    return { success: false, error: error.message };
  }
}
