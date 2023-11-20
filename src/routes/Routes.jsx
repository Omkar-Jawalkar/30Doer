import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/home/Home";
import AddInfo from "../pages/addinfo/AddInfo";
import Qr from "../pages/qr/Qr";
import Aboutus from "../pages/aboutus/Aboutus";

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
                element: <Home />,
            },
            {
                path: "/aboutus",
                element: <Aboutus />,
            },
        ],
    },
]);

export default router;
