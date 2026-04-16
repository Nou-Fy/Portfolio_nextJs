import Link from "next/link";

import { Button } from "@/components/ui/button";
import { heroTitleLines } from "@/features/portfolio/data/portfolio-content";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-background pt-20 pb-32 md:pt-32 md:pb-48">
      {/* Abstract background elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-secondary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />

      <div className="relative mx-auto max-w-4xl px-4 sm:px-6">
        <div className="space-y-6">
          <div className="inline-flex max-w-full items-center gap-2 rounded-full border border-secondary/20 bg-secondary/10 px-3 py-2 sm:px-4">
            <span className="h-2 w-2 shrink-0 rounded-full bg-secondary animate-pulse" />
            <span className="text-xs font-medium text-secondary sm:text-sm">
              Disponible pour une nouvelle opportunité
            </span>
          </div>

          <h1 className="text-[clamp(2.4rem,12vw,4.8rem)] font-bold leading-[0.92] tracking-tight text-foreground">
            {heroTitleLines.map((line, index) => (
              <span
                key={line}
                className={`block break-words text-transparent bg-clip-text ${
                  index % 2 === 0
                    ? "bg-gradient-to-l from-primary to-secondary"
                    : "bg-gradient-to-r from-primary to-secondary"
                }`}
              >
                {line}
              </span>
            ))}
          </h1>

          <p className="max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg md:text-xl">
            Développeur full-stack et concepteur d'application numérique
            passionné par la conception de solutions innovantes. Travaillant
            dans le développement de logiciel, en ingénierie des données et en
            applications liées aux relations clients.
          </p>

          <div className="flex flex-col gap-4 pt-4 sm:flex-row">
            <Button
              asChild
              size="lg"
              className="w-full rounded-xl px-5 shadow-lg shadow-primary/20 sm:w-auto sm:px-8">
              <Link href="#experience">Voir mes travaux</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="w-full rounded-xl border-primary/40 bg-background/80 px-5 text-primary hover:bg-primary/5 sm:w-auto sm:px-8">
              <Link href="#contact">Me contacter</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
