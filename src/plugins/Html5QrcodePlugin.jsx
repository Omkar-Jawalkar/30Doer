import { Html5Qrcode } from "html5-qrcode";
import { useState, useEffect, useRef } from "react";
import useDetectDevice from "../hooks/useDetectDevice";
import useLocalStorage from "../hooks/useLocalStorage";
// import { useNavigate } from "react-router-dom";

const Html5QrcodePlugin = () => {
    const QrScanner = useRef();
    const html5QrCodeRef = useRef();
    const { isMobileBrowser } = useDetectDevice();
    const cameraId = useRef();
    const [cameraStarted, setCameraStarted] = useState(false);
    const [streak, setStreak] = useLocalStorage("streak", []);
    const [name, setName] = useLocalStorage("name", "");
    const [task, setTask] = useLocalStorage("task", "");
    // const { navigate } = useNavigate();

    const markStreak = () => {
        const currentDate = new Date().toDateString();
        const updateStreak = streak.map((singleStreak) => {
            if (singleStreak?.dayString === currentDate) {
                return {
                    ...singleStreak,
                    value: true,
                };
            }
            return singleStreak;
        });
        setStreak(updateStreak);
        navigator.vibrate(200);
    };

    const getCameraPermissions = async () => {
        await Html5Qrcode.getCameras()
            .then((devices) => {
                /**
                 * devices would be an array of objects of type:
                 * { id: "id", label: "label" }
                 */
                if (devices && devices.length) {
                    console.log(devices);
                    cameraId.current = devices[0].id;
                    // .. use this to start scanning.
                }
            })
            .catch((err) => {
                // handle err
                console.log(err);
            });
    };

    const stopCamera = () => {
        html5QrCodeRef.current.stop();
    };

    const startCamera = () => {
        html5QrCodeRef.current
            .start(
                { facingMode: isMobileBrowser ? "environment" : "user" },
                {
                    fps: 10, // Optional, frame per seconds for qr code scanning
                    qrbox: isMobileBrowser
                        ? { width: 250, height: 300 }
                        : { width: 200, height: 200 }, // Optional, if you want bounded box UI
                },
                successScan,
                errorScan
            )
            .catch((err) => {
                // Start failed, handle it.
                console.log(err);
            });
    };

    function successScan(decodedText, decodedResult) {
        if (btoa(name?.value + task?.value) === decodedText) {
            setCameraStarted(false);
            stopCamera();
            markStreak(decodedText);
        } else {
            navigator.vibrate(1000);
        }
    }

    function errorScan(errorMessage) {
        // console.log(errorMessage);
    }

    useEffect(() => {
        html5QrCodeRef.current = new Html5Qrcode(QrScanner.current.id);

        return () => {
            // !todo : clean up the event listners
        };
    }, []);

    return (
        <div className="flex flex-col h-[60vh] gap-2 max-w-full justify-center items-center">
            <div className="max-w-[50%] mt-4  flex flex-col justify-center items-center h-full">
                <div
                    id="reader"
                    className="w-[40vh] h-[40vh]"
                    ref={QrScanner}
                ></div>
                <button
                    className="bg-white mt-44 border shadow-sm duration-200 hover:bg-white/50 px-4 py-2 rounded-md "
                    onClick={() => {
                        if (cameraStarted) {
                            stopCamera();
                            setCameraStarted(false);
                        } else {
                            getCameraPermissions();
                            startCamera();
                            setCameraStarted(true);
                        }
                    }}
                >
                    {cameraStarted ? "Stop Camera" : "Start Camera"}
                </button>
            </div>
        </div>
    );
};

export default Html5QrcodePlugin;
