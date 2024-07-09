import { Button } from "@mui/material";
import FrameComponent from "../components/FrameComponent";

const CARTINGPAGE = () => {
  return (
    <div className="w-full relative bg-aliceblue overflow-hidden flex flex-col items-start justify-start pt-0 px-0 pb-[56.8px] box-border gap-[26px] leading-[normal] tracking-[normal]">
      <FrameComponent />
      <main className="self-stretch flex flex-col items-start justify-start gap-[118px] max-w-full mq450:gap-[29px] mq725:gap-[59px]">
        <section className="self-stretch bg-white flex flex-col items-end justify-start pt-[67.5px] px-[151px] pb-[70px] box-border gap-[28px] max-w-full text-left text-lg text-black font-poppins mq450:pl-5 mq450:pr-5 mq450:box-border mq725:pt-11 mq725:px-[75px] mq725:pb-[45px] mq725:box-border">
          <div className="w-[1440px] h-[686px] relative bg-white hidden max-w-full" />
          <div className="self-stretch flex flex-row items-start justify-start pt-0 px-0 pb-[13px] box-border max-w-full">
            <div className="h-[221.5px] flex-1 flex flex-col items-start justify-start pt-0 px-0 pb-[18px] box-border gap-[17.5px] opacity-[0.8] max-w-full z-[1] mq725:h-auto">
              <img
                className="self-stretch relative max-w-full overflow-hidden max-h-full"
                loading="lazy"
                alt=""
                src="/vector-11.svg"
              />
              <div className="self-stretch flex flex-col items-start justify-start pt-0 px-0 pb-[7.5px] box-border gap-[17px] max-w-full">
                <div className="w-[1042px] flex flex-row items-start justify-between max-w-full gap-[20px] mq725:flex-wrap">
                  <div className="relative font-medium inline-block min-w-[71px] z-[2]">
                    Product
                  </div>
                  <div className="flex flex-row items-start justify-start gap-[121px] max-w-full mq450:gap-[60px] mq725:flex-wrap">
                    <b className="relative inline-block min-w-[47px] z-[2]">
                      Price
                    </b>
                    <b className="relative inline-block min-w-[82px] z-[2]">
                      Quantity
                    </b>
                    <b className="relative inline-block min-w-[47px] z-[2]">
                      Total
                    </b>
                  </div>
                </div>
                <img
                  className="self-stretch relative max-w-full overflow-hidden max-h-full"
                  loading="lazy"
                  alt=""
                  src="/vector-21.svg"
                />
              </div>
              <div className="self-stretch flex flex-row items-start justify-start py-0 pr-0 pl-px box-border max-w-full text-mid">
                <div className="flex-1 flex flex-row items-start justify-between max-w-full gap-[20px] mq1025:flex-wrap">
                  <div className="flex flex-row items-end justify-start gap-[14px]">
                    <div className="bg-gainsboro flex flex-row items-start justify-start pt-[11px] pb-[21px] pr-1.5 pl-[7px] z-[2]">
                      <div className="h-[115px] w-24 relative bg-gainsboro hidden" />
                      <img
                        className="h-[83px] w-[83px] relative object-contain z-[3]"
                        loading="lazy"
                        alt=""
                        src="/image-491@2x.png"
                      />
                    </div>
                    <div className="flex flex-col items-start justify-end pt-0 px-0 pb-[26px]">
                      <div className="flex flex-col items-start justify-start">
                        <b className="relative inline-block min-w-[83px] shrink-0 z-[2]">
                          Nike Boot
                        </b>
                        <div className="h-9 flex flex-row items-start justify-start pt-0 px-0 pb-0 box-border text-smi text-gray-100">
                          <div className="mt-[-4px] relative shrink-0 z-[3]">
                            <p className="m-0">Color: Black</p>
                            <p className="m-0">SIZE: 44</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="w-[514px] flex flex-col items-start justify-start pt-[31px] px-0 pb-0 box-border max-w-full text-lg">
                    <div className="self-stretch flex flex-row items-start justify-between gap-[20px] mq725:flex-wrap">
                      <div className="w-[100px] flex flex-col items-start justify-start pt-[13px] pb-0 pr-5 pl-0 box-border">
                        <div className="relative font-medium inline-block min-w-[60px] whitespace-nowrap z-[2]">
                          $75.93
                        </div>
                      </div>
                      <div className="flex flex-row items-start justify-start pt-[17px] pb-4 pr-16 pl-[65px] relative text-smi">
                        <img
                          className="h-full w-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] max-w-full overflow-hidden max-h-full"
                          loading="lazy"
                          alt=""
                          src="/group-69.svg"
                        />
                        <div className="relative font-medium inline-block min-w-[5px] z-[1]">
                          1
                        </div>
                      </div>
                      <div className="flex flex-col items-start justify-start pt-[13px] pb-0 pr-2.5 pl-0">
                        <div className="relative font-medium inline-block min-w-[60px] whitespace-nowrap z-[2]">
                          $75.93
                        </div>
                      </div>
                      <div className="flex flex-col items-start justify-start pt-[21px] px-0 pb-0">
                        <img
                          className="w-3 h-3 relative z-[2]"
                          loading="lazy"
                          alt=""
                          src="/group-72.svg"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="self-stretch flex flex-row items-start justify-start py-0 pr-0 pl-px box-border max-w-full">
                <img
                  className="flex-1 relative max-w-full overflow-hidden max-h-full"
                  loading="lazy"
                  alt=""
                  src="/vector-31.svg"
                />
              </div>
            </div>
          </div>
          <div className="w-[680px] flex flex-row flex-wrap items-start justify-start gap-[18px] max-w-full z-[1]">
            <Button
              className="h-[51px] w-[159px]"
              disableElevation
              variant="outlined"
              sx={{
                textTransform: "none",
                color: "#2555d1",
                fontSize: "18",
                borderColor: "#2555d1",
                borderRadius: "0px 0px 0px 0px",
                "&:hover": { borderColor: "#2555d1" },
                width: 159,
                height: 51,
              }}
            >
              UPDATE CART
            </Button>
            <Button
              className="h-[51px] w-[229px]"
              disableElevation
              variant="outlined"
              sx={{
                textTransform: "none",
                color: "#2555d1",
                fontSize: "18",
                borderColor: "#2555d1",
                borderRadius: "0px 0px 0px 0px",
                "&:hover": { borderColor: "#2555d1" },
                width: 229,
                height: 51,
              }}
            >
              CONTINUE SHOPPING
            </Button>
            <Button
              className="h-[51px] flex-1 min-w-[166px]"
              disableElevation
              variant="contained"
              sx={{
                textTransform: "none",
                color: "#fff",
                fontSize: "18",
                background: "#2555d1",
                borderRadius: "0px 0px 0px 0px",
                "&:hover": { background: "#2555d1" },
                height: 51,
              }}
            >
              PROCEED TO CHECKOUT
            </Button>
          </div>
          <div className="self-stretch h-[207px] flex flex-col items-start justify-start gap-[6px]">
            <div className="relative font-medium z-[1]">{`Add a note for seller `}</div>
            <div className="self-stretch flex-1 relative opacity-[0.8] z-[1] border-[1px] border-solid border-black" />
          </div>
        </section>
        <footer className="w-[1107px] flex flex-row items-start justify-center py-0 px-5 box-border max-w-full text-left text-mid text-black font-poppins">
          <div className="w-[805px] flex flex-col items-start justify-start gap-[65px] max-w-full mq450:gap-[16px] mq975:gap-[32px]">
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
              <div className="h-[44.2px] w-[121px] relative opacity-[0.7]">
                <img
                  className="absolute top-[4px] left-[0px] w-[35px] h-[35px] object-cover"
                  alt=""
                  src="/image-41@2x.png"
                />
                <div className="absolute top-[0px] left-[33px] w-[88px] h-[44.2px]">
                  <img
                    className="absolute top-[1px] left-[0px] w-[42px] h-[42px] object-cover z-[1]"
                    alt=""
                    src="/image-42@2x.png"
                  />
                  <img
                    className="absolute top-[0px] left-[29px] w-[59px] h-[44.2px] object-cover z-[2]"
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

export default CARTINGPAGE;
