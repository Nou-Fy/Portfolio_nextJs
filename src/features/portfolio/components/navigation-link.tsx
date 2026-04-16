import Link from "next/link";

import type { NavHref } from "@/features/portfolio/types";

type NavigationLinkProps = {
  href: NavHref;
  children: React.ReactNode;
  isActive?: boolean;
  onClick?: () => void;
};

export function NavigationLink({
  href,
  children,
  isActive = false,
  onClick,
}: NavigationLinkProps) {
  return (
    <Link
      href={href}
      onClick={onClick}
      className={`block w-full rounded-xl px-4 py-3 text-center text-sm font-medium transition-all lg:w-auto lg:px-4 lg:py-2 ${
        isActive
          ? "bg-primary text-primary-foreground shadow-md"
          : "text-foreground hover:bg-accent/10 hover:text-primary"
      }`}
    >
      {children}
    </Link>
  );
}
