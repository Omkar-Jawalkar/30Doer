import React from "react";
import RuleItem from "./RuleItem";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

const myRules = [
    {
        id: 1,
        rule: "onboardingRule1",
        subrule: "onboardingRule1Des",
    },
    {
        id: 2,
        rule: "onboardingRule2",
        subrule: "onboardingRule2Des",
    },
    {
        id: 3,
        rule: "onboardingRule3",
        subrule: "onboardingRule3Des",
    },
];

const Rules = () => {
    const navigate = useNavigate();
    const { t } = useTranslation();
    return (
        <React.Fragment>
            <h1 className="text-2xl underline font-bold">{t("onboarding")}</h1>
            <div className="flex px-4 space-y-4 flex-col justify-center items-start">
                {myRules.map((rule) => (
                    <RuleItem key={rule.id} {...rule} />
                ))}
            </div>
            <button
                onClick={() => {
                    navigate("/");
                }}
                className="bg-[#2C5F2D] py-1 rounded-md text-white font-bold px-3"
            >
                {t("letsgo")}
            </button>
        </React.Fragment>
    );
};

export default Rules;
