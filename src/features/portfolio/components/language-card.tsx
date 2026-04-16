type LanguageCardProps = {
  label: string;
  level: string;
  progress: string;
};

export function LanguageCard({ label, level, progress }: LanguageCardProps) {
  return (
    <div className="rounded-xl border border-border bg-card/90 p-6 transition-shadow hover:shadow-sm hover:shadow-primary/5">
      <h4 className="mb-3 font-semibold text-foreground">{label}</h4>
      <div className="flex items-center gap-3">
        <div className="h-1.5 flex-1 overflow-hidden rounded-full bg-muted">
          <div
            className={`h-full ${progress} bg-gradient-to-r from-primary to-secondary`}
          />
        </div>
        <span className="whitespace-nowrap text-xs font-medium text-muted-foreground">
          {level}
        </span>
      </div>
    </div>
  );
}
