# Esther Pujol Wilkie & Associates

Next.js 15 (App Router) site replacing the WordPress.com site at pujolwilkie.com.
Bilingual: English at the root, Spanish under `/es`.

## Quick start

```bash
npm install
cp .env.example .env.local     # add your Formspree ID
npm run dev                    # http://localhost:3000
```

## Environment variables

| Variable | Purpose |
|---|---|
| `NEXT_PUBLIC_FORMSPREE_ID` | The ID after `/f/` in your Formspree endpoint. Without it the form returns an error state. |
| `NEXT_PUBLIC_SITE_URL` | Canonical origin. Used for canonical tags, hreflang, sitemap and schema. Leave as the production domain even on preview. |

Set both in Vercel under Settings → Environment Variables, for **all** environments.

## Structure

```
app/(en)/          English routes at the root  -> /
app/(es)/es/       Spanish routes              -> /es
content/en.js      All English copy
content/es.js      All Spanish copy (same shape)
components/        Shared, locale-agnostic. Every component takes `t`.
lib/site.js        NAP, phone, Google place ID, agency credit
lib/schema.js      LegalService + FAQPage JSON-LD
```

Adding a locale means adding a content file and a route group. Components need no changes.

## Preview safety

`app/robots.js` returns `Disallow: /` unless `VERCEL_ENV === 'production'`, and the
layouts set `robots: noindex` on the same condition. A crawlable preview would create
duplicate content against the live WordPress site, so **do not override this**.

## URL policy

Every legacy page URL is **kept as a real page with its own content**. Nothing that
was indexed gets redirected away. New services live on new URLs alongside them.

**Legacy pages, preserved (200 at the original path):**

`/` `/about/` `/blog/` `/contact/` `/property-law/` `/spanish-golden-visa/`
`/tax-and-accountancy/` `/property-management-services/`
`/immigration-and-foreigners-legal-procedures/` `/full-client-service/`

**New services, new URLs:**

`/buying-property/` `/residency-and-visas/` `/selling-property/` `/gibraltar-and-spain/`

The legacy pages act as topic hubs and link internally to the new service pages, so
they keep their indexing and pass link equity forward.

**Redirects, dead WordPress paths only:** dated `/2021/*/` permalinks to
`/blog/<slug>/`, `/author/*` to `/about/`, and `/feed` `/category/*` `/tag/*` to `/blog/`.

`trailingSlash: true` matches WordPress exactly, so preserved URLs resolve with no
redirect hop at all.

Verify any deployment before cutover. All 22 cases must pass:

```bash
npm run verify:urls -- https://your-preview.vercel.app
```

## Migration notes

- The 301 map lives in `next.config.mjs`. Legacy paths that keep their URL need no entry.
- DNS is at **Cloudflare**; the registrar is **Register SPA**. Cutover is one origin change.
- Email is **Google Workspace**. Do not touch the MX records.
- Keep the WordPress.com plan (£84/yr, renews 9 Dec 2026) live for 30 days after cutover.

## Before launch

- [ ] `colegio` and `colegiadoNumber` in `lib/site.js` — legally required on the aviso legal (LSSI-CE)
- [ ] `nif` in `lib/site.js`
- [ ] Replace `public/images/esther.jpg` — the current file is 260x300 and will not scale
- [ ] Write the three legal pages, currently linked but not built
- [ ] Build out the six service pages and the insights posts
- [ ] Verify every redirect in `next.config.mjs` against the GSC page list
