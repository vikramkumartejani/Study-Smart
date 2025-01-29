import Image from "next/image";
import { BiBook, BiMapPin } from "react-icons/bi";
import { FaClipboardList, FaUserSecret } from "react-icons/fa6";
import { FiMoreHorizontal } from "react-icons/fi";
import { SiTarget } from "react-icons/si";

const services = [
  {
    icon: "/assets/book.png",
    title: "Training",
    description:
      "Transform your knowledge with our expert-led courses and workshops, designed to prepare you for the USMLE and more.",
  },
  {
    icon: "/assets/map.png",
    title: "Consulting",
    description:
      "Get expert advice tailored to your needs, guiding you through every step of your educational and professional journey.",
  },
  {
    icon: "/assets/people.png",
    title: "Study Groups",
    description:
      "Connect, collaborate, and conquer your goals with our dynamic peer study and research groups.",
  },
  {
    icon: "/assets/clipboard-text.png",
    title: "Coaching Services",
    description:
      "Excel in exams and interviews with personalized coaching from experienced professionals.",
  },
  {
    icon: "/assets/star.png",
    title: "Professional Services",
    description:
      "Navigate your career path with our comprehensive support in project assistance, immigration services, and more.",
  },
];

export default function Services() {
  return (
    <section className="bg-[#FCFCFC] px-4 md:px-8 md:py-[75px] py-[36px]">
      <div className="max-w-[1280px] mx-auto ">
        {/* Header */}
        <div className="text-center mb-[40px] md:mb-[75px] space-y-[14px] max-w-[595px] mx-auto">
          <h2 className="text-dark text-[28px] md:text-[30px] font-bold leading-[37.5px]">
            Unlock Your Potential with StudySmart
          </h2>
          <p className="text-middle text-[16px] md:text-[20px] font-[300]">
            Tailored services to elevate your medical career
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 md:gap-px gap-[32px] md:bg-[#0000001A]">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-[#FCFCFC] text-center md:p-[24px] p-4 space-y-[16px]"
            >
              {/* Icon Container */}
              <div className="w-[72px] h-[72px] bg-[#f3f4f6] rounded-[16px] flex items-center justify-center mx-auto">
                <Image src={service.icon} alt="icon" width={40} height={40} />
              </div>

              {/* Title */}
              <h3 className="text-dark text-[24px] font-bold">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-dark text-base font-[300]">
                {service.description}
              </p>
            </div>
          ))}

          {/* Last Cell with More Icon */}
          <div className="md:block hidden bg-[#FCFCFC] p-[24px] flex items-center justify-center">
            <FiMoreHorizontal className="w-[20px] min-w-[20px] h-[20px] text-light" />
          </div>
        </div>
      </div>
    </section>
  );
}
