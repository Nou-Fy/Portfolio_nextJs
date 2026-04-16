"use client";

export function About() {
  return (
    <section
      id="about"
      className="border-t border-border bg-background/80 py-20 md:py-32">
      <div className="max-w-4xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              A propos de moi
            </h2>
            <p className="text-lg text-muted-foreground mb-4 leading-relaxed">
              Jeune homme de 32 ans, dynamique et passionné par le numérique et
              l&apos;énergie. Je m&apos;engage pleinement dans mes projets avec
              sincérité, rigueur et méticulosité.
            </p>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              J&apos;apprécie le travail en équipe où je peux partager mes idées
              et apprendre des autres. Ces atouts me permettent de créer des
              solutions innovantes et durables.
            </p>
            <div className="flex gap-6">
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
            <div className="relative rounded-2xl border border-border bg-card/90 p-8 shadow-sm shadow-primary/5">
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-secondary/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-secondary text-xl">💻</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">
                      Developpement Full Stack
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      Création d&apos;applications web et mobiles
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-primary text-xl">⚡</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">
                      Concepteur d&apos;application
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      Analyse & Rédaction de cahier de charge{" "}
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-accent text-xl">🌱</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">
                      Energie Renouvelable
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      Solutions pour un avenir durable
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-primary text-xl">🐔</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">Elevage</h3>
                    <p className="text-sm text-muted-foreground">
                      Contribution à la Nature
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
