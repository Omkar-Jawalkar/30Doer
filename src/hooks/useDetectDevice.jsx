import { useState, useEffect } from "react";

const useDetectDevice = () => {
    const [isMobileBrowser, setIsMobileBrowser] = useState(false);

    useEffect(() => {
        if (
            /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
                navigator.userAgent
            )
        ) {
            setIsMobileBrowser(true);
        } else {
            setIsMobileBrowser(false);
        }
    }, []);

    return { isMobileBrowser, refetch: useDetectDevice };
};

export default useDetectDevice;
