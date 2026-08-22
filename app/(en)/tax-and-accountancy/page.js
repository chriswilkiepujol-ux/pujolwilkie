import ServicePage from '@/components/ServicePage';
import en from '@/content/en';
import pages from '@/content/pages.en';

const page = pages["tax-and-accountancy"];

export const metadata = {
  title: `${page.title} | Esther Pujol Wilkie & Associates`,
  description: page.intro,
  alternates: { canonical: "/tax-and-accountancy" },
};

export default function P() {
  return <ServicePage t={en} page={page} />;
}
