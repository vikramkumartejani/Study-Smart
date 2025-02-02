import { FaMapMarkerAlt } from "react-icons/fa";
import { useLanguage } from "@/app/context/LanguageContext";

export default function Roadmap() {
  const { t } = useLanguage();

  const milestones = [
    {
      title: t("consulting.roadmap.milestone1.title"),
      description: t("consulting.roadmap.milestone1.description"),
    },
    {
      title: t("consulting.roadmap.milestone2.title"),
      description: t("consulting.roadmap.milestone2.description"),
    },
  ];

  return (
    <section className="bg-[#FCFCFC] md:py-[100px] py-[64px]">
      <div
        className="relative px-4 md:px-8"
        style={{
          background: "linear-gradient(90deg, #1848AD 0%, #11337A 100%)",
        }}
      >
        <div className="md:relative max-w-[1280px] mx-auto text-center text-white h-full md:py-[80px] py-[64px]">
          <div
            className="absolute inset-0 object-cover bg-cover bg-center bg-no-repeat h-full w-full z-[2]"
            style={{ backgroundImage: "url(/assets/world-bg.png)" }}
          />
          <div className="relative z-10 flex flex-col gap-[40px]">
            <div className="text-center">
              <h2 className="text-[28px] md:text-[30px] font-bold mb-4">
                {t("consulting.roadmap.title")}
              </h2>
              <p className="text-[20px] font-[300]">
                {t("consulting.roadmap.subtitle")}
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12 mx-auto">
              {milestones.map((milestone, index) => (
                <div key={index} className="text-center flex flex-col gap-2">
                  <div className="flex justify-center">
                    <FaMapMarkerAlt className="w-[80px] h-[80px]" />
                  </div>
                  <h3 className="text-[20px] font-[500]">{milestone.title}</h3>
                  <p className="font-[300]">{milestone.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
