/*
 *
 * onClick Function is required on this button
 * Give ${bgColor} as tailwind color
 * onClick function should always have callback function passed to it
 *
 *
 */

import propTypes from "prop-types";
const Button = ({ bgColor = "bg-green-100", onClick, title = "Save" }) => {
    return (
        <button
            onClick={onClick}
            className={`m-4 hover:shadow-2xl text-white font-bold  duration-100 leading-6 shadow-lg hover:-translate-y-1 ${bgColor} rounded-md px-4 py-2`}
        >
            {title}
        </button>
    );
};

Button.propTypes = {
    bgColor: propTypes.string,
    onClick: propTypes.func.isRequired,
    title: propTypes.string,
};

export default Button;
