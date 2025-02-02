"use client";
import React from "react";
import Banner from "../components/Banner";
import HeroSection from "../components/Consulting/HeroSection";
import { FiCheck } from "react-icons/fi";
import { BsArrowRight } from "react-icons/bs";
import Image from "next/image";
import TrajectoryMapping from "../components/Consulting/TrajectoryMapping";
import Roadmap from "../components/Consulting/RoadMap";
import { useLanguage } from "@/app/context/LanguageContext";

const Page = () => {
  const { t } = useLanguage();

  const Data = [
    {
      subtitle: t("consulting.cards.milestone.subtitle"),
      title: t("consulting.cards.milestone.title"),
      tags: t("consulting.cards.milestone.tags"),
      description: t("consulting.cards.milestone.description"),
      listTitle: t("consulting.cards.milestone.listTitle"),
      courseList: [
        t("consulting.cards.milestone.list.item1"),
        t("consulting.cards.milestone.list.item2"),
        t("consulting.cards.milestone.list.item3"),
        t("consulting.cards.milestone.list.item4"),
        t("consulting.cards.milestone.list.item5"),
      ],
      image: "/assets/spotlighting.jpeg",
      buttonText: t("consulting.cards.milestone.buttonText"),
    },
  ];

  return (
    <div>
      <HeroSection />
      <Roadmap />
      <TrajectoryMapping />
      <section className="bg-[#FCFCFC] px-4 md:px-8 md:py-[100px] py-[64px]">
        <div className="max-w-[1280px] mx-auto flex flex-col gap-[100px] md:gap-[120px]">
          {Data.map((course, index) => (
            <div
              key={index}
              className="flex flex-col-reverse lg:flex-row gap-4 justify-between"
            >
              {/* Content Side */}
              <div className="flex-1">
                <h3 className="text-[18px] mb-1 text-dark font-[700]">
                  {course.subtitle}
                </h3>
                <h2 className="text-[28px] sm:text-[30px] text-dark font-bold mb-1">
                  {course.title}
                </h2>
                <p className="text-[18px] mb-1 text-dark">{course.tags}</p>
                <p className="text-middle font-[300] mb-6 md:mb-[32px]">
                  {course.description}
                </p>

                {course.courseList.length > 0 && (
                  <div className="mb-8">
                    <h4 className="text-[20px] text-dark font-bold mb-4">
                      {course.listTitle}
                    </h4>
                    <ul className="space-y-4">
                      {course.courseList.map((item, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <FiCheck className="text-secondary mt-1 flex-shrink-0" />
                          <span className="text-[18px] font-[300] text-dark">
                            {item}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                <button className="inline-flex items-center gap-2 px-[40px] py-3 rounded-full border-2 border-primary text-dark font-[500] hover:bg-primary hover:text-white transition-colors">
                  {course.buttonText}
                  <BsArrowRight />
                </button>
              </div>

              {/* Image Side */}
              <div className="flex-1">
                <div className="relative h-[398px] md:h-[419px] lg:h-[500px] lg:w-[500px] rounded-[32px] overflow-hidden lg:ms-auto">
                  <Image
                    src={course.image}
                    alt={t("consulting.cards.milestone.imageAlt")}
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
      <Banner
        imgSrc="/assets/consulting-banner-img.jpeg"
        title={t("consulting.banner.title")}
        para={t("consulting.banner.description")}
        objectPos="center"
      />
      <section className="bg-[#FCFCFC] px-4 md:px-8 py-[64px]">
        <div className="max-w-[1280px] mx-auto flex flex-col gap-[20px] md:gap-[40px]">
          <p className="text-dark font-bold text-[20px] text-center max-w-[952px] mx-auto">
            {t("consulting.footer.text")}
          </p>
          <button className="w-full md:w-fit mx-auto inline-flex items-center justify-center gap-2 px-[40px] py-3 rounded-full border-2 border-primary text-dark font-[500] hover:bg-primary hover:text-white transition-colors">
            {t("consulting.footer.buttonText")}
          </button>
        </div>
      </section>
    </div>
  );
};

export default Page;
