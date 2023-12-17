import { useState } from "react";
import ShowScanSuccessPage from "../../pages/show-scan-success-page/ShowScanSuccessPage";
import Html5QrcodePlugin from "../../plugins/Html5QrcodePlugin";

const SuccessQrScanWrapper = () => {
    const [showScanSuccess, setShowScanSuccess] = useState(false);

    if (showScanSuccess) {
        return <ShowScanSuccessPage />;
    }
    return (
        <Html5QrcodePlugin
            showScanSuccess={showScanSuccess}
            setShowScanSuccess={setShowScanSuccess}
        />
    );
};

export default SuccessQrScanWrapper;
