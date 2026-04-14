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

const SESSION_KEY = "kobi-lang";

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>("en");
  const [hasChosen, setHasChosen] = useState(true); // assume chosen until checked

  // Check sessionStorage on mount — resets every new browser session
  useEffect(() => {
    const saved = sessionStorage.getItem(SESSION_KEY) as Locale | null;
    if (saved === "en" || saved === "ko") {
      setLocaleState(saved);
      setHasChosen(true);
    } else {
      setHasChosen(false);
    }
  }, []);

  const setLocale = useCallback((newLocale: Locale) => {
    setLocaleState(newLocale);
    sessionStorage.setItem(SESSION_KEY, newLocale);
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
