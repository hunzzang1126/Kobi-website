"use client";

import {
  createContext,
  useContext,
  useState,
  useEffect,
  useCallback,
  type ReactNode,
} from "react";
import { translations } from "@/content/translations";

export type Locale = "en" | "ko";

interface LanguageContextType {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: (key: string) => string;
  hasChosen: boolean;
}

const LanguageContext = createContext<LanguageContextType | null>(null);

const COOKIE_NAME = "kobi-lang";
const COOKIE_MAX_AGE = 365 * 24 * 60 * 60; // 1 year

function getCookie(name: string): string | null {
  if (typeof document === "undefined") return null;
  const match = document.cookie.match(new RegExp(`(^| )${name}=([^;]+)`));
  return match ? match[2] : null;
}

function setCookie(name: string, value: string) {
  document.cookie = `${name}=${value};path=/;max-age=${COOKIE_MAX_AGE};SameSite=Lax`;
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>("en");
  const [hasChosen, setHasChosen] = useState(true); // assume chosen until checked

  // Check cookie on mount
  useEffect(() => {
    const saved = getCookie(COOKIE_NAME) as Locale | null;
    if (saved === "en" || saved === "ko") {
      setLocaleState(saved);
      setHasChosen(true);
    } else {
      setHasChosen(false);
    }
  }, []);

  const setLocale = useCallback((newLocale: Locale) => {
    setLocaleState(newLocale);
    setCookie(COOKIE_NAME, newLocale);
    setHasChosen(true);
    document.documentElement.lang = newLocale;
  }, []);

  const t = useCallback(
    (key: string): string => {
      const localeStrings = translations[locale];
      return localeStrings?.[key] ?? key;
    },
    [locale]
  );

  return (
    <LanguageContext value={{ locale, setLocale, t, hasChosen }}>
      {children}
    </LanguageContext>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
