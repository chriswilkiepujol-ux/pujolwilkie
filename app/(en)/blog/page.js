import BlogIndex from '@/components/BlogIndex';
import en from '@/content/en';

export const metadata = {
  title: `${en.insights.h2} | Esther Pujol Wilkie & Associates`,
  description: en.insights.items.map((p) => p.title).join('. '),
  alternates: { canonical: '/blog' },
};

export default function P() {
  return <BlogIndex t={en} />;
}
