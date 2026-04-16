'use client';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-card/50 py-12 backdrop-blur-sm">
      <div className="max-w-4xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between">
          <div className="mb-6 md:mb-0">
            <p className="text-sm text-muted-foreground">
              © {currentYear} Nantsoinaharimanana Nomena Tiavina. All rights reserved.
            </p>
          </div>
          <div className="flex gap-6">
            <a href="#about" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              A propos
            </a>
            <a href="#experience" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              Experiences
            </a>
            <a href="#skills" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              Competences
            </a>
            <a href="#education" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              Formation
            </a>
            <a href="#contact" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              Contact
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
