import React from "react";
import DualPillars from "../components/Coaching/DualPillars";
import { Course } from "../components/Training/CoursesSection";
import Banner from "../components/Banner";
import HeroSection from "../components/Coaching/HeroSection";

const page = () => {
  const Data = [
    {
      title: "Exam Alchemy: Forging Academic Gold",
      subtitle: "Crystallize Knowledge, Catalyze Success",
      description:
        "Our Exam Alchemy program is your crucible for academic excellence. Our seasoned alchemists of education employ bespoke formulas to transmute raw information into polished expertise, ensuring you shine under the spotlight of examination.",
      listTitle: "Key Elements:",
      courseList: [
        "Cognitive cartography for optimal recall",
        "Precision drilling on pivotal concepts",
        "Temporal mastery for peak performance",
        "Simulated crucibles of assessment",
        "Iterative refinement through analytics",
      ],
      image: "/assets/alchemy.png",
      buttonText: "Transmute Your Potential",
    },
    {
      title: "Interview Artistry: Craft Your Compelling Narrative",
      subtitle: "Poise, Precision, Persuasion",
      description:
        "Become the protagonist of your own success story with our Interview Artistry program. We'll equip you with the brushstrokes to paint a vivid portrait of your capabilities, ensuring your canvas of potential resonates with every interviewer.",
      listTitle: "Key Strokes:",
      courseList: [
        "Narrative architecture workshops",
        "Eloquence enhancement laboratories",
        "Scenario immersion chambers",
        "Non-verbal fluency calibration",
        "Post-interview resonance tactics",
      ],
      image: "/assets/artistry.jpeg",
      buttonText: "Author Your Success",
    },
  ];
  return (
    <div>
      <HeroSection />
      <DualPillars />
      <section className="bg-[#FCFCFC] px-4 md:px-8 md:py-[100px] py-[64px]">
        <div className="max-w-[1280px] mx-auto flex flex-col gap-[100px] md:gap-[120px]">
          {Data.map((course, index) => (
            <Course key={index} {...course} reverse={index % 2 !== 0} />
          ))}
        </div>
      </section>
      <Banner
        imgSrc="/assets/couching-banner-img.jpeg"
        title="The StudySmart Coaching Metamorphosis"
        para="At StudySmart, we believe in catalyzing your innate brilliance. Our
            coaching services are not mere preparations, but transformative
            experiences. Whether you're poised to conquer a pivotal exam or step
            into your ideal role, our bespoke approach ensures you emerge not
            just prepared, but evolved."
        objectPos="bottom"
      />
      <section className="bg-[#FCFCFC] px-4 md:px-8 py-[64px]">
        <div className="max-w-[1280px] mx-auto flex flex-col gap-[20px] md:gap-[40px]">
          <p className="text-dark font-bold text-[20px] text-center">
            In the crucible of StudySmart coaching, challenges crystallize into
            triumphs, and aspirations materialize into reality. Step into our
            atelier of excellence, where your potential is sculpted into
            mastery. Your metamorphosis commences now.
          </p>
          <button className="w-full md:w-fit text-center mx-auto inline-flex items-center gap-2 px-[40px] py-3 rounded-full border-2 border-primary text-dark font-[500] hover:bg-primary hover:text-white transition-colors">
            Initiate Your Evolution
          </button>
        </div>
      </section>
    </div>
  );
};

export default page;
