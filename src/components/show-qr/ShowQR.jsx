import { useEffect, useState, useRef } from "react";
import QRCode from "react-qr-code";
const options = {
    allowTaint: true,
    useCORS: true,
    backgroundColor: "rgba(0,0,0,0)",
    removeContainer: true,
};

const ShowQR = () => {
    const [showQrCode, setShowQrCode] = useState(false);
    const [name, setName] = useState("");

    const qrRef = useRef();
    const generateQRCode = () => {
        const name = localStorage.getItem("name");
        if (name) {
            setName(name);
        } else {
            alert("Please enter Name");
        }
    };

    const downloadMyQr = async () => {
        const cardElement = qrRef.current;

        if (!cardElement) return;
        try {
            // !todo - Write logic to download Qr
        } catch (reason) {
            console.log(reason);
        }
    };

    useEffect(() => {
        if (name.length > 0) {
            setShowQrCode(true);
        }
    }, [name]); //

    useEffect(() => {
        generateQRCode();
    }, []);

    return (
        <div className="bg-white rounded-md flex space-y-4 flex-col  shadow-2xl  justify-between items-center px-4 p-6 ">
            <div>
                {showQrCode && (
                    <QRCode
                        ref={qrRef}
                        name="ScanToAddAttendance"
                        size={200}
                        value={name}
                        id="myQr"
                    />
                )}
            </div>
            <h1 className="pt-5">Please Save this QR Code</h1>
            <button
                onClick={() => {
                    downloadMyQr();
                }}
                className="px-2 py-1 border rounded-md "
            >
                Download
            </button>
        </div>
    );
};

export default ShowQR;
