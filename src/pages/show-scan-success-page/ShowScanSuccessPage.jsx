import { IoIosCheckmarkCircle } from "react-icons/io";
import { useNavigate } from "react-router-dom";

const ShowScanSuccessPage = () => {
    const navigate = useNavigate();
    return (
        <div className="flex  gap-4 flex-col justify-center items-center">
            <div className="my-4 flex flex-col justify-center items-center">
                {/* ANIMATION */}
                <IoIosCheckmarkCircle
                    style={{
                        animation: "3s  lineral infinite",
                    }}
                    className="text-[#2C5F2D] text-4xl"
                />
                <h1 className="text-[#2C5F2D]">Attendance Success</h1>
                <p className="text-slate-400 text-xs">Lets Go</p>
            </div>
            <button
                onClick={() => {
                    navigate("/");
                }}
                className="px-2 py-1 border rounded-md"
            >
                Lets go
            </button>
        </div>
    );
};

export default ShowScanSuccessPage;
