import PropTypes from "prop-types";

const OrderTotal = ({ className = "" }) => {
  return (
    <div
      className={`self-stretch flex flex-row items-start justify-between max-w-full gap-[20px] text-left text-4xl text-black font-poppins lg:flex-wrap ${className}`}
    >
      <div className="flex flex-col items-start justify-start gap-[66px]">
        <div className="relative inline-block min-w-[97px] z-[1] mq450:text-lg">
          Subtotal
        </div>
        <div className="relative text-5xl z-[1] mq450:text-lgi">
          Billing Details
        </div>
      </div>
      <div className="w-[710px] flex flex-col items-start justify-start pt-px px-0 pb-0 box-border max-w-full text-3xl">
        <div className="self-stretch flex flex-row items-start justify-between max-w-full gap-[20px] mq1050:flex-wrap">
          <div className="relative font-medium inline-block min-w-[74px] whitespace-nowrap z-[1] mq450:text-lg">
            $75.93
          </div>
          <div className="w-[548px] flex flex-col items-start justify-start pt-3.5 px-0 pb-0 box-border max-w-full text-4xl">
            <div className="self-stretch flex flex-col items-start justify-start gap-[25px] max-w-full">
              <div className="relative inline-block max-w-full z-[1] mq450:text-lg">
                Have a coupon? Enter Code below!
              </div>
              <div className="self-stretch h-[82px] flex flex-col items-start justify-start text-lg">
                <div className="relative font-semibold inline-block min-w-[126px] z-[2]">
                  Coupon Code
                </div>
                <div className="self-stretch flex-1 relative z-[1] border-[1px] border-solid border-black" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

OrderTotal.propTypes = {
  className: PropTypes.string,
};

export default OrderTotal;
