/**
 * Configuration unique pour le design des sections du portfolio.
 * Permet de garantir que les marges, paddings et bordures sont identiques partout.
 */
export const SECTION_LAYOUT = {
  // Le fond de la section (occupant toute la largeur)
  section: "bg-background w-full",

  // Le conteneur interne (limité en largeur, avec la bordure et l'espacement)
  container: "mx-auto max-w-4xl px-6 py-24 border-t border-border/50",
};

/**
 * Fonction utilitaire pour appliquer ces styles facilement
 * @returns Un objet contenant les classes concaténées
 */
export function getSectionStyles() {
  return SECTION_LAYOUT;
}
