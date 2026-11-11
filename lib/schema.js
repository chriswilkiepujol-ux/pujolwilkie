import site from './site';
import { siteUrl } from './site';

import { lastModified, LAUNCH } from './updated';

const ORG_ID = `${siteUrl}/#organisation`;
const PERSON_ID = `${siteUrl}/#esther`;
const SITE_ID = `${siteUrl}/#website`;
const AREA = ['Sotogrande', 'San Roque', 'Campo de Gibraltar', 'Estepona', 'Marbella', 'Gibraltar', 'Costa del Sol'];

// Specific topics rather than menu labels, so search engines and AI assistants
// can match the firm to the questions people actually ask.
const KNOWS = {
  en: ['Spanish property law', 'Buying property in Spain', 'Selling property in Spain',
    'Contrato de arras', 'Nota simple and land registry checks', 'Non-resident tax in Spain',
    'Spanish residency and visas', 'Non-lucrative visa', 'Digital nomad visa', 'Beckham Law',
    'NIE applications', 'Spanish wills and inheritance', 'Gibraltar and Spain cross-border matters',
    'Boat and mooring purchases in Spain'],
  es: ['Derecho inmobiliario español', 'Compraventa de inmuebles en España', 'Venta de inmuebles',
    'Contrato de arras', 'Nota simple y Registro de la Propiedad', 'Fiscalidad de no residentes',
    'Residencia y visados en España', 'Residencia no lucrativa', 'Visado de nómada digital',
    'Ley Beckham', 'Tramitación del NIE', 'Testamentos y herencias en España',
    'Asuntos transfronterizos entre Gibraltar y España', 'Compraventa de embarcaciones y amarres'],
};

function person(locale) {
  const creds = [{
    '@type': 'EducationalOccupationalCredential',
    credentialCategory: locale === 'es' ? 'Colegiación profesional' : 'Professional licence',
    name: `Abogada ejerciente, ${site.colegio}, n.º ${site.colegiadoNumber}`,
    recognizedBy: { '@type': 'Organization', name: site.colegio, url: site.colegioUrl },
    dateCreated: site.admittedDate,
  }];
  for (const c of site.cpd || []) {
    creds.push({ '@type': 'EducationalOccupationalCredential', credentialCategory: 'Certificate',
      name: c.name, recognizedBy: { '@type': 'Organization', name: c.issuer } });
  }
  return {
    '@type': 'Person',
    '@id': PERSON_ID,
    name: site.colegiadaName,
    alternateName: site.shortName,
    jobTitle: locale === 'es' ? 'Abogada' : 'Lawyer (abogada)',
    url: `${siteUrl}${locale === 'es' ? '/es/sobre-esther/' : '/about/'}`,
    image: `${siteUrl}/images/esther-pujol-wilkie-abogada-sotogrande.jpg`,
    worksFor: { '@id': ORG_ID },
    knowsLanguage: ['es', 'en'],
    knowsAbout: KNOWS[locale === 'es' ? 'es' : 'en'],
    hasCredential: creds,
    sameAs: ['https://www.linkedin.com/in/estherpujol/'],
  };
}

function organisation(locale) {
  return {
    '@type': 'LegalService',
    '@id': ORG_ID,
    name: site.legalName,
    alternateName: 'Pujol Wilkie',
    url: siteUrl,
    logo: `${siteUrl}/icons/icon-512.png`,
    telephone: site.phone,
    email: site.email,
    image: `${siteUrl}/images/esther-pujol-wilkie-abogada-sotogrande.jpg`,
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
    hasMap: site.mapsUrl,
    openingHoursSpecification: [{
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '09:00', closes: '17:00',
    }],
    availableLanguage: ['en', 'es'],
    // Esther has practised under her own name since 2012 (see Sobre Esther);
    // 1990 is her bar admission, which sits on her credential instead.
    foundingDate: '2012',
    founder: { '@id': PERSON_ID },
    employee: { '@id': PERSON_ID },
    areaServed: AREA,
    knowsAbout: KNOWS[locale === 'es' ? 'es' : 'en'],
    sameAs: [site.mapsUrl, 'https://www.linkedin.com/in/estherpujol/'],
  };
}

// Homepage: the website, the firm and Esther as one connected graph. The
// WebSite name is what Google uses for the site name shown in results.
export function legalServiceSchema(t) {
  const locale = t.locale === 'es' ? 'es' : 'en';
  return {
    '@context': 'https://schema.org',
    '@graph': [
      { '@type': 'WebSite', '@id': SITE_ID, url: `${siteUrl}/`, name: site.legalName,
        alternateName: ['Pujol Wilkie', site.shortName], inLanguage: ['en', 'es'],
        publisher: { '@id': ORG_ID } },
      organisation(locale),
      person(locale),
    ],
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
    description: post.metaDesc || post.text,
    articleSection: post.cat,
    inLanguage: locale === 'es' ? 'es-ES' : 'en-GB',
    wordCount: body.split(/\s+/).filter(Boolean).length,
    datePublished: post.published || LAUNCH,
    dateModified: lastModified(path),
    mainEntityOfPage: { '@type': 'WebPage', '@id': `${siteUrl}${path}` },
    author: { '@type': 'Person', '@id': PERSON_ID, name: site.colegiadaName,
      alternateName: site.shortName,
      url: `${siteUrl}${locale === 'es' ? '/es/sobre-esther/' : '/about/'}` },
    publisher: { '@type': 'LegalService', '@id': ORG_ID, name: site.legalName,
      logo: { '@type': 'ImageObject', url: `${siteUrl}/icons/icon-512.png`, width: 512, height: 512 } },
    image: `${siteUrl}/images/sotogrande-marina-cadiz.jpg`,
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

const ABOUT = new Set(['/about/', '/es/sobre-esther/']);
const CONTACT = new Set(['/contact/', '/es/contacto/']);

export function servicePageSchema(page, { locale, path }) {
  const base = {
    '@context': 'https://schema.org',
    url: `${siteUrl}${path}`,
    name: page.metaTitle || page.title,
    description: page.metaDesc || page.intro,
    inLanguage: locale === 'es' ? 'es-ES' : 'en-GB',
    isPartOf: { '@id': SITE_ID },
  };
  // About and Contact are pages about the firm, not services it sells.
  if (ABOUT.has(path)) return { ...base, '@type': 'AboutPage', mainEntity: person(locale), about: { '@id': ORG_ID } };
  if (CONTACT.has(path)) return { ...base, '@type': 'ContactPage', about: { '@id': ORG_ID } };
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': `${siteUrl}${path}#service`,
    name: page.title,
    description: page.metaDesc || page.intro,
    inLanguage: locale === 'es' ? 'es-ES' : 'en-GB',
    serviceType: page.nav || page.title,
    provider: { '@type': 'LegalService', '@id': ORG_ID, name: site.legalName },
    areaServed: AREA,
    url: `${siteUrl}${path}`,
  };
}

export function faqSchemaFrom(items) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  };
}
