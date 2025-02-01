'use client';
import React from 'react'
import Image from 'next/image';
import { useLanguage } from '@/app/context/LanguageContext';

const Hero = () => {
    const { t, locale } = useLanguage();
    return (
        <div className={`w-full ${locale === 'ar' ? 'rtl' : 'ltr'}`}>
            <section className="max-w-[1440px] w-full mx-auto px-4 sm:px-6 lg:px-8 pt-24 md:pt-44 xl:pt-16 pb-16">
                <div className="flex justify-center flex-col lg:flex-row items-center gap-10">
                    <div className="w-full md:max-w-[589px]">
                        <h2 className="text-[46px] max-w-[350px] leading-[57px] font-bold text-[#1848AD] mb-4">{t('contactPage.title')}</h2>
                        <h2 className="text-lg leading-[22.5px] font-normal text-dark mb-4">{t('contactPage.subtitle')}</h2>
                        <p className="text-dark text-[18px] font-light leading-[22.5px]">{t('contactPage.description')}</p>
                    </div>
                    <div>
                        <Image
                            src="/assets/connect-with-studysmart.jpg"
                            alt="Contact StudySmart"
                            width={347}
                            height={600}
                            className="rounded-lg"
                        />
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Hero