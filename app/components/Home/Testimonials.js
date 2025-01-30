"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, EffectCoverflow } from "swiper/modules";
import Image from "next/image";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";

const testimonials = [
  {
    id: 1,
    name: "Amir Rahimi",
    role: "Residency Applicant",
    image: "/assets/testimonial-img-1.png",
    quote:
      "The coaching services were a game-changer for my interview preparation. The personalized feedback and practice sessions boosted my confidence.",
  },
  {
    id: 2,
    name: "Sara Ghadiri",
    role: "Medical Student",
    image: "/assets/testimonial-img-1.png",
    quote:
      "StudySmart's USMLE courses were instrumental in my preparation. The comprehensive materials and expert guidance helped me achieve a high score on Step 1.",
  },
  {
    id: 3,
    name: "Bahram M.",
    role: "USMLE Candidate",
    image: "/assets/testimonial-img-1.png",
    quote:
      "The peer study groups provided a great platform for collaborative learning. I gained valuable insights and support from fellow students.",
  },
  {
    id: 1,
    name: "Amir Rahimi",
    role: "Residency Applicant",
    image: "/assets/testimonial-img-1.png",
    quote:
      "The coaching services were a game-changer for my interview preparation. The personalized feedback and practice sessions boosted my confidence.",
  },
  {
    id: 2,
    name: "Sara Ghadiri",
    role: "Medical Student",
    image: "/assets/testimonial-img-1.png",
    quote:
      "StudySmart's USMLE courses were instrumental in my preparation. The comprehensive materials and expert guidance helped me achieve a high score on Step 1.",
  },
  {
    id: 3,
    name: "Bahram M.",
    role: "USMLE Candidate",
    image: "/assets/testimonial-img-1.png",
    quote:
      "The peer study groups provided a great platform for collaborative learning. I gained valuable insights and support from fellow students.",
  },
];

export default function Testimonials() {
  return (
    <section className="bg-[#FCFCFC] px-4 md:px-8 md:py-[75px] py-[36px]">
      <div className="max-w-[1280px] mx-auto ">
        <h2 className="text-[24px] text-dark font-bold text-center md:mb-[70px] mb-[40px]">
          See What Our Students Are Saying
        </h2>

        <div className="relative">
          <Swiper
            modules={[Navigation, Pagination, EffectCoverflow]}
            spaceBetween={16}
            slidesPerView={1}
            centeredSlides={true}
            loop={true}
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
                slidesPerView: 3, // Show 1 slide at a time on mobile
              },
            }}
          >
            {testimonials.map((testimonial) => (
              <SwiperSlide
                key={testimonial.id}
                className="swiper-slide-custom pb-[35px] px-[12px]"
              >
                <div className="testimonial-box bg-white rounded-[16px] p-6 min-h-[260px] flex flex-col transform transition-all duration-300 gap-[24px] lg:max-w-full md:max-w-[650px] max-w-[320px] mx-auto">
                  <div className="flex items-center gap-[24px]">
                    <div className="relative w-[64px] h-[80px]">
                      <Image
                        src={testimonial.image || "/placeholder.svg"}
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
            ))}
          </Swiper>

          {/* Custom Navigation Buttons */}
          <button className="custom-swiper-button-prev absolute left-0 top-1/2 -translate-y-1/2 z-10 transition-colors">
            <Image
              src="/assets/arrow-left.png"
              alt="left-arrow"
              width={40}
              height={40}
            />
          </button>
          <button className="custom-swiper-button-next absolute right-0 top-1/2 -translate-y-1/2 z-10 transition-colors">
            <Image
              src="/assets/arrow-right.png"
              alt="right-arrow"
              width={40}
              height={40}
            />
          </button>

          {/* Custom Pagination */}
          <div className="custom-swiper-pagination flex justify-center gap-2 md:mt-[35px]"></div>
        </div>

        <style jsx global>{`
          /* Default slide styles */
          .swiper-slide-custom {
            opacity: 0.5;
            transition: opacity 0.3s ease;
          }

          /* Apply shadow only to the center slide */
          .swiper-slide-active .testimonial-box {
            box-shadow: 0px 16px 40px rgba(0, 0, 0, 0.2);
          }

          .swiper-slide-active {
            opacity: 1;
          }

          /* Pagination Dots */
          .custom-swiper-pagination .swiper-pagination-bullet {
            background: rgb(
              229,
              227,
              227
            ) !important; /* Inactive dot color (gray) */
            opacity: 1;
            width: 10px;
            height: 10px;
            margin: 0 6px;
            transition: background 0.3s ease;
          }

          .custom-swiper-pagination .swiper-pagination-bullet-active {
            background: #ff5917 !important; /* Active dot color (blue) */
            width: 12px;
            height: 12px;
          }
          /* Hide default navigation arrows */
          .swiper-button-prev,
          .swiper-button-next {
            display: none !important;
          }

          /* Style custom navigation buttons */
          .custom-swiper-button-prev,
          .custom-swiper-button-next {
            background: none;
            border: none;
            cursor: pointer;
          }
        `}</style>
      </div>
    </section>
  );
}
