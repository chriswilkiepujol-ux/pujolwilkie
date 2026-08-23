export const site = {
  name: 'Esther Pujol Wilkie & Associates',
  shortName: 'Esther Pujol Wilkie',
  legalName: 'Esther Pujol Wilkie & Associates',
  phone: '+34 620 86 80 12',
  phoneHref: '+34620868012',
  street: 'Guadalmarina 1, Portal 3, 2E',
  district: 'La Marina de Sotogrande',
  city: 'San Roque',
  region: 'Cádiz',
  postal: '11310',
  country: 'ES',
  lat: 36.2882239,
  lng: -5.2831267,
  placeId: 'ChIJcahhiqLFDA0RscjWoAJZcRQ',
  reviewCount: 53,
  ratingValue: '5.0',
  gbpUrl: 'https://www.google.com/maps/place/?q=place_id:ChIJcahhiqLFDA0RscjWoAJZcRQ',
  reviewUrl: 'https://search.google.com/local/writereview?placeid=ChIJcahhiqLFDA0RscjWoAJZcRQ',
  agency: { name: 'ImpulsoMedia.es', url: 'https://impulsomedia.es' },
  // Professional registration, verified from the colegiada card (2 July 1990).
  // Registered name differs from the trading name: Spanish two-surname convention.
  colegio: 'Ilustre Colegio Provincial de Abogados de Cádiz',
  colegioShort: 'ICA Cádiz',
  colegioUrl: 'https://icadiz.org',
  colegiadoNumber: '1432',
  colegiadaName: 'Esther Pujol Andrés',
  admittedYear: 1990,
  admittedDate: '1990-07-02',
  status: 'Abogada ejerciente',
  // Official national register, maintained under art. 68.1 EGAE
  censoUrl: 'https://censo.abogacia.es/ecensofront/html/homeColegiados.iface',
  // Continuing professional development. Modest as a credential, but it
  // supports the remote-completion proposition for overseas clients.
  cpd: [{
    name: 'Diploma en Competencias Digitales Profesionales',
    issuer: 'Unión Profesional y Consejo General de la Abogacía Española (CGAE)',
    hours: 150,
    completed: '2026-06',
    completedLabel: 'June 2026',
  }],
  // Outstanding: her DNI appears on the CPD certificate but must not be
  // published without her express confirmation. Do not fill from a photo.
  nif: null,
};
export const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://pujolwilkie.com';
export default site;
