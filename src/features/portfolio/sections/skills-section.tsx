import { Button } from "@/components/ui/button";
import { SectionHeading } from "@/features/portfolio/components/section-heading";
import { ProjectCard } from "@/features/portfolio/components/project-card";
import {
  projects,
  skillCategories,
} from "@/features/portfolio/data/portfolio-content";
import { getSectionStyles } from "@/styles/section-layout";
import Link from "next/link";
import { ArrowRight, GithubIcon, CheckCircle2 } from "lucide-react";

export function SkillsSection() {
  const styles = getSectionStyles();

  return (
    <section id="skills" className={styles.section}>
      <div className={styles.container}>
        <SectionHeading
          title="Compétences & Expertise"
          description="Technologies et outils que j'utilise pour donner vie à vos projets."
        />

        {/* Grille des catégories de compétences */}
        <div className="grid gap-12 md:grid-cols-2 mb-24">
          {skillCategories.map((category) => (
            <div
              key={category.name}
              /* On garde la couleur de la catégorie ici pour que "text-current" fonctionne plus bas */
              className={`group transition-all duration-500 ${category.color} bg-transparent border-none`}>
              {/* En-tête de catégorie */}
              <div className="flex items-center justify-between mb-6">
                {/* On remplace text-foreground par text-current pour hériter de la couleur de la catégorie */}
                <h3 className="font-bold text-2xl tracking-tight flex items-center gap-3 text-current">
                  {/* bg-current pour que la puce soit aussi de la même couleur */}
                  <span className="w-2.5 h-2.5 rounded-full bg-current" />
                  {category.name}
                </h3>

                {/* text-current ici aussi, avec une opacité réduite pour garder de la hiérarchie */}
                <span className="text-xs uppercase tracking-widest font-bold text-current opacity-60">
                  {category.skills.length} skills
                </span>
              </div>

              {/* Conteneur des Skills */}
              <div className="flex flex-wrap gap-2.5">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-4 py-2 rounded-xl bg-white/10 dark:bg-white/5 border border-current/20 
                       text-sm font-semibold backdrop-blur-sm transition-all duration-300
                       /* HOVER : Fond blanc forcé, texte utilise la couleur parente */
                       hover:bg-white hover:!text-current hover:border-white hover:scale-105 
                       hover:shadow-lg dark:hover:bg-white">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Section Projets */}
        <div id="projects" className="pt-20 border-t border-border/30">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
            <div>
              <h2 className="text-3xl font-bold mb-3">Mes Projets</h2>
              <p className="text-muted-foreground max-w-2xl">
                Une sélection de mes travaux récents, allant du développement
                full-stack aux solutions d'ingénierie.
              </p>
            </div>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            {projects.map((p) => (
              <ProjectCard key={p.title} {...p} />
            ))}
          </div>

          <div className="mt-16 flex justify-center">
            <Button
              asChild
              variant="secondary"
              size="lg"
              className="gap-2 group transition-all text-white duration-500 rounded-full px-8 shadow-md
               hover:bg-primary hover:text-primary-foreground hover:scale-[1.25] hover:shadow-2xl">
              <Link
                href="https://github.com/Nou-Fy"
                target="_blank"
                rel="noopener noreferrer">
                <GithubIcon className="h-5 w-5 group-hover:rotate-12 transition-transform duration-300" />
                Découvrir plus sur GitHub
                <ArrowRight className="h-4 w-4 group-hover:translate-x-2 transition-transform duration-300 ml-1" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
