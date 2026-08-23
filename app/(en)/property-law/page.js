import ServicePage from '@/components/ServicePage';
import en from '@/content/en';
import pages from '@/content/pages.en';
import { servicePageSchema, breadcrumbSchema, faqSchemaFrom } from '@/lib/schema';

const slug = 'property-law';
const page = pages[slug];
const path = '/' + slug + '/';

export const metadata = {
  title: `${page.title} | Esther Pujol Wilkie & Associates`,
  description: page.intro,
  alternates: { canonical: path },
  openGraph: {
    title: page.title,
    description: page.intro,
    url: path,
    type: 'article',
    locale: 'en_GB',
    images: [{ url: `/images/${page.image || 'hero'}.jpg`, width: 1300, height: 498 }],
  },
};

export default function P() {
  const jsonLd = [
    servicePageSchema(page, { locale: 'en', path }),
    breadcrumbSchema([
      { name: 'Home', path: '/' },
      { name: page.nav || page.title, path },
    ]),
  ];
  if (page.faq) jsonLd.push(faqSchemaFrom(page.faq));
  return <ServicePage t={en} page={page} jsonLd={jsonLd} />;
}
