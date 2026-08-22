import InnerPage from '@/components/InnerPage';
import en from '@/content/en';
import { notFound } from 'next/navigation';

export function generateStaticParams() {
  return en.insights.items.map((p) => ({ slug: p.slug }));
}
export async function generateMetadata({ params }) {
  const { slug } = await params;
  const post = en.insights.items.find((p) => p.slug === slug);
  return post ? { title: post.title, description: post.text, alternates: { canonical: `/blog/${slug}` } } : {};
}
export default async function Post({ params }) {
  const { slug } = await params;
  const post = en.insights.items.find((p) => p.slug === slug);
  if (!post) notFound();
  return <InnerPage t={en} eyebrow={post.cat} title={post.title} intro={post.text} image="hero" />;
}
