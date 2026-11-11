import { languagesFor } from '@/lib/locale';
import ServicePage from '@/components/ServicePage';
import en from '@/content/en';
import legal from '@/content/legal.en';

const page = legal['politica-de-privacidad'];

export const metadata = {
  title: page.metaTitle || `${page.title} | Esther Pujol Wilkie & Associates`,
  description: page.metaDesc || page.intro,
  alternates: { canonical: '/politica-de-privacidad/', languages: languagesFor('/politica-de-privacidad/') },
  openGraph: { title: page.metaTitle || page.title, description: page.metaDesc || page.intro, url: '/politica-de-privacidad/', type: 'website', locale: 'en_GB' },
  robots: { index: false, follow: true },
};

export default function P() {
  return <ServicePage t={en} page={page} />;
}
