"use client";

import { useLanguage } from "@/app/context/LanguageContext";
import Image from "next/image";

export default function Hero() {
  const { t, locale } = useLanguage();
  const isRTL = locale === "fa";

  return (
    <section className="min-h-screen bg-primary flex items-center justify-center px-4 md:px-8 md:py-[75px] py-[36px] mt-[-7px]">
      <div className="max-w-[1280px] w-full flex flex-col md:flex-row items-center gap-[40px] md:gap-12 lg:gap-16">
        {/* Left side - Circular Image */}
        <div
          className={`w-full xl:w-1/2 md:w-[40%] w-[278px] flex justify-center ${
            isRTL ? "md:order-2 md:justify-end" : "md:order-1 md:justify-start"
          }`}
        >
          <div className="xl:h-[673.38px] lg:h-[540px] bg-[#CBF2FE] md:h-[490px] h-[400px] xl:w-[468px] lg:w-[340px] md:w-[300px] w-[278px] rounded-full overflow-hidden bg-[#e5f0ff] relative">
            <Image
              width={468}
              height={673.38}
              src="/assets/hero-img.png"
              alt={t("home.hero.imageAlt")}
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Right side - Content */}
        <div
          className={`w-full md:w-[75%] text-white md:space-y-[32px] space-y-[16px] relative ${
            isRTL ? "order-1 md:text-right" : "order-2 md:text-left"
          } text-center`}
        >
          <h1 className="text-[28px] md:text-[39px] lg:text-[56px] font-[600] leading-[1.3]">
            {t("home.hero.title1")}
            <br />
            {t("home.hero.title2")}
            <br />
            {t("home.hero.title3")}
          </h1>

          <p className="text-[15px] sm:text-[16px] md:text-[20px] text-light font-bold">
            {t("home.hero.subtitle")}
          </p>

          <button
            className="hover:shadow-lg text-white font-[500] text-[18px] px-[40px] sm:py-4 py-3 rounded-full md:w-fit w-full transition-shadow duration-400"
            style={{
              background: "linear-gradient(90deg, #FF9063 0%, #FF5917 100%)",
            }}
          >
            {t("home.hero.button")}
          </button>
          <Image
            width={110}
            height={120}
            src="/assets/arrow.png"
            alt="arrow"
            className={`absolute bottom-[-70px] ${
              isRTL ? "right-[105px]" : "left-[-75px]"
            } md:block hidden`}
          />
        </div>
      </div>
    </section>
  );
}
