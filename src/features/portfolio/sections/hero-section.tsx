import Link from "next/link";
import { Button } from "@/components/ui/button";
import { getSectionStyles } from "@/styles/section-layout";

export function HeroSection() {
  const styles = getSectionStyles();

  return (
    <section className={`relative overflow-hidden ${styles.section}`}>
      {/* 1. Éléments décoratifs de fond (avec le flou) */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-secondary/10 rounded-full blur-[64px] pointer-events-none" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary/10 rounded-full blur-[64px] pointer-events-none" />

      {/* 2. Conteneur de contenu (Z-INDEX 10 pour passer devant le flou) */}
      <div className={`${styles.container} relative z-10`}>
        <div className="space-y-6">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 rounded-full border border-secondary/20 bg-secondary/10 px-4 py-2">
            <span className="h-2 w-2 rounded-full bg-secondary animate-pulse" />
            <span className="text-sm font-medium text-secondary">
              Disponible pour une nouvelle opportunité
            </span>
          </div>

          {/* Titre */}
          <h1 className="text-[clamp(2.4rem,12vw,4.8rem)] font-bold leading-[0.92] tracking-tight text-foreground">
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
              RAKOTOARIVELO
              <br />
              Nantsoinaharimanana
              <br />
              Nomena Tiavina
            </span>
          </h1>

          {/* Description */}
          <p className="max-w-2xl text-lg text-muted-foreground">
            Passionné par la conception de solutions innovantes et durables.
          </p>

          {/* Boutons d'action (Ton code est ici) */}
          <div className="flex flex-wrap gap-4 pt-4">
            <Button
              asChild
              size="lg"
              className="rounded-xl px-8 font-medium shadow-lg shadow-primary/20 transition-transform hover:scale-105 active:scale-95">
              <Link href="#experience">Mes travaux</Link>
            </Button>

            <Button
              asChild
              size="lg"
              variant="outline"
              className="rounded-xl px-8 font-medium border-primary/50 text-foreground hover:bg-primary/5 transition-transform hover:scale-105 active:scale-95">
              <Link href="#contact">Me contacter</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
