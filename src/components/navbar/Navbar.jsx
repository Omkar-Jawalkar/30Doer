import { FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";
import { IoIosMenu, IoMdArrowRoundBack } from "react-icons/io";
import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import useLocalStorage from "../../hooks/useLocalStorage";

const Navbar = () => {
    const [showMobileMenu, setShowMobileMenu] = useState(false);
    const [name, setName] = useLocalStorage("name", "");
    const { t } = useTranslation();

    return (
        <div className="relative">
            <div
                className={`flex w-full justify-between border-b shadow-md  backdrop-blur-xl  items-center py-4 px-4`}
            >
                <div className="md:text-3xl text-2xl   p-2 flex-1 font-bold ">
                    <Link
                        to={"/"}
                        className="cursor-pointer"
                        onClick={() => {}}
                    >
                        {" "}
                        {t("logoName")}
                    </Link>
                </div>

                <ul className=" hidden md:flex flex-1 justify-center gap-3 items-center ">
                    {/* <li className="cursor-pointer ">
                        <Link to={"/qr"}>QR</Link>
                    </li> */}
                    <li className="cursor-pointer">
                        <Link to={"/aboutus"}>About us</Link>
                    </li>
                    <li className="cursor-pointer">
                        <Link to={"/selectlanguage"}>Language</Link>
                    </li>
                </ul>

                <div className="flex-1 hidden md:flex justify-end w-full items-center ">
                    <FaUser
                        size={40}
                        className=" border-black border shadow-sm p-2 rounded-full cursor-pointer"
                    />
                </div>

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
                <div className=" shadow-xl flex flex-col justify-start min-h-screen w-5/6 gap-4 bg-white absolute top-0 transition-all right-0 ">
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
                            <li className="cursor-pointer hover:text-slate-400 transition-all duration-150 ">
                                <Link
                                    to={"/"}
                                    onClick={() => {
                                        setShowMobileMenu(false); //
                                    }}
                                >
                                    Home
                                </Link>
                            </li>
                            <li className="cursor-pointer hover:text-slate-400 transition-all duration-150 ">
                                <Link
                                    to={"/qr"}
                                    onClick={() => {
                                        setShowMobileMenu(false); //
                                    }}
                                >
                                    QR
                                </Link>
                            </li>
                            <li className="cursor-pointer hover:text-slate-400 transition-all duration-150 ">
                                <Link
                                    to={"/selectLanguage"}
                                    onClick={() => {
                                        setShowMobileMenu(false); //
                                    }}
                                >
                                    Language
                                </Link>
                            </li>
                            <li className="cursor-pointer hover:text-slate-400 transition-all duration-150 ">
                                <Link
                                    to={"/aboutus"}
                                    onClick={() => {
                                        setShowMobileMenu(false); //
                                    }}
                                >
                                    About us
                                </Link>
                            </li>
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
