type EducationCardProps = {
  degree: string;
  school: string;
  department: string;
  period: string;
  color: string;
};

export function EducationCard({
  degree,
  school,
  department,
  period,
  color,
}: EducationCardProps) {
  return (
    <div className="group relative rounded-xl border border-border bg-card/90 p-5 transition-all duration-300 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10 sm:p-6 md:p-8">
      <div
        className={`absolute left-0 top-0 h-1 w-16 rounded-r bg-gradient-to-r ${color} to-transparent`}
      />

      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div className="flex-1">
          <h3 className="break-words text-xl font-bold text-foreground transition-colors group-hover:text-primary sm:text-2xl">
            {degree}
          </h3>
          <p className="mt-2 font-semibold text-primary">{school}</p>
          <p className="text-sm text-muted-foreground">{department}</p>
        </div>
        <div className="md:text-right">
          <span className="inline-block rounded-lg bg-secondary/10 px-4 py-2 text-sm font-medium text-secondary">
            {period}
          </span>
        </div>
      </div>
    </div>
  );
}
