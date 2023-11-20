import { useEffect, useState } from "react";
import Button from "../button/Button";
import Input from "../input/Input";

const FirstLogin = () => {
    const [name, setName] = useState("");

    const onSave = () => {
        localStorage.setItem("name", name);
    };

    useEffect(() => {
        const localName = localStorage.getItem("name");
        if (localName) {
            setName(localName);
        }
    }, []);
    return (
        <div className="w-full h-[80vh] flex flex-col justify-center items-center">
            <div className="bg-white rounded-md flex flex-col h-1/3 w-5/6 md:h-2/5 shadow-2xl md:w-1/3 justify-between items-center px-4 p-6 ">
                <Input
                    placeholder={"Enter your name..."}
                    state={name}
                    setState={setName}
                />

                <div className="flex w-full gap-2 justify-end">
                    <Button
                        onClick={() => {
                            onSave();
                        }}
                        title="Next..."
                    />
                    <Button
                        bgColor="bg-red-600"
                        onClick={() => {}}
                        title="Cancel"
                    />
                </div>
            </div>
        </div>
    );
};

export default FirstLogin;
