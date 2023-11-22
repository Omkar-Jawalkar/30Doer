import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n.use(initReactI18next).init({
    fallbackLng: "mr",
    lng: "mr",
    resources: {
        en: {
            // eslint-disable-next-line no-undef
            // translations: import("./locales/en/translations.json"),
            translations: {
                logoName: "30 asdasdasf",
            },
        },
        mr: {
            // eslint-disable-next-line no-undef
            // translations: import("./locales/mr/translations.json"),
            translations: {
                logoName: "30 marathi",
            },
        },
        hi: {
            // eslint-disable-next-line no-undef
            // translations: import("./locales/hi/translations.json"),
            translations: {
                logoName: "30 hndi",
            },
        },
    },
    ns: ["translations"],
    defaultNS: "translations",
    debug: true,
    interpolation: {
        escapeValue: false,
    },
});

i18n.languages = ["en", "mr", "hi"];

export default i18n;
