"use client";
import { useEffect } from "react";
import { useLanguage } from "../context/LanguageContext";

export default function ClientWrapper({ children }) {
  const { language } = useLanguage();

  useEffect(() => {
    document.documentElement.dir = language === "fa" ? "rtl" : "ltr";
    document.documentElement.lang = language;
  }, [language]);

  return children;
}
