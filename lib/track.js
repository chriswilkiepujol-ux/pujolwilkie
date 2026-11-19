import { getConsent } from './consent';

// Sends a GA4 event, but only once the visitor has accepted analytics cookies.
// Before consent nothing is queued, so no enquiry or click is ever reported for
// someone who rejected or ignored the banner. Never pass personal data here.
export function track(name, params = {}) {
  if (typeof window === 'undefined' || typeof window.gtag !== 'function') return;
  if (getConsent() !== 'granted') return;
  window.gtag('event', name, params);
}
