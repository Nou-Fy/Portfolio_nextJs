import { Mail, MapPin, Phone } from "lucide-react";

import type { ContactIcon } from "@/features/portfolio/types";

const icons = {
  mail: Mail,
  phone: Phone,
  "map-pin": MapPin,
} as const;

type ContactCardProps = {
  icon: ContactIcon;
  label: string;
  value: string;
  href: string;
  target?: string;
};

export function ContactCard({
  icon,
  label,
  value,
  href,
  target,
}: ContactCardProps) {
  const Icon = icons[icon];

  return (
    <a
      href={href}
      target={target}
      rel={target === "_blank" ? "noopener noreferrer" : undefined}
      className="group relative overflow-hidden rounded-xl border border-border bg-card/90 p-6 transition-all duration-300 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/8 to-secondary/8 opacity-0 transition-opacity group-hover:opacity-100" />
      <div className="relative">
        <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 transition-colors group-hover:bg-primary/20">
          <Icon className="h-6 w-6 text-primary" />
        </div>
        <h3 className="mb-2 font-semibold text-foreground">{label}</h3>
        <p className="break-all text-muted-foreground transition-colors group-hover:text-primary">
          {value}
        </p>
      </div>
    </a>
  );
}
