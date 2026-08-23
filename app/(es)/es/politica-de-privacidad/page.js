import ServicePage from '@/components/ServicePage';
import es from '@/content/es';
import legal from '@/content/legal.es';

const page = legal['politica-de-privacidad'];

export const metadata = {
  title: `${page.title} | Esther Pujol Wilkie & Associates`,
  description: page.intro,
  alternates: { canonical: '/es/politica-de-privacidad' },
  robots: { index: false, follow: true },
};

export default function P() {
  return <ServicePage t={es} page={page} />;
}
