"use client";
import { BsArrowRight } from "react-icons/bs";
import Image from "next/image";
import { FiCheck } from "react-icons/fi";

// Reusable Course Component
function Course({
  title,
  subtitle,
  description,
  courseList,
  image,
  buttonText = "Start Your Journey",
  reverse = false,
}) {
  return (
    <div
      className={`flex flex-col gap-8 lg:gap-12 ${
        reverse ? "lg:flex-row-reverse" : "lg:flex-row"
      }`}
    >
      {/* Content Side */}
      <div className="flex-1">
        <h2 className="text-[32px] font-bold mb-4">{title}</h2>
        <h3 className="text-xl font-semibold mb-4">{subtitle}</h3>
        <p className="text-gray-600 mb-8">{description}</p>

        {courseList && courseList.length > 0 && (
          <div className="mb-8">
            <h4 className="text-lg font-semibold mb-4">Course Titles:</h4>
            <ul className="space-y-3">
              {courseList.map((course, index) => (
                <li key={index} className="flex items-start gap-3">
                  <FiCheck className="text-[#FF5917] mt-1 flex-shrink-0" />
                  <span>{course}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        <button className="inline-flex items-center gap-2 px-6 py-3 rounded-full border-2 border-[#0A2472] text-[#0A2472] font-medium hover:bg-[#0A2472] hover:text-white transition-colors">
          {buttonText}
          <BsArrowRight />
        </button>
      </div>

      {/* Image Side */}
      <div className="flex-1">
        <div className="relative h-[500px] rounded-[32px] overflow-hidden">
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
      courseList: [
        "Comprehensive USMLE Step 1 Review Course",
        "Advanced USMLE Step 2 CK Preparation",
        "USMLE Practice Exam Series",
        "Personalized Study Plans and Feedback Sessions",
      ],
      image: "/assets/course1.jpeg",
    },
    {
      title: "Ace Your Medical Licensing Exams",
      subtitle: "Expert-Guided Study Plans and Practice Tests",
      description:
        "Join our structured training programs to confidently tackle the toughest medical licensing exams. Our expert-led courses, interactive study sessions, and extensive practice tests ensure you're fully prepared to succeed.",
      courseList: [
        "Live Interactive Webinars",
        "Comprehensive Question Bank Access",
        "One-on-One Tutoring Sessions",
        "Customizable Study Roadmaps",
      ],
      image: "/assets/course1.jpeg",
    },
    {
      title: "Master Your USMLE Journey",
      subtitle: "Rigorous Preparation Tailored to Your Success",
      description:
        "Prepare rigorously for USMLE Step 1 and Step 2 CK exams with StudySmart's specialized online courses. Our comprehensive approach integrates advanced study materials, practice exams, and personalized feedback to ensure you excel when it matters most.",
      courseList: [
        "Comprehensive USMLE Step 1 Review Course",
        "Advanced USMLE Step 2 CK Preparation",
        "USMLE Practice Exam Series",
        "Personalized Study Plans and Feedback Sessions",
      ],
      image: "/assets/course1.jpeg",
    },
    {
      title: "Ace Your Medical Licensing Exams",
      subtitle: "Expert-Guided Study Plans and Practice Tests",
      description:
        "Join our structured training programs to confidently tackle the toughest medical licensing exams. Our expert-led courses, interactive study sessions, and extensive practice tests ensure you're fully prepared to succeed.",
      courseList: [
        "Live Interactive Webinars",
        "Comprehensive Question Bank Access",
        "One-on-One Tutoring Sessions",
        "Customizable Study Roadmaps",
      ],
      image: "/assets/course1.jpeg",
    },
  ];

  return (
    <section className="py-16 px-4">
      <div className="max-w-[1280px] mx-auto flex flex-col gap-[40px] md:gap-[120px]">
        {coursesData.map((course, index) => (
          <Course key={index} {...course} reverse={index % 2 !== 0} />
        ))}
        <p className="text-[#FF5917] text-center font-montagu font-[600] text-[25px] sm:text-[28px] md:text-[32px] mt-[40px] md:mt-[80px]">
          Embark on a journey of knowledge and skill refinement with StudySmart,
          where every course is designed to empower you towards a brighter
          future.
        </p>
      </div>
    </section>
  );
}
