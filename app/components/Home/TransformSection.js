"use client";

import { useLanguage } from "@/app/context/LanguageContext";

export default function TransformSection() {
  const { t } = useLanguage();

  return (
    <section className="bg-[#FCFCFC] px-4 md:px-8 md:py-[75px] py-[36px]">
      <div className="max-w-[1280px] mx-auto flex md:flex-row flex-col gap-8 md:gap-16 items-center">
        {/* Left Column - Image */}
        <div className="relative md:w-[45%]">
          <div className="rounded-[40px] overflow-hidden bg-[#f3f4f6]">
            <img
              src="/assets/doctor.jpeg"
              alt={t("home.transform.imageAlt")}
              className="w-full md:h-[565.62px] h-[382px] transform scale-x-[-1] object-cover"
            />
          </div>
        </div>

        {/* Right Column - Text Content */}
        <div className="text-center md:text-left md:w-[60%]">
          <h1 className="text-[28px] sm:text-[32px] md:text-[38px] lg:text-[44px] font-[300] text-[#1e3a8a] lg:leading-[61.54px] md:leading-[55px] text-center">
            {t("home.transform.title")}
          </h1>
        </div>
      </div>
    </section>
  );
}
