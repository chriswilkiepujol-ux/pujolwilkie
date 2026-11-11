// When each page's content last changed. The sitemap's <lastmod> and the
// articles' dateModified read from here.
//
// Google only trusts lastmod when it is accurate, and build time is not: it
// changes on every deploy whether or not a page did, so Google learns to ignore
// it. Every page defaults to the launch date. When you edit a page, add its
// path below with the date of the edit.
export const LAUNCH = '2026-09-28';

// Esther's Spanish review (3 to 11 Nov 2026) touched every Spanish page.
const ES_REVIEW = '2026-11-11';

export const UPDATED = {
  '/': '2026-11-11',
  '/about/': '2026-11-06',
  '/property-law/': '2026-11-06',
  '/buying-property/': '2026-11-03',
  '/tax-and-accountancy/': '2026-11-11',
  '/beckhams-law/': '2026-11-11',
  '/property-management-services/': '2026-11-03',
  '/immigration-and-foreigners-legal-procedures/': '2026-11-03',
  '/blog/contrato-de-arras/': '2026-11-11',
  '/blog/non-resident-tax/': '2026-11-11',
};

export const lastModified = (path) =>
  UPDATED[path] || (path.startsWith('/es/') ? ES_REVIEW : LAUNCH);
