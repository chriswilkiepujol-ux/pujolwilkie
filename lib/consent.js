// Cookie consent state. Two values only, matching what the site actually
// asks about: granted or denied. No third "necessary only" tier, because the
// only non-essential thing on offer is GA4 analytics — there is no
// advertising or personalisation to separately opt into.
export const CONSENT_KEY = 'pw_consent';
export const CONSENT_EVENT = 'pw_consent_change';

export function getConsent() {
  if (typeof window === 'undefined') return null;
  try {
    const v = window.localStorage.getItem(CONSENT_KEY);
    return v === 'granted' || v === 'denied' ? v : null;
  } catch {
    return null;
  }
}

export function setConsent(value) {
  if (typeof window === 'undefined') return;
  try {
    window.localStorage.setItem(CONSENT_KEY, value);
  } catch {
    /* localStorage unavailable (private mode, storage full): consent still
       applies for this page load via the in-memory event below, it just
       will not be remembered on the next visit, so the banner reappears. */
  }
  window.dispatchEvent(new CustomEvent(CONSENT_EVENT, { detail: value }));
}

// Re-opens the banner so a visitor can change a choice they already made.
// Used by the footer "cookie preferences" link.
export function reopenConsent() {
  window.dispatchEvent(new CustomEvent(CONSENT_EVENT, { detail: 'reopen' }));
}
