import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n.use(initReactI18next).init({
    fallbackLng: "en",
    lng: "en",
    resources: {
        en: {
            // eslint-disable-next-line no-undef
            translation: import("./locales/en/translations.json"),
        },
        mr: {
            // eslint-disable-next-line no-undef
            translation: import("./locales/mr/translations.json"),
        },
        hi: {
            // eslint-disable-next-line no-undef
            translation: import("./locales/hi/translations.json"),
        },
    },
});

i18n.languages = ["en", "mr", "hi"];

export default i18n;
