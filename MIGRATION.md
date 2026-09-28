# Migration checklist: WordPress.com → Vercel

Cutover of pujolwilkie.com from the WordPress.com site to this Next.js site.
Written 28 September 2026. Work through it in order; do not skip the gates.

## Where the pieces are

| Thing | Where | Notes |
|---|---|---|
| Domain registrar | Register SPA | Expires 26 May 2029. Transfer lock on. Not touched by this migration |
| DNS | Cloudflare (free plan) | Holds every DNS record, and the site is proxied through it: visitor, then Cloudflare, then WordPress.com. Cloudflare's own visitor counts are mostly bots and are not real traffic |
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
- [ ] WordPress.com → Upgrades → Purchases: is **Google Workspace** or **Professional Email** listed there? If so it is billed through WordPress.com separately from the £84 site plan, and it must be moved or kept before that account is closed. The card on file there expired 12/24
- [ ] Ask Esther to log in to her mail at mail.google.com with esther@pujolwilkie.com, to confirm it is a working mailbox and whose Google account owns it

**Baseline (do this the day before, dated)**
- [ ] Export Search Console performance data, last 3 months, queries and pages, as CSV. This is the before picture
- [ ] Screenshot the WordPress.com stats for the last 12 months. They do not survive migration
- [ ] Run `npm run verify:urls -- https://pujolwilkie.vercel.app` → must be 22/22
- [ ] Run `npm run verify:links -- https://pujolwilkie.vercel.app` → must report all links resolve
- [ ] Note the current Google result for `site:pujolwilkie.com` (roughly how many pages it lists)

**Baseline recorded 28 September 2026** (compare against this, not against memory)

| Search Console, 26 Jun to 25 Sep 2026 (92 days) | |
|---|---|
| Clicks / impressions / CTR | 52 / 3,457 / 1.50% |
| Homepage | 47 clicks, 3,366 impressions, average position 8.97 |
| Spain | 2,915 impressions (84%), 36 clicks |
| "real estate lawyer sotogrande" | 97 impressions, position 1.15, 0 clicks |
| "abogados sotogrande" | 77 impressions, position 2.31, 1 click |
| "abogado sotogrande" | 38 impressions, position 1.21, 1 click |

| WordPress.com stats, 1 Oct 2025 to 28 Sep 2026 | |
|---|---|
| Views / visitors | 1.3K (+26%) / 827 (+43%) |
| Top pages | Home 709, Contact 149, Blog 100, About 85 |
| From search engines | 298 views |
| Top countries | Spain 437, United States 326, United Kingdom 152 |
| Clicks out to pujolwilkie.wordpress.com | 62 |

The first thing to watch after cutover is whether the search snippets convert: the homepage ranks first for the queries above and takes almost no clicks, which the rewritten titles and descriptions are meant to fix.

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

**1. DNS TTL: nothing to do**
- Cloudflare's Auto TTL is already about 5 minutes, so the switch and any rollback take effect quickly

**2. Add the domain in Vercel**
- Do this **before** touching Cloudflare. If DNS pointed at Vercel first, visitors would arrive before Vercel knew which site to serve them
- Vercel → pujolwilkie → Settings → Domains → Add Domain → `pujolwilkie.com`. Accept the prompt to add `www.pujolwilkie.com` too and set it to redirect to the apex. If Domains is not in the Settings sidebar, use the Find box at the top left (press F) and type Domains
- It will say Invalid Configuration until DNS is changed. That is expected and changes nothing on the live site, because DNS still points at WordPress
- Vercel shows the exact records on the domain card. Use those values, not values from memory

**3. Change DNS at Cloudflare**
- This is done at **Cloudflare**, not at the registrar (Register SPA). The nameservers are Cloudflare's, so edits at the registrar would have no effect
- `@` A record: replace the existing value with the one on the Vercel domain card
- **Delete any AAAA record on `@`.** Vercel does not support IPv6 for custom domains on outside DNS, so a leftover AAAA record splits traffic and can stall the certificate
- `www`: CNAME to the value Vercel shows
- Set both records to **DNS only** (grey cloud). Vercel advises against putting a proxy in front of it, so leave them grey
- Any wildcard `*` record can stay
- **Do not touch the MX records, the `_domainconnect` TXT, or anything else**

**4. Wait for the certificate**
- Vercel Domains page shows the domain as valid once the certificate is issued, usually within minutes
- Test: `https://pujolwilkie.com/` loads the new site over HTTPS with no warning

**5. Run the gates against production, while the site is still hidden from Google**
```bash
npm run verify:urls  -- https://pujolwilkie.com    # must be 22/22
npm run verify:links -- https://pujolwilkie.com    # must report all links resolve
```
`verify:links` also checks that every page on the site is listed in the sitemap. If either fails, stop and fix before going further.

**6. Confirm email still works**
- Send a test to esther@pujolwilkie.com from an outside address and confirm it arrives
- Submit the contact form once, for real, and confirm both Esther and Chris receive it

**7. Open the site to Google**

The site has a safety switch. Until it is turned on, every page tells Google "do not index me", which is why the staging site has never appeared in search. The switch is a setting in Vercel called `ALLOW_INDEXING`. Turn it on only now, after steps 4 to 6 have passed. If it is turned on earlier, while WordPress is still serving pujolwilkie.com, Google can see two copies of the site.

- Vercel → project pujolwilkie → Settings → Environment Variables
- Key `ALLOW_INDEXING`, value `true`
- If it asks for a type, choose **Config**, not Secret. It is a plain on/off flag, not a secret
- Tick **Production** only. Leave Preview and Development unticked
- If Environment Variables is not in the Settings sidebar, use the Find box (press F). In the August 2026 dashboard the sidebar listed Environments instead, so look there. If it still cannot be found, ask Claude to flip it from the repo instead
- Save. Then Deployments → the latest deployment → the three dots → **Redeploy**. If it offers "Use existing Build Cache", untick it. The switch is read when the site builds, so nothing changes until it redeploys
- Confirm `https://pujolwilkie.com/robots.txt` now says `Allow: /` and lists the sitemap
- Confirm the homepage source contains `<meta name="robots" content="index, follow">`
- Turning the switch on also makes the free `pujolwilkie.vercel.app` address forward to `pujolwilkie.com`, so Google only ever sees one site

**8. Search Console**
- Sitemaps → submit `https://pujolwilkie.com/sitemap.xml`. It lists 38 pages, each with its English and Spanish versions declared
- URL inspection on the homepage → Request indexing. Do the same for `/es/` and `/buying-property/`

**9. The old wordpress.com address: leave it alone**
- `pujolwilkie.wordpress.com` currently 301 redirects every page to the same path on `pujolwilkie.com` (checked 28 Sep 2026). After cutover those redirects will land on the new site, which is what we want. The old homepage buttons sent 62 visitors a year through that address
- Do **not** set the WordPress.com site to Private at cutover. An earlier draft of this checklist said to, and that was wrong: it assumed the address served a duplicate copy without checking, and Private risks breaking the redirects
- After cutover, open `https://pujolwilkie.wordpress.com/property-law/` and confirm it lands on the new site
- Do **not** delete the site or cancel the plan yet. It is the rollback
- The redirect depends on the paid plan. When the plan ends on 9 December it will probably stop, and the old site would then sit live at the `.wordpress.com` address as a duplicate. So in the first week of December, deliberately delete the WordPress.com site (the export and media archive from 22 Aug are already saved) or set it to Private. Do not just let it lapse

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
- [ ] Keep WordPress.com alive throughout as the rollback. After day 30, close it down deliberately in early December as step 9 describes. Do not renew

**Rollback, if needed at any point**
- Cloudflare → change the `@` A record and `www` back to the WordPress.com values
- Vercel → set `ALLOW_INDEXING` back to `false` and redeploy
- The old site is untouched, so nothing else needs undoing
- Because TTL is 5 minutes, this takes effect within minutes

## What could attract a penalty, and how it is handled

| Risk | Status |
|---|---|
| Duplicate content, staging vs live | Staging is noindex until the flag flips at cutover. Only one site is ever indexable |
| Duplicate content, wordpress.com subdomain | Currently 301s to the real domain. Re-check after cutover, and act before the plan ends (step 9) |
| Duplicate content, pujolwilkie.vercel.app | Forwards to pujolwilkie.com once the switch in step 7 is on |
| Redirect chains | `trailingSlash: true` matches WordPress exactly; preserved URLs resolve with zero hops |
| Broken legacy URLs | 22 cases verified; `/author/*`, `/feed`, dated posts all redirect |
| hreflang errors | Every pair reciprocal and self referencing, verified |
| Thin content | See below |
| Cloaking, hidden text, doorway pages | None |
| Mobile usability | Verified at 320 and 390 with no overflow |
| Legal compliance (LSSI, RGPD) | Six legal pages complete |

**On thin content, honestly.** Esther asked for less dense copy, and the rewrite took English from 5,962 words to about 2,700. Several pages now sit at 180 to 340 words. Google will not penalise that, but competitor pages on the same topics run 1,000 to 1,500 words and will tend to outrank on breadth alone. This is a deliberate trade of ranking depth for her voice and her clients' reading experience. Worth revisiting page by page after launch if particular queries underperform, adding depth in her register rather than mine.

## Email authentication (found 28 Sep 2026, separate from the migration)

The domain has no SPF, DKIM or DMARC records (checked in DNS). Email still arrives, but mail sent from esther@pujolwilkie.com is more likely to be treated as spam by the recipient. This matters for a lawyer writing to clients. It is a small fix in Cloudflare DNS plus one switch in the Google Workspace admin console. Do it as its own task after the migration has settled, so that only one thing changes at a time.

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
