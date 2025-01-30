import { FaFlask, FaClipboardList } from "react-icons/fa";

export default function DualPillars() {
  const pillars = [
    {
      icon: <FaFlask className="w-12 h-12 text-[#0A2472]" />,
      title: "Exam Alchemy",
      description:
        "Transform knowledge into stellar scores through personalized preparation strategies.",
    },
    {
      icon: <FaClipboardList className="w-12 h-12 text-[#0A2472]" />,
      title: "Interview Artistry",
      description:
        "Refine your narrative and presence to captivate any admissions panel.",
    },
  ];

  return (
    <section className="bg-[#FCFCFC] px-4 md:px-8 md:py-[100px] py-[50px]">
      <div className="max-w-[1280px] mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-[32px] font-bold mb-4">
            Dual Pillars of Excellence
          </h2>
          <p className="text-gray-600 text-lg">Tailor-Made Triumphs Await</p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {pillars.map((pillar, index) => (
            <div
              key={index}
              className="bg-white rounded-[32px] p-8 flex flex-col items-center text-center border border-gray-100 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="mb-6">{pillar.icon}</div>
              <h3 className="text-2xl font-bold mb-4">{pillar.title}</h3>
              <p className="text-gray-600 max-w-md">{pillar.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
