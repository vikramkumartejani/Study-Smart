'use client';
import { useLanguage } from '../context/LanguageContext';

export default function Training() {
  const { t, locale } = useLanguage();

  return (
    <div className={`w-full ${locale === 'ar' ? 'rtl' : 'ltr'}`}>
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-primary mb-4">{t('trainingTitle')}</h1>
          <p className="text-xl text-gray-600">{t('trainingDesc')}</p>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold mb-4">{t('trainingContent1')}</h3>
              <h3 className="text-2xl font-semibold mb-4">{t('trainingContent2')}</h3>
              <h3 className="text-2xl font-semibold mb-4">{t('trainingContent3')}</h3>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4">{t('trainingFeatures')}</h2>
              <ul className="space-y-4">
                {t('trainingList').map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 