import React, { useEffect, useState, useRef } from "react";
import useLocalStorage from "../../hooks/useLocalStorage";
import QRCode from "react-qr-code";
import html2canvas from "html2canvas";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

const ShowQR = () => {
    const [showQrCode, setShowQrCode] = useState(false);
    const [name] = useLocalStorage("name", "");
    const [task] = useLocalStorage("task", "");
    const navigate = useNavigate();
    const qrRef = useRef();
    const encodedUriNameTaskRef = useRef("");
    const { t } = useTranslation();

    const downloadMyQr = async () => {
        const cardElement = qrRef.current;
        if (!cardElement) return;
        try {
            html2canvas(qrRef.current).then(function (originalCanvas) {
                const padding = 20;
                const paddedCanvas = document.createElement("canvas");
                const context = paddedCanvas.getContext("2d");
                paddedCanvas.width = originalCanvas.width + 2 * padding;
                paddedCanvas.height = originalCanvas.height + 2 * padding;
                context.fillStyle = "white";
                context.fillRect(0, 0, paddedCanvas.width, paddedCanvas.height);
                context.drawImage(originalCanvas, padding, padding);

                const link = document.createElement("a");
                link.download = `${name?.value}qr.jpg`;
                link.style.padding = "1000px";
                link.style.backgroundColor = "white";
                link.href = paddedCanvas.toDataURL("image/jpg");
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
                {t("qrDesc1")}
                <p className="text-slate-400 text-xs text-center">
                    {t("qrDesc2")}
                </p>
            </h1>
            <div className=" flex w-full justify-between items-stretch gap-2">
                <button
                    onClick={() => {
                        downloadMyQr();
                    }}
                    className="px-2 w-full flex justify-center  gap-3 items-center py-1 border rounded-md "
                >
                    {t("save")} <span className="text-xl">⬇️</span>
                </button>
                <button
                    onClick={() => {
                        navigate("/rules");
                    }}
                    className="px-2 py-1 w-full justify-center items-center gap-1 flex text-white duration-100 hover:opacity-75 bg-green-600 border rounded-md "
                >
                    {t("continue")} <span className="text-xl">😎</span>
                </button>
            </div>
        </React.Fragment>
    );
};

export default ShowQR;
