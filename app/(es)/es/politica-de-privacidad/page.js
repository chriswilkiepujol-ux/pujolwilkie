import { languagesFor } from '@/lib/locale';
import ServicePage from '@/components/ServicePage';
import es from '@/content/es';
import legal from '@/content/legal.es';

const page = legal['politica-de-privacidad'];

export const metadata = {
  title: page.metaTitle || `${page.title} | Esther Pujol Wilkie & Associates`,
  description: page.metaDesc || page.intro,
  alternates: { canonical: '/es/politica-de-privacidad/', languages: languagesFor('/es/politica-de-privacidad/') },
  openGraph: { title: page.metaTitle || page.title, description: page.metaDesc || page.intro, url: '/es/politica-de-privacidad/', type: 'website', locale: 'es_ES' },
  robots: { index: false, follow: true },
};

export default function P() {
  return <ServicePage t={es} page={page} />;
}
