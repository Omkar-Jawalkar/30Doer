import { RouterProvider } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import router from "./routes/Routes";

const App = () => {
    return (
        <div className="min-h-screen flex flex-col justify-between items-center  bg-gradient-to-r from-rose-100 to-teal-100">
            <div className="w-full h-full">
                <div className="w-full">
                    <Navbar />
                </div>
                <div className="w-full min-h-screen">
                    <RouterProvider router={router} />
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default App;
