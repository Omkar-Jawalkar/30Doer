import { useState } from "react";
import Button from "../../components/button/Button";
import Input from "../../components/input/Input";

const Home = () => {
    const [first, setFirst] = useState("");
    return (
        <div className="w-full">
            <Input state={first} setState={setFirst} />
        </div>
    );
};

export default Home;
