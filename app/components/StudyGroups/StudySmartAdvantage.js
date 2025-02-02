"use client";
import Image from "next/image";
import { useLanguage } from "@/app/context/LanguageContext";

export default function StudySmartAdvantage() {
  const { t } = useLanguage();

  const studyAndReasearchData = [
    {
      title: t("studyGroups.advantage.studyCircles.title"),
      bgColor: "linear-gradient(280.57deg, #0A1E47 15.22%, #1848AD 88.95%)",
      borderColor: "#1848AD",
      cards: [
        {
          icon: "/assets/group.svg",
          text: t("studyGroups.advantage.studyCircles.cards.item1"),
          position: "xl:top-10 top-4 xl:-left-20 left-[-70px]",
          width: "max-w-[200px]",
        },
        {
          icon: "/assets/rocket.svg",
          text: t("studyGroups.advantage.studyCircles.cards.item2"),
          position:
            "xl:top-0 top-[-35px] xl:right-0 right-[-20px] translate-x-1/3",
          width: "max-w-[200px]",
        },
        {
          icon: "/assets/message.svg",
          text: t("studyGroups.advantage.studyCircles.cards.item3"),
          position: "bottom-[-40px] xl:left-[10px] left-[-20]",
          width: "max-w-[246px]",
        },
      ],
    },
    {
      title: t("studyGroups.advantage.researchGroups.title"),
      bgColor: "linear-gradient(280.57deg, #CC4712 15.22%, #FF9063 88.95%)",
      borderColor: "#FF9063",
      cards: [
        {
          icon: "/assets/book.svg",
          text: t("studyGroups.advantage.researchGroups.cards.item1"),
          position:
            "xl:top-[-10px] top-[-39px] xl:left-[-70px] left-[-90px] translate-x-1/3",
          width: "max-w-[200px]",
        },
        {
          icon: "/assets/stack.svg",
          text: t("studyGroups.advantage.researchGroups.cards.item2"),
          position: "xl:left-[-50px] left-[-88px] xl:bottom-0 bottom-[-40px]",
          width: "max-w-[246px]",
        },
        {
          icon: "/assets/search.svg",
          text: t("studyGroups.advantage.researchGroups.cards.item3"),
          position:
            "xl:bottom-20 bottom-2 xl:right-[-190px] right-[-200px] -translate-x-1/4",
          width: "max-w-[246px]",
        },
      ],
    },
  ];

  return (
    <section className="bg-[#FCFCFC] px-4 md:px-[100px] lg:px-[160px] md:py-[100px] py-[64px]">
      <div className="relative max-w-[1280px] mx-auto">
        <div className="text-center mb-[60px] md:mb-[120px] lg:mb-[140px]">
          <h2 className="text-[28px] sm:text-[30px] md:text-[32px] font-bold mb-4">
            {t("studyGroups.advantage.title")}
          </h2>
          <p className="text-middle text-[20px] font-[300]">
            {t("studyGroups.advantage.subtitle")}
          </p>
        </div>
        <div className="md:flex hidden lg:flex-row flex-col items-center justify-between lg:gap-16 gap-[150px]">
          {studyAndReasearchData.map((circle, index) => (
            <div key={index} className="relative">
              {/* Main Circle */}
              <div className="relative aspect-square xl:max-w-[400px] max-w-[300px] w-full xl:h-[400px] h-[300px]">
                {/* Border Circle */}
                <div
                  className="absolute xl:inset-[-10%] inset-[-16%] rounded-full border"
                  style={{ borderColor: circle.borderColor }}
                />
                {/* Content Circle */}
                <div
                  className="absolute inset-0 rounded-full flex items-center justify-center"
                  style={{ background: circle.bgColor }}
                >
                  <h2 className="text-[32px] px-10 font-bold font-montagu text-white text-center">
                    {circle.title}
                  </h2>
                </div>

                {/* Floating Cards */}
                {circle.cards.map((card, cardIndex) => (
                  <div
                    key={cardIndex}
                    className={`absolute ${card.position} ${card.width} w-full bg-white rounded-[16px] p-4 shadow-lg transform transition-transform hover:scale-105`}
                  >
                    <div className="flex items-center gap-3">
                      <Image
                        src={card.icon}
                        alt={card.text}
                        width={32}
                        height={32}
                        className="min-w-[32px] min-h-[32px]"
                      />
                      <p className="text-sm text-middle leading-[17.5px]">
                        {card.text}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        <div className="md:hidden flex flex-col gap-[60px]">
          {studyAndReasearchData.map((section, sectionIndex) => (
            <div key={sectionIndex} className="mb-12">
              <h2
                className="text-[28px] sm:text-[32px] font-bold font-montagu mb-[32px]"
                style={{ color: section.borderColor }}
              >
                {section.title}
              </h2>
              <div className="space-y-[32px]">
                {section.cards.map((card, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-3 pb-[32px] border-b border-[#0000001A]"
                  >
                    <div className="flex items-center justify-center w-[48px] h-[48px] min-w-[48px] rounded-[8px] bg-[#F2F2F2]">
                      <Image
                        src={card.icon}
                        alt={card.text}
                        width={32}
                        height={32}
                        className="min-w-[32px] min-h-[32px]"
                      />
                    </div>
                    <p className="text-middle text-sm">{card.text}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        <div className="flex flex-col gap-[40px] items-center justify-center md:pt-[120px] pt-[30px]">
          <p className="text-dark text-[20px] font-[300] text-center">
            {t("studyGroups.advantage.footer")}
          </p>
          <button
            className="hover:shadow-lg text-white text-[18px] font-[500] px-[40px] sm:py-4 py-3 rounded-full transition-shadow duration-400 md:w-fit w-full"
            style={{
              background: "linear-gradient(90deg, #1848AD 0%, #11337A 100%)",
            }}
          >
            {t("studyGroups.advantage.buttonText")}
          </button>
        </div>
      </div>

      {/* Responsive styles */}
      <style jsx>{`
        @media (max-width: 768px) {
          .absolute {
            position: relative !important;
            transform: none !important;
            margin: 1rem auto;
            max-width: 100% !important;
          }
          .aspect-square {
            margin-bottom: 2rem;
          }
        }
      `}</style>
    </section>
  );
}
