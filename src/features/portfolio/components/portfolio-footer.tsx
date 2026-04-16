import { navItems } from "@/features/portfolio/data/portfolio-content";

export function PortfolioFooter() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-card/50 py-12 backdrop-blur-sm">
      <div className="mx-auto max-w-4xl px-4 sm:px-6">
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div className="mb-6 md:mb-0 md:max-w-xs">
            <p className="text-sm text-muted-foreground">
              © {currentYear} Nantsoinaharimanana Nomena Tiavina. All rights
              reserved.
            </p>
          </div>
          <div className="flex flex-wrap gap-4 sm:gap-6">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm text-muted-foreground transition-colors hover:text-primary">
                {item.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
