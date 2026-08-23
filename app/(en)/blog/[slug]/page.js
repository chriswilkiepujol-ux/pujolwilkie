import ServicePage from '@/components/ServicePage';
import en from '@/content/en';
import { articleSchema, breadcrumbSchema } from '@/lib/schema';
import { notFound } from 'next/navigation';

const BASE = '/blog';

export function generateStaticParams() {
  return en.insights.items.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const post = en.insights.items.find((p) => p.slug === slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.text,
    alternates: { canonical: `${BASE}/${slug}/` },
  };
}

export default async function Post({ params }) {
  const { slug } = await params;
  const post = en.insights.items.find((p) => p.slug === slug);
  if (!post) notFound();
  const path = `${BASE}/${slug}/`;
  const page = {
    eyebrow: post.cat, title: post.title, intro: post.text, image: 'hero',
    sections: post.sections || [{ h2: post.title, p: [post.text] }],
    related: en.insights.items.filter((p) => p.slug !== slug)
      .map((p) => ({ href: `${BASE}/${p.slug}/`, label: p.title })),
  };
  const jsonLd = [
    articleSchema(post, { locale: 'en', path }),
    breadcrumbSchema([
      { name: 'Home', path: '/' },
      { name: en.insights.h2, path: `${BASE}/` },
      { name: post.title, path },
    ]),
  ];
  return <ServicePage t={en} page={page} jsonLd={jsonLd} />;
}
