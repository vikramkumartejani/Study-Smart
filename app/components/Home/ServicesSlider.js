"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { BsArrowRight } from "react-icons/bs";

const tabs = [
  {
    id: "training",
    label: "Training",
    icon: "/assets/book-white.png",
    title: "Master Your Studies with Comprehensive Courses",
    description:
      "Prepare for the USMLE Step 1 and Step 2 CK, OET, and more with our extensive range of courses. Our expert instructors and flexible online format allow you to learn at your own pace and achieve your academic goals.",
    image: "/assets/services.jpeg",
    button: "Explore Our Courses",
  },
  {
    id: "consulting",
    label: "Consulting",
    icon: "/assets/map-white.png",
    title: "Expert Consulting",
    description:
      "Receive expert advice tailored to your specific needs. Our consulting services are designed to provide you with the insights and support necessary to succeed in your endeavors.",
    image: "/assets/services2.jpeg",
    button: "Get Expert Advice",
  },
  {
    id: "study-groups",
    label: "Study Groups",
    icon: "/assets/people-white.png",
    title: "Empower Your Learning with Collaborative Groups",
    description:
      "Join our peer study groups and research collaboration groups to enhance your learning experience. Engage with fellow students, share knowledge, and collaborate on projects to achieve academic excellence.",
    image: "/assets/services.jpeg",
    button: "Join a Study Group",
  },
  {
    id: "coaching",
    label: "Coaching Services",
    icon: "/assets/clipboard-text-white.png",
    title: "Excel with Personalized Coaching",
    description:
      "Receive tailored coaching for your exam and interview preparations. Our experienced coaches provide one-on-one guidance to build your confidence and ensure success in your medical career.",
    image: "/assets/services2.jpeg",
    button: "Learn More About Coaching",
  },
  {
    id: "professional",
    label: "Professional Services",
    icon: "/assets/star-white.png",
    title: "Advance Your Career with Expert Support",
    description:
      "Benefit from our comprehensive professional services, including project assistance, immigration support, patent registration, and more. We offer the tools and guidance you need to achieve your professional aspirations.",
    image: "/assets/services.jpeg",
    button: "Discover Our Services",
  },
];

export default function ServicesSlider() {
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
                      alt={tab.label}
                      width={20}
                      height={20}
                    />
                  </div>
                  <span
                    className={`text-base md:text-[20px] text-center w-max ${
                      activeTab === index ? "font-[500]" : "font-[300]"
                    }`}
                  >
                    {tab.label}
                  </span>
                </button>
                {activeTab === index && (
                  <div className="absolute bottom-0 left-0 w-full h-0.5 bg-white">
                    <div
                      className="h-full bg-[#FF5917] transition-all duration-50"
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
                alt={tabs[activeTab].title}
                className="w-full h-full object-cover"
              />
            </div>

            <h2 className="text-[18px] md:text-[20px] font-[500] mb-1">
              {tabs[activeTab].title}
            </h2>

            <p className="text-white font-[300] text-base mb-6">
              {tabs[activeTab].description}
            </p>

            <button className="group inline-flex items-center gap-2 font-[500] text-[18px] bg-transparent border-2 border-white rounded-full px-[40px] py-3 text-white hover:bg-white hover:text-[#1e3a8a] transition-colors duration-200">
              {tabs[activeTab].button}
              <BsArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
