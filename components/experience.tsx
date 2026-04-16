"use client";

const experiences = [
  {
    id: 1,
    title: "Dessinateur Spécialisé Préparateur",
    company: "FUTURMAP data",
    location: "Antananarivo, Madagascar",
    period: "13/05/2024 - 01/07/2024",
    color: "from-primary to-blue-600",
    tasks: [
      "Préparation des données brutes pour traitement en production",
      "Préparation des photos: trajectoires, décompression et coordonnées",
      "Division des blocs (linéaire, ortho, photo, nuage de points)",
      "Création des fichiers contours pour les clôtures",
    ],
  },
  {
    id: 2,
    title: "Stagiaire Concepteur Développeur",
    company: "INCLUSIV ACADEMY",
    location: "Antananarivo, Madagascar",
    period: "25/10/2023 - 08/05/2024",
    color: "from-secondary to-amber-500",
    tasks: [
      "Product Owner et Scrum Master",
      "Développement Full Stack (Front & Back)",
      "Rédaction du cahier de charges",
    ],
  },
  {
    id: 4,
    title: "Dessinateur Spécialisé Préparateur",
    company: "FUTURMAP data",
    location: "Antananarivo, Madagascar",
    period: "11/02/2023 - 24/10/2023",
    color: "from-primary to-blue-600",
    tasks: [
      "Préparation des données brutes pour traitement en production",
      "Préparation des photos: trajectoires, décompression et coordonnées",
      "Division des blocs (linéaire, ortho, photo, nuage de points)",
      "Création des fichiers contours pour les clôtures",
    ],
  },
  {
    id: 3,
    title: "Dessinateur Spécialisé LIDAR",
    company: "FUTURMAP data",
    location: "Antananarivo, Madagascar",
    period: "17/10/2022 - 10/02/2023",
    color: "from-accent to-amber-700",
    tasks: [
      "Classification des nuages selon leur classe",
      "Filtrage du sol",
      "Numérisation des routes circulables",
    ],
  },
];

export function Experience() {
  return (
    <section
      id="experience"
      className="bg-gradient-to-b from-background via-background to-muted/30 py-20 md:py-32">
      <div className="max-w-4xl mx-auto px-6">
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Experiences
          </h2>
          <p className="text-lg text-muted-foreground">
            Mon parcours professionnel et les etapes marquantes.
          </p>
        </div>

        <div className="space-y-6">
          {experiences.map((exp, index) => (
            <div
              key={exp.id}
              className="group relative rounded-xl border border-border bg-card/90 p-6 transition-all duration-300 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10 md:p-8">
              <div className="absolute -left-1 top-0 h-12 w-1 bg-gradient-to-b from-primary to-transparent rounded-r" />

              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-6">
                <div>
                  <h3 className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors">
                    {exp.title}
                  </h3>
                  <p className="text-primary font-semibold mt-1">
                    {exp.company}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {exp.location}
                  </p>
                </div>
                <span className="mt-4 md:mt-0 text-sm font-medium text-muted-foreground bg-muted px-4 py-2 rounded-full whitespace-nowrap">
                  {exp.period}
                </span>
              </div>

              <ul className="space-y-3 text-muted-foreground">
                {exp.tasks.map((task, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-secondary flex-shrink-0 mt-2" />
                    <span>{task}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
