import { siteUrl } from '@/lib/site';
import en from '@/content/en';
import es from '@/content/es';
import pagesEn from '@/content/pages.en';
import pagesEs from '@/content/pages.es';

// Built from the content files so it can never drift from the actual routes.
// Legal pages are deliberately excluded: they are noindex.
const LEGAL = ['aviso-legal', 'politica-de-privacidad', 'politica-de-cookies'];

export default function sitemap() {
  const now = new Date();
  const out = [];
  const add = (path, priority) =>
    out.push({ url: `${siteUrl}${path}`, lastModified: now, changeFrequency: 'monthly', priority });

  add('/', 1.0);
  add('/es/', 0.9);

  for (const slug of Object.keys(pagesEn)) {
    if (LEGAL.includes(slug)) continue;
    add(`/${slug}/`, slug === 'about' || slug === 'contact' ? 0.7 : 0.8);
  }
  for (const slug of Object.keys(pagesEs)) {
    if (LEGAL.includes(slug)) continue;
    add(`/es/${slug}/`, 0.7);
  }

  add('/blog/', 0.6);
  add('/es/articulos/', 0.5);
  for (const p of en.insights.items) add(`/blog/${p.slug}/`, 0.6);
  for (const p of es.insights.items) add(`/es/articulos/${p.slug}/`, 0.5);

  return out;
}
