import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/home/Home";
import AddInfo from "../pages/addinfo/AddInfo";
import Qr from "../pages/qr/Qr";
import Aboutus from "../pages/aboutus/Aboutus";
import SelectLanguage from "../pages/selectLanguage/SelectLanguage";

import NavbarWrapper from "../components/navbarwrapper/NavbarWrapper";
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
