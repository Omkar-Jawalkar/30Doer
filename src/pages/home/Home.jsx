// import FirstLogin from "../../components/first-login/FirstLogin";
import { BsQrCodeScan, BsQrCode } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
const Home = () => {
    /*
     *
     * @param https://bobbyhadz.com/blog/javascript-create-array-n-elements-same-value
     *
     *
     */
    const [streak, setStreak] = useState(Array(30).fill(false));

    useEffect(() => {
        console.log(streak);
    }, []);

    const navigate = useNavigate();
    return (
        <div className="w-full mt-12  min-h-[70vh] flex flex-col justify-center items-center ">
            {/* <FirstLogin /> */}
            <div className="bg-white p-4 gap-6 max-w-[70%] md:max-w-[50%] flex flex-col justify-center items-center rounded-md shadom-2xl">
                <h2 className="text-center text-xl ">task name</h2>

                <div className="flex w-full items-center  justify-between p-2">
                    <button
                        onClick={() => {
                            // !todo - redirect to camera view
                        }}
                        className="rounded-md border p-3 shadow-lg border-black"
                    >
                        <BsQrCodeScan size={25} />
                    </button>
                    <button
                        onClick={() => {
                            navigate("/qr");
                        }}
                        className="rounded-md border p-3 shadow-lg border-black"
                    >
                        <BsQrCode size={25} />
                    </button>
                </div>

                <div className="grid grid-rows-5 items-center grid-flow-col gap-4">
                    {streak.map((value, index) => {
                        return (
                            <div
                                key={index}
                                className={`${
                                    value ? "bg-green-600" : "bg-gray-500"
                                } shadow-xl px-3 py-3 max-w-[100%]  max-h-[100%]`}
                            >
                                {/* <span className="font-bold m-0 p-0 text-center text-white">
                                    {index}
                                </span> */}
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default Home;
