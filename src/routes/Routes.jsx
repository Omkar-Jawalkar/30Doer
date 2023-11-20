import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/home/Home";
import AddInfo from "../pages/addinfo/AddInfo";
import Qr from "../pages/qr/Qr";
const router = createBrowserRouter([
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
        path: "/finishedTasks",
        element: <Home />,
    },
]);

export default router;
