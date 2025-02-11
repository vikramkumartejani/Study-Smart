"use client";
import { useLanguage } from "../context/LanguageContext";
import Image from "next/image";
import Link from "next/link";

export default function ProfessionalServices() {
  const { t, locale } = useLanguage();

  const services = [
    {
      icon: "/assets/user-octagon.svg",
      title: t("professionalServicesPage.services.projectAssistance.title"),
      description: t(
        "professionalServicesPage.services.projectAssistance.description"
      ),
    },
    {
      icon: "/assets/user-octagon.svg",
      title: t("professionalServicesPage.services.immigration.title"),
      description: t(
        "professionalServicesPage.services.immigration.description"
      ),
    },
    {
      icon: "/assets/user-octagon.svg",
      title: t("professionalServicesPage.services.patent.title"),
      description: t("professionalServicesPage.services.patent.description"),
    },
    {
      icon: "/assets/user-octagon.svg",
      title: t("professionalServicesPage.services.resume.title"),
      description: t("professionalServicesPage.services.resume.description"),
    },
    {
      icon: "/assets/user-octagon.svg",
      title: t("professionalServicesPage.services.research.title"),
      description: t("professionalServicesPage.services.research.description"),
    },
  ];

  // Add this array for the detailed services
  const detailedServices = [
    {
      id: "project",
      title: t("professionalServicesPage.sections.project.title"),
      subtitle: t("professionalServicesPage.sections.project.subtitle"),
      description: t("professionalServicesPage.sections.project.description"),
      cta: t("professionalServicesPage.sections.project.cta"),
    },
    {
      id: "immigration",
      title: t("professionalServicesPage.sections.immigration.title"),
      subtitle: t("professionalServicesPage.sections.immigration.subtitle"),
      description: t(
        "professionalServicesPage.sections.immigration.description"
      ),
      cta: t("professionalServicesPage.sections.immigration.cta"),
    },
    {
      id: "patent",
      title: t("professionalServicesPage.sections.patent.title"),
      subtitle: t("professionalServicesPage.sections.patent.subtitle"),
      description: t("professionalServicesPage.sections.patent.description"),
      cta: t("professionalServicesPage.sections.patent.cta"),
    },
    {
      id: "resume",
      title: t("professionalServicesPage.sections.resume.title"),
      subtitle: t("professionalServicesPage.sections.resume.subtitle"),
      description: t("professionalServicesPage.sections.resume.description"),
      cta: t("professionalServicesPage.sections.resume.cta"),
    },
    {
      id: "research",
      title: t("professionalServicesPage.sections.research.title"),
      subtitle: t("professionalServicesPage.sections.research.subtitle"),
      description: t("professionalServicesPage.sections.research.description"),
      cta: t("professionalServicesPage.sections.research.cta"),
    },
  ];

  return (
    <div className={`w-full ${locale === "fa" ? "rtl" : "ltr"}`}>
      {/* Hero Section */}
      <section className="relative bg-[#A2BDE1] overflow-hidden -mt-10 rounded-b-[80px]">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 pt-20 md:pt-[100px] xl:pt-20">
          <div className="flex flex-col lg:flex-row items-center gap-8">
            <div className="lg:w-1/2 sm:text-left text-center">
              <h1 className="text-[25px] sm:text-[35px] xl:text-[48px] leading-[35px] sm:leading-[45px] xl:leading-[61px] font-semibold text-white mb-4">
                {t("professionalServicesPage.hero.title")}
              </h1>
              <p className="text-dark text-base sm:text-lg leading-[22.5px] font-light">
                {t("professionalServicesPage.hero.description")}
              </p>
            </div>
            <div className="lg:w-1/2 flex items-end justify-end lg:mr-10">
              <Image
                src="/assets/hero-professional.png"
                alt="Professional Services"
                width={450}
                height={400}
                className="rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Navigation */}
      <section className="py-24">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-[30px] leading-[37.5px] font-bold text-dark mb-4">
              {t("professionalServicesPage.navigation.title")}
            </h2>
            <p className="text-[#4D637B] text-xl leading-[25px] font-light">
              {t("professionalServicesPage.navigation.subtitle")}
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-[1440px] mx-auto">
            {services.slice(0, 3).map((service, index) => (
              <div
                key={index}
                className="text-center px-4 py-6 md:p-6 bg-white"
              >
                <div className="mb-4">
                  <Image
                    src={service.icon}
                    alt={service.title}
                    width={64}
                    height={64}
                    className="mx-auto"
                  />
                </div>
                <h3 className="text-[20px] leading-[25px] sm:text-[24px] sm:leading-[30px] font-bold mb-4">
                  {service.title}
                </h3>
                <p className="text-dark text-[16px] leading-[20px] font-light">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
          {/* Bottom Two Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:max-w-[900px] mx-auto mt-6 lg:mt-12">
            {services.slice(3, 5).map((service, index) => (
              <div
                key={index}
                className="text-center px-4 py-6 md:p-6 bg-white"
              >
                <div className="mb-4">
                  <Image
                    src={service.icon}
                    alt={service.title}
                    width={64}
                    height={64}
                    className="mx-auto"
                  />
                </div>
                <h3 className="text-[20px] leading-[25px] sm:text-[24px] sm:leading-[30px] font-bold mb-4">
                  {service.title}
                </h3>
                <p className="text-dark text-[16px] leading-[20px] font-light">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Sections */}
      <section className="py-16">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-10 gap-8">
            {/* Left Column - Number 5 */}
            <div className="lg:col-span-4 lg:h-[calc(170vh)]">
              <div className="sticky top-24">
                <div className="flex items-end gap-6">
                  <h1
                    className="text-[40px] leading-[51px] font-normal"
                    style={{
                      background:
                        "linear-gradient(102.62deg, #FF9063 0%, #CC4712 58.73%)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      backgroundClip: "text",
                    }}
                  >
                    {locale === "fa" ? "خدماتنا" : "Our"}
                  </h1>
                  <Image src="/assets/5.svg" alt="5" width={150} height={248} />
                </div>
                <h1
                  className="mt-6 text-[35px] sm:text-[40px] xl:text-[56px] leading-[42px] sm:leading-[50px] xl:leading-[71px] font-bold uppercase"
                  style={{
                    background:
                      "linear-gradient(102.62deg, #FF9063 0%, #CC4712 58.73%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  {locale === "fa" ? "المهنية" : "Professional"}
                  <br />
                  {locale === "fa" ? "" : "Services"}
                </h1>
              </div>
            </div>

            {/* Right Column - Services List */}
            <div className="lg:col-span-6 relative min-h-[calc(100vh-96px)]">
              {/* Main vertical line */}
              <div className=" lg:block hidden absolute left-1.5 top-[10px] w-[1px] h-[calc(100%-14px)] bg-[#00000020]"></div>

              {/* Services List */}
              <div className="space-y-16">
                {detailedServices.map((service, index) => (
                  <div key={service.id} className="flex flex-col">
                    <div className="flex items-start gap-6 relative">
                      {/* Blue dot */}
                      <div className="relative lg:block hidden">
                        <div className="w-3 h-3 rounded-full bg-[#1848AD] mt-3 top-24 relative z-20"></div>
                      </div>
                      <div className="flex-1">
                        <h3 className="text-[24px] leading-[35px] font-bold text-dark mb-1">
                          {service.title}
                        </h3>
                        <p className="text-[18px] leading-[20px] font-medium text-[#4D637B] mb-4">
                          {service.subtitle}
                        </p>
                        <p className="text-[18px] leading-[24px] font-light text-[#4D637B] mb-4">
                          {service.description}
                        </p>
                        <Link
                          href="#"
                          className="inline-flex items-center gap-2 text-[#1848AD] hover:text-[#1848AD]/80 transition-colors text-[18px] font-medium"
                        >
                          <span>{service.cta}</span>
                          <span className={locale === "fa" ? "rotate-180" : ""}>
                            <Image
                              src="/assets/timeline-arrow.svg"
                              alt="arrow"
                              width={20}
                              height={20}
                            />
                          </span>
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="pb-16 pt-10 md:py-16">
        <div className="max-w-[990px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-dark text-[20px] leading-[25px] font-medium mb-10">
            {t("professionalServicesPage.cta.text")}
          </p>
          <button
            style={{
              background: "linear-gradient(90deg, #1848AD 0%, #11337A 100%)",
            }}
            className="w-full sm:w-fit px-5 sm:px-10 py-4 rounded-[31px] text-white text-base sm:text-[18px] leading-[22.5px] font-medium hover:opacity-90 transition-all duration-300"
          >
            {t("professionalServicesPage.cta.button")}
          </button>
        </div>
      </section>
    </div>
  );
}
