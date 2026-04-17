import { Button } from "@/components/ui/button";
import { LanguageCard } from "@/features/portfolio/components/language-card";
import { ProjectCard } from "@/features/portfolio/components/project-card";
import { SectionHeading } from "@/features/portfolio/components/section-heading";
import {
  languages,
  projects,
  skillCategories,
} from "@/features/portfolio/data/portfolio-content";
import { getSectionStyles } from "@/styles/section-layout";
import Link from "next/link"; // Next.js Link
import { ArrowRight, ExternalLink, GithubIcon } from "lucide-react";

export function SkillsSection() {
  const styles = getSectionStyles();

  return (
    <section id="skills" className={styles.section}>
      <div className={styles.container}>
        <SectionHeading
          title="Compétences & Expertise"
          description="Technologies et outils maîtrisés."
        />
        {/* ... grid skillCategories ... */}

        {/* Séparateur interne pour les Projets */}
        <div id="projects" className="pt-20 border-t border-border/30">
          <div className="mb-12">
            <h2 className="text-3xl font-bold mb-3">Mes Projets</h2>
            <p className="text-muted-foreground">
              Quelques réalisations auxquelles j'ai contribué.
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-2">
            {projects.map((p) => (
              <ProjectCard key={p.title} {...p} />
            ))}
          </div>

          {/* ✅ BUTTON CORRIGÉ : tout dans <Button asChild> */}
          <div className="mt-12 flex justify-center">
            <Button
              asChild
              variant="outline"
              className="gap-2 group transition-all duration-300 border-secondary text-secondary
              -foreground hover:scale-150 hover:-translate-y-1 hover:bg-primary hover:text-primary-foreground hover:shadow-2xl hover:shadow-primary/25 hover:border-primary/50">
              <Link
                href="https://github.com/nou-fy"
                target="_blank"
                rel="noopener noreferrer">
                <GithubIcon className="h-4 w-4 group-hover:rotate-12 transition-transform duration-300 group-hover:text-primary-foreground" />
                Voir tous les projets
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform duration-300 ml-1 group-hover:text-primary-foreground" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
