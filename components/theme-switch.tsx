"use client";

import { useTheme } from "@/context/theme-context";
import React from "react";
import { useTranslation } from "react-i18next";
import { BsMoon, BsSun } from "react-icons/bs";
import i18n from "./changeLanguaje";

export default function ThemeSwitch() {
  const { theme, toggleTheme } = useTheme();

  const toggleLanguage = () => {
    const newLang = i18n.language === "es" ? "en" : "es";
    i18n.changeLanguage(newLang);
  };

  return (
    <div className="fixed bottom-5 right-5 flex flex-col gap-2">
      <button
        className="bg-white w-[3rem] h-[3rem] bg-opacity-80 backdrop-blur-[0.5rem] border border-white border-opacity-40 shadow-2xl rounded-full flex items-center justify-center hover:scale-[1.15] active:scale-105 transition-all dark:bg-gray-950"
        onClick={toggleLanguage}
      >
        {i18n.language === "es" ? "En" : "Es"}
      </button>
      <button
        className="bg-white w-[3rem] h-[3rem] bg-opacity-80 backdrop-blur-[0.5rem] border border-white border-opacity-40 shadow-2xl rounded-full flex items-center justify-center hover:scale-[1.15] active:scale-105 transition-all dark:bg-gray-950"
        onClick={toggleTheme}
      >
        {theme === "light" ? <BsSun /> : <BsMoon />}
      </button>
    </div>
  );
}
