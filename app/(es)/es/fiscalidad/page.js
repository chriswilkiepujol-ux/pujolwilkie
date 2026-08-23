import ServicePage from '@/components/ServicePage';
import es from '@/content/es';
import pages from '@/content/pages.es';
import { servicePageSchema, breadcrumbSchema, faqSchemaFrom } from '@/lib/schema';

const slug = 'fiscalidad';
const page = pages[slug];
const path = '/es/' + slug + '/';

export const metadata = {
  title: `${page.title} | Esther Pujol Wilkie & Associates`,
  description: page.intro,
  alternates: { canonical: path },
  openGraph: {
    title: page.title,
    description: page.intro,
    url: path,
    type: 'article',
    locale: 'es_ES',
    images: [{ url: `/images/${page.image || 'hero'}.jpg`, width: 1300, height: 498 }],
  },
};

export default function P() {
  const jsonLd = [
    servicePageSchema(page, { locale: 'es', path }),
    breadcrumbSchema([
      { name: 'Inicio', path: '/es/' },
      { name: page.nav || page.title, path },
    ]),
  ];
  if (page.faq) jsonLd.push(faqSchemaFrom(page.faq));
  return <ServicePage t={es} page={page} jsonLd={jsonLd} />;
}
