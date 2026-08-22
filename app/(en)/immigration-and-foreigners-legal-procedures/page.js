import ServicePage from '@/components/ServicePage';
import en from '@/content/en';
import pages from '@/content/pages.en';

const page = pages["immigration-and-foreigners-legal-procedures"];

export const metadata = {
  title: `${page.title} | Esther Pujol Wilkie & Associates`,
  description: page.intro,
  alternates: { canonical: "/immigration-and-foreigners-legal-procedures" },
};

export default function P() {
  return <ServicePage t={en} page={page} />;
}
