"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Menu, Moon, Sun, X } from "lucide-react";
import { useTheme } from "next-themes";

import { Button } from "@/components/ui/button";

const navItems = [
  { href: "#about", label: "A propos" },
  { href: "#experience", label: "Experiences" },
  { href: "#skills", label: "Competences" },
  { href: "#education", label: "Formation" },
  { href: "#contact", label: "Contact" },
];

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [activeSection, setActiveSection] = useState("#about");
  const { resolvedTheme, setTheme } = useTheme();

  const toggleMenu = () => setIsOpen(!isOpen);
  const isDark = resolvedTheme === "dark";

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const sections = navItems
      .map((item) => {
        const section = document.querySelector(item.href);
        return section instanceof HTMLElement
          ? { href: item.href, element: section }
          : null;
      })
      .filter(
        (
          section,
        ): section is {
          href: string;
          element: HTMLElement;
        } => section !== null,
      );

    const updateActiveSection = () => {
      const scrollPosition = window.scrollY + 140;

      let currentSection = sections[0]?.href ?? "#about";

      for (const section of sections) {
        if (scrollPosition >= section.element.offsetTop) {
          currentSection = section.href;
        }
      }

      setActiveSection(currentSection);
    };

    updateActiveSection();
    window.addEventListener("scroll", updateActiveSection, { passive: true });
    window.addEventListener("resize", updateActiveSection);

    return () => {
      window.removeEventListener("scroll", updateActiveSection);
      window.removeEventListener("resize", updateActiveSection);
    };
  }, []);

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/90 backdrop-blur-xl">
      <div className="mx-auto flex max-w-4xl items-center justify-between px-6 py-4">
        <Link
          href="#"
          className="flex items-center gap-3 text-foreground transition-colors hover:text-primary">
          <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-primary to-secondary font-bold text-primary-foreground shadow-lg shadow-primary/20">
            RN
          </span>
        </Link>

        <nav className="hidden items-center gap-2 rounded-full border border-border bg-card/80 p-2 shadow-sm md:flex">
          {navItems.map((item) => (
            <NavLink
              key={item.href}
              href={item.href}
              isActive={activeSection === item.href}>
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Button
            type="button"
            variant="outline"
            className="rounded-full border-border/70 bg-card/90 px-4 shadow-sm"
            aria-label={
              isDark ? "Activer le theme clair" : "Activer le theme sombre"
            }
            onClick={() => mounted && setTheme(isDark ? "light" : "dark")}>
            {mounted && isDark ? <Sun /> : <Moon />}
            <span className="hidden text-xs sm:inline">
              {mounted && isDark ? "Clair" : "Sombre"}
            </span>
          </Button>

          <Button
            type="button"
            variant="default"
            size="icon"
            className="rounded-full shadow-lg shadow-primary/25 md:hidden"
            onClick={toggleMenu}
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
            aria-label={isOpen ? "Fermer le menu" : "Ouvrir le menu"}>
            {isOpen ? <X /> : <Menu />}
          </Button>
        </div>
      </div>

      {isOpen && (
        <div
          id="mobile-menu"
          className="absolute left-0 right-0 top-full mt-2 animate-in fade-in slide-in-from-top-4 duration-300 md:hidden">
          <div className="mx-4 mb-4">
            <nav className="flex flex-col items-center justify-center gap-4 rounded-2xl border border-border bg-card/95 p-8 shadow-xl text-center backdrop-blur-md">
              {navItems.map((item) => (
                <div key={item.href} className="w-full flex justify-center">
                  <NavLink
                    href={item.href}
                    onClick={() => setIsOpen(false)} // Ferme le menu au clic
                    isActive={activeSection === item.href}>
                    {item.label}
                  </NavLink>
                </div>
              ))}

              <button
                type="button"
                onClick={() => {
                  if (mounted) {
                    setTheme(isDark ? "light" : "dark");
                  }
                }}
                className="flex w-full max-w-xs items-center justify-between rounded-xl border border-border/70 px-4 py-3 text-sm font-medium text-foreground transition-colors hover:bg-accent/10">
                <span>Theme</span>
                <span className="text-muted-foreground">
                  {isDark ? "Sombre" : "Clair"}
                </span>
              </button>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
}

function NavLink({
  href,
  children,
  onClick,
  isActive = false,
}: {
  href: string;
  children: React.ReactNode;
  onClick?: () => void;
  isActive?: boolean;
}) {
  return (
    <Link
      href={href}
      onClick={onClick}
      className={`block rounded-xl px-4 py-3 text-sm font-medium transition-colors md:px-4 md:py-2 ${
        isActive
          ? "bg-primary text-primary-foreground shadow-sm"
          : "text-foreground hover:bg-accent/10 hover:text-primary"
      }`}>
      {children}
    </Link>
  );
}
