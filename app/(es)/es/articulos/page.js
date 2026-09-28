import { languagesFor } from '@/lib/locale';
import BlogIndex from '@/components/BlogIndex';
import { siteUrl } from '@/lib/site';
import es from '@/content/es';

export const metadata = {
  title: "Artículos sobre derecho inmobiliario español",
  description: "Apuntes sobre derecho inmobiliario, fiscalidad y residencia para propietarios extranjeros: qué ha cambiado, cuánto cuesta y qué plazos se escapan.",
  alternates: { canonical: '/es/articulos/', languages: languagesFor('/es/articulos/') },
};

export default function P() {
  const jsonLd = {
    '@context': 'https://schema.org', '@type': 'CollectionPage',
    name: es.insights.h2, url: `${siteUrl}/es/articulos/`,
    inLanguage: 'es-ES',
    isPartOf: { '@type': 'WebSite', name: 'Esther Pujol Wilkie & Associates', url: siteUrl },
    hasPart: es.insights.items.map((p) => ({ '@type': 'Article', headline: p.title, url: `${siteUrl}/es/articulos/${p.slug}/` })),
  };
  return (<>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
    <BlogIndex t={es} />
  </>);
}
