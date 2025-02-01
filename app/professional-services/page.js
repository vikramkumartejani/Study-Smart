'use client';
import { useLanguage } from '../context/LanguageContext';
import Image from 'next/image';
import Link from 'next/link';

export default function ProfessionalServices() {
    const { t, locale } = useLanguage();

    const services = [
        {
            icon: '/assets/project-icon.svg',
            title: t('professionalServicesPage.services.projectAssistance.title'),
            description: t('professionalServicesPage.services.projectAssistance.description')
        },
        {
            icon: '/assets/immigration-icon.svg',
            title: t('professionalServicesPage.services.immigration.title'),
            description: t('professionalServicesPage.services.immigration.description')
        },
        {
            icon: '/assets/patent-icon.svg',
            title: t('professionalServicesPage.services.patent.title'),
            description: t('professionalServicesPage.services.patent.description')
        },
        {
            icon: '/assets/resume-icon.svg',
            title: t('professionalServicesPage.services.resume.title'),
            description: t('professionalServicesPage.services.resume.description')
        },
        {
            icon: '/assets/research-icon.svg',
            title: t('professionalServicesPage.services.research.title'),
            description: t('professionalServicesPage.services.research.description')
        }
    ];

    return (
        <div className={`w-full ${locale === 'ar' ? 'rtl' : 'ltr'}`}>
            {/* Hero Section */}
            <section className="relative bg-[#EBF5FF] overflow-hidden">
                <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
                    <div className="flex flex-col lg:flex-row items-center gap-8">
                        <div className="lg:w-1/2">
                            <h1 className="text-[40px] leading-[50px] font-bold text-dark mb-4">
                                {t('professionalServicesPage.hero.title')}
                            </h1>
                            <p className="text-[#4D637B] text-lg">
                                {t('professionalServicesPage.hero.description')}
                            </p>
                        </div>
                        <div className="lg:w-1/2">
                            <Image
                                src="/assets/professional-services-hero.png"
                                alt="Professional Services"
                                width={600}
                                height={400}
                                className="rounded-lg"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Services Navigation */}
            <section className="py-16">
                <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-[30px] leading-[37.5px] font-bold text-dark mb-4">
                            {t('professionalServicesPage.navigation.title')}
                        </h2>
                        <p className="text-[#4D637B] text-xl">
                            {t('professionalServicesPage.navigation.subtitle')}
                        </p>
                    </div>
                    <div className="grid md:grid-cols-3 gap-8">
                        {services.map((service, index) => (
                            <div key={index} className="text-center p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
                                <div className="mb-4">
                                    <Image
                                        src={service.icon}
                                        alt={service.title}
                                        width={64}
                                        height={64}
                                        className="mx-auto"
                                    />
                                </div>
                                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                                <p className="text-[#4D637B]">{service.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Detailed Sections */}
            <section className="py-16">
                <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-12 gap-8">
                        {/* Left Column - Number 5 */}
                        <div className="col-span-4">
                            <div className="sticky top-24">
                                <div className="flex items-start gap-4">
                                    <h2 className="text-[120px] leading-[120px] font-light text-[#FF5C39]">5</h2>
                                    <div className="mt-4">
                                        <p className="text-[24px] leading-[30px] text-[#FF5C39] font-light">
                                            {locale === 'ar' ? 'خدماتنا' : 'Our'}
                                        </p>
                                        <p className="text-[40px] leading-[48px] text-[#FF5C39] font-bold uppercase">
                                            {locale === 'ar' ? 'المهنية' : 'Professional'}<br />
                                            {locale === 'ar' ? '' : 'Services'}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Right Column - Services List */}
                        <div className="col-span-8 space-y-16 relative">
                            {/* Vertical Line */}
                            <div className="absolute left-1 top-2 bottom-2 w-[1px] bg-[#0038FF] opacity-20"></div>

                            {/* Project Assistance */}
                            <div className="flex flex-col gap-4">
                                <div className="flex items-start gap-3 relative">
                                    <div className="w-2 h-2 rounded-full bg-[#0038FF] mt-4 relative z-10"></div>
                                    <div className="flex-1">
                                        <h3 className="text-[30px] leading-[37.5px] font-bold text-dark">
                                            {t('professionalServicesPage.sections.project.title')}
                                        </h3>
                                        <p className="text-[20px] leading-[25px] font-light text-[#4D637B]">
                                            {t('professionalServicesPage.sections.project.subtitle')}
                                        </p>
                                        <p className="text-base leading-[20px] font-light text-[#4D637B] mt-2">
                                            {t('professionalServicesPage.sections.project.description')}
                                        </p>
                                        <Link
                                            href="#"
                                            className="inline-flex items-center gap-2 text-[#0038FF] hover:text-[#0038FF]/80 transition-colors mt-4"
                                        >
                                            <span>{t('professionalServicesPage.sections.project.cta')}</span>
                                            <span className={locale === 'ar' ? 'rotate-180' : ''}>→</span>
                                        </Link>
                                    </div>
                                </div>
                            </div>

                            {/* Immigration Services */}
                            <div className="flex flex-col gap-4">
                                <div className="flex items-start gap-3 relative">
                                    <div className="w-2 h-2 rounded-full bg-[#0038FF] mt-4 relative z-10"></div>
                                    <div className="flex-1">
                                        <h3 className="text-[30px] leading-[37.5px] font-bold text-dark">
                                            {t('professionalServicesPage.sections.immigration.title')}
                                        </h3>
                                        <p className="text-[20px] leading-[25px] font-light text-[#4D637B]">
                                            {t('professionalServicesPage.sections.immigration.subtitle')}
                                        </p>
                                        <p className="text-base leading-[20px] font-light text-[#4D637B] mt-2">
                                            {t('professionalServicesPage.sections.immigration.description')}
                                        </p>
                                        <Link
                                            href="#"
                                            className="inline-flex items-center gap-2 text-[#0038FF] hover:text-[#0038FF]/80 transition-colors mt-4"
                                        >
                                            <span>{t('professionalServicesPage.sections.immigration.cta')}</span>
                                            <span className={locale === 'ar' ? 'rotate-180' : ''}>→</span>
                                        </Link>
                                    </div>
                                </div>
                            </div>

                            {/* Patent Registration */}
                            <div className="flex flex-col gap-4">
                                <div className="flex items-start gap-3 relative">
                                    <div className="w-2 h-2 rounded-full bg-[#0038FF] mt-4 relative z-10"></div>
                                    <div className="flex-1">
                                        <h3 className="text-[30px] leading-[37.5px] font-bold text-dark">
                                            {t('professionalServicesPage.sections.patent.title')}
                                        </h3>
                                        <p className="text-[20px] leading-[25px] font-light text-[#4D637B]">
                                            {t('professionalServicesPage.sections.patent.subtitle')}
                                        </p>
                                        <p className="text-base leading-[20px] font-light text-[#4D637B] mt-2">
                                            {t('professionalServicesPage.sections.patent.description')}
                                        </p>
                                        <Link
                                            href="#"
                                            className="inline-flex items-center gap-2 text-[#0038FF] hover:text-[#0038FF]/80 transition-colors mt-4"
                                        >
                                            <span>{t('professionalServicesPage.sections.patent.cta')}</span>
                                            <span className={locale === 'ar' ? 'rotate-180' : ''}>→</span>
                                        </Link>
                                    </div>
                                </div>
                            </div>

                            {/* Resume Building */}
                            <div className="flex flex-col gap-4">
                                <div className="flex items-start gap-3 relative">
                                    <div className="w-2 h-2 rounded-full bg-[#0038FF] mt-4 relative z-10"></div>
                                    <div className="flex-1">
                                        <h3 className="text-[30px] leading-[37.5px] font-bold text-dark">
                                            {t('professionalServicesPage.sections.resume.title')}
                                        </h3>
                                        <p className="text-[20px] leading-[25px] font-light text-[#4D637B]">
                                            {t('professionalServicesPage.sections.resume.subtitle')}
                                        </p>
                                        <p className="text-base leading-[20px] font-light text-[#4D637B] mt-2">
                                            {t('professionalServicesPage.sections.resume.description')}
                                        </p>
                                        <Link
                                            href="#"
                                            className="inline-flex items-center gap-2 text-[#0038FF] hover:text-[#0038FF]/80 transition-colors mt-4"
                                        >
                                            <span>{t('professionalServicesPage.sections.resume.cta')}</span>
                                            <span className={locale === 'ar' ? 'rotate-180' : ''}>→</span>
                                        </Link>
                                    </div>
                                </div>
                            </div>

                            {/* Research Investment */}
                            <div className="flex flex-col gap-4">
                                <div className="flex items-start gap-3 relative">
                                    <div className="w-2 h-2 rounded-full bg-[#0038FF] mt-4 relative z-10"></div>
                                    <div className="flex-1">
                                        <h3 className="text-[30px] leading-[37.5px] font-bold text-dark">
                                            {t('professionalServicesPage.sections.research.title')}
                                        </h3>
                                        <p className="text-[20px] leading-[25px] font-light text-[#4D637B]">
                                            {t('professionalServicesPage.sections.research.subtitle')}
                                        </p>
                                        <p className="text-base leading-[20px] font-light text-[#4D637B] mt-2">
                                            {t('professionalServicesPage.sections.research.description')}
                                        </p>
                                        <Link
                                            href="#"
                                            className="inline-flex items-center gap-2 text-[#0038FF] hover:text-[#0038FF]/80 transition-colors mt-4"
                                        >
                                            <span>{t('professionalServicesPage.sections.research.cta')}</span>
                                            <span className={locale === 'ar' ? 'rotate-180' : ''}>→</span>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="bg-[#EBF5FF] py-16">
                <div className="max-w-[800px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <p className="text-[#4D637B] text-lg mb-8">
                        {t('professionalServicesPage.cta.text')}
                    </p>
                    <button className="bg-primary text-white px-8 py-3 rounded-full hover:bg-primary-dark transition-colors">
                        {t('professionalServicesPage.cta.button')}
                    </button>
                </div>
            </section>
        </div>
    );
} 