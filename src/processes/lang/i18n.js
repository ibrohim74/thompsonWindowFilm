import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

i18n
  .use(initReactI18next)
  .use(LanguageDetector)
  .init({
    fallbackLng: "en",
    interpolation: {
      escapeValue: false,
    },
    resources: {
      en: {
        translation:{
            home:"home"
        }
      },
      uz: {
        translation:{
            home:"uy"
        }
      },
      ru: {
        translation:{
            home:"dom"
        }
      },
    },
  });

export default i18n;
