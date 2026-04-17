import { EducationCard } from "@/features/portfolio/components/education-card";
import { SectionHeading } from "@/features/portfolio/components/section-heading";
import { educationItems } from "@/features/portfolio/data/portfolio-content";
import { getSectionStyles } from "@/styles/section-layout";

export function EducationSection() {
  const styles = getSectionStyles();

  return (
    <section id="education" className={styles.section}>
      <div className={styles.container}>
        <SectionHeading title="Formation" description="Parcours académique." />
        <div className="space-y-6">
          {educationItems.map((edu) => (
            <EducationCard key={edu.id} {...edu} />
          ))}
        </div>
      </div>
    </section>
  );
}
