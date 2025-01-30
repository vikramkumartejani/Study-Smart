"use client";

import { useState, useEffect } from "react";
import { BiBook } from "react-icons/bi";
import { BsArrowRight, BsShieldCheck } from "react-icons/bs";
import { FaClipboardList, FaUserSecret } from "react-icons/fa6";
import { SiTarget } from "react-icons/si";

const tabs = [
  {
    id: "training",
    label: "Training",
    icon: BiBook,
    title: "Master Your Studies with Comprehensive Courses",
    description:
      "Prepare for the USMLE Step 1 and Step 2 CK, OET, and more with our extensive range of courses. Our expert instructors and flexible online format allow you to learn at your own pace and achieve your academic goals.",
    image: "/assets/services.jpeg",
  },
  {
    id: "consulting",
    label: "Consulting",
    icon: BsShieldCheck,
    title: "Expert Guidance for Your Medical Journey",
    description:
      "Get personalized consulting services from experienced medical professionals who understand your goals and challenges.",
    image: "/assets/services.jpeg",
  },
  {
    id: "study-groups",
    label: "Study Groups",
    icon: FaUserSecret,
    title: "Learn Together, Achieve Together",
    description:
      "Join our collaborative study groups to share knowledge, practice together, and support each other throughout your medical education journey.",
    image: "/assets/services.jpeg",
  },
  {
    id: "coaching",
    label: "Coaching Services",
    icon: FaClipboardList,
    title: "Personalized Coaching for Success",
    description:
      "Work one-on-one with experienced coaches who will guide you through your preparation and help you achieve your goals.",
    image: "/assets/services.jpeg",
  },
  {
    id: "professional",
    label: "Professional Services",
    icon: SiTarget,
    title: "Comprehensive Professional Support",
    description:
      "Access a wide range of professional services designed to support your medical career development.",
    image: "/assets/services.jpeg",
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

  useEffect(() => {
    console.log("Active tab:", activeTab);
  }, [activeTab]);

  return (
    <section className="bg-primary text-white px-4 md:px-8 md:py-[75px] py-[36px]">
      <div className="max-w-[1280px] mx-auto">
        {/* Tabs */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-12">
          {tabs.map((tab, index) => (
            <div key={`tab-${tab.id}-${index}`} className="relative">
              <button
                onClick={() => {
                  setActiveTab(index);
                  setProgress(0);
                }}
                className={`w-full flex flex-col items-center gap-2 p-4 transition-colors duration-200
                  ${
                    activeTab === index
                      ? "text-white"
                      : "text-gray-400 hover:text-gray-300"
                  }`}
              >
                <tab.icon className="w-6 h-6" />
                <span className="text-sm md:text-base text-center">
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
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto">
          <div className="rounded-[121px] overflow-hidden mb-8 w-[250px] h-[350px] border-[8px] border-[#0000001A]">
            <img
              src={tabs[activeTab].image || "/placeholder.svg"}
              alt={tabs[activeTab].title}
              className="w-full h-full object-cover"
            />
          </div>

          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            {tabs[activeTab].title}
          </h2>

          <p className="text-gray-300 mb-8">{tabs[activeTab].description}</p>

          <button className="group inline-flex items-center gap-2 bg-transparent border-2 border-white rounded-full px-8 py-3 text-white hover:bg-white hover:text-[#1e3a8a] transition-colors duration-200">
            Explore Our Courses
            <BsArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
          </button>
        </div>
      </div>
    </section>
  );
}
