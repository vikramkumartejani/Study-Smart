"use client";
import Link from "next/link";
import { useLanguage } from "../../context/LanguageContext";
import { usePathname } from "next/navigation";

export default function MenuLinks() {
  const { t } = useLanguage();
  const pathname = usePathname();

  const navItems = [
    { name: t("navbar.home"), href: "/" },
    { name: t("navbar.training"), href: "/training" },
    { name: t("navbar.consulting"), href: "/consulting" },
    { name: t("navbar.studyGroups"), href: "/study-groups" },
    { name: t("navbar.coaching"), href: "/coaching" },
    { name: t("navbar.professionalServices"), href: "/professional-services" },
    { name: t("navbar.mag"), href: "/mag" },
    { name: t("navbar.about"), href: "/about" },
    { name: t("navbar.contact"), href: "/contact" },
  ];

  return (
    <div className="flex justify-between items-center space-x-2 lg:space-x-6 rtl:space-x-reverse">
      {navItems.map((item, index) => (
        <Link
          key={index}
          href={item.href}
          className={`text-[14px] lg:text-[16px] leading-[20px] ${
            pathname === item.href ? "font-normal" : "font-light"
          } text-dark`}
        >
          {item.name}
        </Link>
      ))}
    </div>
  );
}
