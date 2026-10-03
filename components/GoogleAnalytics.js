'use client';
import { useEffect, useState } from 'react';
import Script from 'next/script';
import { getConsent, CONSENT_EVENT } from '@/lib/consent';

const GA_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;

// Sets Google's Consent Mode v2 defaults. This is a local dataLayer push, not
// a network request, so it is safe to run immediately and unconditionally:
// nothing is sent to Google by this call alone. It exists so that if gtag.js
// loads later, it already knows the starting state is "denied" rather than
// assuming consent, which is what Google's own implementation guide expects.
function pushDefaultDenied() {
  window.dataLayer = window.dataLayer || [];
  function gtag() { window.dataLayer.push(arguments); }
  window.gtag = window.gtag || gtag;
  gtag('consent', 'default', {
    analytics_storage: 'denied',
    ad_storage: 'denied',
    ad_user_data: 'denied',
    ad_personalization: 'denied',
    wait_for_update: 500,
  });
}

// Renders nothing, and requests nothing from Google, until NEXT_PUBLIC_GA_MEASUREMENT_ID
// is set AND the visitor has actually granted consent. Before that this
// component only maintains local consent state; it makes no network calls.
export default function GoogleAnalytics() {
  const [state, setState] = useState(null);

  useEffect(() => {
    if (!GA_ID) return;
    pushDefaultDenied();
    setState(getConsent());
    const onChange = (e) => {
      if (e.detail === 'granted' || e.detail === 'denied') setState(e.detail);
    };
    window.addEventListener(CONSENT_EVENT, onChange);
    return () => window.removeEventListener(CONSENT_EVENT, onChange);
  }, []);

  useEffect(() => {
    if (state === 'granted' && typeof window !== 'undefined' && window.gtag) {
      window.gtag('consent', 'update', {
        analytics_storage: 'granted',
        ad_storage: 'denied',
        ad_user_data: 'denied',
        ad_personalization: 'denied',
      });
      window.gtag('config', GA_ID, { anonymize_ip: true });
    }
  }, [state]);

  if (!GA_ID || state !== 'granted') return null;

  // The gtag.js script itself: only fetched from Google once consent is
  // granted. Before that point nothing is requested from Google's servers.
  return <Script src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`} strategy="afterInteractive" />;
}
