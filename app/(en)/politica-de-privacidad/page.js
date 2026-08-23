import { languagesFor } from '@/lib/locale';
import ServicePage from '@/components/ServicePage';
import en from '@/content/en';
import legal from '@/content/legal.en';

const page = legal['politica-de-privacidad'];

export const metadata = {
  title: page.metaTitle || `${page.title} | Esther Pujol Wilkie & Associates`,
  description: page.metaDesc || page.intro,
  alternates: { canonical: '/politica-de-privacidad/', languages: languagesFor('/politica-de-privacidad/') },
  robots: { index: false, follow: true },
};

export default function P() {
  return <ServicePage t={en} page={page} />;
}
