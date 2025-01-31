'use client';
import Link from 'next/link';
import { useLanguage } from '../../context/LanguageContext';
import { usePathname } from 'next/navigation';

export default function MenuLinks() {
    const { t } = useLanguage();
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

    return (
        <div className="flex justify-between items-center space-x-2 lg:space-x-6 rtl:space-x-reverse">
            {navItems.map((item, index) => (
                <Link
                    key={index}
                    href={item.href}
                    className={`text-[14px] lg:text-[16px] leading-[20px] ${pathname === item.href ? 'font-normal' : 'font-light'} text-dark`}
                >
                    {item.name}
                </Link>
            ))}
        </div>
    );
} 