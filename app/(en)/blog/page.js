import { languagesFor } from '@/lib/locale';
import BlogIndex from '@/components/BlogIndex';
import en from '@/content/en';

export const metadata = {
  title: "Insights on Spanish Property Law | Pujol Wilkie",
  description: "Notes on Spanish property law, tax and residency for foreign owners: what actually changed, what it costs, and the deadlines that catch owners out.",
  alternates: { canonical: '/blog/', languages: languagesFor('/blog/') },
};

export default function P() {
  return <BlogIndex t={en} />;
}
