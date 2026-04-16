import type {
  ContactIcon,
  NavItem,
  ProjectStatus,
} from "@/features/portfolio/types";

export const navItems: readonly NavItem[] = [
  { href: "#about", label: "A propos" },
  { href: "#experience", label: "Experiences" },
  { href: "#skills", label: "Competences" },
  { href: "#education", label: "Formation" },
  { href: "#contact", label: "Contact" },
] as const;

export const heroTitleLines = [
  "RAKOTOARIVELO",
  "Nantsoina",
  "Nomena Tiavina",
] as const;

export const aboutHighlights = [
  {
    icon: "💻",
    iconClassName: "bg-secondary/20 text-secondary",
    title: "Développement Full Stack",
    description: "Création d'applications web et mobiles",
  },
  {
    icon: "⚡",
    iconClassName: "bg-primary/20 text-primary",
    title: "Concepteur d'applications",
    description: "Analyse et rédaction de cahier des charges",
  },
  {
    icon: "🌱",
    iconClassName: "bg-accent/20 text-accent",
    title: "Énergie renouvelable",
    description: "Solutions pour un avenir durable",
  },
  {
    icon: "🐔",
    iconClassName: "bg-primary/20 text-primary",
    title: "Élevage",
    description: "Contribution à la nature",
  },
] as const;

export const experiences = [
  {
    id: 1,
    title: "Dessinateur Spécialisé Préparateur",
    company: "FUTURMAP data",
    location: "Antananarivo, Madagascar",
    period: "13/05/2024 - 01/07/2024",
    tasks: [
      "Préparation des données brutes pour traitement en production",
      "Préparation des photos : trajectoires, décompression et coordonnées",
      "Division des blocs (linéaire, ortho, photo, nuage de points)",
      "Création des fichiers contours pour les clôtures",
    ],
  },
  {
    id: 2,
    title: "Stagiaire Concepteur Développeur",
    company: "INCLUSIV ACADEMY",
    location: "Antananarivo, Madagascar",
    period: "25/10/2023 - 08/05/2024",
    tasks: [
      "Product Owner et Scrum Master",
      "Développement Full Stack (Front & Back)",
      "Rédaction du cahier des charges",
    ],
  },
  {
    id: 3,
    title: "Dessinateur Spécialisé Préparateur",
    company: "FUTURMAP data",
    location: "Antananarivo, Madagascar",
    period: "11/02/2023 - 24/10/2023",
    tasks: [
      "Préparation des données brutes pour traitement en production",
      "Préparation des photos : trajectoires, décompression et coordonnées",
      "Division des blocs (linéaire, ortho, photo, nuage de points)",
      "Création des fichiers contours pour les clôtures",
    ],
  },
  {
    id: 4,
    title: "Dessinateur Spécialisé LIDAR",
    company: "FUTURMAP data",
    location: "Antananarivo, Madagascar",
    period: "17/10/2022 - 10/02/2023",
    tasks: [
      "Classification des nuages selon leur classe",
      "Filtrage du sol",
      "Numérisation des routes circulables",
    ],
  },
] as const;

export const skillCategories = [
  {
    name: "Languages",
    skills: ["Java", "C#", "Python", "JavaScript", "TypeScript"],
    color: "bg-primary/10 text-primary border-primary/20",
  },
  {
    name: "Frameworks",
    skills: ["SpringBoot", "ReactJS", "Django", "Next.js", "Node.js"],
    color: "bg-secondary/10 text-secondary border-secondary/20",
  },
  {
    name: "Tools & Software",
    skills: [
      "VS Code (éditeur principal)",
      "Visual Studio",
      "VisualParadigm (UML)",
      "IntelliJ IDEA",
      "NetBeans",
      "Docker (conteneurisation)",
      "Git & GitHub (versioning)",
      "Postman (API testing)",
      "Ubuntu Linux (environnement dev)",
      "PostgreSQL (via Prisma ORM)",
      "Autocad (CAO)",
      "QGIS (SIG & cartographie)",
      "GlobalMapper",
    ],
    color: "bg-accent/10 text-accent border-accent/20",
  },
  {
    name: "Other Specializations",
    skills: [
      "Développement Full Stack",
      "Méthodologie Scrum",
      "Implémentation des pratiques Agile",
      "Trello (gestion de projet)",
      "Rédaction d'un cahier des charges",
    ],
    color: "bg-muted/20 text-foreground border-muted",
  },
] as const;

export const projects: readonly {
  title: string;
  description: string;
  tags: readonly string[];
  link: string;
  status: ProjectStatus;
  image?: string;
}[] = [
  {
    title: "Plateforme de discussion en ligne",
    description:
      "Une plateforme de blog et forum pour éleveurs utilisant Next.js, avec articles sur l'optimisation avicole et échanges communautaires sur nutrition, santé et gestion de poulaillers adaptés aux réalités malgaches.",
    tags: ["NextJs", "PostgreSQL", "TypeScript"],
    link: "https://github.com/Nou-Fy/Todo_Dev.git",
    status: "Terminé",
    image: "/uploads/noufy-blog.png",
  },
  {
    title: "Outils de gestion des tâches",
    description:
      "Développement d'une architecture microservices pour la gestion de stocks en temps réel.",
    tags: ["NextJs", "PostgreSQL", "TypeScript"],
    link: "https://github.com/Nou-Fy/Todo_Dev.git",
    status: "Terminé",
    image: "/uploads/todo-dev.png",
  },
];

export const languages = [
  { label: "Malagasy", level: "Native", progress: "w-full" },
  { label: "Français", level: "Courant", progress: "w-5/6" },
  { label: "Anglais", level: "Intermédiaire", progress: "w-4/5" },
] as const;

export const educationItems = [
  {
    id: 1,
    degree: "Master en MIER (Master d'Ingénierie en Énergie Renouvelable)",
    school: "Université d'Antananarivo",
    department: "Département Physique et Application",
    period: "2017 - 2019",
    color: "from-primary",
  },
  {
    id: 2,
    degree: "Licence en LIER (Licence d'Ingénierie en Énergie Renouvelable)",
    school: "Université d'Antananarivo",
    department: "Département Physique et Application",
    period: "2015 - 2017",
    color: "from-secondary",
  },
  {
    id: 3,
    degree: "CDAN - Concepteur Développeur d'Application Numérique",
    school: "Formation Professionnelle",
    department: "Digital Development",
    period: "2014",
    color: "from-accent",
  },
  {
    id: 4,
    degree: "BACC Lauréat série D",
    school: "Lycée", // Simplifié "Secondary Education" par un terme plus standard
    department: "Série Scientifique",
    period: "Obtenu",
    color: "from-muted",
  },
] as const;

export const contacts = [
  {
    icon: "mail" as ContactIcon,
    label: "Email",
    value: "rakotonantsoina@gmail.com",
    href: "https://mail.google.com/mail/?view=cm&to=rakotonantsoina@gmail.com",
  },
  {
    icon: "phone" as ContactIcon,
    label: "Téléphone",
    value: "+261 34 84 924 925",
    href: "tel:+2613484924925",
  },
  {
    icon: "map-pin" as ContactIcon,
    label: "Adresse",
    value: "Vontovorona, Tana 102, Madagascar",
    href: "#",
  },
] as const;
