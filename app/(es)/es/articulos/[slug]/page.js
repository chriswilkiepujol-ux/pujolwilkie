import ServicePage from '@/components/ServicePage';
import es from '@/content/es';
import { notFound } from 'next/navigation';

export function generateStaticParams() {
  return es.insights.items.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const post = es.insights.items.find((p) => p.slug === slug);
  if (!post) return {};
  return { title: `${post.title} | Esther Pujol Wilkie & Associates`,
           description: post.text, alternates: { canonical: `/es/articulos/${slug}` } };
}

export default async function Post({ params }) {
  const { slug } = await params;
  const post = es.insights.items.find((p) => p.slug === slug);
  if (!post) notFound();
  const page = {
    eyebrow: post.cat, title: post.title, intro: post.text, image: 'hero',
    sections: post.sections || [{ h2: post.title, p: [post.text] }],
    related: es.insights.items.filter((p) => p.slug !== slug)
      .map((p) => ({ href: `/es/articulos/${p.slug}/`, label: p.title })),
  };
  return <ServicePage t={es} page={page} />;
}
