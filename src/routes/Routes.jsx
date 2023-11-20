import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/home/Home";
import AddInfo from "../pages/addinfo/AddInfo";
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
        element: <Home />,
    },
    {
        path: "/finishedTasks",
        element: <Home />,
    },
]);

export default router;
