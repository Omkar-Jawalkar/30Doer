import Proptypes from "prop-types";
import { IoHelpCircleOutline } from "react-icons/io5";
import { useNavigate } from "react-router-dom";

const WhiteBackgroundWrapper = ({ children }) => {
    const navigate = useNavigate();
    return (
        <div className="w-full mt-12  min-h-[70vh] flex flex-col justify-center items-center ">
            <div className="bg-white relative  p-4 gap-6 max-w-[80%] md:max-w-[50%] flex flex-col justify-center items-center rounded-md shadom-2xl">
                <span
                    onClick={() => {
                        navigate("/rules");
                    }}
                    className=" absolute top-2 right-2 cursor-pointer"
                >
                    <IoHelpCircleOutline className="text-xl text-slate-400" />
                </span>
                {children}
            </div>
        </div>
    );
};

WhiteBackgroundWrapper.propTypes = {
    children: Proptypes.node.isRequired,
};

export default WhiteBackgroundWrapper;
