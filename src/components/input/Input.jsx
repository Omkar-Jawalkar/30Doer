import { PropTypes } from "prop-types";

const Input = ({ state, setState }) => {
    return (
        <input
            value={state}
            className="p-2 shadow-md outline-none w-full  rounded-md "
            placeholder="Enter Your Task"
            onChange={(e) => {
                setState(e.target.value);
            }}
        />
    );
};

Input.propTypes = {
    state: PropTypes.string,
    setState: PropTypes.func,
};

export default Input;
