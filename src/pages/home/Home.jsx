// import FirstLogin from "../../components/first-login/FirstLogin";
import { BsQrCodeScan, BsQrCode } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
const Home = () => {
    const navigate = useNavigate();
    return (
        <div className="w-full mt-12  min-h-max flex flex-col justify-center items-center ">
            {/* <FirstLogin /> */}
            <div className="bg-white p-4 gap-3 w-3/4 md:w-2/5 flex flex-col justify-center items-center rounded-md shadom-2xl">
                <h2 className="text-center text-xl ">task name</h2>

                <div className="flex w-full items-center  justify-between p-2">
                    <button
                        onClick={() => {
                            // !todo - redirect to camera view
                        }}
                        className="rounded-md border p-3 shadow-lg border-black"
                    >
                        <BsQrCodeScan size={25} />
                    </button>
                    <button
                        onClick={() => {
                            navigate("/qr");
                        }}
                        className="rounded-md border p-3 shadow-lg border-black"
                    >
                        <BsQrCode size={25} />
                    </button>
                </div>

                <div></div>
            </div>
        </div>
    );
};

export default Home;
