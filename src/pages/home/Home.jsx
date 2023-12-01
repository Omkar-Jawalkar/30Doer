// import FirstLogin from "../../components/first-login/FirstLogin";
import { BsQrCodeScan, BsQrCode } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import { GrPowerReset } from "react-icons/gr";
import { useState, useEffect } from "react";
import useLocalStorage from "../../hooks/useLocalStorage";

const Home = () => {
    /*
     *
     * @param https://bobbyhadz.com/blog/javascript-create-array-n-elements-same-value
     *
     *
     */
    const [streakCount, setStreakCount] = useState(0);
    const [name, setName] = useLocalStorage("name", "");
    const [task, setTask] = useLocalStorage("task", "");
    const [streak, setStreak] = useLocalStorage("streak", []);
    const navigate = useNavigate();

    // useEffect(() => {
    //     const streakCount = streak.reduce((acc, curr) => {
    //         if (curr === true) {
    //             return acc + 1;
    //         } else {
    //             return acc;
    //         }
    //     }, 0);
    //     console.log(streakCount);
    //     setStreakCount(streakCount);
    // }, [streak]);

    useEffect(() => {
        if (name && task && streak) {
            //
        } else {
            navigate("/register");
        }
        console.log(streak);
    }, []);

    return (
        <div className="w-full mt-12  min-h-[70vh] flex flex-col justify-center items-center ">
            {/* <FirstLogin /> */}
            <div className="bg-white p-4 gap-6 max-w-[70%] md:max-w-[50%] flex flex-col justify-center items-center rounded-md shadom-2xl">
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
                    Reset
                </button>
            </div>
        </div>
    );
};

export default Home;
