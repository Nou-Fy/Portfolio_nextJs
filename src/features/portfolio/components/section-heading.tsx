type SectionHeadingProps = {
  title: string;
  description: string;
  centered?: boolean;
};

export function SectionHeading({
  title,
  description,
  centered = false,
}: SectionHeadingProps) {
  return (
    <div className={`mb-16 ${centered ? "text-center" : ""}`}>
      <h2 className="mb-4 text-3xl font-bold text-foreground sm:text-4xl md:text-5xl">
        {title}
      </h2>
      <p
        className={`text-base text-muted-foreground sm:text-lg ${
          centered ? "mx-auto max-w-2xl" : ""
        }`}
      >
        {description}
      </p>
    </div>
  );
}
