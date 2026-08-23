import ServicePage from '@/components/ServicePage';
import es from '@/content/es';
import pages from '@/content/pages.es';
import { servicePageSchema, breadcrumbSchema } from '@/lib/schema';

const slug = 'gibraltar-y-espana';
const page = pages[slug];
const path = '/es/' + slug + '/';

export const metadata = {
  title: `${page.title} | Esther Pujol Wilkie & Associates`,
  description: page.intro,
  alternates: { canonical: path },
};

export default function P() {
  const jsonLd = [
    servicePageSchema(page, { locale: 'es', path }),
    breadcrumbSchema([
      { name: 'Inicio', path: '/es/' },
      { name: page.nav || page.title, path },
    ]),
  ];
  return <ServicePage t={es} page={page} jsonLd={jsonLd} />;
}
