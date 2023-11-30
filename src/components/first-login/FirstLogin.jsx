import { useEffect, useState } from "react";
import Button from "../button/Button";
import Input from "../input/Input";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import { useTranslation } from "react-i18next";
import "react-toastify/dist/ReactToastify.css";
// useTranslation used
const FirstLogin = () => {
    const [name, setName] = useState("");
    const [task, setTask] = useState("");
    const { t } = useTranslation();
    const navigate = useNavigate();
    let streak = defaultStreakData();

    function defaultStreakData() {
        let today = new Date();
        let year = today.getFullYear();
        let month = today.getMonth();
        let date = today.getDate();
        let streakArray = [];
        for (var i = 0; i < 30; i++) {
            let dayString = new Date(year, month - 1, date + i).toDateString();
            streakArray.push({ dayString, value: false });
        }
        return streakArray;
    }

    const onSave = () => {
        if (name.length > 0 && task.length > 0) {
            localStorage.setItem("name", name);
            localStorage.setItem("task", task);
            console.log("while saving task", streak);
            localStorage.setItem("streak", JSON.stringify(streak));
            navigate("/qr");
        } else {
            console.log("called");
            toast.warn("Please fill all the details", {
                position: "bottom-right",
                autoClose: 5000,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                type: "warning",
            });
            return;
        }
    };

    useEffect(() => {
        defaultStreakData();
        console.log(streak);
    }, []);

    return (
        <div className="w-full h-[80vh] flex flex-col justify-center items-center">
            <div className="bg-white gap-3 rounded-md flex flex-col h-[45%] w-5/6 md:h-[40%] shadow-2xl md:w-1/3 justify-between items-center px-4 p-4">
                <div className="w-full">
                    {" "}
                    <label>{t("registerName")}</label>
                    <Input
                        placeholder={t("registerNamePlaceholder")}
                        state={name}
                        setState={setName}
                    />
                </div>

                <div className="w-full ">
                    <label>{t("registerTaskName")}</label>
                    <Input
                        placeholder={t("registerTaskNamePlaceholder")}
                        state={task}
                        setState={setTask}
                    />
                </div>

                <div className="flex w-full gap-2 justify-end">
                    <Button
                        onClick={() => {
                            onSave();
                        }}
                        title="Continue"
                    />
                </div>
            </div>
            <ToastContainer
                className={"p-4"}
                position="bottom-right"
                autoClose={5000}
            />
        </div>
    );
};

export default FirstLogin;
