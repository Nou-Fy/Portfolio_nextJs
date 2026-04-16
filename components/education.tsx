'use client';

const education = [
  {
    id: 1,
    degree: 'Master en MIER (Master d\'Ingénierie en Energie Renouvelable)',
    school: 'Université d\'Antananarivo',
    department: 'Département Physique et Application',
    period: '2017 - 2019',
    color: 'from-primary',
  },
  {
    id: 2,
    degree: 'Licence en LIER (Licence d\'Ingénierie en Energie Renouvelable)',
    school: 'Université d\'Antananarivo',
    department: 'Département Physique et Application',
    period: '2015 - 2017',
    color: 'from-secondary',
  },
  {
    id: 3,
    degree: 'CDAN - Concepteur Développeur d\'Application Numérique',
    school: 'Formation Professionnelle',
    department: 'Digital Development',
    period: '2014',
    color: 'from-accent',
  },
  {
    id: 4,
    degree: 'BACC Lauréat série D',
    school: 'Secondary Education',
    department: 'Scientific Stream',
    period: 'Completed',
    color: 'from-muted',
  },
];

export function Education() {
  return (
    <section
      id="education"
      className="border-t border-border bg-gradient-to-b from-muted/20 to-background py-20 md:py-32"
    >
      <div className="max-w-4xl mx-auto px-6">
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Formation</h2>
          <p className="text-lg text-muted-foreground">Parcours academique et certifications</p>
        </div>

        <div className="space-y-6">
          {education.map((edu) => (
            <div
              key={edu.id}
              className="group relative rounded-xl border border-border bg-card/90 p-6 transition-all duration-300 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10 md:p-8"
            >
              {/* Gradient line indicator */}
              <div className={`absolute left-0 top-0 h-1 w-16 bg-gradient-to-r ${edu.color} to-transparent rounded-r`} />

              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors">
                    {edu.degree}
                  </h3>
                  <p className="text-primary font-semibold mt-2">{edu.school}</p>
                  <p className="text-sm text-muted-foreground">{edu.department}</p>
                </div>
                <div className="md:text-right">
                  <span className="inline-block px-4 py-2 bg-secondary/10 text-secondary rounded-lg font-medium text-sm whitespace-nowrap">
                    {edu.period}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
