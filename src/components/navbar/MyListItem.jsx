import { Link } from "react-router-dom";

const MyListElement = ({ name, url }) => {
    return (
        <li className=" text-[#97BC62] hover:text-white duration-150 cursor-pointer">
            <Link to={url}>{name}</Link>
        </li>
    );
};

export default MyListElement;
