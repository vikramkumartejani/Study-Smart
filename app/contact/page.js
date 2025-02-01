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
                        <div className='grid grid-cols-2 gap-4'>
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
                                    className="placeholder:text-[#6D8CAD] text-base leading-[20px] font-light resize-none w-full p-6 h-full border border-[#0000001A] outline-none rounded-2xl"
                                ></textarea>
                            </div>
                        </div>
                        <div className='pt-4 w-full flex justify-center'>
                            <button
                                style={{
                                    background: "linear-gradient(90deg, #1848AD 0%, #11337A 100%)",
                                }}
                                className="w-full sm:w-fit px-5 sm:px-10 py-3.5 rounded-[31px] text-white text-sm sm:text-[18px] leading-[22.5px] font-medium hover:opacity-80 transition-all duration-300"
                            >
                                {t('contactPage.form.submitButton')}
                            </button>
                        </div>
                    </form>
                </div>
            </section>

            {/* Social Links */}
            <section className="py-16" style={{backgroundImage:"url('/assets/connect-on-professional-networks.jpg')", backgroundSize:"cover", backgroundPosition:"center"}}>
                <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-2xl font-bold mb-4">{t('contactPage.social.title')}</h2>
                    <p className="text-gray-600 mb-8">{t('contactPage.social.subtitle')}</p>
                    <div className="flex justify-center space-x-6">
                        <a href="#" className="text-gray-600 hover:text-primary">
                            <FaInstagram className="w-6 h-6" />
                        </a>
                        <a href="#" className="text-gray-600 hover:text-primary">
                            <FaLinkedinIn className="w-6 h-6" />
                        </a>
                        <a href="#" className="text-gray-600 hover:text-primary">
                            <FaXTwitter className="w-6 h-6" />
                        </a>
                        <a href="#" className="text-gray-600 hover:text-primary">
                            <FaFacebookF className="w-6 h-6" />
                        </a>
                    </div>
                </div>
            </section>

            {/* Newsletter */}
            <section className="bg-gray-50 py-16">
                <div className="max-w-[800px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-2xl font-bold mb-4">{t('contactPage.newsletter.title')}</h2>
                    <p className="text-gray-600 mb-8">{t('contactPage.newsletter.subtitle')}</p>
                    <div className="flex gap-4 max-w-md mx-auto">
                        <input
                            type="email"
                            placeholder={t('contactPage.newsletter.placeholder')}
                            className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-primary focus:border-primary"
                        />
                        <button className="bg-primary text-white px-6 py-2 rounded-lg hover:bg-primary-dark transition-colors">
                            {t('contactPage.newsletter.button')}
                        </button>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-16">
                <div className="max-w-[800px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <p className="text-gray-600 mb-8">{t('contactPage.cta.text')}</p>
                    <button className="bg-primary text-white px-8 py-3 rounded-lg hover:bg-primary-dark transition-colors">
                        {t('contactPage.cta.button')}
                    </button>
                </div>
            </section>
        </div>
    );
} 