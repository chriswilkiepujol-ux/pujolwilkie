import '../globals.css';
import en from '@/content/en';
import { siteUrl } from '@/lib/site';

export const viewport = { width: 'device-width', initialScale: 1, themeColor: '#0C3527' };

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: en.meta.title,
  description: en.meta.description,
  alternates: {
    canonical: '/',
    languages: { 'en-GB': '/', 'es-ES': '/es/', 'x-default': '/' },
  },
  openGraph: {
    title: en.meta.title, description: en.meta.description, url: '/',
    siteName: 'Esther Pujol Wilkie & Associates', locale: 'en_GB', type: 'website',
    images: [{ url: '/images/sotogrande-marina-cadiz.jpg', width: 1800, height: 972 }],
  },
  robots: { index: process.env.ALLOW_INDEXING === 'true', follow: true },
};

export default function EnLayout({ children }) {
  return <html lang="en"><body>{children}</body></html>;
}
