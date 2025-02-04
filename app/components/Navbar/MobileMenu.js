"use client";
import Link from "next/link";
import { useLanguage } from "../../context/LanguageContext";
import { IoLanguage } from "react-icons/io5";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoCloseOutline } from "react-icons/io5";
import { usePathname } from "next/navigation";
import { useState } from "react";
import Image from "next/image";

export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const { t, locale, toggleLanguage } = useLanguage();
  const pathname = usePathname();

  const navItems = [
    { name: t("navbar.home"), href: "/" },
    { name: t("navbar.training"), href: "/training" },
    { name: t("navbar.consulting"), href: "/consulting" },
    { name: t("navbar.studyGroups"), href: "/study-groups" },
    { name: t("navbar.coaching"), href: "/coaching" },
    { name: t("navbar.professionalServices"), href: "/services" },
    { name: t("navbar.mag"), href: "/mag" },
    { name: t("navbar.about"), href: "/about" },
    { name: t("navbar.contact"), href: "/contact" },
  ];

  return (
    <>
      <div className="flex items-center">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="inline-flex items-center justify-center p-2 rounded-md text-gray-600"
        >
          <span className="sr-only">
            {isOpen ? t("navbar.closeMenu") : t("navbar.openMenu")}
          </span>
          {!isOpen ? (
            <RxHamburgerMenu className="block h-6 w-6" />
          ) : (
            <IoCloseOutline className="block h-6 w-6" />
          )}
        </button>
      </div>

      {isOpen && (
        <div className="fixed top-0 left-0 right-0 bottom-0 bg-white z-50">
          <div className="py-3.5 px-2 flex justify-end items-end border-b">
            <button
              onClick={() => setIsOpen(false)}
              className="p-2 text-gray-600"
            >
              <IoCloseOutline className="h-6 w-6" />
            </button>
          </div>

          <div className="p-3.5 border-b flex items-center justify-between">
            <h2 className="text-base font-light text-dark">
              {t("navbar.language")}
            </h2>
            <button
              onClick={toggleLanguage}
              className="flex items-center justify-between gap-4 py-2"
            >
              <span className="text-sm font-light text-dark">
                {locale === "en" ? "EN" : "عربي"}
              </span>
              <span className="bg-[#F2F2F2] text-primary text-sm font-normal h-[34px] w-[36px] rounded-lg flex items-center justify-center">
                {locale === "en" ? "عربي" : "EN"}
              </span>
            </button>
          </div>

          <div className="py-2">
            {navItems.map((item, index) => (
              <Link
                key={index}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className={`flex items-center justify-between px-4 py-3 text-base text-dark ${
                  pathname === item.href ? "font-normal" : "font-light"
                }`}
              >
                <span>{item.name}</span>
                <span className="text-gray-400">
                  <Image
                    src="/assets/arrow-right.svg"
                    alt="arrow-right"
                    width={16}
                    height={16}
                    className={locale === "fa" ? "rotate-180" : ""}
                  />
                </span>
              </Link>
            ))}
          </div>
        </div>
      )}
    </>
  );
}
