import { createBrowserRouter } from "react-router-dom";
import Aboutus from "../pages/aboutus/Aboutus";
import SelectLanguage from "../pages/selectLanguage/SelectLanguage";

import NavbarWrapper from "../components/navbarwrapper/NavbarWrapper";

import FirstLogin from "../components/first-login/FirstLogin";
import Home from "../pages/home/Home";
import Html5QrcodePlugin from "../plugins/Html5QrcodePlugin";
import ShowQR from "../components/show-qr/ShowQR";
const router = createBrowserRouter([
    {
        path: "/",
        element: <NavbarWrapper />,
        children: [
            {
                path: "/",
                element: <Home />,
            },
            {
                path: "/register",
                element: <FirstLogin />,
            },
            {
                path: "/qr",
                element: <ShowQR />,
            },
            {
                path: "/selectlanguage",
                element: <SelectLanguage />,
            },
            {
                path: "/aboutus",
                element: <Aboutus />,
            },
            {
                path: "/scan",
                element: <Html5QrcodePlugin />,
            },
        ],
    },
]);

export default router;
