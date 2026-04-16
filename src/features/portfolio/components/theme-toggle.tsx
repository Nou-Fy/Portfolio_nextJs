"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

import { Button } from "@/components/ui/button";

type ThemeToggleProps = {
  mounted: boolean;
  onAfterToggle?: () => void;
};

export function ThemeToggle({ mounted, onAfterToggle }: ThemeToggleProps) {
  const { resolvedTheme, setTheme } = useTheme();
  const isDark = resolvedTheme === "dark";

  const toggleTheme = () => {
    setTheme(isDark ? "light" : "dark");
    onAfterToggle?.();
  };

  return (
    <Button
      type="button"
      variant="outline"
      className="rounded-full border-border/70 bg-card/90 px-4 shadow-sm"
      onClick={toggleTheme}
    >
      {mounted ? (
        <>
          {isDark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
          <span className="ml-2 hidden text-xs sm:inline">
            {isDark ? "Clair" : "Sombre"}
          </span>
        </>
      ) : (
        <div className="h-4 w-4" />
      )}
    </Button>
  );
}
