'use client';
import { useState, useEffect } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import Logo from './Logo';
import MenuLinks from './MenuLinks';
import LanguageSelector from './LanguageSelector';
import MobileMenu from './MobileMenu';

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const { locale } = useLanguage();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 0);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <>
            <div className="xl:h-[100px]" />
            <nav
                className={`fixed top-0 left-0 right-0 z-50 bg-white transition-all duration-300 ${isScrolled ? 'border-b shadow-lg' : 'border-b'}`}
                style={{
                    boxShadow: isScrolled
                        ? "0px 15px 20px 0px #0D0D0D1A"
                        : "0px 15px 20px 0px #0D0D0D0D"
                }}
            >
                <div className={`max-w-[1440px] mx-auto px-4 sm:px-6 xl:px-8 py-4 ${locale === 'ar' ? 'rtl' : 'ltr'}`}>
                    <div className="flex justify-between">
                        {/* Desktop */}
                        <div className='w-full xl:flex justify-between hidden items-center'>
                            <Logo />
                            <MenuLinks />
                            <LanguageSelector />
                        </div>
                        {/* Tablet */}
                        <div className='xl:hidden hidden md:flex flex-col gap-4 w-full'>
                            <div className='pb-4 border-b border-[#0000001A] flex items-center justify-between w-full'>
                                <Logo />
                                <LanguageSelector />
                            </div>
                            <div>
                                <MenuLinks />
                            </div>
                        </div>
                        {/* Mobile */}
                        <div className='md:hidden flex items-center justify-between w-full'>
                            <Logo/>
                            <MobileMenu/>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    );
} 