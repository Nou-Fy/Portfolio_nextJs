"use client";

import { Mail, Phone, MapPin, Linkedin, Github } from "lucide-react";

const contacts = [
  {
    icon: Mail,
    label: "Email",
    value: "rakotonantsoina@gmail.com",
    href: "https://mail.google.com/mail/?view=cm&to=rakotonantsoina@gmail.com",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+261 34 84 924 925",
    href: "tel:+261348492425",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Vontovorona, Tana 102, Madagascar",
    href: "#",
  },
];

export function Contact() {
  return (
    <section
      id="contact"
      className="border-t border-border bg-background/80 py-20 md:py-32">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Contactez-moi
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Je suis toujours intéressé par de nouveaux projets et opportunités.
            N&apos;hésitez pas à me contacter !
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {contacts.map((contact, idx) => {
            const Icon = contact.icon;
            return (
              <a
                key={idx}
                href={contact.href}
                className="group relative overflow-hidden rounded-xl border border-border bg-card/90 p-6 transition-all duration-300 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/8 to-secondary/8 opacity-0 transition-opacity group-hover:opacity-100" />
                <div className="relative">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">
                    {contact.label}
                  </h3>
                  <p className="text-muted-foreground group-hover:text-primary transition-colors break-all">
                    {contact.value}
                  </p>
                </div>
              </a>
            );
          })}
        </div>

        {/* Réseaux sociaux */}
        <div className="flex flex-col items-center gap-8 py-8 border-t border-border">
          <h3 className="text-xl font-semibold text-foreground">
            Suivez-moi sur les réseaux sociaux
          </h3>
          <div className="flex gap-6">
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
