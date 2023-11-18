import { RouterProvider } from "react-router-dom";
import router from "./routes/Routes";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";

const App = () => {
    return (
        <div className="min-h-screen flex flex-col justify-between items-center  bg-gradient-to-r from-rose-100 to-teal-100">
            <div className=" w-full h-full">
                <Navbar />
                <RouterProvider router={router} />
            </div>
            <Footer />
        </div>
    );
};

export default App;
