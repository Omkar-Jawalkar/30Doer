import { createBrowserRouter } from "react-router-dom";
import Aboutus from "../pages/aboutus/Aboutus";
import SelectLanguage from "../pages/selectLanguage/SelectLanguage";

import NavbarWrapper from "../components/navbarwrapper/NavbarWrapper";

import FirstLogin from "../components/first-login/FirstLogin";
import Home from "../pages/home/Home";
import Html5QrcodePlugin from "../plugins/Html5QrcodePlugin";
import WhiteBackgroundWrapper from "../components/white-backround-wrapper/WhiteBackgroundWrapper";
import ShowQR from "../components/show-qr/ShowQR";
const router = createBrowserRouter([
    {
        path: "/",
        element: <NavbarWrapper />,
        children: [
            {
                path: "/",
                element: (
                    <WhiteBackgroundWrapper>
                        <Home />
                    </WhiteBackgroundWrapper>
                ),
            },
            {
                path: "/register",
                element: <FirstLogin />,
            },
            {
                path: "/qr",
                element: (
                    <WhiteBackgroundWrapper>
                        <ShowQR />
                    </WhiteBackgroundWrapper>
                ),
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
