#!/usr/bin/env node
/**
 * Crawls the site and reports every internal link that does not resolve.
 *   node scripts/verify-links.mjs https://your-deployment.vercel.app
 * Run before cutover, and again against production afterwards.
 */
const base = (process.argv[2] || 'http://localhost:3000').replace(/\/$/, '');
const seen = new Set();
const queue = ['/'];
const results = new Map();   // url -> status
const sources = new Map();   // url -> pages that link to it

async function statusOf(path) {
  if (results.has(path)) return results.get(path);
  let st = 0;
  try {
    const r = await fetch(base + path, { redirect: 'manual' });
    st = r.status;
    if ([301, 302, 307, 308].includes(st)) {
      const loc = (r.headers.get('location') || '').replace(base, '');
      const r2 = await fetch(base + loc, { redirect: 'manual' });
      st = r2.status === 200 ? 200 : r2.status;
    }
  } catch { st = 'ERR'; }
  results.set(path, st);
  return st;
}

while (queue.length) {
  const path = queue.shift();
  if (seen.has(path)) continue;
  seen.add(path);
  let html = '';
  try { html = await (await fetch(base + path)).text(); } catch { continue; }
  const hrefs = [...html.matchAll(/href="(\/[^"#?]*)"/g)].map((m) => m[1]);
  for (const h of new Set(hrefs)) {
    if (h.startsWith('/_next') || h.startsWith('/images')) continue;
    if (!sources.has(h)) sources.set(h, new Set());
    sources.get(h).add(path);
    if (!seen.has(h) && seen.size < 120) queue.push(h);
  }
}

let broken = 0;
for (const path of [...sources.keys()].sort()) {
  const st = await statusOf(path);
  if (st !== 200) {
    broken++;
    console.log(`BROKEN ${st}  ${path}`);
    console.log(`         linked from: ${[...sources.get(path)].join(', ')}`);
  }
}
console.log(`\ncrawled ${seen.size} pages, checked ${sources.size} unique internal links`);
console.log(broken ? `${broken} BROKEN` : 'all internal links resolve');
process.exit(broken ? 1 : 0);
