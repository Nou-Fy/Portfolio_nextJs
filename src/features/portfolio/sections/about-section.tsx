import { aboutHighlights } from "@/features/portfolio/data/portfolio-content";

export function AboutSection() {
  return (
    <section
      id="about"
      className="border-t border-border bg-background/80 py-20 md:py-32">
      <div className="mx-auto max-w-4xl px-4 sm:px-6">
        <div className="grid items-center gap-10 md:grid-cols-2 md:gap-12">
          <div>
            <h2 className="mb-6 text-3xl font-bold text-foreground sm:text-4xl md:text-5xl">
              A propos de moi
            </h2>
            <p className="mb-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
              Jeune homme de 32 ans, dynamique et passionné par le numérique et
              l&apos;énergie. Je m&apos;engage pleinement dans mes projets avec
              sincérité, rigueur et méticulosité.
            </p>
            <p className="mb-6 text-base leading-relaxed text-muted-foreground sm:text-lg">
              J&apos;apprécie le travail en équipe où je peux partager mes idées
              et apprendre des autres. Ces atouts me permettent de créer des
              solutions innovantes et durables.
            </p>
            <div className="flex flex-wrap gap-6">
              <div className="flex flex-col">
                <span className="text-3xl font-bold text-primary">0+</span>
                <span className="text-sm text-muted-foreground">
                  d'années d'expérience
                </span>
              </div>
              <div className="flex flex-col">
                <span className="text-3xl font-bold text-secondary">3+</span>
                <span className="text-sm text-muted-foreground">
                  projet personnels
                </span>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-2xl blur-2xl" />
            <div className="relative rounded-2xl border border-border bg-card/90 p-5 shadow-sm shadow-primary/5 sm:p-8">
              <div className="space-y-4">
                {aboutHighlights.map((highlight) => (
                  <div key={highlight.title} className="flex items-start gap-4">
                    <div
                      className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-lg ${highlight.iconClassName}`}
                    >
                      <span className="text-xl">{highlight.icon}</span>
                    </div>
                    <div className="min-w-0">
                      <h3 className="font-semibold text-foreground">
                        {highlight.title}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        {highlight.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
