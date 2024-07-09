import PropTypes from "prop-types";

const OrderInfo = ({ className = "" }) => {
  return (
    <div
      className={`self-stretch flex flex-row flex-wrap items-start justify-start pt-0 px-0 pb-[11.5px] box-border gap-[65px] max-w-full text-left text-4xl text-black font-poppins lg:gap-[32px] mq750:gap-[16px] ${className}`}
    >
      <div className="flex-1 flex flex-col items-start justify-start gap-[5px] max-w-full mq1050:min-w-full">
        <div className="self-stretch flex flex-row items-start justify-start py-0 pr-0 pl-px box-border max-w-full">
          <div className="flex-1 flex flex-row items-start justify-between max-w-full gap-[20px] mq750:flex-wrap">
            <div className="relative inline-block min-w-[123px] z-[1] mq450:text-lg">
              Your Order
            </div>
            <div className="flex flex-col items-start justify-start pt-2 px-0 pb-0">
              <div className="relative z-[1] mq450:text-lg">
                Already a Member?
              </div>
            </div>
          </div>
        </div>
        <div className="self-stretch flex flex-row items-start justify-start relative max-w-full text-lg">
          <div className="h-[55px] w-[258px] absolute !m-[0] top-[66px] right-[-35px] box-border z-[1] border-[1px] border-solid border-black" />
          <div className="h-[221.5px] flex-1 flex flex-col items-start justify-start pt-0 px-0 pb-[18px] box-border gap-[17.5px] opacity-[0.8] max-w-full z-[2] mq750:h-auto">
            <img
              className="w-[545px] relative max-h-full max-w-full"
              loading="lazy"
              alt=""
              src="/vector-1.svg"
            />
            <div className="w-[688px] flex flex-row items-start justify-between pt-0 px-0 pb-[5px] box-border max-w-full gap-[20px] mq750:flex-wrap">
              <div className="w-[548px] flex flex-col items-start justify-start gap-[17px] max-w-full">
                <div className="self-stretch flex flex-row items-start justify-between gap-[20px] mq450:flex-wrap">
                  <a className="[text-decoration:none] relative font-medium text-[inherit] inline-block min-w-[71px] z-[3]">
                    Product
                  </a>
                  <b className="relative inline-block min-w-[47px] z-[3]">
                    Price
                  </b>
                </div>
                <img
                  className="self-stretch relative max-w-full overflow-hidden max-h-full"
                  loading="lazy"
                  alt=""
                  src="/vector-2.svg"
                />
              </div>
              <div className="flex flex-col items-start justify-start pt-[20.5px] px-0 pb-0">
                <div className="relative font-semibold inline-block min-w-[51px] z-[1]">
                  Email
                </div>
              </div>
            </div>
            <div className="self-stretch flex flex-row items-start justify-start py-0 pr-0 pl-px box-border max-w-full text-mid">
              <div className="flex-1 flex flex-row items-start justify-start gap-[14px] max-w-full mq1050:flex-wrap">
                <div className="bg-gainsboro flex flex-row items-start justify-start pt-[11px] pb-[21px] pr-1.5 pl-[7px] z-[3]">
                  <div className="h-[115px] w-24 relative bg-gainsboro hidden" />
                  <img
                    className="h-[83px] w-[83px] relative object-contain z-[4]"
                    loading="lazy"
                    alt=""
                    src="/image-49@2x.png"
                  />
                </div>
                <div className="flex-1 flex flex-col items-start justify-start pt-[27px] px-0 pb-0 box-border min-w-[236px] max-w-full">
                  <div className="flex flex-col items-start justify-start">
                    <b className="relative inline-block min-w-[83px] shrink-0 z-[3]">
                      Nike Boot
                    </b>
                    <div className="h-9 flex flex-row items-start justify-start pt-0 px-0 pb-0 box-border text-smi text-gray-100">
                      <div className="mt-[-4px] relative shrink-0 z-[4]">
                        <p className="m-0">Color: Black</p>
                        <p className="m-0">SIZE: 44</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex-[0.9433] flex flex-col items-start justify-start pt-[38.5px] pb-0 pr-5 pl-0 box-border min-w-[229px] max-w-full text-lg mq450:flex-1">
                  <div className="relative font-medium inline-block min-w-[60px] whitespace-nowrap z-[3]">
                    $75.93
                  </div>
                </div>
                <div className="flex flex-col items-start justify-start pt-12 px-0 pb-0 text-smi">
                  <div className="relative font-medium inline-block min-w-[5px]">
                    1
                  </div>
                </div>
              </div>
            </div>
            <div className="w-[538px] flex flex-row items-start justify-start py-0 px-px box-border max-w-full">
              <img
                className="flex-1 relative max-w-full overflow-hidden max-h-full"
                alt=""
                src="/remove-icon.svg"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="h-[169px] w-[258px] flex flex-col items-start justify-start pt-[87px] px-0 pb-0 box-border text-lg">
        <div className="self-stretch flex-1 flex flex-col items-start justify-start">
          <div className="relative font-semibold inline-block min-w-[89px] z-[2]">
            Password
          </div>
          <div className="self-stretch flex-1 relative z-[1] border-[1px] border-solid border-black" />
        </div>
      </div>
    </div>
  );
};

OrderInfo.propTypes = {
  className: PropTypes.string,
};

export default OrderInfo;
