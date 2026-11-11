import ServicePage from '@/components/ServicePage';
import es from '@/content/es';
import { articleSchema, breadcrumbSchema } from '@/lib/schema';
import { notFound } from 'next/navigation';
import { languagesFor } from '@/lib/locale';
import { lastModified, LAUNCH } from '@/lib/updated';

const SERVICE = {"contrato-de-arras": "/es/compraventa/", "impuestos-no-residentes": "/es/fiscalidad/", "guia-golden-visa-espana": "/es/residencia-y-visados/"};
const BASE = '/es/articulos';

export function generateStaticParams() {
  return es.insights.items.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const post = es.insights.items.find((p) => p.slug === slug);
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
      locale: 'es_ES',
      publishedTime: post.published || LAUNCH,
      modifiedTime: lastModified(path),
      images: [{ url: '/images/sotogrande-marina-cadiz.jpg', width: 1800, height: 972 }],
    },
  };
}

export default async function Post({ params }) {
  const { slug } = await params;
  const post = es.insights.items.find((p) => p.slug === slug);
  if (!post) notFound();
  const path = `${BASE}/${slug}/`;
  const page = {
    eyebrow: post.cat, title: post.title, intro: post.text, image: 'sotogrande-marina-cadiz',
    sections: post.sections || [{ h2: post.title, p: [post.text] }],
    related: [
      ...[SERVICE[slug]].filter(Boolean).map((href) => ({ href, label: (es.navServices.find((s) => s.href === href) || {}).label || href })),
      ...es.insights.items.filter((p) => p.slug !== slug)
      .map((p) => ({ href: `${BASE}/${p.slug}/`, label: p.title })),
    ],
  };
  const jsonLd = [
    articleSchema(post, { locale: 'es', path }),
    breadcrumbSchema([
      { name: 'Inicio', path: '/es/' },
      { name: es.insights.h2, path: `${BASE}/` },
      { name: post.title, path },
    ]),
  ];
  return <ServicePage t={es} page={page} jsonLd={jsonLd} />;
}
