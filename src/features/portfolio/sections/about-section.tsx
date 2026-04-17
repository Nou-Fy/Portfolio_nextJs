import { aboutHighlights } from "@/features/portfolio/data/portfolio-content";
import { getSectionStyles } from "@/styles/section-layout";

export function AboutSection() {
  const styles = getSectionStyles();

  return (
    <section id="about" className={styles.section}>
      <div className={styles.container}>
        <div className="grid items-center gap-10 md:grid-cols-2">
          <div>
            <h2 className="mb-6 text-3xl font-bold sm:text-5xl">
              À propos de moi
            </h2>
            <p className="mb-4 text-muted-foreground sm:text-lg text-balance">
              Jeune homme de 32 ans, dynamique et passionné par le numérique et
              l&apos;énergie. Je m&apos;engage pleinement dans mes projets avec
              sincérité, rigueur et méticulosité.
            </p>
            <p className="mb-6 text-base leading-relaxed text-muted-foreground sm:text-lg">
              J&apos;apprécie le travail en équipe où je peux partager mes idées
              et apprendre des autres. Ces atouts me permettent de créer des
              solutions innovantes et durables.
            </p>
            <div className="flex gap-6 pt-4">
              <div className="flex flex-col">
                <span className="text-3xl font-bold text-primary">0+</span>
                <span className="text-xs uppercase text-muted-foreground">
                  Expérience
                </span>
              </div>
              <div className="flex flex-col">
                <span className="text-3xl font-bold text-secondary">3+</span>
                <span className="text-xs uppercase text-muted-foreground">
                  Projets Persos
                </span>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/20 to-secondary/20 blur-2xl" />
            <div className="relative rounded-2xl border bg-card/90 p-8">
              <div className="space-y-4">
                {aboutHighlights.map((h) => (
                  <div key={h.title} className="flex gap-4">
                    <div
                      className={`h-12 w-12 shrink-0 flex items-center justify-center rounded-lg ${h.iconClassName}`}>
                      {h.icon}
                    </div>
                    <div>
                      <h3 className="font-semibold">{h.title}</h3>
                      <p className="text-sm text-muted-foreground">
                        {h.description}
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
