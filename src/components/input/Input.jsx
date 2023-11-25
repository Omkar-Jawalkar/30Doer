import { PropTypes } from "prop-types";

const Input = ({ state, setState, placeholder }) => {
    return (
        <input
            value={state}
            className="p-2 border shadow-sm outline-none w-full  rounded-md "
            placeholder={placeholder}
            onChange={(e) => {
                setState(e.target.value);
            }}
        />
    );
};

Input.propTypes = {
    state: PropTypes.string,
    setState: PropTypes.func,
    placeholder: PropTypes.string,
};

export default Input;
