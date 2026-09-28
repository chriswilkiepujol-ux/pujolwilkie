import { siteUrl } from '@/lib/site';
import { PAIRS } from '@/lib/locale';
import { lastModified } from '@/lib/updated';

// Built from the same page pairs that drive the language switcher and hreflang,
// so the three cannot disagree. Legal pages are noindex and stay out.
const LEGAL = new Set(['/aviso-legal/', '/politica-de-privacidad/', '/politica-de-cookies/']);

export default function sitemap() {
  const abs = (p) => `${siteUrl}${p}`;
  const out = [];
  for (const [en, es] of PAIRS) {
    if (LEGAL.has(en)) continue;
    // each entry declares both language versions, as well as the HTML tags do
    const languages = { 'en-GB': abs(en), 'es-ES': abs(es), 'x-default': abs(en) };
    out.push({ url: abs(en), lastModified: lastModified(en), alternates: { languages } });
    out.push({ url: abs(es), lastModified: lastModified(es), alternates: { languages } });
  }
  return out;
}
