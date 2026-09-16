import { CAREER } from '@/consts';

/**
 * Computes the number of full years elapsed since a career date.
 *
 * @param start Year and month (1-12) when the measured period began
 * @returns The number of complete years elapsed since that date
 */
function yearsSince(start: { year: number; month: number }): number {
  const now = new Date();
  let years = now.getFullYear() - start.year;
  const hasReachedAnniversary =
    now.getMonth() + 1 >= start.month;
  if (!hasReachedAnniversary) {
    years -= 1;
  }
  return years;
}

/**
 * Total years of professional experience, computed at build time.
 *
 * @returns The number of years of experience since the first engagement
 */
export function totalYears(): number {
  return yearsSince(CAREER.start);
}

/**
 * Years of Kubernetes experience, computed at build time.
 *
 * @returns The number of years of Kubernetes practice
 */
export function kubernetesYears(): number {
  return yearsSince(CAREER.kubernetesStart);
}

/**
 * Years of freelance activity, computed at build time.
 *
 * @returns The number of years since the first freelance engagement
 */
export function freelanceYears(): number {
  return yearsSince(CAREER.freelanceStart);
}
