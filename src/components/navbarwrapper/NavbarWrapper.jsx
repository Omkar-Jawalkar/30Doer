import Navbar from "../navbar/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "../footer/Footer";
import useFetch from "../../hooks/useFetch";
import { ToastContainer, toast } from "react-toastify";
import { useEffect, useRef } from "react";

const NavbarWrapper = () => {
    const { data, isLoading, error } = useFetch(
        "https://api.themotivate365.com/stoic-quote"
    );
    const timeoutIdRef = useRef(null);

    useEffect(() => {
        if (isLoading || error) return;
        timeoutIdRef.current = setTimeout(() => {
            toast(`${data?.quote} --- ${data?.author}`, {
                position: "bottom-right",
                autoClose: 15000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
            clearTimeout(timeoutIdRef.current);
        }, 5000);

        return () => {
            clearTimeout(timeoutIdRef.current);
        };
    }, [data]);

    return (
        <div className="min-h-screen flex flex-col justify-between items-center bg-[#2C5F2D]">
            <div className="w-full h-full">
                <div className="w-full">
                    <Navbar />
                </div>
                <div className="w-full min-h-screen">
                    <Outlet />
                </div>
                <ToastContainer className="p-4" />
            </div>
            <Footer />
        </div>
    );
};

export default NavbarWrapper;
