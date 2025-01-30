"use client";

export default function TransformSection() {
  return (
    <section className="bg-[#FCFCFC] px-4 md:px-8 md:py-[75px] py-[36px]">
      <div className="max-w-[1280px] mx-auto flex md:flex-row flex-col gap-8 md:gap-16 items-center">
        {/* Left Column - Image */}
        <div className="relative md:w-[45%]">
          <div className="rounded-[40px] overflow-hidden bg-[#f3f4f6]">
            <img
              src="/assets/doctor.jpeg"
              alt="Medical Professional"
              className="w-full md:h-[565.62px] h-[382px] transform scale-x-[-1] object-cover"
            />
          </div>
        </div>

        {/* Right Column - Text Content */}
        <div className="text-center md:text-left md:w-[60%]">
          <h1 className="text-[28px] sm:text-[32px] md:text-[38px] lg:text-[44px] font-[300] text-[#1e3a8a] lg:leading-[61.54px] md:leading-[55px] text-center">
            Together, we'll transform your USMLE ambitions into achievements and
            your dreams into reality. Your future starts here.
          </h1>
        </div>
      </div>
    </section>
  );
}
