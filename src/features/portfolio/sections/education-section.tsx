import { EducationCard } from "@/features/portfolio/components/education-card";
import { SectionHeading } from "@/features/portfolio/components/section-heading";
import { educationItems } from "@/features/portfolio/data/portfolio-content";

export function EducationSection() {
  return (
    <section
      id="education"
      className="border-t border-border bg-gradient-to-b from-muted/20 to-background py-20 md:py-32"
    >
      <div className="mx-auto max-w-4xl px-4 sm:px-6">
        <SectionHeading
          title="Formation"
          description="Parcours academique et certifications"
        />

        <div className="space-y-6">
          {educationItems.map((edu) => (
            <EducationCard
              key={edu.id}
              degree={edu.degree}
              school={edu.school}
              department={edu.department}
              period={edu.period}
              color={edu.color}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
