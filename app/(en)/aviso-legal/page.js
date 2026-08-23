import ServicePage from '@/components/ServicePage';
import en from '@/content/en';
import legal from '@/content/legal.en';

const page = legal['aviso-legal'];

export const metadata = {
  title: `${page.title} | Esther Pujol Wilkie & Associates`,
  description: page.intro,
  alternates: { canonical: '/aviso-legal' },
  robots: { index: false, follow: true },
};

export default function P() {
  return <ServicePage t={en} page={page} />;
}
