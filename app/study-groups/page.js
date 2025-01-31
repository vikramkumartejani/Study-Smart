import React from "react";
import HeroSection from "../components/StudyGroups/HeroSection";
import TwoCards from "../components/TwoCards";
import { Course } from "../components/Training/CoursesSection";
import StudySmartAdvantage from "../components/StudyGroups/StudySmartAdvantage";

const page = () => {
  const Data = [
    {
      title: "Study Circles: The Art of Collective Mastery",
      subtitle: "Unite, Discuss, Conquer",
      description:
        "Our Study Circles transform solitary study sessions into vibrant knowledge exchanges. Engage with peers, dissect complex topics, and reinforce your understanding through dynamic group interactions. Experience the power of shared insights and diverse perspectives.",
      listTitle: "Features:",
      courseList: [
        "Targeted Topic Marathons",
        "Question Banks Deconstruction",
        "Mock Exam Workshops",
        "Concept Mapping Sessions",
        "Peer Teaching Rotations",
      ],
      image: "/assets/study-circle.jpeg",
      buttonText: "Join a Study Circle",
    },
    {
      title: "Research Groups: Pioneering Tomorrow's Healthcare",
      subtitle: "Collaborate, Innovate, Discover",
      description:
        "Step into the forefront of medical advancement with our Research Groups. Connect with fellow visionaries, pool your expertise, and contribute to groundbreaking studies. From hypothesis formation to publication, experience the thrill of scientific discovery as a team.",
      listTitle: "Features:",
      courseList: [
        "Interdisciplinary Brainstorming",
        "Literature Review Roundtables",
        "Methodology Design Workshops",
        "Data Analysis Clinics",
        "Manuscript Development Labs",
      ],
      image: "/assets/research-group.jpeg",
      buttonText: "Explore Research Opportunities",
    },
  ];

  const twoPathsData = [
    {
      icon: "/assets/circles.svg",
      title: "Study Circles",
      description:
        "Immerse yourself in focused academic discussions and shared learning experiences.",
    },
    {
      icon: "/assets/research.svg",
      title: "Research Groups",
      description:
        "Embark on collaborative scientific journeys and contribute to cutting-edge discoveries.",
    },
  ];

  return (
    <div>
      <HeroSection />

      <TwoCards
        title="Two Paths, One Goal: Elevate Your Learning"
        subtitle="Choose Your Collaborative Adventure"
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
            At StudySmart, we believe that greatness is achieved together. Our
            study groups are more than just learning platforms – they're
            incubators for excellence, where your potential is amplified by the
            collective brilliance of your peers. Step into a world where
            collaboration catalyzes success and every discussion opens new
            horizons.
          </p>
        </div>
      </section>
    </div>
  );
};

export default page;
