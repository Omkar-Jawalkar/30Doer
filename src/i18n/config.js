import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import ENGTRANSLATION from "./locales/en/translations.json";
import MRTRANSLATION from "./locales/mr/translations.json";
import HITRANSLATION from "./locales/hi/translations.json";

i18n.use(initReactI18next).init({
    fallbackLng: "en",
    lng: "en",
    resources: {
        en: {
            // eslint-disable-next-line no-undef
            translations: ENGTRANSLATION,
            // translations: {
            //     logoName: "30 asdasdasf",
            // },
        },
        mr: {
            // eslint-disable-next-line no-undef
            // translations: import("./locales/mr/translations.json"),
            translations: MRTRANSLATION,
        },
        hi: {
            // eslint-disable-next-line no-undef
            // translations: import("./locales/hi/translations.json"),
            translations: HITRANSLATION,
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
