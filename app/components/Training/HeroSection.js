"use client";
export default function HeroSection() {
  return (
    <section className="py-16 px-4">
      <div className="max-w-[1280px] mx-auto">
        <div className="relative">
          {/* Base Image */}
          <div className="w-[55%] h-[600px] rounded-[32px] overflow-hidden">
            <img
              src="/assets/services2.jpeg"
              alt="Professional instructor teaching"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Overlapping Content Box */}
          <div className="absolute top-1/2 right-0 transform -translate-y-1/2 w-[60%] bg-[#0A2472] p-12 rounded-[32px] -ml-12">
            <div className="max-w-[600px]">
              <h2 className="text-white text-4xl lg:text-5xl font-bold mb-6 leading-tight">
                Unleash Your Potential with StudySmart's Specialized Training
              </h2>
              <p className="text-white/90 text-lg leading-relaxed">
                StudySmart is your gateway to specialized training designed to
                propel you towards academic excellence and career success. Dive
                into our tailored courses and workshops crafted to meet the
                unique challenges of today's educational and professional
                landscapes.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Responsive styles for mobile */}
      <style jsx>{`
        @media (max-width: 768px) {
          .absolute {
            position: relative;
            width: 100%;
            transform: none;
            margin-top: -2rem;
          }
        }
      `}</style>
    </section>
  );
}
