"use client";
import { BsArrowRight } from "react-icons/bs";
import Image from "next/image";
import { FiCheck } from "react-icons/fi";
import { useLanguage } from "@/app/context/LanguageContext";

// Reusable Course Component
export function Course({
  title,
  subtitle,
  description,
  listTitle,
  courseList,
  image,
  buttonText,
  reverse = false,
}) {
  const { locale } = useLanguage();
  return (
    <div
      className={`flex flex-col gap-4 ${
        reverse
          ? "lg:flex-row-reverse flex-col-reverse justify-between"
          : "lg:flex-row flex-col-reverse justify-between"
      }`}
    >
      {/* Content Side */}
      <div className="flex-1">
        <h2 className="text-[28px] sm:text-[30px] text-dark font-bold mb-1">
          {title}
        </h2>
        <h3 className="text-[18px] mb-1 text-dark">{subtitle}</h3>
        <p className="text-middle font-[300] mb-6 md:mb-[32px]">
          {description}
        </p>

        {courseList && courseList.length > 0 && (
          <div className="mb-8">
            <h4 className="text-[20px] text-dark font-bold mb-4">
              {listTitle}
            </h4>
            <ul className="space-y-4">
              {courseList.map((course, index) => (
                <li key={index} className="flex items-start gap-2">
                  <FiCheck className="text-secondary mt-1 flex-shrink-0" />
                  <span className="text-[18px] font-[300] text-dark">
                    {course}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        )}

        <button className="inline-flex items-center gap-2 px-[40px] py-3 rounded-full border-2 border-primary text-dark font-[500] hover:bg-primary hover:text-white transition-colors">
          {buttonText}
          <BsArrowRight className={`${locale === "ar" ? "rotate-180" : ""}`} />
        </button>
      </div>

      {/* Image Side */}
      <div className="flex-1">
        <div
          className={`relative h-[398px] md:h-[419px] lg:h-[500px] lg:w-[500px] rounded-[32px] overflow-hidden ${
            reverse ? "md:me-auto" : "md:ms-auto"
          }`}
        >
          <Image
            src={image || "/placeholder.svg"}
            alt="Course illustration"
            fill
            className="object-cover"
          />
        </div>
      </div>
    </div>
  );
}

// Courses Section with Multiple Course Entries
export default function CoursesSection() {
  const { t } = useLanguage();

  const coursesData = [
    {
      title: t("training.courses.usmle.title"),
      subtitle: t("training.courses.usmle.subtitle"),
      description: t("training.courses.usmle.description"),
      listTitle: t("training.courses.listTitle"),
      courseList: [
        t("training.courses.usmle.list.item1"),
        t("training.courses.usmle.list.item2"),
        t("training.courses.usmle.list.item3"),
        t("training.courses.usmle.list.item4"),
      ],
      image: "/assets/course1.jpeg",
      buttonText: t("training.courses.usmle.buttonText"),
    },
    {
      title: t("training.courses.language.title"),
      subtitle: t("training.courses.language.subtitle"),
      description: t("training.courses.language.description"),
      listTitle: t("training.courses.listTitle"),
      courseList: [
        t("training.courses.language.list.item1"),
        t("training.courses.language.list.item2"),
        t("training.courses.language.list.item3"),
        t("training.courses.language.list.item4"),
      ],
      image: "/assets/course2.jpeg",
      buttonText: t("training.courses.language.buttonText"),
    },
    {
      title: t("training.courses.exam.title"),
      subtitle: t("training.courses.exam.subtitle"),
      description: t("training.courses.exam.description"),
      listTitle: t("training.courses.listTitle"),
      courseList: [
        t("training.courses.exam.list.item1"),
        t("training.courses.exam.list.item2"),
        t("training.courses.exam.list.item3"),
        t("training.courses.exam.list.item4"),
      ],
      image: "/assets/course1.jpeg",
      buttonText: t("training.courses.exam.buttonText"),
    },
    {
      title: t("training.courses.academic.title"),
      subtitle: t("training.courses.academic.subtitle"),
      description: t("training.courses.academic.description"),
      listTitle: t("training.courses.listTitle"),
      courseList: [
        t("training.courses.academic.list.item1"),
        t("training.courses.academic.list.item2"),
        t("training.courses.academic.list.item3"),
        t("training.courses.academic.list.item4"),
      ],
      image: "/assets/course2.jpeg",
      buttonText: t("training.courses.academic.buttonText"),
    },
  ];

  return (
    <section className="bg-[#FCFCFC] px-4 md:px-8 md:py-[100px] py-[64px]">
      <div className="max-w-[1280px] mx-auto flex flex-col gap-[100px] md:gap-[120px]">
        {coursesData.map((course, index) => (
          <Course key={index} {...course} reverse={index % 2 !== 0} />
        ))}
        <p className="text-secondary text-center font-montagu font-[600] text-[25px] sm:text-[32px] mt-[30px] md:mt-[80px] md:leading-[41.02px]">
          {t("training.courses.footer")}
        </p>
      </div>
    </section>
  );
}
