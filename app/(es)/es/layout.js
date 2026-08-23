import '../../globals.css';
import es from '@/content/es';
import { siteUrl } from '@/lib/site';

export const viewport = { width: 'device-width', initialScale: 1, themeColor: '#0C3527' };

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: es.meta.title,
  description: es.meta.description,
  alternates: {
    canonical: '/es',
    languages: { 'en-GB': '/', 'es-ES': '/es/', 'x-default': '/' },
  },
  openGraph: {
    title: es.meta.title, description: es.meta.description, url: '/es',
    siteName: 'Esther Pujol Wilkie & Associates', locale: 'es_ES', type: 'website',
    images: [{ url: '/images/sotogrande-marina-cadiz.jpg', width: 1800, height: 972 }],
  },
  robots: { index: process.env.ALLOW_INDEXING === 'true', follow: true },
};

export default function EsLayout({ children }) {
  return <html lang="es"><body>{children}</body></html>;
}
