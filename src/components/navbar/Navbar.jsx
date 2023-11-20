import { FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <div className="flex w-full justify-between border-b shadow-md  backdrop-blur-xl  items-center p-6">
            <div className="text-3xl   p-2 flex-1 font-bold ">
                <h1 className="" onClick={() => {}}>
                    {" "}
                    30 Doer
                </h1>
            </div>

            <ul className="flex flex-1 justify-center gap-3 items-center ">
                <li className="cursor-pointer ">
                    {/* <Link to={"/qr"}>Home</Link> */}
                    home
                </li>
                <li className="cursor-pointer">Aboutus</li>
            </ul>
            <div className="flex-1 flex justify-end w-full items-center ">
                <FaUser
                    size={40}
                    className=" border-black border shadow-sm p-2 rounded-full cursor-pointer"
                />
            </div>
        </div>
    );
};

export default Navbar;
