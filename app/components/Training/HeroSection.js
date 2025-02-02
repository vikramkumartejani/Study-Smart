import { useLanguage } from "@/app/context/LanguageContext";

export default function HeroSection() {
  const { locale, t } = useLanguage();

  return (
    <section className="min-h-screen bg-[#FCFCFC]">
      <div className="md:block hidden absolute left-0 top-[94px] w-full md:w-[50%] h-[775px] rounded-br-[80px] overflow-hidden">
        <img
          src="/assets/services.jpeg"
          alt={t("training.hero.imageAlt")}
          className="w-full h-full object-cover object-[50%_30%]"
        />
      </div>
      <div className="max-w-[1280px] mx-auto md:pe-4">
        <div className="relative flex flex-col md:flex-row items-center md:h-[775px]">
          {/* Base Image */}
          <div className="w-full md:w-[55%] h-[60vh] rounded-b-[32px] overflow-hidden">
            <img
              src="/assets/services2.jpeg"
              alt={t("training.hero.imageAlt")}
              className="w-full h-full md:hidden object-cover"
            />
          </div>

          {/* Overlapping Content Box */}
          <div className="md:absolute md:top-1/2 md:mt-0 mt-[-150px] md:right-0 md:transform md:-translate-y-1/2 w-full md:w-[60%] md:ml-[-3rem] mt-6 md:mt-0 max-w-[733px] md:px-0 px-4">
            <div
              className={`bg-primary p-[24px] rounded-[16px] w-full ${
                locale === "ar" ? "md:text-right" : "md:text-left"
              } text-center`}
            >
              <h1 className="text-white text-[28px] sm:text-[32px] md:text-[48px] font-[600] mb-4 md:mb-[24px] md:leading-[61.54px]">
                {t("training.hero.title")}
              </h1>
              <p className="text-white text-[18px] font-[300]">
                {t("training.hero.description")}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
