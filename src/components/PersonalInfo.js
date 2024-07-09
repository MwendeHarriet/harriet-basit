import PropTypes from "prop-types";

const PersonalInfo = ({ className = "" }) => {
  return (
    <div
      className={`self-stretch flex flex-row items-start justify-start gap-[32px] text-left text-lg text-black font-poppins mq750:flex-wrap mq750:gap-[16px] ${className}`}
    >
      <div className="flex-1 flex flex-col items-start justify-start min-w-[168px]">
        <div className="relative font-semibold inline-block min-w-[99px] z-[1]">
          First Name
        </div>
        <div className="self-stretch h-[55px] relative box-border z-[1] border-[1px] border-solid border-black" />
      </div>
      <div className="flex-1 flex flex-col items-start justify-start min-w-[168px]">
        <div className="relative font-semibold inline-block min-w-[97px] z-[2]">
          Last Name
        </div>
        <div className="self-stretch h-[55px] relative box-border z-[1] border-[1px] border-solid border-black" />
      </div>
    </div>
  );
};

PersonalInfo.propTypes = {
  className: PropTypes.string,
};

export default PersonalInfo;
