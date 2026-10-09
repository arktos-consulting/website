/**
 * Case study URL segments: the single place a slug is written.
 *
 * The French and English segments are translated rather than shared, so the pair
 * cannot be inferred from a client name. Both the content modules and the shared
 * translation table read this list, which is what keeps a page's URL and its
 * `hreflang` alternate from drifting apart.
 *
 * This module deliberately imports nothing: the Astro configuration loads it
 * outside the Vite resolver, where path aliases are unavailable.
 */

/** A case study's URL segment and client name in each language. */
export interface CaseSlugPair {
  /** Stable key, used to attach content to a slug. */
  id: string;
  /** Client name, shown on the references page and in breadcrumbs. */
  name: Record<'fr' | 'en', string>;
  /** French URL segment, without slashes. */
  fr: string;
  /** English URL segment, without slashes. */
  en: string;
}

/**
 * Every published case study, in display order.
 *
 * `id` is the key the content modules attach to, so the name and the two URL
 * segments of one engagement stay written together.
 */
export const CASE_SLUGS: readonly CaseSlugPair[] = [
  { id: 'hartza-capital', name: { fr: 'Hartza Capital', en: 'Hartza Capital' }, fr: 'plateforme-trading-algorithmique-hartza-capital', en: 'algorithmic-trading-platform-hartza-capital' },
  { id: 'bpifrance', name: { fr: 'Bpifrance', en: 'Bpifrance' }, fr: 'tracabilite-changements-kubernetes-bpifrance', en: 'kubernetes-change-traceability-bpifrance' },
  { id: 'yseop', name: { fr: 'Yseop', en: 'Yseop' }, fr: 'industrialisation-mlops-yseop', en: 'mlops-industrialisation-yseop' },
  { id: 'sncf', name: { fr: 'SNCF', en: 'SNCF' }, fr: 'cloud-prive-services-manages-sncf', en: 'private-cloud-managed-services-sncf' },
  { id: 'seiitra', name: { fr: 'Seiitra', en: 'Seiitra' }, fr: 'securisation-azure-kubernetes-seiitra', en: 'securing-azure-kubernetes-seiitra' },
  { id: 'descours-cabaud', name: { fr: 'Descours & Cabaud', en: 'Descours & Cabaud' }, fr: 'bascule-vente-en-ligne-descours-cabaud', en: 'moving-sales-online-descours-cabaud' },
  { id: 'doctolib', name: { fr: 'Doctolib', en: 'Doctolib' }, fr: 'migration-bare-metal-kubernetes-doctolib', en: 'bare-metal-to-kubernetes-doctolib' },
  { id: 'canal-plus', name: { fr: 'Canal+', en: 'Canal+' }, fr: 'pipelines-ci-cd-kubernetes-canal-plus', en: 'cicd-pipelines-kubernetes-canal-plus' },
  { id: 'claranet', name: { fr: 'Claranet', en: 'Claranet' }, fr: 'infrastructure-cloud-aws-gcp-claranet', en: 'cloud-infrastructure-aws-gcp-claranet' },
];

/**
 * Returns the URL segment of a case study in one language.
 *
 * @param id Case study key
 * @param locale Language the segment is written in
 * @returns The URL segment, without slashes
 */
export function caseSlug(id: string, locale: 'fr' | 'en'): string {
  const pair = CASE_SLUGS.find((entry) => entry.id === id);
  if (!pair) {
    throw new Error(`Unknown case study: ${id}`);
  }
  return pair[locale];
}
