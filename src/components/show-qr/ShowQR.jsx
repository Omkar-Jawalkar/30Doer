import { useEffect, useState, useRef } from "react";
import QRCode from "react-qr-code";
import html2canvas from "html2canvas";

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

            html2canvas(qrRef.current).then(function (canvas) {
                const link = document.createElement("a");
                link.download = `${name}qr.jpg`;
                link.style.padding = "1000px";
                link.href = canvas.toDataURL("image/jpg");
                console.log(link);
                link.click();
            });
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
            <div ref={qrRef}>
                {showQrCode && (
                    <QRCode
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
