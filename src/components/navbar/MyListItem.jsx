import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const MyListElement = ({ name, url, setActiveTab, activeTab, tab }) => {
    const { t } = useTranslation();
    return (
        <li
            onClick={() => {
                setActiveTab(tab);
            }}
            className={` ${
                activeTab === tab ? "text-white" : "text-[#97BC62]"
            }  hover:text-white duration-150 font-semibold cursor-pointer`}
        >
            <Link to={url}>{t(name)}</Link>
        </li>
    );
};

export default MyListElement;
