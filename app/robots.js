import { siteUrl } from '@/lib/site';

// Preview and development deployments must never be indexed: a crawlable
// preview creates duplicate content against the live WordPress site.
const isProduction = process.env.VERCEL_ENV === 'production';

export default function robots() {
  if (!isProduction) return { rules: [{ userAgent: '*', disallow: '/' }] };
  return {
    rules: [{ userAgent: '*', allow: '/' }],
    sitemap: `${siteUrl}/sitemap.xml`,
    host: siteUrl,
  };
}
