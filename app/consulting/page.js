'use client';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../translations';

export default function Consulting() {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">{t.consultingTitle}</h1>
        <p className="text-xl text-gray-600">{t.consultingDesc}</p>
      </div>

      <div className="bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="p-8">
          <h2 className="text-2xl font-bold mb-6">{t.consultingServices}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {t.consultingList.map((service, index) => (
              <div key={index} className="flex items-center space-x-3 p-4 bg-gray-50 rounded-lg">
                <div className="flex-shrink-0">
                  <svg className="h-6 w-6 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <span className="text-gray-700">{service}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
} 