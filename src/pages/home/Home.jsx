// import FirstLogin from "../../components/first-login/FirstLogin";
import { BsQrCodeScan, BsQrCode } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import { GrPowerReset } from "react-icons/gr";
import React, { useState, useEffect, useTransition } from "react";
import useLocalStorage from "../../hooks/useLocalStorage";
import { useTranslation } from "react-i18next";

const Home = () => {
    /*
     *
     * @param https://bobbyhadz.com/blog/javascript-create-array-n-elements-same-value
     *
     *
     */
    const [streakCount, setStreakCount] = useState(0);
    const [name] = useLocalStorage("name", "");
    const [task] = useLocalStorage("task", "");
    const [streak] = useLocalStorage("streak", []);
    const navigate = useNavigate();
    const { t } = useTranslation();

    useEffect(() => {
        const streakCount = streak.reduce((acc, curr) => {
            if (curr?.value === true) {
                return acc + 1;
            } else {
                return acc;
            }
        }, 0);
        console.log(streakCount);
        setStreakCount(streakCount);
    }, [streak]);

    useEffect(() => {
        if (name && task && streak) {
            //
        } else {
            navigate("/register");
        }
        console.log(streak);
    }, []);

    return (
        <React.Fragment>
            <h2 className="text-center flex flex-col text-xl ">
                {task?.value}
                <span className="text-sm text-slate-400 font-light">
                    Streak {streakCount} / {streak.length} days
                </span>
            </h2>

            <div className="flex w-full items-center  justify-between p-2">
                <button
                    onClick={() => {
                        // !todo - redirect to camera view
                        navigate("/scan");
                    }}
                    className="rounded-md border p-3 shadow-sm border-black"
                >
                    <BsQrCodeScan size={25} />
                </button>
                <button
                    onClick={() => {
                        navigate("/qr");
                    }}
                    className="rounded-md border p-3 shadow-sm border-black"
                >
                    <BsQrCode size={25} />
                </button>
            </div>

            <div className="grid grid-rows-5 items-center grid-flow-col gap-4">
                {streak?.map((item) => {
                    return (
                        <div
                            key={item?.dayString}
                            className={`${
                                item?.value ? "bg-green-600" : "bg-gray-500"
                            } shadow-sm  px-3 py-3 max-w-[100%]  max-h-[100%]`}
                        >
                            {/* <span className="font-bold m-0 p-0 text-center text-white">
                        {index}
                    </span> */}
                        </div>
                    );
                })}
            </div>

            <button
                onClick={() => {
                    localStorage.clear();
                    navigate("/register");
                }}
                className=" flex justify-center items-center gap-1 hover:bg-gray-100 duration-150 shadow-sm px-2 py-1 rounded-md border"
            >
                <span>
                    <GrPowerReset />
                </span>
                {t("reset")}
            </button>
        </React.Fragment>
    );
};

export default Home;
