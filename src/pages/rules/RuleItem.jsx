import PropTypes from "prop-types";

const RuleItem = ({ id = 1, rule = "", subrule = "" }) => {
    return (
        <div className="flex gap-5  min-w-[240px] justify-start items-start   ">
            <div className="rounded-full font-bold w={30%}  bg-[#2C5F2D] px-3 py-1 text-white ">
                {id}
            </div>
            <div className=" w={80%} ">
                <div className="text-xl text-[#2C5F2D] font-bold">{rule}</div>
                <div className="text-sm text-slate-400">{subrule}</div>
            </div>
        </div>
    );
};

RuleItem.propTypes = {
    id: PropTypes.number.isRequired,
    rule: PropTypes.string.isRequired,
    subrule: PropTypes.string.isRequired,
};

export default RuleItem;
