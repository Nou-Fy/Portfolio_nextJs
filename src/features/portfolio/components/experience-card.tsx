type ExperienceCardProps = {
  title: string;
  company: string;
  location: string;
  period: string;
  tasks: readonly string[];
};

export function ExperienceCard({
  title,
  company,
  location,
  period,
  tasks,
}: ExperienceCardProps) {
  return (
    <div className="group relative rounded-xl border border-border bg-card/90 p-5 transition-all duration-300 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10 sm:p-6 md:p-8">
      <div className="absolute -left-1 top-0 h-12 w-1 rounded-r bg-gradient-to-b from-primary to-transparent" />

      <div className="mb-6 flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
        <div className="min-w-0">
          <h3 className="break-words text-xl font-bold text-foreground transition-colors group-hover:text-primary sm:text-2xl">
            {title}
          </h3>
          <p className="mt-1 font-semibold text-primary">{company}</p>
          <p className="text-sm text-muted-foreground">{location}</p>
        </div>
        <span className="inline-flex max-w-full self-start rounded-full bg-muted px-4 py-2 text-sm font-medium text-muted-foreground">
          {period}
        </span>
      </div>

      <ul className="space-y-3 text-muted-foreground">
        {tasks.map((task) => (
          <li key={task} className="flex items-start gap-3">
            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-secondary" />
            <span className="min-w-0 break-words">{task}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
