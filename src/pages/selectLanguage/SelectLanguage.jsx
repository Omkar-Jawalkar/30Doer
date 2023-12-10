import { useTranslation } from "react-i18next";
import React from "react";
import useLocalStorage from "../../hooks/useLocalStorage";

const SelectLanguage = () => {
    const { t, i18n } = useTranslation();
    const [language, setLanguage] = useLocalStorage("language", {
        value: "en",
    });

    return (
        <React.Fragment>
            <label className=" my-4 text-xl px-2" htmlFor="chooseLanguage">
                {t("selectLanguage")}
            </label>
            <select
                className=" outline-none border  rounded-md py-2 px-4"
                name="chooseLanguage"
                value={language?.value}
                onChange={(e) => {
                    i18n.changeLanguage(e.target.value);
                    setLanguage({ value: e.target.value });
                    // setLanguage({ language: e.target.value });
                }}
            >
                <option value="en">English</option>
                <option value="mr">Marathi</option>
                <option value="hi">Hindi</option>
            </select>
            <p className="px-2 text-center text-slate-500">
                {t("selectLanguageDescription")}
                <br />
                {t("selectLanguageDescription2")}
            </p>
            <span className="cursor-pointer my-1 underline font-semibold text-[#2C5F2D] ">
                30Doer@gmail.com
            </span>
        </React.Fragment>
    );
};

export default SelectLanguage;
