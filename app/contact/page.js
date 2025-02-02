'use client';
import { useLanguage } from '../context/LanguageContext';
import Image from 'next/image';
import { FaInstagram, FaLinkedinIn, FaXTwitter, FaFacebookF } from 'react-icons/fa6';
import Hero from '../components/ContactUs/Hero';
import ContactInformation from '../components/ContactUs/ContactInformation';
import LocationMap from '../components/ContactUs/LocationMap';

export default function Contact() {
    const { t, locale } = useLanguage();

    return (
        <div className={`w-full ${locale === 'ar' ? 'rtl' : 'ltr'}`}>
            {/* Hero Section */}
            <Hero />

            {/* Contact Information */}
            <ContactInformation />

            {/* Location Map */}
            <LocationMap />

            {/* Contact Form */}
            <section className="py-16">
                <div className="max-w-[952px] mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-dark text-[30px] leading-[37.5px] font-bold mb-4">{t('contactPage.form.title')}</h2>
                        <p className="text-[#4D637B] text-[20px] leading-[25px] font-light">{t('contactPage.form.subtitle')}</p>
                    </div>
                    <form className="space-y-4 w-full max-w-[952px] mx-auto ">
                        <div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
                            <div className='space-y-4 w-full'>
                                <input
                                    type="text"
                                    placeholder='Full Name ...'
                                    className="w-full placeholder:text-[#6D8CAD] text-base leading-[20px] font-light px-6 h-[68px] border border-[#0000001A] rounded-2xl outline-none"
                                />
                                <input
                                    type="email"
                                    placeholder='Email Address ...'
                                    className="w-full placeholder:text-[#6D8CAD] text-base leading-[20px] font-light px-6 h-[68px] border border-[#0000001A] rounded-2xl outline-none"
                                />
                                <input
                                    type="text"
                                    placeholder='Subject ...'
                                    className="w-full placeholder:text-[#6D8CAD] text-base leading-[20px] font-light px-6 h-[68px] border border-[#0000001A] rounded-2xl outline-none"
                                />
                            </div>
                            <div>
                                <textarea
                                    rows="4"
                                    placeholder='Your Message ...'
                                    className="placeholder:text-[#6D8CAD] h-[236px] text-base leading-[20px] font-light resize-none w-full p-6 sm:h-full border border-[#0000001A] outline-none rounded-2xl"
                                ></textarea>
                            </div>
                        </div>
                        <div className='pt-2 sm:pt-4 w-full flex justify-center'>
                            <button
                                style={{
                                    background: "linear-gradient(90deg, #1848AD 0%, #11337A 100%)",
                                }}
                                className="w-full sm:w-fit px-5 sm:px-10 py-3.5 rounded-[31px] text-white text-[18px] leading-[22.5px] font-medium hover:opacity-80 transition-all duration-300"
                            >
                                {t('contactPage.form.submitButton')}
                            </button>
                        </div>
                    </form>
                </div>
            </section>

            {/* Social Links */}
            <section className="py-16 px-4 md:px-6 lg:px-8">
                <div className="max-w-[1380px] h-[492px] mx-auto text-center rounded-[40px] pt-4 px-4 sm:p-10" style={{ backgroundImage: "url('/assets/connect-on-professional-networks.jpg')", backgroundSize: "cover", backgroundPosition: "center" }}>
                    <div className='w-full h-full flex items-end sm:items-center justify-end'>
                        <div className='bg-white w-full rounded-[24px] p-6 sm:p-10 max-w-[548px] -mb-20 sm:-mb-0'>
                            <h2 className="text-dark text-[24px] sm:text-[30px] leading-[30px] sm:leading-[37.5px] font-bold mb-6">{t('contactPage.social.title')}</h2>
                            <p className="text-dark text-[18px] leading-[22.5px] font-light mb-6">{t('contactPage.social.subtitle')}</p>
                            <div className="flex justify-center space-x-6">
                                <a href="#" className="text-black hover:text-primary">
                                    <FaInstagram className="w-7 h-7" />
                                </a>
                                <a href="#" className="text-black hover:text-primary">
                                    <FaLinkedinIn className="w-7 h-7" />
                                </a>
                                <a href="#" className="text-black hover:text-primary">
                                    <FaXTwitter className="w-7 h-7" />
                                </a>
                                <a href="#" className="text-black hover:text-primary">
                                    <FaFacebookF className="w-7 h-7" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Newsletter */}
            <section className="pt-28 pb-14 sm:py-16">
                <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-dark text-[30px] leading-[37.5px] font-bold mb-2">{t('contactPage.newsletter.title')}</h2>
                    <p className="text-dark text-base leading-[20px] font-light mb-8">{t('contactPage.newsletter.subtitle')}</p>
                    <div className="flex gap-8 flex-col max-w-[466px] mx-auto">
                        <input
                            type="email"
                            placeholder={t('contactPage.newsletter.placeholder')}
                            className="flex-1 p-6 border border-[#0000006b] rounded-2xl outline-none placeholder:text-[#6D8CAD] text-dark text-[16px] font-light leading-[20px]"
                        />
                        <button className="border-2 border-[#1848AD] rounded-[31px] text-dark w-full sm:w-fit mx-auto px-10 py-4 text-[18px] font-medium leading-[22.5px] hover:text-white hover:bg-primary transition-colors">
                            {t('contactPage.newsletter.button')}
                        </button>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="pb-20 pt-12 md:py-16">
                <div className="max-w-[952px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <p className="text-dark text-[18px] leading-[22.5px] font-normal mb-10">{t('contactPage.cta.text')}</p>
                    <button
                        style={{
                            background: "linear-gradient(90deg, #1848AD 0%, #11337A 100%)",
                        }}
                        className="w-full sm:w-fit px-5 sm:px-10 py-4 rounded-[31px] text-white text-[18px] leading-[22.5px] font-medium hover:opacity-90 transition-all duration-300"
                    >
                        {t('contactPage.cta.button')}
                    </button>
                </div>
            </section>
        </div>
    );
} 