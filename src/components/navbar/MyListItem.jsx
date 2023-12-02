import { Link } from "react-router-dom";

const MyListElement = ({ name, url, setActiveTab, activeTab, tab }) => {
    return (
        <li
            onClick={() => {
                setActiveTab(tab);
            }}
            className={` ${
                activeTab === tab ? "text-white" : "text-[#97BC62]"
            }  hover:text-white duration-150 font-semibold cursor-pointer`}
        >
            <Link to={url}>{name}</Link>
        </li>
    );
};

export default MyListElement;
