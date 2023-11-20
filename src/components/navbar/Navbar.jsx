import { FaUser } from "react-icons/fa";

const Navbar = () => {
    return (
        <div className="flex w-full justify-between border-b shadow-md  backdrop-blur-xl  items-center p-6">
            <div className="text-3xl   p-2 flex-1 font-bold ">
                <h1 className=""> 30 Doer</h1>
            </div>

            <ul className="flex flex-1 justify-center gap-3 items-center ">
                <li className=" ">Language</li>
                <li className="">Aboutus</li>
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
