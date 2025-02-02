"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, EffectCoverflow } from "swiper/modules";
import Image from "next/image";
import { useLanguage } from "@/app/context/LanguageContext";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";

export default function Testimonials() {
  const { t, locale } = useLanguage(); // Added locale
  const testimonials = t("home.testimonials.items");

  // If testimonials is not an array or is empty, use an empty array
  const testimonialItems = Array.isArray(testimonials) ? testimonials : [];

  return (
    <section className="bg-[#FCFCFC] px-4 md:px-8 md:py-[75px] py-[36px]">
      <div className="max-w-[1280px] mx-auto ">
        <h2 className="text-[24px] text-dark font-bold text-center md:mb-[70px] mb-[40px]">
          {t("home.testimonials.title")}
        </h2>

        <div className="relative">
          <Swiper
            modules={[Navigation, Pagination, EffectCoverflow]}
            spaceBetween={16}
            slidesPerView={1}
            centeredSlides={true}
            loop={true}
            dir={locale === "ar" ? "rtl" : "ltr"} // Added dir prop
            coverflowEffect={{
              rotate: 0,
              stretch: 0,
              depth: 100,
              modifier: 2.5,
              slideShadows: false,
            }}
            navigation={{
              prevEl: ".custom-swiper-button-prev",
              nextEl: ".custom-swiper-button-next",
            }}
            pagination={{
              clickable: true,
              el: ".custom-swiper-pagination",
            }}
            breakpoints={{
              1024: {
                slidesPerView: 3,
              },
            }}
          >
            {[...testimonialItems, ...testimonialItems].map(
              (testimonial, index) => (
                <SwiperSlide
                  key={index}
                  className="swiper-slide-custom pb-[35px] px-[12px]"
                >
                  {/* Rest of your SwiperSlide content remains exactly the same */}
                  <div className="testimonial-box bg-white rounded-[16px] p-6 min-h-[260px] flex flex-col transform transition-all duration-300 gap-[24px] lg:max-w-full md:max-w-[650px] max-w-[320px] mx-auto">
                    <div className="flex items-center gap-[24px]">
                      <div className="relative w-[64px] h-[80px]">
                        <Image
                          src={testimonial.image}
                          alt={testimonial.name}
                          fill
                          className="rounded-full object-cover"
                        />
                      </div>
                      <div>
                        <h3 className="text-dark font-[400]">
                          {testimonial.name}
                        </h3>
                        <p className="text-light font-[300]">
                          {testimonial.role}
                        </p>
                      </div>
                    </div>
                    <blockquote className="text-dark font-[300]">
                      <Image
                        src="/assets/qoute.png"
                        alt="quote"
                        width={27.84}
                        height={24}
                        className="mb-[6px]"
                      />
                      {testimonial.quote}
                      <Image
                        src="/assets/qoute.png"
                        alt="quote"
                        width={27.84}
                        height={24}
                        className="mt-[4px] ms-auto rotate-[180deg]"
                      />
                    </blockquote>
                  </div>
                </SwiperSlide>
              )
            )}
          </Swiper>

          {/* Custom Navigation Buttons - Kept exactly the same */}
          <button className="custom-swiper-button-prev absolute left-0 top-1/2 -translate-y-1/2 z-10 transition-colors">
            <Image
              src="/assets/arrow-left.png"
              alt="Previous"
              width={40}
              height={40}
            />
          </button>
          <button className="custom-swiper-button-next absolute right-0 top-1/2 -translate-y-1/2 z-10 transition-colors">
            <Image
              src="/assets/arrow-right.png"
              alt="Next"
              width={40}
              height={40}
            />
          </button>

          {/* Custom Pagination - Kept exactly the same */}
          <div className="custom-swiper-pagination flex justify-center gap-2 md:mt-[35px]"></div>
        </div>

        <style jsx global>{`
          /* All your existing styles remain the same */
          .swiper-slide-custom {
            opacity: 0.5;
            transition: opacity 0.3s ease;
          }

          .swiper-slide-active .testimonial-box {
            box-shadow: 0px 16px 40px rgba(0, 0, 0, 0.2);
          }

          .swiper-slide-active {
            opacity: 1;
          }

          .custom-swiper-pagination .swiper-pagination-bullet {
            background: rgb(229, 227, 227) !important;
            opacity: 1;
            width: 10px;
            height: 10px;
            margin: 0 6px;
            transition: background 0.3s ease;
          }

          .custom-swiper-pagination .swiper-pagination-bullet-active {
            background: #ff5917 !important;
            width: 12px;
            height: 12px;
          }

          .swiper-button-prev,
          .swiper-button-next {
            display: none !important;
          }

          .custom-swiper-button-prev,
          .custom-swiper-button-next {
            background: none;
            border: none;
            cursor: pointer;
          }

          /* Added this one new style for RTL support */
          html[dir="rtl"] .swiper-wrapper {
            flex-direction: row-reverse;
          }
        `}</style>
      </div>
    </section>
  );
}
