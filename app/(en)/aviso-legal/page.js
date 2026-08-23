import { languagesFor } from '@/lib/locale';
import ServicePage from '@/components/ServicePage';
import en from '@/content/en';
import legal from '@/content/legal.en';

const page = legal['aviso-legal'];

export const metadata = {
  title: page.metaTitle || `${page.title} | Esther Pujol Wilkie & Associates`,
  description: page.metaDesc || page.intro,
  alternates: { canonical: '/aviso-legal/', languages: languagesFor('/aviso-legal/') },
  robots: { index: false, follow: true },
};

export default function P() {
  return <ServicePage t={en} page={page} />;
}
