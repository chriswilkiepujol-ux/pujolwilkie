import BlogIndex from '@/components/BlogIndex';
import es from '@/content/es';

export const metadata = {
  title: `${es.insights.h2} | Esther Pujol Wilkie & Associates`,
  description: es.insights.items.map((p) => p.title).join('. '),
  alternates: { canonical: '/es/articulos' },
};

export default function P() {
  return <BlogIndex t={es} />;
}
