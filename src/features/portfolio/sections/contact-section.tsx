import { Github, Linkedin, Mail } from "lucide-react";
import { ContactCard } from "@/features/portfolio/components/contact-card";
import { SectionHeading } from "@/features/portfolio/components/section-heading";
import { contacts } from "@/features/portfolio/data/portfolio-content";
import { getSectionStyles } from "@/styles/section-layout";

export function ContactSection() {
  const styles = getSectionStyles();

  return (
    <section id="contact" className={styles.section}>
      {/* Le container centralise maintenant tout l'espacement et la bordure */}
      <div className={styles.container}>
        <SectionHeading
          title="Contactez-moi"
          description="Je suis toujours intéressé par de nouveaux projets et opportunités. N'hésitez pas à me contacter !"
          centered
        />

        <div className="mb-16 grid gap-6 md:grid-cols-3">
          {contacts.map((contact) => (
            <ContactCard key={contact.label} {...contact} />
          ))}
        </div>

        {/* Section Réseaux Sociaux avec une bordure interne plus discrète */}
        <div className="flex flex-col items-center gap-8 pt-12 border-t border-border/30">
          <h3 className="text-xl font-semibold text-foreground">
            Suivez-moi sur les réseaux sociaux
          </h3>
          <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
            <a
              href="https://github.com/Nou-Fy"
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-12 w-12 items-center justify-center rounded-lg border border-border bg-card/90 transition-all duration-300 hover:border-primary hover:bg-primary hover:text-primary-foreground">
              <Github className="w-5 h-5" />
            </a>
            <a
              href="https://www.linkedin.com/in/rakotonantsoina"
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-12 w-12 items-center justify-center rounded-lg border border-border bg-card/90 transition-all duration-300 hover:border-primary hover:bg-primary hover:text-primary-foreground">
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href="https://mail.google.com/mail/?view=cm&to=rakotonantsoina@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-12 w-12 items-center justify-center rounded-lg border border-border bg-card/90 transition-all duration-300 hover:border-primary hover:bg-primary hover:text-primary-foreground">
              <Mail className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
