/**
 * Client logos shown in the trust strip.
 *
 * Language-neutral: a brand name and an image path are the same in French and in
 * English. This file is the single source for both locales, so the strip cannot
 * list different clients depending on the language of the page.
 */
export const CLIENT_LOGOS = [
  { name: 'Bpifrance', src: '/images/clients/bpifrance.png' },
  { name: 'SNCF', src: '/images/clients/sncf.png' },
  { name: 'Doctolib', src: '/images/clients/doctolib.png' },
  { name: 'Canal+', src: '/images/clients/canalplus.png' },
  { name: 'Yseop', src: '/images/clients/yseop.png' },
  { name: 'Descours & Cabaud', src: '/images/clients/descours_cabaud.png' },
  { name: 'Seiitra', src: '/images/clients/seiitra.png' },
] as const;
