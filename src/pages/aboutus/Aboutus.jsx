import { useTranslation } from "react-i18next";

const Aboutus = () => {
    const { t } = useTranslation();
    return (
        <div className="flex my-6 flex-col justify-center px-4 items-center">
            <h1 className="text-4xl drop-shadow-md my-6 font-bold">
                {t("aboutus")} <span className="text-[#2C5F2D]">30Doer</span>
            </h1>

            {/* ABOUT US MORE CONTENT */}
            <p className="font-semibold  drop-shadow-sm text-slate-400 text-center">
                {t("aboutusDescription")}
            </p>
            <p className="drop-shadow-sm font-semibold text-slate-400 text-center">
                {t("aboutusDescription2")}
            </p>
            <p className="font-bold mt-6 drop-shadow-md text-[#2C5F2D]">
                {t("aboutusDescription3")}
          
            </p>
        </div>
    );
};

export default Aboutus;
