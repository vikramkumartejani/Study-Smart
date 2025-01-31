import {
  FaPencilRuler,
  FaRegEye,
  FaRegCompass,
  FaExpandAlt,
  FaRoute,
} from "react-icons/fa";

export default function TrajectoryMapping() {
  const offerings = [
    {
      icon: <FaPencilRuler className="w-12 h-12" />,
      title: "Personalized path projections",
    },
    {
      icon: <FaRegEye className="w-12 h-12" />,
      title: "Decision point navigation",
    },
    {
      icon: <FaRegCompass className="w-12 h-12" />,
      title: "Resource constellation identification",
    },
    {
      icon: <FaExpandAlt className="w-12 h-12" />,
      title: "Opportunity horizon scanning",
    },
    {
      icon: <FaRoute className="w-12 h-12" />,
      title: "Adaptive route recalibration",
    },
  ];

  return (
    <section className="bg-[#FCFCFC] px-4 md:px-8 md:py-[100px] py-[64px]">
      <div className="max-w-[1280px] mx-auto text-center">
        <h2 className="text-[32px] font-bold mb-4">
          Trajectory Mapping: Charting Your Unique Course
        </h2>
        <h3 className="text-xl text-gray-600 mb-6">
          Bespoke Blueprints for Boundless Potential
        </h3>
        <p className="max-w-3xl mx-auto text-gray-600 mb-16">
          Our Trajectory Mapping service is your personal atlas to success. Our
          expert cartographers of careers meticulously plot your journey,
          considering your unique strengths, aspirations, and the ever-changing
          landscape of medical education.
        </p>

        <h4 className="text-xl font-semibold text-[#0A2472] mb-12">
          Key Offerings:
        </h4>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          {offerings.map((offering, index) => (
            <div
              key={index}
              className="flex flex-col items-center p-6 rounded-2xl border border-gray-100 hover:shadow-md transition-shadow"
            >
              <div className="text-[#0A2472] mb-4">{offering.icon}</div>
              <p className="text-sm font-medium">{offering.title}</p>
            </div>
          ))}
        </div>

        <button className="bg-[#0A2472] text-white px-8 py-3 rounded-full font-medium hover:bg-[#0A2472]/90 transition-colors">
          Plot Your Course
        </button>
      </div>
    </section>
  );
}
