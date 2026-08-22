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
  // TODO before launch: legally required on the aviso legal (LSSI-CE)
  colegio: null,
  colegiadoNumber: null,
  nif: null,
};
export const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://pujolwilkie.com';
export default site;
