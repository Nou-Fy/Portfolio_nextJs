import { LanguageCard } from "@/features/portfolio/components/language-card";
import { ProjectCard } from "@/features/portfolio/components/project-card";
import { SectionHeading } from "@/features/portfolio/components/section-heading";
import {
  languages,
  projects,
  skillCategories,
} from "@/features/portfolio/data/portfolio-content";

export function SkillsSection() {
  return (
    <section
      id="skills"
      className="border-t border-border bg-background/75 py-20 md:py-32">
      <div className="mx-auto max-w-4xl px-4 sm:px-6">
        <SectionHeading
          title="Competences & Expertise"
          description="Technologies et outils que je maîtrise au quotidien."
        />

        <div className="mb-20 grid gap-8 md:grid-cols-2">
          {skillCategories.map((category) => (
            <div key={category.name} className="group">
              <h3 className="mb-4 flex items-center gap-2 text-xl font-semibold text-foreground">
                <span className="h-2 w-2 rounded-full bg-gradient-to-r from-primary to-secondary" />
                {category.name}
              </h3>
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className={`max-w-full cursor-default rounded-lg border px-4 py-2 text-sm font-medium whitespace-normal break-words transition-all duration-300 hover:scale-[1.02] hover:shadow-md sm:text-base ${category.color}`}>
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 pt-12 border-t border-border">
          <div className="mb-10">
            <h3 className="mb-2 text-2xl font-bold text-foreground sm:text-3xl">
              Projets & Realisations
            </h3>
            <p className="text-muted-foreground">
              Aperçu de mes travaux récents sur GitHub.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {projects.map((project) => (
              <ProjectCard
                key={project.title}
                title={project.title}
                description={project.description}
                tags={project.tags}
                link={project.link}
                status={project.status}
              />
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

        <div className="mt-20 pt-12 border-t border-border">
          <h3 className="mb-8 flex items-center gap-2 text-xl font-semibold text-foreground">
            <span className="h-2 w-2 rounded-full bg-gradient-to-r from-secondary to-accent" />
            Langues
          </h3>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
            {languages.map((language) => (
              <LanguageCard key={language.label} {...language} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
