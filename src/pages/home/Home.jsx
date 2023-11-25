// import FirstLogin from "../../components/first-login/FirstLogin";
import { BsQrCodeScan, BsQrCode } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import { GrPowerReset } from "react-icons/gr";
import { useState, useEffect } from "react";

const Home = () => {
    /*
     *
     * @param https://bobbyhadz.com/blog/javascript-create-array-n-elements-same-value
     *
     *
     */
    const [userLogin, setUserLogin] = useState({
        name: "",
        task: "",
    });

    const [streak, setStreak] = useState([]);
    const [streakCount, setStreakCount] = useState(0);
    const navigate = useNavigate();

    const getUserLoginStatus = () => {
        const name = localStorage.getItem("name");
        const task = localStorage.getItem("task");
        const streak = localStorage.getItem("streak");
        const newStreak = JSON.parse(streak);
        if (name && task && streak) {
            setUserLogin({
                name: name,
                task: task,
            });
            setStreak(newStreak);
        } else {
            navigate("/register");
        }
    };

    useEffect(() => {
        const streakCount = streak.reduce((acc, curr) => {
            if (curr === true) {
                return acc + 1;
            } else {
                return acc;
            }
        }, 0);
        console.log(streakCount);
        setStreakCount(streakCount);
    }, [streak]);

    useEffect(() => {
        getUserLoginStatus();
    }, []);

    return (
        <div className="w-full mt-12  min-h-[70vh] flex flex-col justify-center items-center ">
            {/* <FirstLogin /> */}
            <div className="bg-white p-4 gap-6 max-w-[70%] md:max-w-[50%] flex flex-col justify-center items-center rounded-md shadom-2xl">
                <h2 className="text-center flex flex-col text-xl ">
                    {userLogin?.task}
                    <span className="text-sm text-slate-400 font-light">
                        Streak {streakCount} / {streak.length} days
                    </span>
                </h2>

                <div className="flex w-full items-center  justify-between p-2">
                    <button
                        onClick={() => {
                            // !todo - redirect to camera view
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
                    {streak?.map((value, index) => {
                        return (
                            <div
                                key={index}
                                className={`${
                                    value ? "bg-green-600" : "bg-gray-500"
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
                        getUserLoginStatus();
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
