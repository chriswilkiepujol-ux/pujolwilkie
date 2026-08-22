import InnerPage from '@/components/InnerPage';
import es from '@/content/es';
import { notFound } from 'next/navigation';

export function generateStaticParams() {
  return es.insights.items.map((p) => ({ slug: p.slug }));
}
export async function generateMetadata({ params }) {
  const { slug } = await params;
  const post = es.insights.items.find((p) => p.slug === slug);
  return post ? { title: post.title, description: post.text, alternates: { canonical: `/es/articulos/${slug}` } } : {};
}
export default async function Post({ params }) {
  const { slug } = await params;
  const post = es.insights.items.find((p) => p.slug === slug);
  if (!post) notFound();
  return <InnerPage t={es} eyebrow={post.cat} title={post.title} intro={post.text} image="hero" />;
}
