import ServicePage from '@/components/ServicePage';
import en from '@/content/en';
import { notFound } from 'next/navigation';

export function generateStaticParams() {
  return en.insights.items.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const post = en.insights.items.find((p) => p.slug === slug);
  if (!post) return {};
  return { title: `${post.title} | Esther Pujol Wilkie & Associates`,
           description: post.text, alternates: { canonical: `/blog/${slug}` } };
}

export default async function Post({ params }) {
  const { slug } = await params;
  const post = en.insights.items.find((p) => p.slug === slug);
  if (!post) notFound();
  const page = {
    eyebrow: post.cat, title: post.title, intro: post.text, image: 'hero',
    sections: post.sections || [{ h2: post.title, p: [post.text] }],
    related: en.insights.items.filter((p) => p.slug !== slug)
      .map((p) => ({ href: `/blog/${p.slug}/`, label: p.title })),
  };
  return <ServicePage t={en} page={page} />;
}
