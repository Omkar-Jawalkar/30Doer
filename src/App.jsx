import { RouterProvider } from "react-router-dom";
import router from "./routes/Routes";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";

const App = () => {
    return (
        <div className="min-h-screen  bg-gradient-to-r from-rose-100 to-teal-100">
            <Navbar />
            <RouterProvider router={router} />
            <Footer />
        </div>
    );
};

export default App;
