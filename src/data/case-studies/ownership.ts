/**
 * Case studies that are not client engagements.
 *
 * Hartza Capital is the parent company: it holds Arktos Consulting's capital and
 * is not a client of it. The case tells what was built for that platform, which
 * has to read as a technical proof rather than as a client reference, so every
 * list that shows a case also states under what title it was carried out.
 */

/** Key of the engagement carried out for the parent company. */
export const PARENT_COMPANY_STUDY_ID = "hartza-capital"

/**
 * Whether a case study is an engagement carried out for the parent company.
 *
 * @param studyId Stable key of the case study
 * @returns True when the engagement was carried out for the parent company
 */
export function isParentCompanyStudy(studyId: string): boolean {
  return studyId === PARENT_COMPANY_STUDY_ID
}
