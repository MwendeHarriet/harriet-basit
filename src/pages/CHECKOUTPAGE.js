import Main from "../components/Main";
import OrderInfo from "../components/OrderInfo";
import OrderTotal from "../components/OrderTotal";
import CustomerInfo from "../components/CustomerInfo";
import Contact from "../components/Contact";

const CHECKOUTPAGE = () => {
  return (
    <div className="w-full relative bg-aliceblue overflow-hidden flex flex-col items-start justify-start pt-0 px-0 pb-[66.8px] box-border gap-[13px] leading-[normal] tracking-[normal] text-left text-smi text-black font-poppins">
      <Main />
      <div className="w-[407px] flex flex-row items-start justify-center py-0 px-5 box-border max-w-full">
        <div className="flex flex-col items-start justify-start gap-[2px]">
          <div className="flex flex-row items-start justify-start py-0 px-px">
            <a className="[text-decoration:none] relative font-medium text-[inherit] inline-block min-w-[64px]">
              Checkout
            </a>
          </div>
          <h2 className="m-0 relative text-10xl font-medium font-inherit mq450:text-4xl">
            Checkout
          </h2>
        </div>
      </div>
      <main className="self-stretch flex flex-col items-start justify-start py-0 pr-2 pl-0 box-border gap-[87px] max-w-full mq450:gap-[22px] mq750:gap-[43px]">
        <form className="m-0 self-stretch bg-white flex flex-col items-start justify-start pt-[25px] pb-14 pr-[114px] pl-[133px] box-border gap-[7px] max-w-full lg:pt-5 lg:pb-9 lg:box-border mq450:pl-5 mq450:pr-5 mq450:pb-5 mq450:box-border mq750:pl-[66px] mq750:pr-[57px] mq750:box-border mq1050:pb-[23px] mq1050:box-border">
          <div className="w-[1432px] h-[1560px] relative bg-white hidden max-w-full" />
          <OrderInfo />
          <OrderTotal />
          <CustomerInfo />
          <Contact />
        </form>
        <footer className="w-[1073px] flex flex-row items-start justify-center py-0 px-5 box-border max-w-full text-left text-mid text-black font-poppins">
          <div className="w-[805px] flex flex-col items-start justify-start gap-[65px] max-w-full mq450:gap-[16px] mq1050:gap-[32px]">
            <div className="self-stretch flex flex-row items-start justify-between gap-[20px] mq450:flex-wrap">
              <div className="flex flex-col items-start justify-start gap-[20px]">
                <div className="relative font-medium inline-block min-w-[97px]">
                  Need Help?
                </div>
                <div className="flex flex-col items-start justify-start gap-[1px] text-smi">
                  <div className="relative font-medium inline-block min-w-[117px]">{`Customer Service `}</div>
                  <div className="relative font-medium inline-block min-w-[78px]">
                    My Account
                  </div>
                  <div className="relative font-medium inline-block min-w-[73px]">{`Contact Us `}</div>
                  <div className="relative font-medium inline-block min-w-[33px]">
                    FAQs
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-start justify-start gap-[21px]">
                <div className="relative font-medium">Shopping With Us</div>
                <div className="flex flex-col items-start justify-start gap-[1px] text-smi">
                  <div className="relative font-medium">
                    Shipping Information
                  </div>
                  <div className="relative font-medium inline-block min-w-[124px]">{`Return & Exchange `}</div>
                  <div className="relative font-medium inline-block min-w-[73px]">
                    Size Charts
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-start justify-start gap-[21px]">
                <div className="relative font-medium inline-block min-w-[77px]">
                  About Us
                </div>
                <div className="flex flex-col items-start justify-start gap-[1px] text-smi">
                  <div className="relative font-medium inline-block min-w-[47px]">{`We Are `}</div>
                  <div className="relative font-medium inline-block min-w-[45px]">
                    Career
                  </div>
                </div>
              </div>
            </div>
            <div className="w-[643px] flex flex-row items-start justify-between gap-[20px] max-w-full text-smi mq450:flex-wrap">
              <div className="h-[44.2px] w-[121px] flex flex-row items-start justify-start relative opacity-[0.7]">
                <div className="h-full w-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px]">
                  <img
                    className="absolute top-[4px] left-[0px] w-[35px] h-[35px] object-contain"
                    alt=""
                    src="/image-41@2x.png"
                  />
                  <img
                    className="absolute top-[1px] left-[33px] w-[42px] h-[42px] object-contain z-[1]"
                    alt=""
                    src="/image-42@2x.png"
                  />
                  <img
                    className="absolute top-[0px] left-[62px] w-[59px] h-[44.2px] object-cover z-[2]"
                    loading="lazy"
                    alt=""
                    src="/image-43@2x.png"
                  />
                </div>
              </div>
              <div className="flex flex-col items-start justify-start pt-3 px-0 pb-0">
                <div className="flex flex-row items-start justify-start gap-[2px]">
                  <div className="relative font-medium inline-block min-w-[32px]">
                    2023
                  </div>
                  <div className="w-[11px] flex flex-col items-start justify-start pt-px px-0 pb-0 box-border text-xs">
                    <div className="self-stretch h-[18px] relative">
                      <div className="absolute top-[4px] left-[0px] rounded-[50%] box-border w-[11px] h-[11px] border-[0px] border-solid border-black" />
                      <div className="absolute top-[0px] left-[2px] font-light inline-block min-w-[8px] z-[1]">
                        c
                      </div>
                    </div>
                  </div>
                  <div className="relative font-medium inline-block min-w-[121px]">
                    All rights reserved.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
};

export default CHECKOUTPAGE;
