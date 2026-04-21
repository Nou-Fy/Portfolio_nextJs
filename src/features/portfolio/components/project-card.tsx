import type { ProjectStatus } from "@/features/portfolio/types";
import { Check, Hourglass } from "lucide-react";

type ProjectCardProps = {
  title: string;
  description: string;
  tags: readonly string[];
  link: string;
  status: ProjectStatus;
  image?: string; // ← Ajout de l'image
};

export function ProjectCard({
  title,
  description,
  tags,
  link,
  status,
  image,
}: ProjectCardProps) {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative overflow-hidden rounded-2xl border border-border bg-card/90 p-6 transition-all duration-300 hover:border-primary/50 hover:shadow-2xl hover:shadow-primary/10 flex flex-col h-full">
      {/* Image en haut */}
      {image && (
        <div className="relative mb-5 overflow-hidden rounded-xl bg-muted shrink-0">
          <img
            src={image}
            alt={title}
            className="w-full aspect-video object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
        </div>
      )}

      {/* Contenu textuel */}
      <div className="relative z-10 flex flex-col flex-1">
        <h4 className="text-xl font-bold text-foreground transition-colors group-hover:text-primary mb-3">
          {title}
        </h4>

        <p className="text-sm leading-relaxed text-muted-foreground mb-6 flex-1">
          {description}
        </p>

        {/* Pied de carte : Tags à gauche, Status à droite */}
        <div className="mt-auto pt-4 flex items-end justify-between gap-4">
          <div className="flex flex-wrap gap-2">
            {tags.map((tag) => (
              <span
                key={tag}
                className="rounded bg-muted/70 px-2.5 py-1 text-[10px] font-mono text-muted-foreground">
                #{tag}
              </span>
            ))}
          </div>

          {/* Badge statut intégré au flux (plus de superposition) */}
          <span
            className={`shrink-0 flex items-center justify-center rounded-full border w-8 h-8 transition-colors ${
              status === "Terminé"
                ? "border-emerald-500/30 bg-emerald-500/10 text-emerald-500"
                : "border-amber-500/30 bg-amber-500/10 text-amber-500"
            }`}
            title={status} // Permet d'afficher le texte au survol de la souris
          >
            {status === "Terminé" ? (
              <Check className="h-4 w-4" strokeWidth={3} />
            ) : (
              <Hourglass className="h-4 w-4" strokeWidth={3} />
            )}
          </span>
        </div>
      </div>
    </a>
  );
}
