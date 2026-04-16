export type NavItem = {
  href: `#${string}`;
  label: string;
};

export type NavHref = NavItem["href"];

export type ProjectStatus = "Terminé" | "En cours";

export type ContactIcon = "mail" | "phone" | "map-pin";
