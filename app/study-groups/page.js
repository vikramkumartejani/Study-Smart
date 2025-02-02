"use client";
import React from "react";
import HeroSection from "../components/StudyGroups/HeroSection";
import TwoCards from "../components/TwoCards";
import { Course } from "../components/Training/CoursesSection";
import StudySmartAdvantage from "../components/StudyGroups/StudySmartAdvantage";
import { useLanguage } from "@/app/context/LanguageContext";

const Page = () => {
  const { t } = useLanguage();

  const Data = [
    {
      title: t("studyGroups.courses.studyCircles.title"),
      subtitle: t("studyGroups.courses.studyCircles.subtitle"),
      description: t("studyGroups.courses.studyCircles.description"),
      listTitle: t("studyGroups.courses.listTitle"),
      courseList: [
        t("studyGroups.courses.studyCircles.list.item1"),
        t("studyGroups.courses.studyCircles.list.item2"),
        t("studyGroups.courses.studyCircles.list.item3"),
        t("studyGroups.courses.studyCircles.list.item4"),
        t("studyGroups.courses.studyCircles.list.item5"),
      ],
      image: "/assets/study-circle.jpeg",
      buttonText: t("studyGroups.courses.studyCircles.buttonText"),
    },
    {
      title: t("studyGroups.courses.researchGroups.title"),
      subtitle: t("studyGroups.courses.researchGroups.subtitle"),
      description: t("studyGroups.courses.researchGroups.description"),
      listTitle: t("studyGroups.courses.listTitle"),
      courseList: [
        t("studyGroups.courses.researchGroups.list.item1"),
        t("studyGroups.courses.researchGroups.list.item2"),
        t("studyGroups.courses.researchGroups.list.item3"),
        t("studyGroups.courses.researchGroups.list.item4"),
        t("studyGroups.courses.researchGroups.list.item5"),
      ],
      image: "/assets/research-group.jpeg",
      buttonText: t("studyGroups.courses.researchGroups.buttonText"),
    },
  ];

  const twoPathsData = [
    {
      icon: "/assets/circles.svg",
      title: t("studyGroups.twoPaths.path1.title"),
      description: t("studyGroups.twoPaths.path1.description"),
    },
    {
      icon: "/assets/research.svg",
      title: t("studyGroups.twoPaths.path2.title"),
      description: t("studyGroups.twoPaths.path2.description"),
    },
  ];

  return (
    <div>
      <HeroSection />

      <TwoCards
        title={t("studyGroups.twoPaths.title")}
        subtitle={t("studyGroups.twoPaths.subtitle")}
        cardsData={twoPathsData}
      />

      <section className="bg-[#FCFCFC] px-4 md:px-8 md:py-[100px] py-[64px]">
        <div className="max-w-[1280px] mx-auto flex flex-col gap-[100px] md:gap-[120px]">
          {Data.map((course, index) => (
            <Course key={index} {...course} reverse={index % 2 !== 0} />
          ))}
        </div>
      </section>

      <StudySmartAdvantage />

      <section className="bg-[#FCFCFC] px-4 md:px-8 py-[64px]">
        <div className="max-w-[952px] mx-auto flex flex-col gap-[20px] md:gap-[40px]">
          <p className="text-dark font-bold text-[20px] text-center">
            {t("studyGroups.footer.text")}
          </p>
        </div>
      </section>
    </div>
  );
};

export default Page;
