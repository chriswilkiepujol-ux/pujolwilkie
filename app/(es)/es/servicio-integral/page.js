import ServicePage from '@/components/ServicePage';
import es from '@/content/es';
import pages from '@/content/pages.es';

const page = pages["servicio-integral"];

export const metadata = {
  title: `${page.title} | Esther Pujol Wilkie & Associates`,
  description: page.intro,
  alternates: { canonical: "/es/servicio-integral" },
};

export default function P() {
  return <ServicePage t={es} page={page} />;
}
