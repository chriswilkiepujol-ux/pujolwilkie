#!/usr/bin/env node
/**
 * Crawls the site and checks every link resolves: internal pages AND the
 * external destinations the site depends on.
 *
 *   node scripts/verify-links.mjs https://your-deployment.vercel.app
 *   node scripts/verify-links.mjs https://pujolwilkie.com --internal-only
 *
 * External checking matters here because the Google review buttons are load
 * bearing for the whole review strategy, and an external URL can rot silently
 * without any internal check noticing.
 */
const args = process.argv.slice(2);
const base = (args.find((a) => !a.startsWith('--')) || 'http://localhost:3000').replace(/\/$/, '');
const internalOnly = args.includes('--internal-only');

const seen = new Set();
const queue = ['/'];
const internal = new Map();   // path -> Set(pages linking to it)
const external = new Map();   // url  -> Set(pages linking to it)
const images   = new Map();   // image path -> Set(pages using it)

const UA = { 'User-Agent': 'Mozilla/5.0 (compatible; link-check/1.0)' };

while (queue.length) {
  const path = queue.shift();
  if (seen.has(path)) continue;
  seen.add(path);
  let html = '';
  try { html = await (await fetch(base + path, { headers: UA })).text(); } catch { continue; }

  // anchors only: <link rel="canonical"> and hreflang tags point at the
  // production domain, which is still the old site until cutover, so they
  // would report as broken forever and drown out real failures
  // images: next/image encodes the source as url=%2Fimages%2F...; catch raw src too
  for (const m of html.matchAll(/(?:url=%2Fimages%2F|src="\/images\/)([^&"]+)/g)) {
    const img = '/images/' + decodeURIComponent(m[1]).split('?')[0];
    if (!images.has(img)) images.set(img, new Set());
    images.get(img).add(path);
  }
  for (const m of html.matchAll(/<a\b[^>]*?href="([^"]+)"/g)) {
    const h = m[1];
    if (h.startsWith('/_next') || h.startsWith('/images') || h.startsWith('#')) continue;

    if (h.startsWith('/')) {
      const clean = h.split('#')[0].split('?')[0];
      if (!internal.has(clean)) internal.set(clean, new Set());
      internal.get(clean).add(path);
      if (!seen.has(clean) && seen.size < 120) queue.push(clean);
    } else if (h.startsWith('http')) {
      if (!external.has(h)) external.set(h, new Set());
      external.get(h).add(path);
    }
  }
}

async function check(url, allowRedirect = true) {
  // HEAD first, fall back to GET: some hosts reject HEAD
  for (const method of ['HEAD', 'GET']) {
    try {
      const r = await fetch(url, { method, redirect: 'manual', headers: UA });
      if ([301, 302, 303, 307, 308].includes(r.status)) {
        if (!allowRedirect) return r.status;
        const loc = r.headers.get('location');
        if (!loc) return r.status;
        const next = loc.startsWith('http') ? loc : base + loc;
        // a redirect to a sign in page is a valid destination, not a failure
        if (/accounts\.google\.com|login|signin/i.test(next)) return 200;
        try {
          const r2 = await fetch(next, { method: 'GET', redirect: 'follow', headers: UA });
          return r2.status;
        } catch { return r.status; }
      }
      if (r.status !== 405) return r.status;
    } catch (e) { if (method === 'GET') return 'ERR'; }
  }
  return 'ERR';
}

let broken = 0;

console.log('--- internal ---');
for (const path of [...internal.keys()].sort()) {
  const st = await check(base + path);
  if (st !== 200) {
    broken++;
    console.log(`BROKEN ${st}  ${path}`);
    console.log(`         linked from: ${[...internal.get(path)].join(', ')}`);
  }
}
console.log(`${internal.size} internal links checked`);

console.log('\n--- images ---');
for (const img of [...images.keys()].sort()) {
  const st = await check(base + img);
  if (st !== 200) {
    broken++;
    console.log(`BROKEN ${st}  ${img}`);
    console.log(`         used on: ${[...images.get(img)].join(', ')}`);
  }
}
console.log(`${images.size} images checked`);

if (!internalOnly) {
  console.log('\n--- external ---');
  for (const url of [...external.keys()].sort()) {
    const st = await check(url);
    const ok = st === 200;
    if (!ok) {
      broken++;
      console.log(`BROKEN ${st}  ${url}`);
      console.log(`         linked from: ${[...external.get(url)].join(', ')}`);
    } else {
      console.log(`ok           ${url.slice(0, 88)}`);
    }
  }
  console.log(`${external.size} external links checked`);
}

// every indexable page the crawl found must be listed in the sitemap
console.log('\n--- sitemap coverage ---');
try {
  const xml = await (await fetch(base + '/sitemap.xml', { headers: UA })).text();
  const listed = new Set([...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => new URL(m[1]).pathname));
  const legal = /aviso-legal|politica-de-(privacidad|cookies)/;
  const missing = [...seen].filter((p) => !legal.test(p) && !listed.has(p));
  const stale = [...listed].filter((p) => !seen.has(p));
  for (const p of missing) { broken++; console.log(`NOT IN SITEMAP  ${p}`); }
  for (const p of stale) { broken++; console.log(`IN SITEMAP BUT NOT LINKED FROM SITE  ${p}`); }
  console.log(`${listed.size} sitemap entries, ${seen.size} pages crawled`);
} catch { console.log('could not read sitemap'); }

console.log(`\ncrawled ${seen.size} pages`);
console.log(broken ? `${broken} BROKEN` : 'all links resolve');
process.exit(broken ? 1 : 0);
