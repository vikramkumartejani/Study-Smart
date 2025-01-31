import React from "react";
import Banner from "../components/Banner";
import HeroSection from "../components/Consulting/HeroSection";
import { FiCheck } from "react-icons/fi";
import { BsArrowRight } from "react-icons/bs";
import Image from "next/image";
import TrajectoryMapping from "../components/Consulting/TrajectoryMapping";

const Page = () => {
  const Data = [
    {
      subtitle: "Milestone Illumination: ",
      title: "Spotlighting Your Success Markers",
      tags: "Clarity, Insight, Direction",
      description:
        "Illuminate the pivotal moments in your journey with our Milestone Illumination service. We'll cast light on the critical junctures ahead, ensuring you're equipped to make informed decisions at every turn.",
      listTitle: "Beacon Points:",
      courseList: [
        "Exam landscape surveying",
        "Interview terrain scouting",
        "Research realm exploration",
        "Career crossroads clarification",
        "Continuous progress tracking",
      ],
      image: "/assets/spotlighting.jpeg",
      buttonText: "Illuminate Your Path",
    },
  ];

  return (
    <div>
      <HeroSection />
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
                    alt="Course illustration"
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
        title="The StudySmart Consulting Expedition"
        para="At StudySmart, we believe in empowering you to chart your own course. Our consulting services don't just provide answers; they equip you with the compass and map to navigate your unique journey. From the first steps of exam preparation to the summit of your career aspirations, our tailored guidance ensures you're always moving in the right direction."
        objectPos="center"
      />
      <section className="bg-[#FCFCFC] px-4 md:px-8 py-[64px]">
        <div className="max-w-[1280px] mx-auto flex flex-col gap-[20px] md:gap-[40px]">
          <p className="text-dark font-bold text-[20px] text-center max-w-[952px] mx-auto">
            In the vast sea of medical education and career advancement, let
            StudySmart be your North Star. We don't just show you the
            destination; we help you savor every step of the journey. Your
            expedition towards excellence begins here.
          </p>
          <button className="w-full md:w-fit text-center mx-auto inline-flex items-center gap-2 px-[40px] py-3 rounded-full border-2 border-primary text-dark font-[500] hover:bg-primary hover:text-white transition-colors">
            Embark on Your Odyssey
          </button>
        </div>
      </section>
    </div>
  );
};

export default Page;
