'use client';

import { createContext, useContext, useState, useEffect } from 'react';
import { translations } from '../translations';

const LanguageContext = createContext();

export function LanguageProvider({ children }) {
  const [locale, setLocale] = useState('en');

  // Update document direction when language changes
  useEffect(() => {
    document.documentElement.dir = locale === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = locale;
  }, [locale]);

  const toggleLanguage = () => {
    setLocale(prev => prev === 'en' ? 'ar' : 'en');
  };

  const t = (key) => {
    try {
      const keys = key.split('.');
      let value = translations[locale];
      
      for (const k of keys) {
        value = value[k];
        if (value === undefined) return key;
      }
      
      return value;
    } catch (error) {
      console.error(`Translation missing for key: ${key}`);
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
    throw new Error('useLanguage must be used within LanguageProvider');
  }
  return context;
}; 