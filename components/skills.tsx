import { languages, projects, skillCategories } from "@/lib/portfolio-content";

export function Skills() {
  return (
    <section
      id="skills"
      className="border-t border-border bg-background/75 py-20 md:py-32">
      <div className="mx-auto max-w-4xl px-4 sm:px-6">
        <div className="mb-16">
          <h2 className="mb-4 text-3xl font-bold text-foreground sm:text-4xl md:text-5xl">
            Competences & Expertise
          </h2>
          <p className="text-base text-muted-foreground sm:text-lg">
            Technologies et outils que je maîtrise au quotidien.
          </p>
        </div>

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
              <a
                key={project.title}
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative overflow-hidden rounded-xl border border-border bg-card/90 p-6 transition-all duration-300 hover:border-primary/50 hover:shadow-xl hover:shadow-primary/10">
                <div className="absolute top-0 right-0 -mr-8 -mt-8 w-24 h-24 bg-primary/5 rounded-full blur-2xl group-hover:bg-primary/10 transition-colors" />

                <div className="relative z-10 mb-4 flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                  <h4 className="text-lg font-bold text-foreground transition-colors group-hover:text-primary sm:text-xl">
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

                <div className="relative z-10 flex flex-wrap gap-3">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
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

interface LanguageCardProps {
  label: string;
  level: string;
  progress: string;
}

function LanguageCard({ label, level, progress }: LanguageCardProps) {
  return (
    <div className="rounded-xl border border-border bg-card/90 p-6 transition-shadow hover:shadow-sm hover:shadow-primary/5">
      <h4 className="mb-3 font-semibold text-foreground">{label}</h4>
      <div className="flex items-center gap-3">
        <div className="h-1.5 flex-1 overflow-hidden rounded-full bg-muted">
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
