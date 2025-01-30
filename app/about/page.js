'use client';
import Image from 'next/image';
import { useLanguage } from '../context/LanguageContext';

export default function About() {
    const { t } = useLanguage();

    return (
        <div className="w-full">
            {/* Who We Are Section */}
            <section className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="flex items-center justify-center md:flex-row flex-col gap-6 md:gap-10">
                    <Image
                        src="/assets/about-us-hero.png"
                        alt={t('whoWeAreImageAlt')}
                        width={347}
                        height={600}
                        className='sm:w-[347px] w-[231px]'
                        draggable={false}
                    />
                    <div className='md:max-w-[589px] text-center sm:text-left'>
                        <h2 className="text-primary text-[46px] leading-[57.5px] font-bold mb-4">{t('whoWeAreTitle')}</h2>
                        <h3 className="text-[18px] leading-[22px] font-normal text-dark mb-4">{t('whoWeAreSubtitle')}</h3>
                        <p className="text-dark text-[16px] sm:text-[18px] leading-[20px] sm:leading-[22.5px] font-light">{t('whoWeAreContent')}</p>
                    </div>
                </div>
            </section>

            {/* Our Visionary Perspective Section */}
            <section className=" text-white py-20" style={{ backgroundImage: "radial-gradient(50% 89.93% at 50% 50%, #1848AD 0%, #0A1E47 100%)" }}>
                <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <div className="max-w-[952px] mx-auto">
                        <Image
                            src="/assets/world.png"
                            alt={t('globeIconAlt')}
                            width={300}
                            height={300}
                            draggable={false}
                            className="mx-auto mb-4 sm:w-[300px] sm:h-[300px] h-[250px] w-[250px]"
                        />
                        <h2 className="text-[25px] sm:text-[46px] leading-[37.5px] sm:leading-[57.5px] font-bold mb-4">{t('visionaryTitle')}</h2>
                        <p className="text-[17px] sm:text-[20px] leading-[22.5px] sm:leading-[25px] font-light">{t('visionaryContent')}</p>
                    </div>
                </div>
            </section>

            {/* Core Commitments Section */}
            <section className="pt-20 sm:pt-[100px] md:pt-[160px] pb-10 md:pb-20 bg-white px-4 sm:px-6 lg:px-8">
                <div className="max-w-[1420px] mx-auto">
                    <h2 className="text-[28px] sm:text-[30px] leading-[37.5px] text-dark font-bold text-center mb-3 md:mb-4">{t('coreCommitmentsTitle')}</h2>
                    <p className="text-[20px] leading-[25px] font-light text-center text-middle">{t('coreCommitmentsSubtitle')}</p>

                    <div className="mt-12 w-full items-center justify-center flex flex-wrap gap-10">
                        {t('coreCommitments').map((commitment, index) => (
                            <div key={index} className="text-center md:max-w-[420px]">
                                <Image
                                    src={commitment.icon}
                                    alt={t('coreCommitmentAlts', { type: commitment.type })}
                                    width={64}
                                    height={64}
                                    className="mx-auto mb-5 sm:mb-4"
                                />
                                <p className="text-dark text-base font-light leading-[20px]">{commitment.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* The StudySmart Distinction Section */}
            <section className="pt-20 mx-auto px-4 sm:px-6 lg:px-8">
                <div className="max-w-[1440px] mx-auto">
                    <h2 className="text-[30px] leading-[37.5px] text-dark font-bold text-center mb-12">{t('distinctionTitle')}</h2>
                    <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                        {t('distinctions').map((distinction, index) => (
                            <div key={index} className="relative group">
                                <div className="relative max-h-[400px] lg:max-w-[347px] overflow-hidden rounded-[16px]">
                                    <Image
                                        src={distinction.image}
                                        alt={t('distinctionImageAlts', { type: distinction.type })}
                                        width={347}
                                        height={400}
                                        className="w-full object-cover"
                                    />
                                    <div className="pb-6 absolute inset-0 bg-gradient-to-t from-black/80 to-black/0 p-4 flex flex-col justify-end">
                                        <h6 className="text-white text-[18px] sm:text-[20px] leading-[25px] font-bold mb-2">{distinction.title}:</h6>
                                        <p className="text-white text-[15px] sm:text-base leading-[20px] font-light">{distinction.description}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Our Commitment to Excellence Section */}
            <section className='px-4 sm:px-6 lg:px-8'>
                <div className="w-full max-w-[1456px] mx-auto relative my-24 sm:my-[120px] md:my-[200px] px-4 sm:px-6 lg:px-8 rounded-[20px] sm:rounded-[40px]">
                    <div className='w-full max-w-[1356px] mx-auto py-16 sm:py-[128.5px]'>
                        <div className="rounded-[20px] sm:rounded-[40px] absolute inset-0 bg-[url('/assets/our-commitment-to-excellence.jpg')] bg-cover bg-center">
                            <div className="absolute inset-0 bg-[#0A1E4780] rounded-[20px] sm:rounded-[40px]"></div>
                        </div>
                        <div className="py-8 px-4 md:p-10 relative max-w-[1356px] bg-[#0A1E47CC] rounded-[24px] m-auto text-center text-white">
                            <h1 className="text-[24px] sm:text-[48px] font-semibold leading-[30.77px] sm:leading-[61px] mb-6">{t('commitmentTitle')}</h1>
                            <p className="text-white text-base sm:text-lg leading-[20px] sm:leading-[22.5px] font-light">{t('commitmentContent')}</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Join StudySmart Community Section */}
            <section className="w-full pb-20 bg-white px-4 sm:px-6 lg:px-8">
                <div className="max-w-[952px] mx-auto text-center">
                    <h2 className="text-[30px] leading-[37.5px] text-dark font-bold mb-4">{t('joinCommunityTitle')}</h2>
                    <p className="text-dark text-[16px] leading-[20px] font-light mb-10">{t('joinCommunityContent')}</p>
                    <button
                        style={{
                            background: "linear-gradient(90deg, #1848AD 0%, #11337A 100%)",
                        }}
                        className="w-full sm:w-fit px-5 sm:px-10 py-4 rounded-[31px] text-white text-sm sm:text-[18px] leading-[22.5px] font-medium hover:opacity-80 transition-all duration-300"
                    >
                        {t('elevateCareerButton')}
                    </button>
                </div>
            </section>
        </div>
    );
} 