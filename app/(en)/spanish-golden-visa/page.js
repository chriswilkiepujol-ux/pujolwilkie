import ServicePage from '@/components/ServicePage';
import en from '@/content/en';
import pages from '@/content/pages.en';
import { servicePageSchema, breadcrumbSchema } from '@/lib/schema';

const slug = 'spanish-golden-visa';
const page = pages[slug];
const path = '/' + slug + '/';

export const metadata = {
  title: `${page.title} | Esther Pujol Wilkie & Associates`,
  description: page.intro,
  alternates: { canonical: path },
};

export default function P() {
  const jsonLd = [
    servicePageSchema(page, { locale: 'en', path }),
    breadcrumbSchema([
      { name: 'Home', path: '/' },
      { name: page.nav || page.title, path },
    ]),
  ];
  return <ServicePage t={en} page={page} jsonLd={jsonLd} />;
}
