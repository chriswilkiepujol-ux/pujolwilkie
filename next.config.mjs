/** @type {import('next').NextConfig} */

// Every legacy page URL is KEPT as a real page with its own content and topic.
// Nothing that was indexed gets redirected away. New services live on new URLs.
// Only genuinely dead WordPress paths redirect.
const redirects = [
  { source: '/2021/06/17/example-post-2', destination: '/blog/spain-golden-visa-guide/', permanent: true },
  { source: '/2021/01/06/brexit-side-effects', destination: '/blog/brexit-spain-residency/', permanent: true },
  { source: '/2021/01/06/intro-esther-pujol-wilkie', destination: '/about/', permanent: true },
  { source: '/:year(\\d{4})/:month(\\d{2})/:day(\\d{2})/:slug', destination: '/blog/', permanent: true },
  { source: '/author/:slug*', destination: '/about/', permanent: true },
  { source: '/feed', destination: '/blog/', permanent: true },
  { source: '/comments/feed', destination: '/blog/', permanent: true },
  { source: '/category/:slug*', destination: '/blog/', permanent: true },
  { source: '/tag/:slug*', destination: '/blog/', permanent: true },
];

const nextConfig = {
  trailingSlash: true,
  async redirects() { return redirects; },
  images: { formats: ['image/avif', 'image/webp'] },
  poweredByHeader: false,
};

export default nextConfig;
