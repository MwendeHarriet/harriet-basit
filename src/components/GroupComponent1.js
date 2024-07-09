import PropTypes from "prop-types";

const GroupComponent1 = ({ className = "" }) => {
  return (
    <div
      className={`h-full w-full !m-[0] absolute top-[0px] right-[0px] bottom-[0px] left-[0px] flex flex-row items-start justify-start max-w-full ${className}`}
    >
      <div className="self-stretch flex-1 relative bg-white max-w-full" />
    </div>
  );
};

GroupComponent1.propTypes = {
  className: PropTypes.string,
};

export default GroupComponent1;
