// When each page's content last changed. The sitemap's <lastmod> reads from here.
//
// Google only trusts lastmod when it is accurate, and build time is not: it
// changes on every deploy whether or not a page did, so Google learns to ignore
// it. Every page defaults to the launch date. When you edit a page, add its
// path below with the date of the edit.
export const LAUNCH = '2026-09-28';

export const UPDATED = {
  // '/about/': '2026-10-14',
};

export const lastModified = (path) => UPDATED[path] || LAUNCH;
