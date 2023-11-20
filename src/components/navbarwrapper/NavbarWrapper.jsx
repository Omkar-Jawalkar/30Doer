import Navbar from "../navbar/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "../footer/Footer";

const NavbarWrapper = () => {
    return (
        <div className="min-h-screen flex flex-col justify-between items-center  bg-gradient-to-r from-rose-100 to-teal-100">
            <div className="w-full h-full">
                <div className="w-full">
                    <Navbar />
                </div>
                <div className="w-full min-h-screen">
                    <Outlet />
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default NavbarWrapper;
