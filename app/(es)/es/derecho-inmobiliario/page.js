import ServicePage from '@/components/ServicePage';
import es from '@/content/es';
import pages from '@/content/pages.es';

const page = pages["derecho-inmobiliario"];

export const metadata = {
  title: `${page.title} | Esther Pujol Wilkie & Associates`,
  description: page.intro,
  alternates: { canonical: "/es/derecho-inmobiliario" },
};

export default function P() {
  return <ServicePage t={es} page={page} />;
}
