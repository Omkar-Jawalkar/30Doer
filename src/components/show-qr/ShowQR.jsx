import React, { useEffect, useState, useRef } from "react";
import useLocalStorage from "../../hooks/useLocalStorage";
import QRCode from "react-qr-code";
import html2canvas from "html2canvas";
import { useNavigate } from "react-router-dom";

const ShowQR = () => {
    const [showQrCode, setShowQrCode] = useState(false);
    const [name] = useLocalStorage("name", "");
    const [task] = useLocalStorage("task", "");
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
        <React.Fragment>
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
            <h1 className="pt-5 text-center">
                Please Save this QR Code
                <p className="text-slate-400 text-xs text-center">
                    {" "}
                    Youll be needing it to mark your attendance 😉
                </p>
            </h1>
            <div className=" flex w-full justify-between items-stretch gap-2">
                <button
                    onClick={() => {
                        downloadMyQr();
                    }}
                    className="px-2 w-full flex justify-center  gap-3 items-center py-1 border rounded-md "
                >
                    Save <span className="text-xl">⬇️</span>
                </button>
                <button
                    onClick={() => {
                        navigate("/");
                    }}
                    className="px-2 py-1 w-full justify-center items-center gap-1 flex text-white duration-100 hover:opacity-75 bg-green-600 border rounded-md "
                >
                    Continue <span className="text-xl">😎</span>
                </button>
            </div>
        </React.Fragment>
    );
};

export default ShowQR;
