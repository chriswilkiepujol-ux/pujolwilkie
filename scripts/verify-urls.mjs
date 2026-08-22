#!/usr/bin/env node
/**
 * Checks every legacy URL from the WordPress site against a deployment.
 *   node scripts/verify-urls.mjs https://your-preview.vercel.app
 * Run against the preview before cutover, and against production after.
 */
const base = (process.argv[2] || 'http://localhost:3000').replace(/\/$/, '');

// [legacy path, expected outcome] — 'ok' means it must resolve 200 at the same
// path; a string means it must redirect (301/308) to that path.
const cases = [
  ['/', 'ok'],
  ['/about/', 'ok'],
  ['/blog/', 'ok'],
  ['/contact/', 'ok'],
  ['/property-law/', 'ok'],
  ['/spanish-golden-visa/', 'ok'],
  ['/tax-and-accountancy/', 'ok'],
  ['/property-management-services/', 'ok'],
  ['/full-client-service/', 'ok'],
  ['/immigration-and-foreigners-legal-procedures/', 'ok'],
  ['/2021/06/17/example-post-2/', '/blog/spain-golden-visa-guide/'],
  ['/2021/01/06/brexit-side-effects/', '/blog/brexit-spain-residency/'],
  ['/2021/01/06/intro-esther-pujol-wilkie/', '/about/'],
  ['/author/estherwilkie/', '/about/'],
  // new pages
  // new services on new URLs
  ['/buying-property/', 'ok'],
  ['/residency-and-visas/', 'ok'],
  ['/selling-property/', 'ok'],
  ['/gibraltar-and-spain/', 'ok'],
  // spanish
  ['/es/', 'ok'],
  ['/es/derecho-inmobiliario/', 'ok'],
  ['/es/golden-visa-espana/', 'ok'],
  ['/es/compraventa/', 'ok'],
];

let fail = 0;
for (const [path, expect] of cases) {
  let status = 0, location = '';
  try {
    const res = await fetch(base + path, { redirect: 'manual' });
    status = res.status;
    location = (res.headers.get('location') || '').replace(base, '');
  } catch (e) { status = 'ERR'; }

  let pass;
  if (expect === 'ok') pass = status === 200;
  else pass = [301, 308].includes(status) && location.replace(/\?.*$/, '') === expect;

  if (!pass) fail++;
  const mark = pass ? 'PASS' : 'FAIL';
  console.log(`${mark}  ${String(status).padEnd(4)} ${path}${location ? ' -> ' + location : ''}`);
}
console.log(`\n${cases.length - fail}/${cases.length} passed`);
process.exit(fail ? 1 : 0);
