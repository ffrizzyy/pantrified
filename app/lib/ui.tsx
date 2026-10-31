"use client";

import { createContext, useContext, useEffect, useMemo, useState } from "react";
import { dictionaries, type Copy, type Locale } from "./copy";

export type Theme = "light" | "dark";

const LOCALE_KEY = "pantrified.locale";
const THEME_KEY = "pantrified.theme";

interface UiValue {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  theme: Theme;
  setTheme: (theme: Theme) => void;
  copy: Copy;
}

const UiContext = createContext<UiValue | null>(null);

export function UiProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocale] = useState<Locale>("id");
  const [theme, setTheme] = useState<Theme>(() => {
    if (typeof document === "undefined") return "light";
    return document.documentElement.dataset.theme === "dark" ? "dark" : "light";
  });
  const [ready, setReady] = useState(false);

  useEffect(() => {
    let nextLocale: Locale = "id";
    let nextTheme: Theme = "light";
    try {
      const storedLocale = window.localStorage.getItem(LOCALE_KEY);
      if (storedLocale === "id" || storedLocale === "en") nextLocale = storedLocale;
      const storedTheme = window.localStorage.getItem(THEME_KEY);
      if (storedTheme === "light" || storedTheme === "dark") nextTheme = storedTheme;
    } catch {
      // Storage can be blocked in private mode; keep the defaults.
    }
    setLocale(nextLocale);
    setTheme(nextTheme);
    setReady(true);
    // The theme is read once so the pre-hydration script and React agree.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    const root = document.documentElement;
    root.lang = locale === "en" ? "en" : "id";
    root.dataset.locale = locale;
    if (!ready) return;
    try {
      window.localStorage.setItem(LOCALE_KEY, locale);
    } catch {
      // Ignore blocked storage.
    }
  }, [locale, ready]);

  useEffect(() => {
    const root = document.documentElement;
    root.dataset.theme = theme;
    root.style.colorScheme = theme;
    const meta = document.querySelector<HTMLMetaElement>('meta[name="theme-color"]');
    if (meta) meta.content = theme === "dark" ? "#15180b" : "#fffff0";
    if (!ready) return;
    try {
      window.localStorage.setItem(THEME_KEY, theme);
    } catch {
      // Ignore blocked storage.
    }
  }, [theme, ready]);

  const value = useMemo<UiValue>(
    () => ({
      locale,
      setLocale,
      theme,
      setTheme,
      copy: dictionaries[locale],
    }),
    [locale, theme],
  );

  return <UiContext.Provider value={value}>{children}</UiContext.Provider>;
}

export function useUi(): UiValue {
  const value = useContext(UiContext);
  if (!value) throw new Error("useUi must be used inside UiProvider");
  return value;
}

export function useCopy(): Copy {
  return useUi().copy;
}
