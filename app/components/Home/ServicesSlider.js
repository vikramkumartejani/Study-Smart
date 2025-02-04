"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { BsArrowRight } from "react-icons/bs";
import { useLanguage } from "@/app/context/LanguageContext";

const tabs = [
  {
    id: "training",
    icon: "/assets/book-white.png",
    image: "/assets/services.jpeg",
  },
  {
    id: "consulting",
    icon: "/assets/map-white.png",
    image: "/assets/services2.jpeg",
  },
  {
    id: "studyGroups",
    icon: "/assets/people-white.png",
    image: "/assets/services.jpeg",
  },
  {
    id: "coaching",
    icon: "/assets/clipboard-text-white.png",
    image: "/assets/services2.jpeg",
  },
  {
    id: "professional",
    icon: "/assets/star-white.png",
    image: "/assets/services.jpeg",
  },
];

export default function ServicesSlider() {
  const { locale, t } = useLanguage();
  const [activeTab, setActiveTab] = useState(0);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const tabInterval = setInterval(() => {
      setActiveTab((prevTab) => (prevTab + 1) % tabs.length);
      setProgress(0);
    }, 5000); // Change tab every 5 seconds

    const progressInterval = setInterval(() => {
      setProgress((prevProgress) => {
        if (prevProgress >= 100) {
          return 100;
        }
        return prevProgress + 1;
      });
    }, 50); // Update progress every 50ms

    return () => {
      clearInterval(tabInterval);
      clearInterval(progressInterval);
    };
  }, []);

  return (
    <section className="bg-[#FCFCFC]">
      <div className="bg-primary text-white px-4 md:px-8 md:py-[75px] py-[36px] rounded-br-[64px] rounded-tl-[64px]">
        <div className="max-w-[1280px] mx-auto">
          {/* Tabs */}
          <div className="flex justify-between gap-[24px] mb-12 overflow-x-auto">
            {tabs.map((tab, index) => (
              <div key={`tab-${tab.id}-${index}`} className="relative">
                <button
                  onClick={() => {
                    setActiveTab(index);
                    setProgress(0);
                  }}
                  className={`w-full flex flex-col items-center gap-2 transition-colors duration-200 pb-4
                  ${
                    activeTab === index
                      ? "text-white"
                      : "text-light hover:text-gray-300"
                  }`}
                >
                  <div
                    className={`transition-opacity duration-200 ${
                      activeTab === index ? "opacity-100" : "opacity-50"
                    }`}
                  >
                    <Image
                      src={tab.icon}
                      alt={t(`home.servicesSlider.${tab.id}.label`)}
                      width={20}
                      height={20}
                    />
                  </div>
                  <span
                    className={`text-base md:text-[20px] text-center w-max ${
                      activeTab === index ? "font-[500]" : "font-[300]"
                    }`}
                  >
                    {t(`home.servicesSlider.${tab.id}.label`)}
                  </span>
                </button>
                {activeTab === index && (
                  <div className="absolute bottom-0 left-0 w-full h-0.5 bg-white">
                    <div
                      className="h-full bg-secondary transition-all duration-50"
                      style={{ width: `${progress}%` }}
                    />
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Content */}
          <div className="flex flex-col items-center text-center max-w-[952px] mx-auto">
            <div className="rounded-[121px] overflow-hidden mb-8 w-[250px] h-[350px] border-[8px] border-[#0000001A]">
              <img
                src={tabs[activeTab].image || "/placeholder.svg"}
                alt={t(`home.servicesSlider.${tabs[activeTab].id}.title`)}
                className="w-full h-full object-cover"
              />
            </div>

            <h2 className="text-[18px] md:text-[20px] font-[500] mb-1">
              {t(`home.servicesSlider.${tabs[activeTab].id}.title`)}
            </h2>

            <p className="text-white font-[300] text-base mb-6">
              {t(`home.servicesSlider.${tabs[activeTab].id}.sliderDescription`)}
            </p>

            <button className="group inline-flex items-center gap-2 font-[500] text-[18px] bg-transparent border-2 border-white rounded-full px-[40px] py-3 text-white hover:bg-white hover:text-[#1e3a8a] transition-colors duration-200">
              {t(`home.servicesSlider.${tabs[activeTab].id}.button`)}
              <BsArrowRight
                className={`w-5 h-5 transition-transform group-hover:translate-x-1 ${
                  locale === "fa" ? "rotate-180" : ""
                }`}
              />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
