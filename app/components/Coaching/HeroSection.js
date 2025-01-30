"use client";

export default function HeroSection() {
  return (
    <section className="min-h-screen bg-[#FCFCFC]">
      <div className="w-full">
        <div className="relative flex flex-col items-center md:h-[775px]">
          {/* Base Image */}
          <div className="w-full h-[73vh] rounded-b-[80px] overflow-hidden mt-[-7px]">
            <img
              src="/assets/chess.jpeg"
              alt="Professional instructor teaching"
              className="w-full h-full object-cover object-[50%_80%]"
            />
          </div>

          {/* Overlapping Content Box */}
          <div className="w-full px-4">
            <div className="max-w-[1280px] mx-auto w-full">
              <div className="bg-primary p-[24px] md:p-[40px] rounded-[16px] w-full text-center max-w-[852px] mx-auto mt-[-150px]">
                <h4 className="md:text-[24px] text-white font-[600] font-montagu mb-2">
                  Sculpt Your Success:
                </h4>
                <h1 className="text-white text-[28px] sm:text-[32px] md:text-[48px] font-[600] font-montagu mb-4 md:mb-[24px] md:leading-[61.54px]">
                  StudySmart's Precision Coaching
                </h1>
                <p className="text-white text-[18px] font-[300]">
                  Embark on a bespoke developmental odyssey with StudySmart's
                  finely-tuned coaching programs. Our expert mentors craft
                  individualized strategies to elevate your performance in exams
                  and interviews alike.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
