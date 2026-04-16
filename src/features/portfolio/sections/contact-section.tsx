import { Github, Linkedin, Mail } from "lucide-react";
import { ContactCard } from "@/features/portfolio/components/contact-card";
import { SectionHeading } from "@/features/portfolio/components/section-heading";
import { contacts } from "@/features/portfolio/data/portfolio-content";

export function ContactSection() {
  return (
    <section
      id="contact"
      className="border-t border-border bg-background/80 py-20 md:py-32">
      <div className="mx-auto max-w-4xl px-4 sm:px-6">
        <SectionHeading
          title="Contactez-moi"
          description="Je suis toujours intéressé par de nouveaux projets et opportunités. N'hésitez pas à me contacter !"
          centered
        />

        <div className="mb-12 grid gap-6 md:grid-cols-3">
          {contacts.map((contact) => (
            <ContactCard key={contact.label} {...contact} />
          ))}
        </div>

        <div className="flex flex-col items-center gap-8 py-8 border-t border-border">
          <h3 className="text-xl font-semibold text-foreground">
            Suivez-moi sur les réseaux sociaux
          </h3>
          <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
            <a
              href="https://github.com/Nou-Fy"
              className="flex h-12 w-12 items-center justify-center rounded-lg border border-border bg-card/90 transition-all duration-300 hover:border-primary hover:bg-primary hover:text-primary-foreground">
              <Github className="w-5 h-5" />
            </a>
            <a
              href="https://www.linkedin.com/in/rakotonantsoina"
              className="flex h-12 w-12 items-center justify-center rounded-lg border border-border bg-card/90 transition-all duration-300 hover:border-primary hover:bg-primary hover:text-primary-foreground">
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href="https://mail.google.com/mail/?view=cm&to=rakotonantsoina@gmail.com"
              className="flex h-12 w-12 items-center justify-center rounded-lg border border-border bg-card/90 transition-all duration-300 hover:border-primary hover:bg-primary hover:text-primary-foreground">
              <Mail className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
