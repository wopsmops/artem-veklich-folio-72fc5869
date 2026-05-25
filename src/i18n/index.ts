import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import en from "./locales/en.json";
import uk from "./locales/uk.json";
import fr from "./locales/fr.json";

const savedLanguage =
  typeof window !== "undefined"
    ? localStorage.getItem("av_language") || "en"
    : "en";

if (!i18n.isInitialized) {
  i18n.use(initReactI18next).init({
    resources: {
      en: { translation: en },
      uk: { translation: uk },
      fr: { translation: fr },
    },
    lng: savedLanguage,
    fallbackLng: "en",
    interpolation: { escapeValue: false },
  });
}

export default i18n;
