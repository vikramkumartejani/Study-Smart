'use client';
import { useLanguage } from '@/app/context/LanguageContext';
import Image from 'next/image';

const ContactInformation = () => {
    const { t, locale } = useLanguage();
    return (
        <div className={`w-full ${locale === 'ar' ? 'rtl' : 'ltr'}`}>
            <section className="py-12 md:py-16">
                <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-[30px] leading-[37.5px] font-bold mb-4 text-dark">{t('contactPage.contactInfo.title')}</h2>
                        <p className="text-[#4D637B] text-[20px] leading-[25px] font-light">{t('contactPage.contactInfo.subtitle')}</p>
                    </div>
                    <div className="grid md:grid-cols-3 gap-6 sm:gap-8">
                        <div className="text-center">
                            <div className="mb-2 sm:mb-4">
                                <Image src="/assets/email.svg" alt="Email" width={64} height={64} className="mx-auto" />
                            </div>
                            <h3 className="font-light text-base leading-[20px] mb-2 sm:mb-4 text-dark">{t('contactPage.contactInfo.email')}</h3>
                            <p className='text-dark text-[16px] leading-[20px] font-medium'>contact@studysmart.com</p>
                        </div>
                        <div className="text-center">
                            <div className=" mb-2 sm:mb-4">
                                <Image src="/assets/email.svg" alt="Email" width={64} height={64} className="mx-auto" />
                            </div>
                            <h3 className="font-light text-base leading-[20px]  mb-2 sm:mb-4 text-dark">{t('contactPage.contactInfo.phone')}</h3>
                            <p className='text-dark text-[16px] leading-[20px] font-medium'>+1 (555) 123-4567</p>
                        </div>
                        <div className="text-center">
                            <div className=" mb-2 sm:mb-4">
                                <Image src="/assets/email.svg" alt="Email" width={64} height={64} className="mx-auto" />
                            </div>
                            <h3 className="font-light text-base leading-[20px]  mb-2 sm:mb-4 text-dark">{t('contactPage.contactInfo.businessHours')}:</h3>
                            <p className='text-dark text-[16px] leading-[20px] font-medium'>{t('contactPage.contactInfo.businessHoursText')}</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default ContactInformation