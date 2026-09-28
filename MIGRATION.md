# Migration checklist: WordPress.com → Vercel

Cutover of pujolwilkie.com from the WordPress.com site to this Next.js site.
Written 28 September 2026. Work through it in order; do not skip the gates.

## Where the pieces are

| Thing | Where | Notes |
|---|---|---|
| Domain registrar | Register SPA | Expires 26 May 2029. Transfer lock on. Not touched by this migration |
| DNS | Cloudflare | This is where the cutover happens |
| Email | Google Workspace | MX records at Cloudflare. **Never touch these** |
| Old site | WordPress.com Premium, £84/yr | Renews 9 Dec 2026, card on file expired 12/24 |
| New site | Vercel, project `pujolwilkie`, Hobby plan | Builds from GitHub `chriswilkiepujol-ux/pujolwilkie` |
| Form | Formspree `mjybzdkz` | Notifications to Esther and Chris |
| Search Console | Domain property `pujolwilkie.com` | Verified via DNS TXT |

## Phase 0: before touching anything

**Content sign off (Esther)**
- [ ] She has read the pages written without her original copy: selling property, residency and visas, Gibraltar and Spain, Beckham Law, boats and moorings
- [ ] She has confirmed the registration section on the boats page, since which register a vessel goes into is her call
- [ ] She is happy with both names appearing together on the aviso legal: Esther Pujol Andrés, practising as Esther Pujol Wilkie & Associates
- [ ] She has checked the Spanish reads as hers

**Accounts and access**
- [ ] Esther has clicked the Formspree verification link, so enquiries reach her directly
- [ ] Chris can log into Cloudflare and sees the pujolwilkie.com zone
- [ ] Chris can log into Vercel and sees the pujolwilkie project
- [ ] Search Console domain property is verified and Chris is an owner
- [ ] Old GitHub tokens revoked

**Baseline (do this the day before, dated)**
- [ ] Export Search Console performance data, last 3 months, queries and pages, as CSV. This is the before picture
- [ ] Screenshot the WordPress.com stats for the last 12 months. They do not survive migration
- [ ] Run `npm run verify:urls -- https://pujolwilkie.vercel.app` → must be 22/22
- [ ] Run `npm run verify:links -- https://pujolwilkie.vercel.app` → must report all links resolve
- [ ] Note the current Google result for `site:pujolwilkie.com` (roughly how many pages it lists)

**Pre-cutover state of the new site, verified 28 Sep 2026**
- 44 pages, 21 per language plus legal, all returning 200
- 22 of 22 legacy WordPress URLs preserved or redirected correctly
- All internal links, all 10 images and all 3 external links resolve
- Canonicals, sitemap and schema already point at pujolwilkie.com, not the Vercel URL
- hreflang reciprocal on every page pair
- Titles and descriptions in range on 43 of 44 pages
- No placeholders, no `[pendiente]`, no free consultation, no pricing
- Six legal pages complete with NIF (masked per AEPD), colegio, nº colegiada and email
- No horizontal overflow at 320px, 390px or desktop
- Form endpoint accepts submissions
- Staging blocked from indexing: `Disallow: /` and `noindex`

## Phase 1: cutover day

Allow an hour. Do it on a weekday morning so a problem can be dealt with the same day.

**1. Lower the DNS TTL, the day before**
- Cloudflare → DNS → edit the `@` A record and the `www` record → set TTL to 5 minutes (or Auto if proxied)
- This makes the switch, and any rollback, take effect quickly

**2. Add the domain in Vercel**
- Vercel → pujolwilkie → Settings → Domains → Add `pujolwilkie.com`, then add `www.pujolwilkie.com`
- Vercel shows the records it wants. Use the values it shows, not values from memory
- Set `www` to redirect to the apex (or the other way round, but be consistent)

**3. Change DNS at Cloudflare**
- `@` A record: replace the WordPress.com value with the Vercel value shown in step 2
- `www`: CNAME to the value Vercel shows
- Set both records to **DNS only** (grey cloud) for the cutover so Vercel can issue its certificate. Proxying can be turned back on later if wanted
- **Do not touch the MX records, the `_domainconnect` TXT, or anything else**

**4. Wait for the certificate**
- Vercel Domains page shows the domain as valid once the certificate is issued, usually within minutes
- Test: `https://pujolwilkie.com/` loads the new site over HTTPS with no warning

**5. Open the site to Google**
- Vercel → Settings → Environment Variables → add `ALLOW_INDEXING` = `true`, Production only
- Deployments → Redeploy the latest
- Confirm `https://pujolwilkie.com/robots.txt` now shows `Allow: /` and the sitemap line
- Confirm the homepage source shows `<meta name="robots" content="index, follow">`

**6. Run the gates against production**
```bash
npm run verify:urls  -- https://pujolwilkie.com    # must be 22/22
npm run verify:links -- https://pujolwilkie.com    # must report all links resolve
```
If either fails, fix before going further. Do not submit the sitemap with failures.

**7. Confirm email still works**
- Send a test to esther@pujolwilkie.com from an outside address and confirm it arrives
- Submit the contact form once, for real, and confirm both Esther and Chris receive it

**8. Search Console**
- Sitemaps → submit `https://pujolwilkie.com/sitemap.xml`
- URL inspection on the homepage → Request indexing
- Do the same for `/es/` and `/buying-property/`

**9. Close the old site's back door**
- WordPress.com → Settings → General → Privacy → **Private**
- Reason: `pujolwilkie.wordpress.com` stays reachable after DNS moves and would be an indexable duplicate of the old content. Making it private stops that
- Do **not** delete the site or cancel the plan yet. It is the rollback

## Phase 2: the first 30 days

**Day 1**
- [ ] `site:pujolwilkie.com` in Google, see what it lists
- [ ] Search Console → Pages report: any 404s or "not found" entries. Expected: none, since legacy URLs are preserved
- [ ] Search Console → Sitemaps: shows 38 discovered

**Days 2 to 7**
- [ ] Check Search Console daily for coverage errors
- [ ] International targeting report: hreflang should show no errors once crawled
- [ ] Google Business Profile: confirm the website link still resolves (same domain, so it should)
- [ ] Watch enquiries. Historic run rate was 2 to 5 a month; a week of silence after cutover is worth investigating

**Weekly to day 30**
- [ ] Compare Search Console performance to the baseline export. A dip of 2 to 4 weeks is normal after any migration. A dip that has not recovered by day 30 is not
- [ ] Keep WordPress.com alive throughout as the rollback. After day 30, let it lapse on 9 December. Do not renew

**Rollback, if needed at any point**
- Cloudflare → change the `@` A record and `www` back to the WordPress.com values
- Vercel → set `ALLOW_INDEXING` back to `false` and redeploy
- The old site is intact and private; set it back to Public
- Because TTL is 5 minutes, this takes effect within minutes

## What could attract a penalty, and how it is handled

| Risk | Status |
|---|---|
| Duplicate content, staging vs live | Staging is noindex until the flag flips at cutover. Only one site is ever indexable |
| Duplicate content, wordpress.com subdomain | Set to Private in step 9 |
| Redirect chains | `trailingSlash: true` matches WordPress exactly; preserved URLs resolve with zero hops |
| Broken legacy URLs | 22 cases verified; `/author/*`, `/feed`, dated posts all redirect |
| hreflang errors | Every pair reciprocal and self referencing, verified |
| Thin content | See below |
| Cloaking, hidden text, doorway pages | None |
| Mobile usability | Verified at 320 and 390 with no overflow |
| Legal compliance (LSSI, RGPD) | Six legal pages complete |

**On thin content, honestly.** Esther asked for less dense copy, and the rewrite took English from 5,962 words to about 2,700. Several pages now sit at 180 to 340 words. Google will not penalise that, but competitor pages on the same topics run 1,000 to 1,500 words and will tend to outrank on breadth alone. This is a deliberate trade of ranking depth for her voice and her clients' reading experience. Worth revisiting page by page after launch if particular queries underperform, adding depth in her register rather than mine.

## Known gaps, none blocking

- The portrait is 260x300 and cannot scale. A photo session remains the single biggest visual upgrade available
- Litigation, family law, corporate law and urban planning are listed under Full Client Service without pages of their own
- One Spanish blog headline is 64 characters against a 62 target
- The Vercel project is on the Hobby plan, whose terms restrict commercial use. Revisit once live

## Verification commands

```bash
npm run verify:urls  -- <url>    # legacy URL preservation, 22 cases
npm run verify:links -- <url>    # crawls every page: internal links, images, external links
```
