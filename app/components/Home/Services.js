"use client";

import { useLanguage } from "@/app/context/LanguageContext";
import Image from "next/image";
import { FiMoreHorizontal } from "react-icons/fi";

const services = [
  {
    icon: "/assets/book.png",
    type: "training",
  },
  {
    icon: "/assets/map.png",
    type: "consulting",
  },
  {
    icon: "/assets/people.png",
    type: "studyGroups",
  },
  {
    icon: "/assets/clipboard-text.png",
    type: "coaching",
  },
  {
    icon: "/assets/star.png",
    type: "professional",
  },
];

export default function Services() {
  const { t } = useLanguage();

  return (
    <section className="bg-[#FCFCFC] px-4 md:px-8 md:py-[75px] py-[36px]">
      <div className="max-w-[1280px] mx-auto ">
        {/* Header */}
        <div className="text-center mb-[40px] md:mb-[75px] space-y-[14px] max-w-[595px] mx-auto">
          <h2 className="text-dark text-[28px] md:text-[30px] font-bold leading-[37.5px]">
            {t("home.services.header.title")}
          </h2>
          <p className="text-middle text-[16px] md:text-[20px] font-[300]">
            {t("home.services.header.subtitle")}
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 md:gap-px gap-[32px] md:bg-[#0000001A]">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-[#FCFCFC] text-center md:p-[24px] p-4 space-y-[16px]"
            >
              {/* Icon Container */}
              <div className="w-[72px] h-[72px] bg-[#f3f4f6] rounded-[16px] flex items-center justify-center mx-auto">
                <Image src={service.icon} alt="icon" width={40} height={40} />
              </div>

              {/* Title */}
              <h3 className="text-dark text-[24px] font-bold">
                {t(`home.services.${service.type}.title`)}
              </h3>

              {/* Description */}
              <p className="text-dark text-base font-[300]">
                {t(`home.services.${service.type}.description`)}
              </p>
            </div>
          ))}

          {/* Last Cell with More Icon */}
          <div className="md:flex hidden bg-[#FCFCFC] p-[24px] items-center justify-center">
            <FiMoreHorizontal className="w-[20px] min-w-[20px] h-[20px] text-light" />
          </div>
        </div>
      </div>
    </section>
  );
}
