import { RouterProvider } from "react-router-dom";

import router from "./routes/Routes";
import NavbarWrapper from "./components/navbarwrapper/NavbarWrapper";

const App = () => {
    return (
        <RouterProvider router={router}>
            <NavbarWrapper />
        </RouterProvider>
    );
};

export default App;
