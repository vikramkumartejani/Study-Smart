'use client';
import { useLanguage } from '../context/LanguageContext';
import Image from 'next/image';
import Link from 'next/link';

export default function Mag() {
    const { t, locale } = useLanguage();

    // Update the arrays to use translations
    const recentArticles = t('magPage.sections.recentArticles.articles').map(article => ({
        ...article,
        image: '/assets/art-one.jpg'
    }));

    const trendingTopics = t('magPage.sections.trendingTopics.topics').map(topic => ({
        ...topic,
        image: '/assets/trending-topics.jpg'
    }));

    const quickLinks = t('magPage.sections.quickLinks.articles').map(link => ({
        ...link,
        image: '/assets/mag-two.jpg'
    }));

    return (
        <div className={`w-full bg-[#FCFCFC] ${locale === 'ar' ? 'rtl' : 'ltr'}`}>
            {/* Hero Article */}
            <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 pt-28 md:pt-44 pb-16 xl:py-16">
                <div className="flex items-center lg:items-start lg:flex-row flex-col gap-4">
                    <div className="relative">
                        <Image
                            src="/assets/mag-one.png"
                            alt="Featured Article"
                            className="h-[392px] max-w-full lg:max-w-[500px] xl:max-w-[650px] rounded-xl object-cover"
                            width={709}
                            height={392}
                        />
                    </div>
                    <div className="flex flex-col justify-center mt-2 lg:mt-4">
                        <span className="text-[#6D8CAD] text-[16px] leading-[20px] font-normal mb-2 lg:mb-6">
                            {t('magPage.hero.date')}
                        </span>
                        <h2 className="text-[30px] leading-[37.5px] font-bold text-dark mb-2 lg:mb-6">
                            {t('magPage.hero.title')}
                        </h2>
                        <p className="text-[#4D637B] text-lg leading-[22.5px] font-light mb-8 lg:mb-10">
                            {t('magPage.hero.description')}
                        </p>
                        <Link
                            href="#"
                            className="inline-flex items-center justify-center text-dark hover:text-white text-[18px] font-medium border-2 border-[#1848AD] w-full lg:w-[202px] h-[55px] rounded-[31px] group hover:bg-[#1848AD] transition-all duration-300"
                        >
                            <span className='mr-2'>{t('magPage.hero.readMore')}</span>
                            <Image 
                                src='/assets/mag-arrow.svg' 
                                alt='arrow' 
                                width={20} 
                                height={20} 
                                className='group-hover:hidden block' 
                            />
                            <Image 
                                src='/assets/white-arrow.svg' 
                                alt='arrow' 
                                width={20} 
                                height={20} 
                                className='hidden group-hover:block' 
                            />
                        </Link>
                    </div>
                </div>
            </div>

            {/* Quick Links */}
            <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 pt-[26px] pb-10">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {quickLinks.map((link, index) => (
                        <div key={index} className='p-4 bg-white rounded-xl hover:shadow-sm transition-all duration-300'>
                            <Image
                                src={link.image}
                                alt={link.title}
                                width={160}
                                height={160}
                            />
                            <h3 className="text-[18px] leading-[22.5px] font-medium text-dark mt-4 mb-2">
                                {link.title}
                            </h3>
                            <p className="text-[#4D637B] text-base leading-[20px] font-light">
                                {link.description}
                            </p>
                            <div className='mt-4 flex items-center justify-between'>
                                <span className="text-[#4D637B] text-sm">{link.date}</span>
                                <Link href="#" className="inline-flex items-center text-[#6D8CAD] text-[14px] font-normal leading-[17.5px]">
                                    <span className="sr-only">Read more</span>
                                    <Image src='/assets/mag-arrow.svg' alt='arrow' width={20} height={20} />
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Recent Articles */}
            <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="flex justify-between items-center mb-4">
                    <h2 className="text-[30px] leading-[37.5px] font-bold text-dark">
                        {t('magPage.sections.recentArticles.title')}
                    </h2>
                    <Link href="#" className="text-[#1848AD] text-[14px] font-normal leading-[17.5px] flex items-center gap-2">
                        {t('magPage.hero.seeAll')}
                        <Image src='/assets/articles-arrow.svg' alt='arrow' width={20} height={20} />
                    </Link>
                </div>
                {/* Recent Articles Cards */}
                <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
                    {recentArticles.map((article, index) => (
                        <div key={index} className='flex items-center gap-4'>
                            <Image 
                                src={article.image} 
                                alt={article.title} 
                                width={100} 
                                height={100} 
                            />
                            <div>
                                <h4 className='text-[#6D8CAD] text-[14px] font-normal leading-[17.5px] mb-2'>
                                    {article.date}
                                </h4>
                                <p className='text-dark text-[16px] leading-[20px] font-light'>
                                    {article.title}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Trending Topics */}
            <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
                <div className="flex justify-between items-center mb-4">
                    <h2 className="text-[30px] leading-[37.5px] font-bold text-dark">
                        {t('magPage.sections.trendingTopics.title')}
                    </h2>
                    <Link href="#" className="text-[#1848AD] text-[14px] font-normal leading-[17.5px] flex items-center gap-2">
                        See All
                        <Image src='/assets/articles-arrow.svg' alt='arrow' width={20} height={20} />
                    </Link>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                    {trendingTopics.map((topic, index) => (
                        <div key={index} className='p-4 bg-white rounded-xl hover:shadow-sm transition-all duration-300'>
                            <Image
                                src={topic.image}
                                alt={topic.title}
                                className="rounded-xl"
                                width={315}
                                height={160}
                            />
                            <div>
                                <h3 className="text-[18px] leading-[22.5px] font-medium text-dark mt-4">
                                    {topic.title}
                                </h3>
                                <p className="text-[#4D637B] text-base leading-[20px] font-light my-2">
                                    {topic.description}
                                </p>
                                <Link href="#" className="text-black flex items-end justify-end">
                                    <Image src='/assets/mag-arrow.svg' alt='arrow' width={20} height={20} />
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}