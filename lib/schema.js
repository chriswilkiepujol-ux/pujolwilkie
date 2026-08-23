import site from './site';
import { siteUrl } from './site';

// LegalService + LocalBusiness markup. Note: Google no longer shows star rich
// results for self-serving business reviews, so aggregateRating is included for
// entity understanding only, not to chase stars in the SERP.
export function legalServiceSchema(t) {
  return {
    '@context': 'https://schema.org',
    '@type': ['LegalService', 'Attorney'],
    '@id': `${siteUrl}/#organisation`,
    name: site.legalName,
    url: siteUrl,
    telephone: site.phone,
    image: `${siteUrl}/images/esther.jpg`,
    priceRange: '$$',
    address: {
      '@type': 'PostalAddress',
      streetAddress: `${site.street}, ${site.district}`,
      addressLocality: site.city,
      addressRegion: site.region,
      postalCode: site.postal,
      addressCountry: site.country,
    },
    geo: { '@type': 'GeoCoordinates', latitude: site.lat, longitude: site.lng },
    openingHoursSpecification: [{
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '09:00', closes: '17:00',
    }],
    availableLanguage: ['en', 'es'],
    areaServed: ['Sotogrande', 'San Roque', 'Estepona', 'Marbella', 'Gibraltar', 'Costa del Sol'],
    knowsAbout: t.services.items.map((s) => s.title),
    sameAs: [site.gbpUrl, 'https://www.linkedin.com/in/estherpujol/'],
  };
}

export function faqSchema(t) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: t.faq.items.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  };
}

export function articleSchema(post, { locale, path }) {
  const body = (post.sections || []).flatMap((x) => x.p || []).join(' ');
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    description: post.text,
    articleSection: post.cat,
    inLanguage: locale === 'es' ? 'es-ES' : 'en-GB',
    wordCount: body.split(/\s+/).filter(Boolean).length,
    mainEntityOfPage: { '@type': 'WebPage', '@id': `${siteUrl}${path}` },
    author: { '@type': 'Person', name: 'Esther Pujol Wilkie', jobTitle: 'Abogada',
      worksFor: { '@type': 'LegalService', name: site.legalName } },
    publisher: { '@type': 'Organization', name: site.legalName,
      logo: { '@type': 'ImageObject', url: `${siteUrl}/logo-mark.svg` } },
    image: `${siteUrl}/images/hero.jpg`,
  };
}

export function breadcrumbSchema(trail) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: trail.map((t, i) => ({
      '@type': 'ListItem', position: i + 1, name: t.name, item: `${siteUrl}${t.path}`,
    })),
  };
}

export function servicePageSchema(page, { locale, path }) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: page.title,
    description: page.intro,
    inLanguage: locale === 'es' ? 'es-ES' : 'en-GB',
    serviceType: page.eyebrow,
    provider: { '@type': 'LegalService', '@id': `${siteUrl}/#organisation`, name: site.legalName },
    areaServed: ['Sotogrande', 'San Roque', 'Estepona', 'Marbella', 'Gibraltar', 'Costa del Sol'],
    url: `${siteUrl}${path}`,
  };
}
