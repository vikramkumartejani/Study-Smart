"use client";
import React from "react";
import { Course } from "../components/Training/CoursesSection";
import Banner from "../components/Banner";
import HeroSection from "../components/Coaching/HeroSection";
import TwoCards from "../components/TwoCards";
import { useLanguage } from "@/app/context/LanguageContext";

const Page = () => {
  const { t } = useLanguage();

  const Data = [
    {
      title: t("coaching.courses.examAlchemy.title"),
      subtitle: t("coaching.courses.examAlchemy.subtitle"),
      description: t("coaching.courses.examAlchemy.description"),
      listTitle: t("coaching.courses.listTitle"),
      courseList: [
        t("coaching.courses.examAlchemy.list.item1"),
        t("coaching.courses.examAlchemy.list.item2"),
        t("coaching.courses.examAlchemy.list.item3"),
        t("coaching.courses.examAlchemy.list.item4"),
        t("coaching.courses.examAlchemy.list.item5"),
      ],
      image: "/assets/alchemy.png",
      buttonText: t("coaching.courses.examAlchemy.buttonText"),
    },
    {
      title: t("coaching.courses.interviewArtistry.title"),
      subtitle: t("coaching.courses.interviewArtistry.subtitle"),
      description: t("coaching.courses.interviewArtistry.description"),
      listTitle: t("coaching.courses.listTitle"),
      courseList: [
        t("coaching.courses.interviewArtistry.list.item1"),
        t("coaching.courses.interviewArtistry.list.item2"),
        t("coaching.courses.interviewArtistry.list.item3"),
        t("coaching.courses.interviewArtistry.list.item4"),
        t("coaching.courses.interviewArtistry.list.item5"),
      ],
      image: "/assets/artistry.jpeg",
      buttonText: t("coaching.courses.interviewArtistry.buttonText"),
    },
  ];

  const pillars = [
    {
      icon: "/assets/test.svg",
      title: t("coaching.pillars.examAlchemy.title"),
      description: t("coaching.pillars.examAlchemy.description"),
    },
    {
      icon: "/assets/board.svg",
      title: t("coaching.pillars.interviewArtistry.title"),
      description: t("coaching.pillars.interviewArtistry.description"),
    },
  ];

  return (
    <div>
      <HeroSection />

      <TwoCards
        title={t("coaching.pillars.title")}
        subtitle={t("coaching.pillars.subtitle")}
        cardsData={pillars}
      />

      <section className="bg-[#FCFCFC] px-4 md:px-8 md:py-[100px] py-[64px]">
        <div className="max-w-[1280px] mx-auto flex flex-col gap-[100px] md:gap-[120px]">
          {Data.map((course, index) => (
            <Course key={index} {...course} reverse={index % 2 !== 0} />
          ))}
        </div>
      </section>

      <Banner
        imgSrc="/assets/couching-banner-img.jpeg"
        title={t("coaching.banner.title")}
        para={t("coaching.banner.description")}
        objectPos="bottom"
      />

      <section className="bg-[#FCFCFC] px-4 md:px-8 py-[64px]">
        <div className="max-w-[1280px] mx-auto flex flex-col gap-[20px] md:gap-[40px]">
          <p className="text-dark font-bold text-[20px] text-center">
            {t("coaching.footer.text")}
          </p>
          <button className="w-full md:w-fit text-center mx-auto inline-flex items-center justify-center gap-2 px-[40px] py-3 rounded-full border-2 border-primary text-dark font-[500] hover:bg-primary hover:text-white transition-colors">
            {t("coaching.footer.buttonText")}
          </button>
        </div>
      </section>
    </div>
  );
};

export default Page;
