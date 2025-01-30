'use client';
import Link from 'next/link';
import Image from 'next/image';
import { useState, useRef, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { IoLanguage } from "react-icons/io5";
import { IoChevronDownOutline } from "react-icons/io5";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoCloseOutline } from "react-icons/io5";
import { usePathname } from 'next/navigation';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [isLangOpen, setIsLangOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const { locale, toggleLanguage, t } = useLanguage();
    const langDropdownRef = useRef(null);
    const pathname = usePathname();

    const navItems = [
        { name: t('home'), href: '/' },
        { name: t('training'), href: '/training' },
        { name: t('consulting'), href: '/consulting' },
        { name: t('studyGroups'), href: '/study-groups' },
        { name: t('coaching'), href: '/coaching' },
        { name: t('professionalServices'), href: '/services' },
        { name: t('mag'), href: '/mag' },
        { name: t('about'), href: '/about' },
        { name: t('contact'), href: '/contact' },
    ];

    useEffect(() => {
        function handleClickOutside(event) {
            if (langDropdownRef.current && !langDropdownRef.current.contains(event.target)) {
                setIsLangOpen(false);
            }
        }

        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 0) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <>
            <div className="h-[80px] sm:h-[100px]" />

            <nav
                className={`fixed top-0 left-0 right-0 z-50 bg-white transition-all duration-300 ${isScrolled ? 'border-b shadow-lg' : 'border-b'
                    }`}
                style={{
                    boxShadow: isScrolled
                        ? "0px 15px 20px 0px #0D0D0D1A"
                        : "0px 15px 20px 0px #0D0D0D0D"
                }}
            >
                <div className={`max-w-[1440px] mx-auto px-4 sm:px-6 xl:px-8 py-4 ${locale === 'ar' ? 'rtl' : 'ltr'}`}>
                    <div className="flex justify-between">
                        <div className="flex items-center">
                            <Link href="/" className="flex-shrink-0">
                                <Image
                                    src="/assets/logo.svg"
                                    alt="StudySmart"
                                    width={260}
                                    height={60}
                                    priority
                                    className='md:w-[260px] md:h-[60px] w-[200px] h-[48px]'
                                />
                            </Link>
                        </div>

                        {/* Desktop Menu */}
                        <div className="hidden xl:flex items-center space-x-6 rtl:space-x-reverse">
                            {navItems.map((item, index) => (
                                <Link
                                    key={index}
                                    href={item.href}
                                    className={`text-[16px] leading-[20px] ${pathname === item.href ? 'font-normal' : 'font-light'
                                        } text-dark`}
                                >
                                    {item.name}
                                </Link>
                            ))}

                        </div>
                        {/* Language Selector */}
                        <div className="relative hidden xl:flex items-center justify-center" ref={langDropdownRef}>
                            <button
                                onClick={() => setIsLangOpen(!isLangOpen)}
                                className="flex items-center space-x-1 text-gray-600 hover:text-blue-600"
                            >
                                <IoLanguage className="w-4 h-4" />
                                <span>{locale.toUpperCase()}</span>
                                <IoChevronDownOutline
                                    className={`w-4 h-4 transition-transform duration-200 ${isLangOpen ? 'rotate-180' : ''}`}
                                />
                            </button>

                            {/* Dropdown Menu */}
                            {isLangOpen && (
                                <div className="absolute right-0 top-14 py-2 w-24 bg-white rounded-lg shadow-xl border border-gray-100">
                                    <button
                                        onClick={() => {
                                            toggleLanguage();
                                            setIsLangOpen(false);
                                        }}
                                        className={`block w-full px-4 py-2 text-sm text-left hover:bg-gray-50 ${locale === 'ar' ? 'text-gray-600' : 'text-blue-600'}`}
                                    >
                                        EN
                                    </button>
                                    <button
                                        onClick={() => {
                                            toggleLanguage();
                                            setIsLangOpen(false);
                                        }}
                                        className={`block w-full px-4 py-2 text-sm text-left hover:bg-gray-50 ${locale === 'en' ? 'text-gray-600' : 'text-blue-600'}`}
                                    >
                                        عربي
                                    </button>
                                </div>
                            )}
                        </div>

                        {/* Mobile menu button */}
                        <div className="xl:hidden flex items-center">
                            <button
                                onClick={() => setIsOpen(!isOpen)}
                                className="inline-flex items-center justify-center p-2 rounded-md text-gray-600"
                            >
                                <span className="sr-only">{isOpen ? t('closeMenu') : t('openMenu')}</span>
                                {!isOpen ? (
                                    <RxHamburgerMenu className="block h-6 w-6" />
                                ) : (
                                    <IoCloseOutline className="block h-6 w-6" />
                                )}
                            </button>
                        </div>
                    </div>
                </div>

                {/* Mobile Menu */}
                {isOpen && (
                    <div className="xl:hidden bg-white">
                        <div className="px-2 pt-2 pb-3 space-y-1">
                            {navItems.map((item, index) => (
                                <Link
                                    key={index}
                                    href={item.href}
                                    className={`block px-3 py-2 text-gray-600 ${pathname === item.href ? 'font-normal' : 'font-light'
                                        }`}
                                >
                                    {item.name}
                                </Link>
                            ))}

                            {/* Mobile Language Selector */}
                            <div className="px-3 py-2">
                                <button
                                    onClick={toggleLanguage}
                                    className="flex items-center space-x-2 text-gray-600 hover:text-blue-600"
                                >
                                    <IoLanguage className="w-4 h-4" />
                                    <span>{locale === 'en' ? 'عربي' : 'EN'}</span>
                                </button>
                            </div>
                        </div>
                    </div>
                )}
            </nav>
        </>
    );
}