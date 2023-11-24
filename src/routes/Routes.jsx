import { createBrowserRouter } from "react-router-dom";

import AddInfo from "../pages/addinfo/AddInfo";
import Qr from "../pages/qr/Qr";
import Aboutus from "../pages/aboutus/Aboutus";
import SelectLanguage from "../pages/selectLanguage/SelectLanguage";

import NavbarWrapper from "../components/navbarwrapper/NavbarWrapper";

import FirstLogin from "../components/first-login/FirstLogin";
import Home from "../pages/home/Home";
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
                path: "/addinfo",
                element: <AddInfo />,
            },
            {
                path: "/qr",
                element: <Qr />,
            },
            {
                path: "/selectlanguage",
                element: <SelectLanguage />,
            },
            {
                path: "/aboutus",
                element: <Aboutus />,
            },
        ],
    },
]);

export default router;
