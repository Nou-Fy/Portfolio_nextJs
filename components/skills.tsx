"use client";

import React from "react";

const skillCategories = [
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
      "Rédaction d'un cahier de charge",
    ],
    color: "bg-muted/20 text-foreground border-muted",
  },
];

const projects = [
  {
    title: "Plateforme de discusion en ligne",
    description:
      "Une plateforme de blog et forum pour éleveurs utilisant React et outils comme Next.js, avec articles sur l'optimisation avicole et échanges communautaires sur nutrition, santé et gestion de poulaillers adaptés aux réalités malgaches.",
    tags: ["NextJs", "PostegreSQL", "TypeScript"],
    link: "https://github.com/Nou-Fy/Todo_Dev.git",
    status: "Terminé",
  },
  {
    title: "Outils de gestion des tâches",
    description:
      "Développement d’une architecture microservices pour la gestion de stocks en temps réel.",
    tags: ["NextJs", "PostegreSQL", "TypeScript"],
    link: "https://github.com/Nou-Fy/Todo_Dev.git",
    status: "Terminé",
  },
];

export function Skills() {
  return (
    <section
      id="skills"
      className="border-t border-border bg-background/75 py-20 md:py-32">
      <div className="max-w-4xl mx-auto px-6">
        {/* En-tête de section */}
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Competences & Expertise
          </h2>
          <p className="text-lg text-muted-foreground">
            Technologies et outils que je maîtrise au quotidien.
          </p>
        </div>

        {/* Grille des compétences techniques */}
        <div className="grid md:grid-cols-2 gap-8 mb-20">
          {skillCategories.map((category, idx) => (
            <div key={idx} className="group">
              <h3 className="text-xl font-semibold text-foreground mb-4 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-gradient-to-r from-primary to-secondary" />
                {category.name}
              </h3>
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill, sidx) => (
                  <span
                    key={sidx}
                    className={`cursor-default rounded-lg border px-4 py-2 font-medium transition-all duration-300 hover:scale-105 hover:shadow-md ${category.color}`}>
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* NOUVELLE SECTION: Projets GitHub */}
        <div className="mt-20 pt-12 border-t border-border">
          <div className="mb-10">
            <h3 className="text-3xl font-bold text-foreground mb-2">
              Projets & Realisations
            </h3>
            <p className="text-muted-foreground">
              Aperçu de mes travaux récents sur GitHub.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {projects.map((project, idx) => (
              <a
                key={idx}
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative overflow-hidden rounded-xl border border-border bg-card/90 p-6 transition-all duration-300 hover:border-primary/50 hover:shadow-xl hover:shadow-primary/10">
                {/* Décoration en arrière-plan au survol */}
                <div className="absolute top-0 right-0 -mr-8 -mt-8 w-24 h-24 bg-primary/5 rounded-full blur-2xl group-hover:bg-primary/10 transition-colors" />

                <div className="flex justify-between items-start mb-4 relative z-10">
                  <h4 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                    {project.title}
                  </h4>
                  <span
                    className={`text-[10px] px-2 py-1 rounded-full border uppercase font-bold tracking-wider ${
                      project.status === "Terminé"
                        ? "bg-emerald-500/10 text-emerald-500 border-emerald-500/20"
                        : "bg-amber-500/10 text-amber-500 border-amber-500/20"
                    }`}>
                    {project.status}
                  </span>
                </div>

                <p className="text-muted-foreground mb-6 text-sm leading-relaxed relative z-10">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-3 relative z-10">
                  {project.tags.map((tag, tidx) => (
                    <span
                      key={tidx}
                      className="rounded bg-muted/50 px-2 py-1 text-[10px] font-mono text-muted-foreground">
                      #{tag}
                    </span>
                  ))}
                </div>
              </a>
            ))}
          </div>

          <div className="mt-8 text-center">
            <a
              href="https://github.com/nou-fy/"
              className="text-sm font-medium text-primary hover:text-primary/80 transition-colors flex items-center justify-center gap-1">
              Voir plus sur GitHub →
            </a>
          </div>
        </div>

        {/* Section Langues parlées */}
        <div className="mt-20 pt-12 border-t border-border">
          <h3 className="text-xl font-semibold text-foreground mb-8 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-gradient-to-r from-secondary to-accent" />
            Langues
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <LanguageCard label="Malagasy" level="Native" progress="w-full" />
            <LanguageCard label="French" level="Fluent" progress="w-5/6" />
            <LanguageCard label="English" level="Good" progress="w-4/5" />
          </div>
        </div>
      </div>
    </section>
  );
}

// Petit sous-composant pour éviter la répétition dans les langues
// 1. Définissez la structure des données attendues
interface LanguageCardProps {
  label: string;
  level: string;
  progress: string; // ex: "w-full", "w-4/5", etc.
}

// 2. Appliquez le type aux arguments de la fonction
function LanguageCard({ label, level, progress }: LanguageCardProps) {
  return (
    <div className="rounded-xl border border-border bg-card/90 p-6 transition-shadow hover:shadow-sm hover:shadow-primary/5">
      <h4 className="font-semibold text-foreground mb-3">{label}</h4>
      <div className="flex items-center gap-3">
        <div className="flex-1 h-1.5 bg-muted rounded-full overflow-hidden">
          <div
            className={`h-full ${progress} bg-gradient-to-r from-primary to-secondary`}
          />
        </div>
        <span className="text-xs font-medium text-muted-foreground whitespace-nowrap">
          {level}
        </span>
      </div>
    </div>
  );
}
