import React from "react";
import RuleItem from "./RuleItem";
import { useNavigate } from "react-router-dom";

const myRules = [
    {
        id: 1,
        rule: "Scan the QR code ",
        subrule: "Scanning your qrcode will mark your attendance for the day. ",
    },
    {
        id: 2,
        rule: " Stay Consistant ",
        subrule: "lorem ipsum dolor sit amet, consectetur adipiscing elit. ",
    },
    {
        id: 3,
        rule: "lorem ipsum",
        subrule: "lorem ipsum dolor sit amet, consectetur adipiscing elit. ",
    },
];

const Rules = () => {
    const navigate = useNavigate();
    return (
        <React.Fragment>
            <h1 className="text-2xl underline font-bold">OnBoarding 🎉</h1>
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
                Lets go 💪
            </button>
        </React.Fragment>
    );
};

export default Rules;
