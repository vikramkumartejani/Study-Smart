"use client";
import Image from "next/image";
import { useLanguage } from "@/app/context/LanguageContext";

export default function DiscoverSection() {
  const { t } = useLanguage();

  return (
    <section className="bg-primary">
      <div className="bg-[#FCFCFC] px-4 md:px-8 py-[75px] rounded-br-[64px]">
        <div className="max-w-[1280px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-[16px] items-center">
          {/* Left Column - Text Content */}
          <div className="space-y-4 md:order-1 order-2">
            <h2 className="text-[25px] md:text-[34px] font-bold text-dark md:leading-[37.5px] leading-[36px]">
              {t("home.discover.title")}
            </h2>

            <p className="text-middle text-base font-[300] pb-[24px]">
              {t("home.discover.description")}
            </p>

            <button
              className="hover:shadow-lg text-white text-[18px] font-[500] px-[40px] sm:py-4 py-3 rounded-full transition-shadow duration-400 md:w-fit w-full"
              style={{
                background: "linear-gradient(90deg, #1848AD 0%, #11337A 100%)",
              }}
            >
              {t("home.discover.button")}
            </button>
          </div>

          {/* Right Column - Image with Play Button */}
          <div className="relative rounded-[16px] overflow-hidden md:order-2 order-1">
            <img
              src="/assets/discover-video-img.png"
              alt="Introduction Video"
              className="w-full h-auto rounded-[16px]"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="bg-secondary rounded-full flex items-center justify-center ps-[4px] cursor-pointer hover:bg-[#f4511e] transition-colors duration-200 w-[80px] h-[80px]">
                <Image
                  src="/assets/play-icon.svg"
                  alt="play-icon"
                  width={54.67}
                  height={54.67}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
