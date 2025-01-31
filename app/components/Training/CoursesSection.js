"use client";
import { BsArrowRight } from "react-icons/bs";
import Image from "next/image";
import { FiCheck } from "react-icons/fi";

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
          <BsArrowRight />
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
  const coursesData = [
    {
      title: "Master Your USMLE Journey",
      subtitle: "Rigorous Preparation Tailored to Your Success",
      description:
        "Prepare rigorously for USMLE Step 1 and Step 2 CK exams with StudySmart's specialized online courses. Our comprehensive approach integrates advanced study materials, practice exams, and personalized feedback to ensure you excel when it matters most.",
      listTitle: "Course Titles:",
      courseList: [
        "Comprehensive USMLE Step 1 Review Course",
        "Advanced USMLE Step 2 CK Preparation",
        "USMLE Practice Exam Series",
        "Personalized Study Plans and Feedback Sessions",
      ],
      image: "/assets/course1.jpeg",
      buttonText: "Start Your Journey",
    },
    {
      title: "Excel in Language Proficiency with StudySmart",
      subtitle: "Tailored Training for Healthcare Professionals",
      description:
        "Elevate your language proficiency with StudySmart's comprehensive OET preparation course. Designed specifically for healthcare professionals, our program includes realistic simulations and personalized coaching to help you achieve exceptional OET scores.",
      listTitle: "Course Titles:",
      courseList: [
        "Introduction to OET: Overview and Test Format",
        "Language Proficiency Development for Healthcare Professionals",
        "Effective Communication Strategies for OET",
        "Realistic Scenario Simulations and Mock Tests",
      ],
      image: "/assets/course2.jpeg",
      buttonText: "Get Started",
    },
    {
      title: "Achieve Exam Excellence with StudySmart",
      subtitle: "Targeted Support for Professional Success",
      description:
        "Boost your exam performance with StudySmart's intensive preparation courses. Our expert-led sessions provide tailored guidance, customized study plans, and access to comprehensive resources to maximize your readiness and confidence on exam day.",
      listTitle: "Course Titles:",
      courseList: [
        "Medical Licensing Exam Bootcamp",
        "Professional Certification Exam Crash Course",
        "Strategies for High-Stakes Exam Success",
        "Customized Study Plans and One-on-One Coaching",
      ],
      image: "/assets/course1.jpeg",
      buttonText: "Enhance Your Skills",
    },
    {
      title: "Refine Your Academic Voice with StudySmart",
      subtitle: "Master the Art of Research Paper Writing",
      description:
        "Hone your academic writing skills with StudySmart's specialized courses. From mastering research methodologies to crafting impactful manuscripts, our training equips you with the tools to excel in academia and beyond.",
      listTitle: "Course Titles:",
      courseList: [
        "Research Methodologies and Literature Review",
        "Structuring and Organizing Your Research Paper",
        "Writing Concisely and Effectively in Academic Contexts",
        "Peer Review and Manuscript Submission Strategies",
      ],
      image: "/assets/course2.jpeg",
      buttonText: "Refine Your Writing - Contact Us",
    },
  ];

  return (
    <section className="bg-[#FCFCFC] px-4 md:px-8 md:py-[100px] py-[64px]">
      <div className="max-w-[1280px] mx-auto flex flex-col gap-[100px] md:gap-[120px]">
        {coursesData.map((course, index) => (
          <Course key={index} {...course} reverse={index % 2 !== 0} />
        ))}
        <p className="text-secondary text-center font-montagu font-[600] text-[25px] sm:text-[32px] mt-[30px] md:mt-[80px] md:leading-[41.02px]">
          Embark on a journey of knowledge and skill refinement with StudySmart,
          where every course is designed to empower you towards a brighter
          future.
        </p>
      </div>
    </section>
  );
}
