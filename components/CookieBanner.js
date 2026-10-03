'use client';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import { getConsent, setConsent, CONSENT_EVENT } from '@/lib/consent';

const COPY = {
  en: {
    text: 'We use Google Analytics to understand how visitors use this site. It only runs if you say yes, and you can change your mind at any time.',
    accept: 'Accept',
    reject: 'Reject',
    policy: 'Cookie policy',
    policyHref: '/politica-de-cookies',
  },
  es: {
    text: 'Utilizamos Google Analytics para entender cómo se usa este sitio. Solo funciona si usted lo acepta, y puede cambiar de opinión cuando quiera.',
    accept: 'Aceptar',
    reject: 'Rechazar',
    policy: 'Política de cookies',
    policyHref: '/es/politica-de-cookies',
  },
};

// English cookie policy lives at the bare path; only the Spanish one is
// prefixed. Keeping that distinction here rather than importing the whole
// site content object, since this banner only needs four strings.
const EN_POLICY = '/politica-de-cookies';

export default function CookieBanner({ locale }) {
  const copy = COPY[locale] || COPY.en;
  const policyHref = locale === 'es' ? copy.policyHref : EN_POLICY;
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID) return; // nothing to ask about
    if (getConsent() === null) setVisible(true);
    const onChange = (e) => {
      if (e.detail === 'reopen') setVisible(true);
      else setVisible(false);
    };
    window.addEventListener(CONSENT_EVENT, onChange);
    return () => window.removeEventListener(CONSENT_EVENT, onChange);
  }, []);

  if (!visible) return null;

  return (
    <div className="cookieBar" role="dialog" aria-live="polite" aria-label="Cookie consent">
      <p>
        {copy.text}{' '}
        <Link href={policyHref}>{copy.policy}</Link>
      </p>
      <div className="cookieBtns">
        <button type="button" className="btn gh" onClick={() => setConsent('denied')}>{copy.reject}</button>
        <button type="button" className="btn dk" onClick={() => setConsent('granted')}>{copy.accept}</button>
      </div>
    </div>
  );
}
