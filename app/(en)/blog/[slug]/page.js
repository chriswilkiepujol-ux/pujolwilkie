import ServicePage from '@/components/ServicePage';
import en from '@/content/en';
import { articleSchema, breadcrumbSchema } from '@/lib/schema';
import { notFound } from 'next/navigation';
import { languagesFor } from '@/lib/locale';
import { lastModified, LAUNCH } from '@/lib/updated';

const SERVICE = {"contrato-de-arras": "/buying-property/", "non-resident-tax": "/tax-and-accountancy/", "spain-golden-visa-guide": "/residency-and-visas/"};
const BASE = '/blog';

export function generateStaticParams() {
  return en.insights.items.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const post = en.insights.items.find((p) => p.slug === slug);
  if (!post) return {};
  const path = `${BASE}/${slug}/`;
  return {
    title: post.metaTitle || post.title,
    description: post.metaDesc || post.text,
    alternates: { canonical: path, languages: languagesFor(path) },
    openGraph: {
      title: post.metaTitle || post.title,
      description: post.metaDesc || post.text,
      url: path,
      type: 'article',
      locale: 'en_GB',
      publishedTime: post.published || LAUNCH,
      modifiedTime: lastModified(path),
      images: [{ url: '/images/sotogrande-marina-cadiz.jpg', width: 1800, height: 972 }],
    },
  };
}

export default async function Post({ params }) {
  const { slug } = await params;
  const post = en.insights.items.find((p) => p.slug === slug);
  if (!post) notFound();
  const path = `${BASE}/${slug}/`;
  const page = {
    eyebrow: post.cat, title: post.title, intro: post.text, image: 'sotogrande-marina-cadiz',
    sections: post.sections || [{ h2: post.title, p: [post.text] }],
    related: [
      ...[SERVICE[slug]].filter(Boolean).map((href) => ({ href, label: (en.navServices.find((s) => s.href === href) || {}).label || href })),
      ...en.insights.items.filter((p) => p.slug !== slug)
      .map((p) => ({ href: `${BASE}/${p.slug}/`, label: p.title })),
    ],
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
