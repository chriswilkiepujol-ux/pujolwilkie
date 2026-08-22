import ServicePage from '@/components/ServicePage';
import en from '@/content/en';
import pages from '@/content/pages.en';

const page = pages["spanish-golden-visa"];

export const metadata = {
  title: `${page.title} | Esther Pujol Wilkie & Associates`,
  description: page.intro,
  alternates: { canonical: "/spanish-golden-visa" },
};

export default function P() {
  return <ServicePage t={en} page={page} />;
}
