import { getSectionStyles } from "@/styles/section-layout";
import { ExperienceCard } from "../components/experience-card";
import { SectionHeading } from "../components/section-heading";
import { experiences } from "../data/portfolio-content";

export function ExperienceSection() {
  const styles = getSectionStyles();

  return (
    <section id="experience" className={styles.section}>
      <div className={styles.container}>
        <SectionHeading
          title="Expériences professionnelles et stages"
          description="Mon parcours professionnel, incluant stages et projets réalisés."
        />
        <div className="space-y-6">
          {experiences.map((exp) => (
            <ExperienceCard key={exp.id} {...exp} />
          ))}
        </div>
      </div>
    </section>
  );
}
