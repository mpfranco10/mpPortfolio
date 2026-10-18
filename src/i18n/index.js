import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import en from "./locales/en.json";
import ja from "./locales/ja.json";

const updateDocumentLanguage = (language) => {
  document.documentElement.lang = language === "ja" ? "ja" : "en";
  document.title = i18n.t("document.title");
  document
    .querySelector('meta[name="description"]')
    ?.setAttribute("content", i18n.t("document.description"));
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: { en: { translation: en }, ja: { translation: ja } },
    supportedLngs: ["en", "ja"],
    fallbackLng: "en",
    load: "languageOnly",
    detection: {
      order: ["localStorage", "navigator"],
      lookupLocalStorage: "portfolioLanguage",
      // Only explicit choices are persisted; first visits follow the browser.
      caches: [],
      convertDetectedLanguage: (language) =>
        /^ja(?:-|$)/i.test(language) ? "ja" : "en",
    },
    interpolation: { escapeValue: false },
  });

updateDocumentLanguage(i18n.resolvedLanguage);
i18n.on("languageChanged", (language) => {
  updateDocumentLanguage(language);
  try {
    localStorage.setItem("portfolioLanguage", language);
  } catch {
    // Language selection still works when browser storage is unavailable.
  }
});

export default i18n;
