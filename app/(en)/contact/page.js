import ServicePage from '@/components/ServicePage';
import en from '@/content/en';
import pages from '@/content/pages.en';

const page = pages['contact'];

export const metadata = {
  title: `${page.title} | Esther Pujol Wilkie & Associates`,
  description: page.intro,
  alternates: { canonical: '/contact' },
};

export default function P() {
  return <ServicePage t={en} page={page} />;
}
