import { siteUrl } from '@/lib/site';

const allowIndex = process.env.ALLOW_INDEXING === 'true';

export default function robots() {
  if (!allowIndex) return { rules: [{ userAgent: '*', disallow: '/' }] };
  return {
    rules: [{ userAgent: '*', allow: '/' }],
    sitemap: `${siteUrl}/sitemap.xml`,
    host: siteUrl,
  };
}
