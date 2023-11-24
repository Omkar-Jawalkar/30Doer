import Home from "./Home";
import FirstLogin from "../../components/first-login/FirstLogin";
import { useState, useEffect } from "react";

const HomeWrapper = () => {
    const [userLogin, setUserLogin] = useState(null);

    useEffect(() => {
        const name = localStorage.getItem("name");
        if (name) {
            setUserLogin(true);
        } else {
            setUserLogin(false);
        }
    }, []);

    return <div>{userLogin ? <Home /> : <FirstLogin />}</div>;
};

export default HomeWrapper;
