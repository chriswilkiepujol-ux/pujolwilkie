import { languagesFor } from '@/lib/locale';
import BlogIndex from '@/components/BlogIndex';
import { siteUrl } from '@/lib/site';
import en from '@/content/en';

export const metadata = {
  title: "Insights on Spanish Property Law | Pujol Wilkie",
  description: "Notes on Spanish property law, tax and residency for foreign owners: what actually changed, what it costs, and the deadlines that catch owners out.",
  alternates: { canonical: '/blog/', languages: languagesFor('/blog/') },
};

export default function P() {
  const jsonLd = {
    '@context': 'https://schema.org', '@type': 'CollectionPage',
    name: en.insights.h2, url: `${siteUrl}/blog/`,
    inLanguage: 'en-GB',
    isPartOf: { '@type': 'WebSite', name: 'Esther Pujol Wilkie & Associates', url: siteUrl },
    hasPart: en.insights.items.map((p) => ({ '@type': 'Article', headline: p.title, url: `${siteUrl}/blog/${p.slug}/` })),
  };
  return (<>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
    <BlogIndex t={en} />
  </>);
}
