"use client";

import Image from "next/image";
import { BsArrowRight } from "react-icons/bs";
import { useLanguage } from "@/app/context/LanguageContext";

export default function BlogSection() {
  const { t, locale } = useLanguage();
  const blogPosts = t("home.blog.posts");

  return (
    <section className="bg-primary">
      <div
        className={`bg-[#FCFCFC] px-4 md:px-8 py-[75px] rounded-tl-[64px] ${
          locale === "ar" ? "rtl" : "ltr"
        }`}
      >
        <div className="max-w-[1280px] mx-auto">
          <h2 className="text-[30px] font-bold text-center md:mb-[70px] mb-[40px]">
            {t("home.blog.title")}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {blogPosts.map((post) => (
              <article
                key={post.id}
                className="group flex flex-col hover:cursor-pointer p-[24px] bg-white rounded-[16px]"
              >
                <div className="relative w-[80px] h-[80px] mb-6 overflow-hidden rounded-2xl">
                  <Image
                    src={post.image || "/placeholder.svg"}
                    alt={post.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="text-[18px] text-dark font-bold mb-[6px]">
                  {post.title}
                </h3>
                <p className="text-light mb-4 flex-grow">{post.content}</p>
                <BsArrowRight
                  className={`${
                    locale === "ar" ? "me-auto rotate-180" : "ms-auto"
                  } text-dark w-[20px] h-[20px] group-hover:translate-x-1 transition-all transition-transform`}
                />
              </article>
            ))}
          </div>

          <div className="text-center">
            <p className="text-middle mb-6">{t("home.blog.subtitle")}</p>
            <button className="inline-flex items-center gap-2 px-6 py-3 rounded-full border-2 border-primary text-dark font-medium hover:bg-primary/5 transition-colors duration-400 ease-in-out">
              {t("home.blog.exploreButton")}
              <BsArrowRight className={locale === "ar" ? "rotate-180" : ""} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
