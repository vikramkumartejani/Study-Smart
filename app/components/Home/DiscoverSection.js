"use client";
import { BiPlay } from "react-icons/bi";

export default function DiscoverSection() {
  return (
    <section className="bg-primary">
      <div className="bg-[#FCFCFC] px-4 md:px-8 md:py-[75px] py-[36px] rounded-br-[64px]">
        <div className="max-w-[1280px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center">
          {/* Left Column - Text Content */}
          <div className="space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold text-dark">
              Discover the StudySmart Difference
            </h2>

            <p className="text-middle leading-relaxed md:pb-[24px] pb-[10px]">
              At StudySmart, we are committed to guiding aspiring medical
              professionals to success. Our expert-led courses, supportive study
              groups, and personalized coaching services lay the foundation for
              your achievements. From exam preparation to professional services,
              we're here to support you at every step.
            </p>

            <button
              className="hover:shadow-lg text-white font-medium px-8 py-3 rounded-full transition-shadow duration-400"
              style={{
                background: "linear-gradient(90deg, #1848AD 0%, #11337A 100%)",
              }}
            >
              Learn More About Us
            </button>
          </div>

          {/* Right Column - Image with Play Button */}
          <div className="relative rounded-[16px] overflow-hidden">
            <img
              src="/assets/discover-video-img.png"
              alt="Medical consultation"
              className="w-full h-auto rounded-[16px]"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="bg-[#FF5917] rounded-full p-4 cursor-pointer hover:bg-[#f4511e] transition-colors duration-200">
                <BiPlay className="w-8 h-8 text-white" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
