// Page pairs across locales. Used for the language switcher and for hreflang,
// so both always agree. Add a pair here when adding a translated page.
export const PAIRS = [
  ['/', '/es/'],
  ['/property-law/', '/es/derecho-inmobiliario/'],
  ['/spanish-golden-visa/', '/es/golden-visa-espana/'],
  ['/tax-and-accountancy/', '/es/fiscalidad/'],
  ['/immigration-and-foreigners-legal-procedures/', '/es/tramites-de-extranjeria/'],
  ['/property-management-services/', '/es/gestion-de-propiedades/'],
  ['/full-client-service/', '/es/servicio-integral/'],
  ['/buying-property/', '/es/compraventa/'],
  ['/selling-property/', '/es/venta-de-propiedades/'],
  ['/residency-and-visas/', '/es/residencia-y-visados/'],
  ['/gibraltar-and-spain/', '/es/gibraltar-y-espana/'],
  ['/about/', '/es/sobre-esther/'],
  ['/contact/', '/es/contacto/'],
  ['/blog/', '/es/articulos/'],
  ['/blog/spain-golden-visa-guide/', '/es/articulos/guia-golden-visa-espana/'],
  ['/blog/contrato-de-arras/', '/es/articulos/contrato-de-arras/'],
  ['/blog/non-resident-tax/', '/es/articulos/impuestos-no-residentes/'],
  ['/blog/agents-recommended-lawyer/', '/es/articulos/abogado-recomendado-por-la-agencia/'],
  ['/aviso-legal/', '/es/aviso-legal/'],
  ['/politica-de-privacidad/', '/es/politica-de-privacidad/'],
  ['/politica-de-cookies/', '/es/politica-de-cookies/'],
];

const EN_TO_ES = new Map(PAIRS);
const ES_TO_EN = new Map(PAIRS.map(([en, es]) => [es, en]));

const norm = (p) => (p.endsWith('/') ? p : p + '/');

/** The equivalent page in the other language, or that language's home. */
export function altPath(pathname) {
  const p = norm(pathname || '/');
  if (ES_TO_EN.has(p)) return ES_TO_EN.get(p);
  if (EN_TO_ES.has(p)) return EN_TO_ES.get(p);
  return p.startsWith('/es') ? '/' : '/es/';
}

/** hreflang set for a given page, so each points at its own translation. */
export function languagesFor(pathname) {
  const p = norm(pathname || '/');
  const isEs = p.startsWith('/es');
  const en = isEs ? ES_TO_EN.get(p) || '/' : p;
  const es = isEs ? p : EN_TO_ES.get(p) || '/es/';
  return { 'en-GB': en, 'es-ES': es, 'x-default': en };
}
