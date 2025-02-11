"use client";
import { useLanguage } from "../context/LanguageContext";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function RecentArticles() {
  const { t, locale } = useLanguage();
  const sortOptions = t("recentArticlesPage.sort.options");
  const [activeSort, setActiveSort] = useState(sortOptions[0]);
  const [articles, setArticles] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const articlesPerPage = 12;

  useEffect(() => {
    async function fetchArticles() {
      try {
        const response = await fetch(
          "http://localhost:1337/api/recent-articles?populate=*"
        ); // Update with your actual API endpoint
        const data = await response.json();
        console.log(data.data);
        setArticles(data.data);
      } catch (error) {
        console.error("Error fetching articles:", error);
      }
    }
    fetchArticles();
  }, []);

  const indexOfLastArticle = currentPage * articlesPerPage;
  const indexOfFirstArticle = indexOfLastArticle - articlesPerPage;
  const currentArticles = articles.slice(
    indexOfFirstArticle,
    indexOfLastArticle
  );

  const totalPages = Math.ceil(articles.length / articlesPerPage);

  return (
    <div className={`w-full bg-[#FCFCFC] ${locale === "fa" ? "rtl" : "ltr"}`}>
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 pt-8 md:pt-16 pb-16">
        {/* Header Section */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8">
          <h2 className="text-[30px] leading-[37.5px] font-bold text-dark mb-4 sm:mb-0">
            {t("recentArticlesPage.title")}
          </h2>

          {/* Sort Options */}
          <div className="flex items-center gap-4">
            <span className="text-[16px] font-light leading-[20px] text-[#6D8CAD] flex items-center gap-1">
              <Image src="/assets/sort.svg" alt="sort" width={16} height={16} />
              {t("recentArticlesPage.sort.label")}
            </span>
            <div className="flex gap-4">
              {sortOptions.map((option) => (
                <button
                  key={option}
                  onClick={() => setActiveSort(option)}
                  className={`text-[16px] leading-[20px] ${
                    activeSort === option
                      ? "text-dark font-medium"
                      : "text-[#6D8CAD] hover:text-dark font-normal"
                  }`}
                >
                  {option}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {currentArticles.map((article, index) => (
            <Link
              href={`/single-mag-page/${article.slug}?api=article`}
              key={index}
            >
              <div className="group cursor-pointer">
                <div className="relative w-full h-[200px] mb-4">
                  <Image
                    src={`http://localhost:1337${article.image[0].url}`}
                    alt={article.title}
                    fill
                    className="rounded-xl object-cover"
                  />
                </div>
                <div>
                  <h3 className="text-[18px] leading-[22.5px] font-medium text-dark mb-2 group-hover:text-[#1848AD] transition-colors">
                    {article.title}
                  </h3>
                  <p className="text-[#4D637B] text-base leading-[20px] font-light mb-4">
                    {article?.Description?.split(" ").slice(0, 20).join(" ") +
                      (article.Description.split(" ").length > 20 ? "..." : "")}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-[#6D8CAD] text-[14px]">
                      {article.date}
                    </span>
                    <div className="flex items-center gap-2">
                      <span className="sr-only">Read more</span>
                      <Image
                        src="/assets/mag-arrow.svg"
                        alt="arrow"
                        width={20}
                        height={20}
                        className="group-hover:translate-x-1 transition-transform"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Pagination */}
        <div className="flex justify-center items-center gap-2 sm:gap-4 mt-20">
          <button
            className="p-2 text-[#6D8CAD] hover:text-dark"
            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
            disabled={currentPage === 1}
          >
            <Image
              src="/assets/arrow-right.svg"
              alt="Previous"
              width={20}
              height={20}
              className="rotate-180"
            />
          </button>
          {[...Array(totalPages)].map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentPage(index + 1)}
              className={`min-w-8 sm:min-w-10 min-h-8 sm:min-h-10 text-base font-light leading-[20px] flex items-center justify-center rounded ${
                currentPage === index + 1
                  ? "bg-[#9CD4B4] text-white"
                  : "text-dark hover:text-dark"
              }`}
            >
              {index + 1}
            </button>
          ))}
          <button
            className="p-2 text-[#6D8CAD] hover:text-dark"
            onClick={() =>
              setCurrentPage((prev) => Math.min(prev + 1, totalPages))
            }
            disabled={currentPage === totalPages}
          >
            <Image
              src="/assets/arrow-right.svg"
              alt="Next"
              width={20}
              height={20}
            />
          </button>
        </div>
      </div>
    </div>
  );
}
