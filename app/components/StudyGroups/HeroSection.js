export default function HeroSection() {
  return (
    <section className="min-h-screen bg-[#FCFCFC]">
      <div className="w-full">
        <div className="relative flex flex-col items-center md:h-[775px]">
          {/* Base Image */}
          <div className="w-full h-[73vh] rounded-b-[80px] overflow-hidden mt-[-7px]">
            <img
              src="/assets/study-group-hero.jpeg"
              alt="Professional instructor teaching"
              className="w-full h-full object-cover object-[50%_80%]"
            />
          </div>

          {/* Overlapping Content Box */}
          <div className="w-full px-4">
            <div className="max-w-[1280px] mx-auto w-full">
              <div className="bg-secondary p-[24px] md:p-[40px] rounded-[16px] w-full text-center max-w-[852px] mx-auto mt-[-150px]">
                <h4 className="md:text-[24px] text-white font-[600] font-montagu mb-2">
                  Knowledge Synergy:
                </h4>
                <h1 className="text-white text-[28px] sm:text-[32px] md:text-[48px] font-[600] font-montagu mb-4 md:mb-[24px] md:leading-[61.54px]">
                  Collaborative and Collective Learning at StudySmart
                </h1>
                <p className="text-white text-[18px] font-[300]">
                  Dive into a world of shared knowledge and collective growth
                  with StudySmart's innovative study groups. Our dual-track
                  approach offers tailored experiences for both intensive
                  academic review and groundbreaking research endeavors.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
