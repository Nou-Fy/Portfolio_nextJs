"use client";

import Link from "next/link";

import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-background pt-20 pb-32 md:pt-32 md:pb-48">
      {/* Abstract background elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-secondary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />

      <div className="relative max-w-4xl mx-auto px-6">
        <div className="space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-secondary/10 rounded-full border border-secondary/20">
            <span className="w-2 h-2 rounded-full bg-secondary animate-pulse" />
            <span className="text-sm font-medium text-secondary">
              Disponible pour une nouvelle opportunité
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold text-foreground leading-tight">
            <span className="text-transparent bg-clip-text bg-gradient-to-l from-primary to-secondary">
              RAKOTOARIVELO
            </span>
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
              Nantsoina
            </span>
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-l from-primary to-secondary">
              Nomena Tiavina
            </span>
          </h1>

          <p className="text-xl text-muted-foreground max-w-2xl leading-relaxed">
            Développeur full-stack et concepteur d'application numérique
            passionné par la conception de solutions innovantes. Travaillant
            dans le développement de logiciel, en ingénierie des données et en
            applications liées aux relations clients.
          </p>

          <div className="flex flex-col gap-4 pt-4 sm:flex-row">
            <Button
              asChild
              size="lg"
              className="w-full rounded-xl px-8 shadow-lg shadow-primary/20 sm:w-auto">
              <Link href="#experience">Voir mes travaux</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="w-full rounded-xl border-primary/40 bg-background/80 px-8 text-primary hover:bg-primary/5 sm:w-auto">
              <Link href="#contact">Me contacter</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
