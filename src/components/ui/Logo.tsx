"use client";

import { profile } from "@/data/profile";
import { useT } from "@/i18n/LocaleContext";
import Link from "next/link";

interface LogoProps {
  compact?: boolean;
}

export function Logo({ compact }: LogoProps) {
  const t = useT();

  return (
    <Link href="/" className="group flex items-center gap-2.5">
      <span className="relative flex h-9 w-9 items-center justify-center overflow-hidden rounded-lg">
        <span className="absolute inset-0 rounded-lg border-gradient opacity-80 transition-opacity group-hover:opacity-100" />
        {/* Avatar thay cho monogram */}
        <img
          src="/avatar.png"
          alt={`${profile.name} avatar`}
          width={36}
          height={36}
          className="relative h-9 w-9 rounded-lg object-cover"
          loading="eager"
        />
      </span>
      {!compact && (
        <span className="flex flex-col leading-none">
          <span className="font-mono text-[11px] font-medium tracking-[0.2em] text-foreground">
            {profile.name}
          </span>
          <span className="mt-0.5 font-mono text-[9px] tracking-widest text-muted uppercase">
            {t.logo.subtitle}
          </span>
        </span>
      )}
    </Link>
  );
}
