import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import en from "../translations/en/global.json";
import es from "../translations/es/global.json";

const savedLanguage = localStorage.getItem("language") || "es";

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: { global: en },
      es: { global: es },
    },
    lng: savedLanguage,
    fallbackLng: "es",
    interpolation: {
      escapeValue: false,
    },
  });

  i18n.on("languageChanged", (lng) => {
    localStorage.setItem("language", lng);
  });

export default i18n;