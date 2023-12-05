/*
 *
 * onClick Function is required on this button
 * Give ${bgColor} as tailwind color
 * onClick function should always have callback function passed to it
 *
 *
 */

import propTypes from "prop-types";
const Button = ({
    bgColor = "bg-green-600",
    onClick,
    title = "Save",
    ...props
}) => {
    return (
        <button
            {...props}
            onClick={onClick}
            className={` hover:shadow-2xl hover:opacity-30 w-full text-white font-bold  duration-100 leading-6 shadow-lg  ${bgColor} rounded-md px-4 py-2`}
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
