import { useEffect } from "react";

const ShowQR = () => {
    const generateQRCode = () => {
        const name = localStorage.getItem("name");
        if (name) {
            // !TODO : Write logic to generate QR Code
        } else {
            alert("Please enter Name");
        }
    };

    useEffect(() => {
        generateQRCode();
    }, []);

    return (
        <div className="bg-white rounded-md flex flex-col h-1/3 w-5/6 md:h-2/5 shadow-2xl md:w-2/3 justify-between items-center px-4 p-6 ">
            <h1>Please Save this QR Code</h1>
            <button>Download</button>
        </div>
    );
};

export default ShowQR;
