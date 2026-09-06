"use client";

import { useLocale } from "@/i18n/LocaleContext";
import { cn } from "@/lib/utils";
import { Languages } from "lucide-react";

interface LanguageSwitcherProps {
  className?: string;
  /** Hiển thị icon + chữ viết tắt (default) hoặc chỉ nút gạt EN/VI */
  variant?: "pill" | "compact";
}

export function LanguageSwitcher({
  className,
  variant = "pill",
}: LanguageSwitcherProps) {
  const { locale, setLocale, t } = useLocale();

  if (variant === "compact") {
    return (
      <button
        type="button"
        onClick={() => setLocale(locale === "vi" ? "en" : "vi")}
        aria-label={t.languageSwitcher.label}
        title={t.languageSwitcher.label}
        className={cn(
          "font-mono text-xs tracking-widest text-muted transition-colors hover:text-accent",
          className,
        )}
      >
        {locale === "vi"
          ? t.languageSwitcher.english
          : t.languageSwitcher.vietnamese}
      </button>
    );
  }

  return (
    <div
      role="group"
      aria-label={t.languageSwitcher.label}
      className={cn(
        "inline-flex items-center gap-1 rounded-lg border border-white/10 bg-white/[0.03] p-1",
        className,
      )}
    >
      <Languages size={14} className="ml-1 text-muted" aria-hidden />
      {(["vi", "en"] as const).map((code) => {
        const active = locale === code;
        return (
          <button
            key={code}
            type="button"
            onClick={() => setLocale(code)}
            aria-pressed={active}
            className={cn(
              "rounded-md px-2.5 py-1 font-mono text-[11px] tracking-widest uppercase transition-all duration-200",
              active
                ? "bg-accent text-background shadow-[0_0_12px_rgba(255,255,255,0.25)]"
                : "text-muted hover:text-foreground",
            )}
          >
            {code === "vi"
              ? t.languageSwitcher.vietnamese
              : t.languageSwitcher.english}
          </button>
        );
      })}
    </div>
  );
}
