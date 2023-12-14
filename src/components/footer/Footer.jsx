import { Link } from "react-router-dom";
const Footer = () => {
    return (
        <div className="w-full  text-[#97BC62] font-bold text-md text-md p-4  flex justify-center items-center">
            Made with ❤️ by{" "}
            <Link
                target="_blank"
                to={"https://github.com/Omkar-Jawalkar"}
                className="px-2 underline text-white"
            >
                {" "}
                @Omkar
            </Link>
        </div>
    );
};

export default Footer;
