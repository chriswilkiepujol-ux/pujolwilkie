'use client';
import { reopenConsent } from '@/lib/consent';

// A small interactive island inside the otherwise server-rendered footer.
// Kept as its own file so Sections.js, which renders every section on every
// page, does not need to become a client component just for this one button.
export default function CookiePrefsButton({ locale }) {
  if (!process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID) return null;
  return (
    <button type="button" className="fcookie" onClick={reopenConsent}>
      {locale === 'es' ? 'Preferencias de cookies' : 'Cookie preferences'}
    </button>
  );
}
