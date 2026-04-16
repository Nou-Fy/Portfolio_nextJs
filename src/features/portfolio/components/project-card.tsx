import type { ProjectStatus } from "@/features/portfolio/types";

type ProjectCardProps = {
  title: string;
  description: string;
  tags: readonly string[];
  link: string;
  status: ProjectStatus;
};

export function ProjectCard({
  title,
  description,
  tags,
  link,
  status,
}: ProjectCardProps) {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative overflow-hidden rounded-xl border border-border bg-card/90 p-6 transition-all duration-300 hover:border-primary/50 hover:shadow-xl hover:shadow-primary/10">
      <div className="absolute -right-8 -top-8 h-24 w-24 rounded-full bg-primary/5 blur-2xl transition-colors group-hover:bg-primary/10" />

      <div className="relative z-10 mb-4 flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
        <h4 className="text-lg font-bold text-foreground transition-colors group-hover:text-primary sm:text-xl">
          {title}
        </h4>
        <span
          className={`rounded-full border px-2 py-1 text-[10px] font-bold uppercase tracking-wider ${
            status === "Terminé"
              ? "border-emerald-500/20 bg-emerald-500/10 text-emerald-500"
              : "border-amber-500/20 bg-amber-500/10 text-amber-500"
          }`}>
          {status}
        </span>
      </div>

      <p className="relative z-10 mb-6 text-sm leading-relaxed text-muted-foreground">
        {description}
      </p>

      <div className="relative z-10 flex flex-wrap gap-3">
        {tags.map((tag) => (
          <span
            key={tag}
            className="rounded bg-muted/50 px-2 py-1 text-[10px] font-mono text-muted-foreground">
            #{tag}
          </span>
        ))}
      </div>
    </a>
  );
}
