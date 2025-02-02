import Image from "next/image";
import { useLanguage } from "@/app/context/LanguageContext";

export default function TrajectoryMapping() {
  const { t } = useLanguage();

  const offerings = [
    {
      icon: "/assets/magic-key-offering.svg",
      title: t("consulting.trajectoryMapping.offerings.item1"),
    },
    {
      icon: "/assets/map-key-offering.svg",
      title: t("consulting.trajectoryMapping.offerings.item2"),
    },
    {
      icon: "/assets/black-hole-key-offering.svg",
      title: t("consulting.trajectoryMapping.offerings.item3"),
    },
    {
      icon: "/assets/scanner-key-offering.svg",
      title: t("consulting.trajectoryMapping.offerings.item4"),
    },
    {
      icon: "/assets/calibration-key-offering.svg",
      title: t("consulting.trajectoryMapping.offerings.item5"),
    },
  ];

  return (
    <section className="bg-[#FCFCFC] px-4 md:px-8 md:py-[100px] py-[64px]">
      <div className="max-w-[1280px] mx-auto text-center">
        <div className="max-w-[758px] mx-auto flex flex-col gap-4 md:mb-[75px] mb-[56px] text-center">
          <h2 className="text-[28px] sm:text-[30px] sm:leading-[37.5px] leading-[36px] text-dark font-bold">
            {t("consulting.trajectoryMapping.title")}
          </h2>
          <h3 className="text-[20px] font-[300] text-middle">
            {t("consulting.trajectoryMapping.subtitle")}
          </h3>
          <p className="mx-auto font-[300] text-middle">
            {t("consulting.trajectoryMapping.description")}
          </p>
        </div>

        <h4 className="text-[18px] font-bold text-middle mb-6">
          {t("consulting.trajectoryMapping.offeringsTitle")}
        </h4>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 md:gap-[24px] mb-[56px] md:mb-[75px]">
          {offerings.map((offering, index) => (
            <div
              key={index}
              className="flex md:flex-col items-center gap-4 px-6 md:px-[32px] py-6 rounded-[16px] border border-[#0000001A] hover:shadow-md transition-shadow"
            >
              <Image
                src={offering.icon}
                alt={offering.title}
                width={64}
                height={64}
                className="md:w-[64px] md:h-[64px] w-[48px] h-[48px] min-w-[48px]"
              />
              <p className="text-[18px] text-dark font-[300] md:text-center text-left">
                {offering.title}
              </p>
            </div>
          ))}
        </div>

        <button
          className="md:w-fit w-full text-white px-[40px] py-4 rounded-full font-[500] text-[18px] hover:shadow-lg transition-shadow duration-400"
          style={{
            background: "linear-gradient(90deg, #1848AD 0%, #11337A 100%)",
          }}
        >
          {t("consulting.trajectoryMapping.buttonText")}
        </button>
      </div>
    </section>
  );
}
