"use client";
import { useState, useRef, useEffect } from "react";
import { useLanguage } from "../../context/LanguageContext";
import { IoLanguage } from "react-icons/io5";
import { IoChevronDownOutline } from "react-icons/io5";

export default function LanguageSelector() {
  const [isLangOpen, setIsLangOpen] = useState(false);
  const { locale, toggleLanguage } = useLanguage();
  const langDropdownRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (
        langDropdownRef.current &&
        !langDropdownRef.current.contains(event.target)
      ) {
        setIsLangOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div
      className="relative flex items-center justify-center"
      ref={langDropdownRef}
    >
      <button
        onClick={() => setIsLangOpen(!isLangOpen)}
        className="flex items-center space-x-1 text-gray-600 hover:text-blue-600"
      >
        <IoLanguage className="w-4 h-4" />
        <span>{locale.toUpperCase()}</span>
        <IoChevronDownOutline
          className={`w-4 h-4 transition-transform duration-200 ${
            isLangOpen ? "rotate-180" : ""
          }`}
        />
      </button>

      {isLangOpen && (
        <div className="absolute right-0 top-8 py-2 w-24 bg-white rounded-lg shadow-xl border border-gray-100">
          <button
            onClick={() => {
              toggleLanguage();
              setIsLangOpen(false);
            }}
            className={`block w-full px-4 py-2 text-sm text-left hover:bg-gray-50 ${
              locale === "fa" ? "text-gray-600" : "text-blue-600"
            }`}
          >
            EN
          </button>
          <button
            onClick={() => {
              toggleLanguage();
              setIsLangOpen(false);
            }}
            className={`block w-full px-4 py-2 text-sm text-left hover:bg-gray-50 ${
              locale === "en" ? "text-gray-600" : "text-blue-600"
            }`}
          >
            عربي
          </button>
        </div>
      )}
    </div>
  );
}
