'use client';
import { useLanguage } from '../context/LanguageContext';
import Image from 'next/image';
import Link from 'next/link';

export default function SingleBlogPage() {
    const { t, locale } = useLanguage();
    const popularPosts = t('singleBlogPage.popularPosts');
    const tags = t('singleBlogPage.tags');
    const relatedPosts = t('singleBlogPage.relatedPosts');

    return (
        <div className={`w-full bg-[#FCFCFC] ${locale === 'ar' ? 'rtl' : 'ltr'}`}>
            {/* Hero Banner */}
            <div className='px-4 sm:px-6 lg:px-8'>
                <div className="mt-8 relative lg:hidden block">
                    <input
                        type="text"
                        placeholder={t('singleBlogPage.searchPlaceholder')}
                        className="w-full h-[68px] px-6 pr-12 rounded-2xl border border-[#0000001A] bg-transparent outline-none placeholder:text-[#6D8CAD] text-dark text-[16px] leading-[20px] font-light"
                    />
                    <button className="absolute right-6 top-1/2 -translate-y-1/2">
                        <Image src="/assets/search-input.svg" alt="Search" width={20} height={20} />
                    </button>
                </div>
                <div className="mt-8 lg:mt-10 relative w-full max-w-[1380px] mx-auto h-[350px] sm:h-[450px]">
                    <Image
                        src="/assets/single-blog-hero.svg"
                        alt={t('singleBlogPage.title')}
                        fill
                        className="object-cover rounded-xl"
                    />
                </div>
            </div>

            <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 mt-6 md:pt-10 lg:pt-20">
                <div className="flex items-start justify-between gap-8">
                    {/* Main Content */}
                    <div className="w-full lg:max-w-[952px]">
                        <article className="mb-8">
                            <span className="text-[#6D8CAD] text-[14px] font-normal leading-[17.5px] mb-2 block">
                                {t('singleBlogPage.date')}
                            </span>
                            <h2 className="text-[35px] sm:text-[38px] leading-[42px] sm:leading-[47.5px] font-bold text-dark mb-6">
                                {t('singleBlogPage.title')}
                            </h2>
                            <p className="text-dark text-lg leading-[22.5px] font-light">
                                {t('singleBlogPage.content.intro')}
                            </p>
                            <Image src='/assets/single-blog.jpg' alt='single-blog' width={952} height={450} className='py-6 h-[350px] lg:h-[450px]' />
                            <p className="text-dark text-lg leading-[22.5px] font-light">
                                {t('singleBlogPage.content.middle')}
                            </p>
                            <p className="mt-6 text-dark text-lg leading-[22.5px] font-light">
                                {t('singleBlogPage.content.third')}
                            </p>
                            <div className='py-16 md:py-20 flex items-center gap-6'>
                                <Image src='/assets/comma.svg' alt='comma' width={92} height={80} className='w-[74px] h-[64px] md:w-[92px] md:h-[80px]' />
                                <p className='text-dark text-lg leading-[22.5px] font-light'>{t('singleBlogPage.quote')}</p>
                            </div>
                            <h2 className='text-[24px] leading-[30px] font-bold text-dark'>
                                {t('singleBlogPage.content.subTitle')}
                            </h2>
                            <p className="mt-4 text-dark text-lg leading-[22.5px] font-light">
                                {t('singleBlogPage.content.fourth')}
                            </p>
                            <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                                <Image
                                    src="/assets/single-blog-one.jpg"
                                    alt="Team collaboration"
                                    width={400}
                                    height={300}
                                    className="rounded-lg w-full"
                                />
                                <Image
                                    src="/assets/single-blog-two.jpg"
                                    alt="Team meeting"
                                    width={400}
                                    height={300}
                                    className="rounded-lg w-full"
                                />
                            </div>
                            <p className="mt-4 text-dark text-lg leading-[22.5px] font-light">
                                {t('singleBlogPage.content.conclusion')}
                            </p>
                            <div className='mt-6 flex items-center gap-4'>
                                <span className="text-dark text-lg leading-[22.5px] font-light">
                                    {t('singleBlogPage.shareText')}
                                </span>
                                <div className="flex gap-4">
                                    <Link href="#" >
                                        <Image src="/assets/twitter-logo.svg" alt="X" width={36} height={36} />
                                    </Link>
                                    <Link href="#">
                                        <Image src="/assets/facebook-logo.svg" alt="Facebook" width={36} height={36} />
                                    </Link>
                                </div>
                            </div>
                            {/* Popular Posts */}
                            <div className='mt-16 lg:hidden block'>
                                <h2 className="text-[20px] leading-[25px] font-bold text-dark mb-6">
                                    {t('singleBlogPage.popularPostsTitle')}
                                </h2>
                                <div className="mt-6 space-y-8">
                                    {popularPosts.map((post, index) => (
                                        <Link href="#" key={index} className="flex items-center gap-4">
                                            <Image
                                                src={post.image}
                                                alt={post.title}
                                                width={100}
                                                height={100}
                                                className="rounded-lg object-cover min-w-[100px] min-h-[100px]"
                                            />
                                            <div>
                                                <span className="text-[#6D8CAD] text-sm leading-[17.5px] font-normal mb-2 block">
                                                    {post.date}
                                                </span>
                                                <h3 className="text-base leading-[20px] font-light text-[#1F2833] line-clamp-2">
                                                    {post.title}
                                                </h3>
                                            </div>
                                        </Link>
                                    ))}
                                </div>
                            </div>

                            {/* Tags */}
                            <div className='mt-12 lg:hidden block'>
                                <h2 className="text-[20px] leading-[25px] font-bold text-dark mb-7">
                                    {t('singleBlogPage.tagsTitle')}
                                </h2>
                                <div className="flex flex-wrap gap-4">
                                    {tags.map((tag, index) => (
                                        <Link
                                            href="#"
                                            key={index}
                                            className="px-3 py-2 bg-[#F2F2F2] rounded-lg text-[#4D637B] text-base font-light leading-[20px] hover:bg-primary hover:text-white transition-colors"
                                        >
                                            {tag}
                                        </Link>
                                    ))}
                                </div>
                            </div>

                        </article>
                    </div>

                    {/* Sidebar */}
                    <div className="lg:block hidden max-w-[347px] w-full">
                        <div className="relative mb-8">
                            <input
                                type="text"
                                placeholder={t('singleBlogPage.searchPlaceholder')}
                                className="w-full h-[68px] px-6 pr-12 rounded-2xl border border-[#0000001A] bg-transparent outline-none placeholder:text-[#6D8CAD] text-dark text-[16px] leading-[20px] font-light"
                            />
                            <button className="absolute right-6 top-1/2 -translate-y-1/2">
                                <Image src="/assets/search-input.svg" alt="Search" width={20} height={20} />
                            </button>
                        </div>

                        <div className="sticky top-8 mt-16">
                            {/* Popular Posts */}
                            <div>
                                <h2 className="text-[20px] leading-[25px] font-bold text-dark mb-6">
                                    {t('singleBlogPage.popularPostsTitle')}
                                </h2>
                                <div className="mt-6 space-y-8">
                                    {popularPosts.map((post, index) => (
                                        <Link href="#" key={index} className="flex items-center gap-4">
                                            <Image
                                                src={post.image}
                                                alt={post.title}
                                                width={100}
                                                height={100}
                                                className="rounded-lg object-cover min-w-[100px] min-h-[100px]"
                                            />
                                            <div>
                                                <span className="text-[#6D8CAD] text-sm leading-[17.5px] font-normal mb-2 block">
                                                    {post.date}
                                                </span>
                                                <h3 className="text-base leading-[20px] font-light text-[#1F2833] line-clamp-2">
                                                    {post.title}
                                                </h3>
                                            </div>
                                        </Link>
                                    ))}
                                </div>
                            </div>

                            {/* Tags */}
                            <div className='mt-16'>
                                <h2 className="text-[20px] leading-[25px] font-bold text-dark mb-6">
                                    {t('singleBlogPage.tagsTitle')}
                                </h2>
                                <div className="flex flex-wrap gap-4">
                                    {tags.map((tag, index) => (
                                        <Link
                                            href="#"
                                            key={index}
                                            className="px-3 py-2 bg-[#F2F2F2] rounded-lg text-[#4D637B] text-base font-light leading-[20px] hover:bg-primary hover:text-white transition-colors"
                                        >
                                            {tag}
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Related Posts  */}
                <div className="mt-16 sm:mt-20 mb-16">
                    <div className='flex items-center gap-6 mb-6'>
                        <div className='w-full h-[1px] bg-[#0000001A]'></div>
                        <h2 className="text-[24px] leading-[30px] font-bold text-dark text-nowrap">
                            {t('singleBlogPage.relatedPostsTitle')}
                        </h2>
                        <div className='w-full h-[1px] bg-[#0000001A]'></div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {relatedPosts.map((post, index) => (
                            <div key={index} className='p-4 bg-white rounded-xl hover:shadow-sm transition-all duration-300'>
                                <Image
                                    src={post.image}
                                    alt={post.title}
                                    width={160}
                                    height={160}
                                />
                                <h3 className="text-[18px] leading-[22.5px] font-medium text-dark mt-4 mb-2">
                                    {post.title}
                                </h3>
                                <div className='mt-4 flex items-center justify-between'>
                                    <span className="text-[#4D637B] text-sm">{post.date}</span>
                                    <Link href="#" className="inline-flex items-center text-[#6D8CAD] text-[14px] font-normal leading-[17.5px]">
                                        <span className="sr-only">Read more</span>
                                        <Image src='/assets/mag-arrow.svg' alt='arrow' width={20} height={20} />
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}