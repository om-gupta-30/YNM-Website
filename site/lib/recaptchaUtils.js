/**
 * Shared reCAPTCHA utilities
 */

/**
 * Load Google reCAPTCHA script
 * Call this once when the form component mounts
 */
export function loadRecaptchaScript(callback) {
  if (typeof window === 'undefined') return;
  
  // Check if already loaded
  if (window.grecaptcha) {
    if (callback) callback();
    return;
  }
  
  // Check if script is already being loaded
  if (document.querySelector('script[src*="recaptcha"]')) {
    // Wait for it to load
    const checkLoaded = setInterval(() => {
      if (window.grecaptcha) {
        clearInterval(checkLoaded);
        if (callback) callback();
      }
    }, 100);
    return;
  }
  
  // Load the script
  const script = document.createElement('script');
  script.src = 'https://www.google.com/recaptcha/api.js';
  script.async = true;
  script.defer = true;
  script.onload = () => {
    if (callback) callback();
  };
  document.head.appendChild(script);
}

/**
 * Get reCAPTCHA response token
 * Returns the token if user completed the challenge, null otherwise
 */
export function getRecaptchaToken() {
  if (typeof window === 'undefined' || !window.grecaptcha) {
    return null;
  }
  
  try {
    return window.grecaptcha.getResponse();
  } catch (error) {
    console.error('Error getting reCAPTCHA token:', error);
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
  } catch (error) {
    console.error('Error resetting reCAPTCHA:', error);
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
    return { success: false, error: 'No reCAPTCHA token provided' };
  }
  
  try {
    const response = await fetch('https://www.google.com/recaptcha/api/siteverify', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: `secret=${secretKey}&response=${token}`,
    });
    
    const data = await response.json();
    
    if (data.success) {
      return { success: true, data };
    } else {
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
