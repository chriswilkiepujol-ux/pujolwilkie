import { siteUrl } from '@/lib/site';
import en from '@/content/en';
import es from '@/content/es';

export default function sitemap() {
  const now = new Date();
  const pages = [
    { path: '', alt: '/es', priority: 1 },
    ...en.services.items.map((s, i) => ({
      path: `/${s.slug}`, alt: `/es/${es.services.items[i].slug}`, priority: 0.8,
    })),
  ];
  const out = [];
  for (const p of pages) {
    out.push({ url: `${siteUrl}${p.path || '/'}`, lastModified: now, priority: p.priority,
      alternates: { languages: { en: `${siteUrl}${p.path || '/'}`, es: `${siteUrl}${p.alt}` } } });
    out.push({ url: `${siteUrl}${p.alt}`, lastModified: now, priority: p.priority * 0.9 });
  }
  return out;
}
