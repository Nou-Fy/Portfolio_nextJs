"use client";

import { navItems } from "@/features/portfolio/data/portfolio-content";
import { NavigationLink } from "@/features/portfolio/components/navigation-link";
import { ThemeToggle } from "@/features/portfolio/components/theme-toggle";
import type { NavHref } from "@/features/portfolio/types";

type MobileNavigationProps = {
  activeSection: NavHref;
  mounted: boolean;
  onNavigate: () => void;
};

export function MobileNavigation({
  activeSection,
  mounted,
  onNavigate,
}: MobileNavigationProps) {
  return (
    <div className="absolute left-0 right-0 top-full mt-2 lg:hidden">
      <div className="mx-4 mb-4">
        <nav className="flex flex-col items-center justify-center gap-4 rounded-2xl border border-border bg-card/95 p-8 shadow-xl backdrop-blur-md">
          {navItems.map((item) => (
            <div key={item.href} className="flex w-full justify-center">
              <NavigationLink
                href={item.href}
                onClick={onNavigate}
                isActive={activeSection === item.href}
              >
                {item.label}
              </NavigationLink>
            </div>
          ))}

          <div className="w-full max-w-xs">
            <ThemeToggle mounted={mounted} onAfterToggle={onNavigate} />
          </div>
        </nav>
      </div>
    </div>
  );
}
