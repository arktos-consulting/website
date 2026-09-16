import { CAREER } from '@/consts';

/**
 * Calcule le nombre d'années révolues écoulées depuis une date de carrière.
 *
 * @param start Année et mois (1-12) de début de la période mesurée
 * @returns Le nombre d'années complètes écoulées depuis cette date
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
 * Années d'expérience professionnelle totale, calculées à l'exécution du build.
 *
 * @returns Le nombre d'années d'expérience depuis la première mission
 */
export function totalYears(): number {
  return yearsSince(CAREER.start);
}

/**
 * Années d'expérience Kubernetes, calculées à l'exécution du build.
 *
 * @returns Le nombre d'années de pratique Kubernetes
 */
export function kubernetesYears(): number {
  return yearsSince(CAREER.kubernetesStart);
}

/**
 * Années d'activité en indépendant, calculées à l'exécution du build.
 *
 * @returns Le nombre d'années depuis la première mission freelance
 */
export function freelanceYears(): number {
  return yearsSince(CAREER.freelanceStart);
}
