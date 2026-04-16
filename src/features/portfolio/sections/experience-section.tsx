import { ExperienceCard } from "@/features/portfolio/components/experience-card";
import { SectionHeading } from "@/features/portfolio/components/section-heading";
import { experiences } from "@/features/portfolio/data/portfolio-content";

export function ExperienceSection() {
  return (
    <section
      id="experience"
      className="bg-gradient-to-b from-background via-background to-muted/30 py-20 md:py-32">
      <div className="mx-auto max-w-4xl px-4 sm:px-6">
        <SectionHeading
          title="Experiences"
          description="Mon parcours professionnel et les etapes marquantes."
        />

        <div className="space-y-6">
          {experiences.map((exp) => (
            <ExperienceCard
              key={exp.id}
              title={exp.title}
              company={exp.company}
              location={exp.location}
              period={exp.period}
              tasks={exp.tasks}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
