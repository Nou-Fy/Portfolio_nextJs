import type { ProjectStatus } from "@/features/portfolio/types";

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
        <div className="relative mb-5 overflow-hidden rounded-xl bg-muted">
          <img
            src={image}
            alt={title}
            className="w-full aspect-video object-cover transition-transform duration-500 group-hover:scale-105"
          />
          {/* Overlay subtil au hover */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
        </div>
      )}

      {/* Badge statut */}
      <div className="absolute right-6 top-6">
        <span
          className={`rounded-full border px-3 py-1 text-[10px] font-bold uppercase tracking-wider ${
            status === "Terminé"
              ? "border-emerald-500/30 bg-emerald-500/10 text-emerald-500"
              : "border-amber-500/30 bg-amber-500/10 text-amber-500"
          }`}>
          {status}
        </span>
      </div>

      <div className="relative z-10 flex flex-col flex-1">
        <h4 className="text-xl font-bold text-foreground transition-colors group-hover:text-primary mb-3">
          {title}
        </h4>

        <p className="text-sm leading-relaxed text-muted-foreground mb-6 flex-1">
          {description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span
              key={tag}
              className="rounded bg-muted/70 px-2.5 py-1 text-[10px] font-mono text-muted-foreground">
              #{tag}
            </span>
          ))}
        </div>
      </div>
    </a>
  );
}
