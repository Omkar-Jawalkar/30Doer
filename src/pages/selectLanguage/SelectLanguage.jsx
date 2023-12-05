import { useTranslation } from "react-i18next";
import React, { useState, useEffect } from "react";

const SelectLanguage = () => {
    const { i18n } = useTranslation();
    const [language, setLanguage] = useState("en");

    useEffect(() => {
        i18n.changeLanguage(language);
        // YEt
    }, [language]);

    return (
        <React.Fragment>
            <label className="px-2" htmlFor="chooseLanguage">
                Select Language
            </label>
            <select
                className=" outline-none rounded-md py-2 px-4"
                name="chooseLanguage"
                onChange={(e) => {
                    setLanguage(e.target.value);
                }}
            >
                <option value="en">English</option>
                <option value="mr">Marathi</option>
                <option value="hi">Hindi</option>
            </select>
        </React.Fragment>
    );
};

export default SelectLanguage;
