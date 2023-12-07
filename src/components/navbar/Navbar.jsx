import { Link } from "react-router-dom";
import { IoIosMenu, IoMdArrowRoundBack } from "react-icons/io";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import useLocalStorage from "../../hooks/useLocalStorage";
import MyListElement from "./MyListItem";

const navMenu = [
    { name: "Home", url: "/" },
    { name: "Languages", url: "/selectlanguage" },
    { name: "About Us", url: "/aboutus" },
    { name: "Rules", url: "/rules" },
];

const Navbar = () => {
    const [showMobileMenu, setShowMobileMenu] = useState(false);
    const [name] = useLocalStorage("name", "");
    const [activeTab, setActiveTab] = useState(0);
    const { t } = useTranslation();

    return (
        <div className="relative text-white bg-[#2C5F2D]">
            <div
                className={`flex w-full justify-between  backdrop-blur-xl  items-center py-4 px-4`}
            >
                <div className="md:text-3xl hover:text-white duration-150  text-2xl text-[#97BC62]  p-2 flex-1 font-bold ">
                    <Link to={"/"} className="cursor-pointer">
                        {" "}
                        {t("logoName")}
                    </Link>
                </div>

                <ul className=" hidden md:flex  justify-center gap-5 items-center ">
                    {navMenu.map((item, index) => (
                        <MyListElement
                            tab={index}
                            setActiveTab={setActiveTab}
                            activeTab={activeTab}
                            key={item?.name}
                            {...item}
                        />
                    ))}
                </ul>

                <div
                    onClick={() => {
                        setShowMobileMenu((prev) => !prev);
                    }}
                    className=" flex md:hidden justify-end items-center"
                >
                    <IoIosMenu size={50} className="p-2 cursor-pointer" />
                </div>
            </div>
            {showMobileMenu ? (
                <div className=" z-10 shadow-xl flex flex-col justify-start min-h-screen w-5/6 gap-4 bg-[#2C5F2D] absolute top-0 transition-all right-0 ">
                    {/* TOP Part */}
                    <div className="flex justify-start w-full items-center p-2">
                        <button
                            onClick={() => {
                                setShowMobileMenu((prev) => !prev);
                            }}
                        >
                            <IoMdArrowRoundBack size={30} />
                        </button>
                    </div>

                    {/* Mid Part */}

                    <div className="flex my-4 flex-col ">
                        <h1 className="text-2xl text-center">
                            Welcome{" "}
                            <span className="underline">{name?.value}</span>
                        </h1>

                        <ul className="px-4 flex flex-col gap-3 items-center my-4">
                            {navMenu.map((item, index) => (
                                <MyListElement
                                    tab={index}
                                    setActiveTab={setActiveTab}
                                    activeTab={activeTab}
                                    key={item?.name}
                                    {...item}
                                />
                            ))}
                        </ul>
                    </div>
                </div>
            ) : (
                <></>
            )}
        </div>
    );
};

export default Navbar;
