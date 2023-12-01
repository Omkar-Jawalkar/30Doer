import { useEffect, useState, useRef } from "react";
import useLocalStorage from "../../hooks/useLocalStorage";
import QRCode from "react-qr-code";
import html2canvas from "html2canvas";
import { useNavigate } from "react-router-dom";

const ShowQR = () => {
    const [showQrCode, setShowQrCode] = useState(false);
    const [name, setName] = useLocalStorage("name", "");
    const [task, setTask] = useLocalStorage("task", "");
    const navigate = useNavigate();
    const qrRef = useRef();
    const encodedUriNameTaskRef = useRef("");

    const downloadMyQr = async () => {
        const cardElement = qrRef.current;
        if (!cardElement) return;
        try {
            html2canvas(qrRef.current).then(function (canvas) {
                const link = document.createElement("a");
                link.download = `${name}qr.jpg`;
                link.style.padding = "1000px";
                link.href = canvas.toDataURL("image/jpg");
                link.click();
            });
        } catch (reason) {
            console.log(reason);
        }
    };

    useEffect(() => {
        if (name?.value.length > 0) {
            encodedUriNameTaskRef.current = btoa(name?.value + task?.value);
            setShowQrCode(true);
        }
    }, [name]);

    return (
        <div className="bg-white rounded-md flex space-y-4 flex-col  shadow-2xl  justify-between items-center px-4 p-6 ">
            <div ref={qrRef}>
                {showQrCode && (
                    <QRCode
                        name="ScanToAddAttendance"
                        size={200}
                        value={encodedUriNameTaskRef.current}
                        id="myQr"
                    />
                )}
            </div>
            <h1 className="pt-5">Please Save this QR Code</h1>
            <div className=" flex gap-2">
                <button
                    onClick={() => {
                        downloadMyQr();
                    }}
                    className="px-2 py-1 border rounded-md "
                >
                    Download
                </button>
                <button
                    onClick={() => {
                        navigate("/");
                    }}
                    className="px-2 py-1 text-white duration-100 hover:opacity-60 bg-green-600 border rounded-md "
                >
                    Continue
                </button>
            </div>
        </div>
    );
};

export default ShowQR;
