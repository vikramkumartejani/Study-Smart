'use client';
import { useLanguage } from '../context/LanguageContext';

export default function Consulting() {
  const { t, locale } = useLanguage();

  return (
    <div className={`w-full ${locale === 'ar' ? 'rtl' : 'ltr'}`}>
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-primary mb-4">{t('consultingTitle')}</h1>
          <p className="text-xl text-gray-600">{t('consultingDesc')}</p>
        </div>

        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-semibold mb-6">{t('consultingServices')}</h2>
          <ul className="space-y-4">
            {t('consultingList').map((service, index) => (
              <li key={index} className="flex items-start">
                <span className="mr-2">•</span>
                <span>{service}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
} 