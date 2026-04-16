"use client";

import { useEffect, useState } from "react";

import type { NavHref, NavItem } from "@/features/portfolio/types";

export function useActiveSection(items: readonly NavItem[]) {
  const [activeSection, setActiveSection] = useState<NavHref>(
    items[0]?.href ?? "#about",
  );

  useEffect(() => {
    const sections = items
      .map((item) => {
        const element = document.querySelector(item.href);
        if (element instanceof HTMLElement) {
          return { href: item.href, element };
        }
        return null;
      })
      .filter(
        (section): section is { href: NavHref; element: HTMLElement } =>
          section !== null,
      );

    const updateActiveSection = () => {
      const scrollPosition = window.scrollY + 150;
      let currentSection = items[0]?.href ?? "#about";

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
  }, [items]);

  return activeSection;
}
