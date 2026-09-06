"use client";

import { createContext, useCallback, useContext, useEffect, useMemo, useState } from "react";
import type { Dictionary } from "./vi";
import { en, vi } from "./index";

export type Locale = "en" | "vi";

const STORAGE_KEY = "portfolio.locale";
const DEFAULT_LOCALE: Locale = "vi";

const dictionaries: Record<Locale, Dictionary> = { en, vi };

interface LocaleContextValue {
  locale: Locale;
  setLocale: (l: Locale) => void;
  toggleLocale: () => void;
  t: Dictionary;
}

const LocaleContext = createContext<LocaleContextValue | null>(null);

export function LocaleProvider({ children }: { children: React.ReactNode }) {
  // Khởi tạo bằng default để SSR/CSR khớp nhau, hydrate sau để tránh mismatch
  const [locale, setLocaleState] = useState<Locale>(DEFAULT_LOCALE);
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    try {
      const saved = window.localStorage.getItem(STORAGE_KEY) as Locale | null;
      if (saved === "en" || saved === "vi") {
        setLocaleState(saved);
      } else {
        const browser = window.navigator.language.toLowerCase();
        setLocaleState(browser.startsWith("vi") ? "vi" : "en");
      }
    } catch {
      // ignore (private mode, etc.)
    }
    setHydrated(true);
  }, []);

  // Đồng bộ <html lang=...> và localStorage sau khi đã hydrate
  useEffect(() => {
    if (!hydrated) return;
    document.documentElement.lang = locale;
    try {
      window.localStorage.setItem(STORAGE_KEY, locale);
    } catch {
      // ignore
    }
  }, [locale, hydrated]);

  const setLocale = useCallback((l: Locale) => setLocaleState(l), []);
  const toggleLocale = useCallback(
    () => setLocaleState((p) => (p === "vi" ? "en" : "vi")),
    [],
  );

  const value = useMemo<LocaleContextValue>(
    () => ({
      locale,
      setLocale,
      toggleLocale,
      t: dictionaries[locale],
    }),
    [locale, setLocale, toggleLocale],
  );

  return <LocaleContext.Provider value={value}>{children}</LocaleContext.Provider>;
}

export function useLocale() {
  const ctx = useContext(LocaleContext);
  if (!ctx) {
    throw new Error("useLocale must be used inside <LocaleProvider>");
  }
  return ctx;
}

/** Shorthand: trả về dict để dùng kiểu `t.hero.badge` */
export function useT() {
  return useLocale().t;
}
