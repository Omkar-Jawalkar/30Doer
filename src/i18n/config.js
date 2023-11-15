import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n.use(initReactI18next).init({
    fallbackLng: "en",
    lng: "en",
    resources: {
        en: {
            translation: require("./locales/en/translations.json"),
        },
        mr: {
            translation: require("./locales/mr/translations.json"),
        },
        hi: {
            translation: require("./locales/hi/translations.json"),
        },
    },
});

i18n.languages = ["en", "mr", "hi"];

export default i18n;
