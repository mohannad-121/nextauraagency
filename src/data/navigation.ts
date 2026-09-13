export interface NavItem {
  label: string;
  href: string;
  badge?: string;
}

export const NAV_ITEMS: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "Agency", href: "/agency" },
  { label: "Divisions", href: "/divisions" },
  { label: "Work", href: "/work" },
  { label: "Products", href: "/products" },
  { label: "About", href: "/about" },
];

export const DIVISION_NAV: NavItem[] = [
  { label: "NextAura AI", href: "/divisions/ai", badge: "AI & Web" },
  { label: "NextAura Studios", href: "/divisions/studios", badge: "Apps & Games" },
  { label: "NextAura Fit", href: "/divisions/fit", badge: "FitCoach AI" },
  { label: "NextAura OS", href: "/divisions/os", badge: "Cloud OS" },
];
