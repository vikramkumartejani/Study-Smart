'use client';

import Image from "next/image";
import Link from "next/link";
import { IoMail, IoTime } from "react-icons/io5";
import {
  FaPhone,
  FaInstagram,
  FaXTwitter,
  FaLinkedinIn,
} from "react-icons/fa6";
import { useLanguage } from '../context/LanguageContext';

export default function Footer() {
  const { t, locale } = useLanguage();

  const socialIcons = {
    Instagram: FaInstagram,
    LinkedIn: FaLinkedinIn,
    Twitter: FaXTwitter,
  };

  // Define navigation data locally
  const navigation = {
    column1: [
      { name: t('home'), href: "/" },
      { name: t('mag'), href: "/mag" },
      { name: t('about'), href: "/about" },
      { name: t('contact'), href: "/contact" },
    ],
    column2: [
      { name: t('training'), href: "/training" },
      { name: t('consulting'), href: "/consulting" },
      { name: t('studyGroups'), href: "/study-groups" },
      { name: t('coaching'), href: "/coaching" },
      { name: t('professionalServices'), href: "/services" },
    ],
  };

  const footerData = {
    contactInfo: t('footer.contactInfo'),
    email: t('footer.email'),
    phone: t('footer.phone'),
    businessHours: t('footer.businessHours'),
    businessHoursText: t('footer.businessHoursText'),
    navigation: {
      column1: t('footer.navigation.column1'),
      column2: t('footer.navigation.column2')
    },
    copyright: t('footer.copyright'),
    socialLinks: t('footer.socialLinks')
  };

  return (
    <footer className="bg-primary text-white px-4 sm:px-6 lg:px-8 py-[40px]">
      <div className={`max-w-[1280px] mx-auto ${locale === 'ar' ? 'rtl' : 'ltr'}`}>
        <div className="grid grid-cols-1 md:grid-cols-[1.3fr_1fr] md:gap-8 gap-[80px] md:text-left text-center">
          {/* Contact Information */}
          <div className="space-y-[32px]">
            <h2 className="md:text-[18px] font-bold">{footerData.contactInfo}</h2>
            <div className="flex flex-col gap-[38px] md:items-start items-center">
              <div className={`flex items-center ${locale === 'ar' ? 'space-x-reverse' : ''} space-x-[8px]`}>
                <Image
                  src="/assets/email.png"
                  width={32}
                  height={32}
                  alt="email"
                  className="md:w-[32px] md:h-[32px] w-[24px] h-[24px]"
                />
                <div className="flex items-center gap-[8px]">
                  <span className="md:flex hidden font-[300]">{footerData.email}: </span>
                  <a
                    href="mailto:contact@studysmart.com"
                    className="font-[500] hover:text-white/85"
                  >
                    contact@studysmart.com
                  </a>
                </div>
              </div>
              <div className={`flex items-center ${locale === 'ar' ? 'space-x-reverse' : ''} space-x-[8px]`}>
                <Image
                  src="/assets/phone.png"
                  width={32}
                  height={32}
                  alt="phone"
                  className="md:w-[32px] md:h-[32px] w-[24px] h-[24px]"
                />
                <div className="w-full flex gap-[8px] items-center">
                  <span className="md:flex hidden font-[300]">{footerData.phone}: </span>
                  <a
                    href="tel:+15551234567"
                    className="font-[500] hover:text-white/85"
                  >
                    +1 (555) 123-4567
                  </a>
                </div>
              </div>
              <div className={`flex items-center ${locale === 'ar' ? 'space-x-reverse' : ''} space-x-[8px]`}>
                <Image
                  src="/assets/clock.png"
                  width={32}
                  height={32}
                  alt="clock"
                  className="md:w-[32px] md:h-[32px] w-[24px] h-[24px]"
                />
                <div className="w-full flex gap-[8px] items-center">
                  <span className="md:flex hidden font-[300]">
                    {footerData.businessHours}:
                  </span>
                  <span className="block font-[500]">
                    {footerData.businessHoursText}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Links */}
          <div className={`grid grid-cols-2 gap-8 ${locale === 'ar' ? 'rtl' : 'ltr'}`}>
            <div className="space-y-6">
              {navigation.column1.map((item, index) => (
                <Link
                  key={index}
                  href={item.href}
                  className="block text-base font-[300] hover:text-white/85"
                >
                  {item.name}
                </Link>
              ))}
            </div>
            <div className="space-y-6">
              {navigation.column2.map((item, index) => (
                <Link
                  key={index}
                  href={item.href}
                  className="block text-base font-[300] hover:text-white/85"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-[75px]">
          <div className={`flex flex-col md:flex-row items-center justify-between gap-[24px] ${locale === 'ar' ? 'rtl' : 'ltr'}`}>
            <div className="flex md:flex-row flex-col items-center gap-[32px]">
              <div className="relative">
                <Image
                  src="/assets/footer-logo.svg"
                  alt="logo"
                  width={169.38}
                  height={40}
                />
              </div>
              <span className="text-base text-light font-[300] md:text-left text-center">
                {footerData.copyright}
              </span>
            </div>

            <div className="flex space-x-[32px]">
              {[
                { name: 'Instagram', href: '#' },
                { name: 'LinkedIn', href: '#' },
                { name: 'Twitter', href: '#' }
              ].map((item) => {
                const Icon = socialIcons[item.name];
                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="text-white hover:text-white/85"
                    aria-label={item.name}
                  >
                    <Icon className="w-6 h-6" />
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
