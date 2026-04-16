"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

import { Button } from "@/components/ui/button";
import { MobileNavigation } from "@/features/portfolio/components/mobile-navigation";
import { NavigationLink } from "@/features/portfolio/components/navigation-link";
import { ThemeToggle } from "@/features/portfolio/components/theme-toggle";
import { navItems } from "@/features/portfolio/data/portfolio-content";
import { useActiveSection } from "@/features/portfolio/hooks/use-active-section";

export function PortfolioHeader() {
  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const activeSection = useActiveSection(navItems);
  const toggleMenu = () => setIsOpen(!isOpen);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/90 backdrop-blur-xl">
      <div className="mx-auto flex max-w-4xl items-center justify-between px-4 py-4 sm:px-6">
        <Link
          href="/"
          className="flex items-center gap-3 text-foreground transition-colors hover:text-primary">
          <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-primary to-secondary font-bold text-primary-foreground shadow-lg shadow-primary/20">
            RN
          </span>
        </Link>

        <nav className="hidden items-center gap-2 rounded-full border border-border bg-card/80 p-2 shadow-sm lg:flex">
          {navItems.map((item) => (
            <NavigationLink
              key={item.href}
              href={item.href}
              isActive={activeSection === item.href}
            >
              {item.label}
            </NavigationLink>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <ThemeToggle mounted={mounted} />

          <Button
            type="button"
            variant="default"
            size="icon"
            className="rounded-full shadow-lg shadow-primary/25 lg:hidden"
            onClick={toggleMenu}>
            {isOpen ? <X /> : <Menu />}
          </Button>
        </div>
      </div>

      {isOpen ? (
        <MobileNavigation
          activeSection={activeSection}
          mounted={mounted}
          onNavigate={() => setIsOpen(false)}
        />
      ) : null}
    </header>
  );
}
