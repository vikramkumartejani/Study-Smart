'use client';
import { useLanguage } from '@/app/context/LanguageContext';
import Image from 'next/image';

const LocationMap = () => {
    const { t, locale } = useLanguage();
    return (
        <div className={`w-full ${locale === 'ar' ? 'rtl' : 'ltr'}`}>
            <section className="w-full py-14">
                <div className="text-white p-8 relative overflow-hidden h-[479px]">
                    <div className="relative z-10 max-w-[1380px] mx-auto h-full flex items-center">
                        <div className='bg-primary p-10 rounded-[16px] w-[468px]'>
                            <div className='flex items-center gap-2 mb-4'>
                                <Image src='/assets/our-location.svg' alt='location' width={40} height={40} />
                                <h2 className="text-[46px] leading-[57.5px] font-bold">{t('contactPage.location.title')}</h2>
                            </div>
                            <p className="mb-4 text-white text-[20px] leading-[25px] font-light">{t('contactPage.location.visitText')}</p>
                            <div className="space-y-2">
                                <p className="font-normal text-[20px] leading-[25px]">{t('contactPage.location.center')}</p>
                                <p className="font-normal text-[20px] leading-[25px]">{t('contactPage.location.address')}</p>
                                <p className="font-normal text-[20px] leading-[25px]">{t('contactPage.location.city')}</p>
                                <p className="font-normal text-[20px] leading-[25px]">{t('contactPage.location.country')}</p>
                            </div>
                        </div>
                    </div>
                    <div className="absolute inset-0 opacity-100">
                        <Image src="/assets/map-location.jpg" alt="Map Pattern" layout="fill" objectFit="cover" />
                    </div>
                </div>
            </section>
        </div>
    )
}

export default LocationMap