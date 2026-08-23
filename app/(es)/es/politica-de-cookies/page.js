import { languagesFor } from '@/lib/locale';
import ServicePage from '@/components/ServicePage';
import es from '@/content/es';
import legal from '@/content/legal.es';

const page = legal['politica-de-cookies'];

export const metadata = {
  title: page.metaTitle || `${page.title} | Esther Pujol Wilkie & Associates`,
  description: page.metaDesc || page.intro,
  alternates: { canonical: '/es/politica-de-cookies/', languages: languagesFor('/es/politica-de-cookies/') },
  robots: { index: false, follow: true },
};

export default function P() {
  return <ServicePage t={es} page={page} />;
}
