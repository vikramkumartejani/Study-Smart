"use client";

import { createContext, useContext, useState, useEffect } from "react";
import { translations } from "../translations";

const LanguageContext = createContext();

export function LanguageProvider({ children }) {
  const [locale, setLocale] = useState("en");

  useEffect(() => {
    document.documentElement.dir = locale === "ar" ? "rtl" : "ltr";
    document.documentElement.lang = locale;
  }, [locale]);

  const toggleLanguage = () => {
    setLocale((prev) => (prev === "en" ? "ar" : "en"));
  };

  const t = (key) => {
    try {
      const keys = key.split(".");
      let value = translations[locale];

      for (const k of keys) {
        if (!value || typeof value !== "object") {
          console.error(`Translation key "${key}" is incorrect or missing`);
          return key;
        }
        value = value[k];
      }

      // Check if the final value is an object (not an array)
      if (typeof value === "object" && !Array.isArray(value)) {
        console.error(
          `Translation key "${key}" resolves to an object instead of a string or array`
        );
        return key;
      }

      return value;
    } catch (error) {
      console.error(`Error retrieving translation for key: ${key}`, error);
      return key;
    }
  };

  return (
    <LanguageContext.Provider value={{ locale, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within LanguageProvider");
  }
  return context;
};
