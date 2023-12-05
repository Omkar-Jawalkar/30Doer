import Proptypes from "prop-types";

const WhiteBackgroundWrapper = ({ children }) => {
    return (
        <div className="w-full mt-12  min-h-[70vh] flex flex-col justify-center items-center ">
            <div className="bg-white p-4 gap-6 max-w-[70%] md:max-w-[50%] flex flex-col justify-center items-center rounded-md shadom-2xl">
                {children}
            </div>
        </div>
    );
};

WhiteBackgroundWrapper.propTypes = {
    children: Proptypes.node.isRequired,
};

export default WhiteBackgroundWrapper;
