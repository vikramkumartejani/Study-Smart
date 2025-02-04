import { useLanguage } from "@/app/context/LanguageContext";

export default function HeroSection() {
  const { t, locale } = useLanguage();

  return (
    <section className="min-h-screen bg-[#FCFCFC]">
      <div className="md:block hidden absolute right-0 top-[94px] w-full md:w-[50%] h-[775px] rounded-bl-[80px] overflow-hidden">
        <img
          src="/assets/consulting-hero.jpeg"
          alt={t("consulting.hero.imageAlt")}
          className="w-full h-full object-cover object-[50%_30%]"
        />
      </div>
      <div className="max-w-[1280px] mx-auto md:ps-4">
        <div className="relative flex flex-col md:flex-row items-center md:h-[775px]">
          {/* Base Image */}
          <div className="w-full md:w-[55%] h-[60vh] rounded-b-[32px] overflow-hidden">
            <img
              src="/assets/consulting-hero.jpeg"
              alt={t("consulting.hero.imageAlt")}
              className="w-full h-full md:hidden object-cover"
            />
          </div>

          {/* Overlapping Content Box */}
          <div className="md:absolute md:top-1/2 md:mt-0 mt-[-150px] md:left-0 md:transform md:-translate-y-1/2 w-full md:w-[60%] md:mr-[-3rem] mt-6 md:mt-0 max-w-[733px] md:px-0 px-4">
            <div
              className={`bg-secondary p-[24px] rounded-[16px] w-full ${
                locale === "fa" ? "md:text-right" : "md:text-left"
              } text-center`}
            >
              <h4 className="md:text-[24px] text-white font-[600] font-montagu mb-2">
                {t("consulting.hero.subtitle")}
              </h4>
              <h1 className="text-white text-[28px] sm:text-[32px] md:text-[48px] font-[600] mb-4 md:mb-[24px] md:leading-[61.54px]">
                {t("consulting.hero.title")}
              </h1>
              <p className="text-white text-[18px] font-[300]">
                {t("consulting.hero.description")}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
