import Image from "next/image";

export default function DualPillars() {
  const pillars = [
    {
      icon: "/assets/test.svg",
      title: "Exam Alchemy",
      description:
        "Transform knowledge into stellar scores through personalized preparation strategies.",
    },
    {
      icon: "/assets/board.svg",
      title: "Interview Artistry",
      description:
        "Refine your narrative and presence to captivate any admissions panel.",
    },
  ];

  return (
    <section className="bg-[#FCFCFC] px-4 md:px-8 py-[100px]">
      <div className="max-w-[1280px] mx-auto">
        <div className="text-center mb-[56px] md:mb-[70px]">
          <h2 className="text-[28px] sm:text-[30px] md:text-[32px] font-bold mb-4">
            Dual Pillars of Excellence
          </h2>
          <p className="text-middle text-[20px] font-[300]">
            Tailor-Made Triumphs Await
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-4 md:gap-6">
          {pillars.map((pillar, index) => (
            <div
              key={index}
              className="bg-white rounded-[40px] px-[24px] md:px-[40px] py-[24px] flex flex-col gap-4 items-center text-center border border-[#0000001A] hover:shadow-md transition-shadow"
            >
              <Image
                src={pillar.icon}
                alt={pillar.title}
                width={80}
                height={80}
              />
              <h3 className="text-[22px] sm:text-[24px] text-dark font-bold">
                {pillar.title}
              </h3>
              <p className="text-[18px] sm:text-[20px] text-dark font-[300]">
                {pillar.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
