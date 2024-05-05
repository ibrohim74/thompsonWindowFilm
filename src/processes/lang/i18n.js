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
            title_bronPlyonka:'Armored film',
            title_tanirovka:'Armored film',
            more:'view',
            view_all : "view all"
        }
      },
      uz: {
        translation:{
            title_bronPlyonka:'Zirhli film',
            title_tanirovka:'Tanirovka',
            more:"ko'rinish",
            view_all : "hammasini ko'rish"

        }
      },
      ru: {
        translation:{
            title_bronPlyonka:'Бронепленка',
            title_tanirovka:'танировка',
            more:"вид",
            view_all : "посмотреть все"
        }
      },
    },
  });

export default i18n;
