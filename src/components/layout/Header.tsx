"use client";

import { Button } from "@/components/ui/Button";
import { LanguageSwitcher } from "@/components/ui/LanguageSwitcher";
import { Logo } from "@/components/ui/Logo";
import { useT } from "@/i18n/LocaleContext";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

// Key của nav link theo thứ tự cố định — dịch qua dictionary
const NAV_KEYS = [
  "capabilities",
  "projects",
  "approach",
  "experience",
  "contact",
] as const;

export function Header() {
  const t = useT();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navLinks = NAV_KEYS.map((key) => ({
    key,
    label: t.nav[key],
    href: `#${key}`,
  }));

  return (
    <header
      className={cn(
        "fixed top-0 right-0 left-0 z-50 transition-all duration-300",
        scrolled
          ? "border-b border-white/[0.06] bg-background/70 backdrop-blur-2xl"
          : "bg-transparent",
      )}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-4 md:px-6">
        <Logo />

        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} className="nav-link-glow text-sm">
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <LanguageSwitcher variant="pill" />
          <Button href="#contact" variant="primary">
            {t.header.connect}
          </Button>
        </div>

        <div className="flex items-center gap-2 md:hidden">
          <LanguageSwitcher variant="compact" />
          <button
            type="button"
            className="rounded-lg border border-white/10 p-2 text-foreground"
            onClick={() => setOpen(!open)}
            aria-label={open ? t.header.closeMenu : t.header.openMenu}
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {open && (
        <nav className="glass-panel border-t border-white/[0.06] px-4 py-4 md:hidden">
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm text-muted hover:text-accent"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Button href="#contact" variant="primary" className="w-full">
              {t.header.connect}
            </Button>
          </div>
        </nav>
      )}
    </header>
  );
}
