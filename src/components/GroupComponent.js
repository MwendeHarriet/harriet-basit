import {
  Select,
  InputLabel,
  MenuItem,
  FormHelperText,
  FormControl,
  InputAdornment,
  Button,
} from "@mui/material";
import PropTypes from "prop-types";

const GroupComponent = ({ className = "" }) => {
  return (
    <main
      className={`w-[1440px] flex flex-col items-start justify-start relative max-w-full ${className}`}
    >
      <section className="w-full !m-[0] absolute top-[0px] left-[0px] flex flex-row items-start justify-start max-w-full h-full text-left text-smi text-black font-poppins">
        <img
          className="h-[120px] w-[243.8px] absolute !m-[0] right-[548.2px] bottom-[1441px] object-contain"
          loading="lazy"
          alt=""
          src="/image-40@2x.png"
        />
        <div className="!m-[0] absolute top-[1060px] right-[193px] flex flex-row items-start justify-start py-0 px-0">
          <div className="relative whitespace-pre-wrap shrink-0">{`Nike Red  Men Shoe `}</div>
        </div>
        <div className="h-[4188px] flex-1 relative max-w-full z-[1]">
          <div className="absolute top-[0px] left-[0px] w-full h-full hidden" />
        </div>
      </section>
      <section className="self-stretch flex flex-row items-start justify-start max-w-full z-[2] text-left text-2xs text-black font-poppins">
        <div className="flex-1 flex flex-row items-start justify-start max-w-full">
          <div className="flex-1 flex flex-col items-start justify-start max-w-full">
            <div className="self-stretch flex flex-row items-start justify-start relative max-w-full">
              <div className="flex-1 flex flex-row items-start justify-start max-w-full text-smi">
                <div className="flex-1 flex flex-col items-start justify-start max-w-full">
                  <div className="self-stretch bg-white flex flex-col items-start justify-start pt-0 px-0 pb-2 box-border relative max-w-full">
                    <div className="self-stretch flex flex-row items-start justify-start relative max-w-full text-mid">
                      <div className="flex-1 flex flex-col items-start justify-start pt-8 px-[27px] pb-[17.8px] box-border relative gap-[131px] max-w-full text-9xl mq750:gap-[33px] mq450:gap-[16px] mq1250:gap-[65px] mq1250:pt-5 mq1250:pb-5 mq1250:box-border">
                        <div className="w-[1440px] !m-[0] absolute top-[0px] left-[0px] flex flex-row items-start justify-start max-w-full">
                          <img
                            className="h-[670px] flex-1 relative max-w-full overflow-hidden object-cover"
                            alt=""
                            src="/image-8@2x.png"
                          />
                          <h1 className="!m-[0] absolute bottom-[253px] left-[161px] text-inherit font-light font-inherit z-[2] mq450:text-3xl">
                            YOU NEED PERFECT BOOT?
                          </h1>
                        </div>
                        <div className="w-[743px] !m-[0] absolute top-[751px] left-[161px] flex flex-row items-start justify-start max-w-full">
                          <img
                            className="h-[478px] flex-1 relative max-w-full overflow-hidden object-cover"
                            alt=""
                            src="/image-10@2x.png"
                          />
                          <img
                            className="h-[590.2px] w-[742px] absolute !m-[0] top-[-56.2px] right-[-89.2px] object-contain z-[2]"
                            alt=""
                            src="/image-12@2x.png"
                          />
                        </div>
                        <footer className="w-full h-[304px] absolute !m-[0] right-[0px] bottom-[0px] left-[0px] bg-aliceblue" />
                        <img
                          className="w-full h-[110px] absolute !m-[0] top-[0px] right-[0px] left-[0px] max-w-full overflow-hidden shrink-0 object-cover z-[1]"
                          alt=""
                          src="/image-9@2x.png"
                        />
                        <div className="w-[306px] !m-[0] absolute top-[1086px] left-[965px] flex flex-row items-start justify-start">
                          <div className="h-[209px] w-[351px] absolute !m-[0] top-[-71px] left-[-37px] bg-aliceblue" />
                          <img
                            className="h-[158.2px] flex-1 relative max-w-full overflow-hidden object-cover z-[3]"
                            loading="lazy"
                            alt=""
                            src="/image-15@2x.png"
                          />
                        </div>
                        <img
                          className="w-[251px] h-[127.9px] absolute !m-[0] top-[1388px] right-[167px] object-contain z-[1]"
                          loading="lazy"
                          alt=""
                          src="/image-39@2x.png"
                        />
                        <img
                          className="w-[228.9px] h-[171.6px] absolute !m-[0] bottom-[1720.4px] left-[171px] object-contain z-[1]"
                          loading="lazy"
                          alt=""
                          src="/image-31@2x.png"
                        />
                        <img
                          className="w-[217.3px] h-[125px] absolute !m-[0] bottom-[1760px] left-[464px] object-contain z-[1]"
                          loading="lazy"
                          alt=""
                          src="/image-33@2x.png"
                        />
                        <img
                          className="w-[225.9px] h-[150.6px] absolute !m-[0] right-[466.1px] bottom-[1741.4px] object-contain z-[1]"
                          loading="lazy"
                          alt=""
                          src="/image-30@2x.png"
                        />
                        <img
                          className="w-[221.9px] h-[114px] absolute !m-[0] right-[457.1px] bottom-[1259px] object-contain z-[1]"
                          loading="lazy"
                          alt=""
                          src="/image-35@2x.png"
                        />
                        <div className="!m-[0] absolute top-[764px] left-[948px] flex flex-row items-start justify-start text-xl">
                          <img
                            className="h-[172.8px] w-[311px] absolute !m-[0] right-[-257px] bottom-[-160.8px] object-cover z-[3]"
                            loading="lazy"
                            alt=""
                            src="/image-16@2x.png"
                          />
                          <div className="flex flex-col items-start justify-start z-[4]">
                            <h3 className="m-0 relative text-inherit font-light font-inherit inline-block min-w-[38px] shrink-0 mq450:text-base">
                              FOR
                            </h3>
                            <div className="h-8 flex flex-row items-start justify-start pt-0 px-0 pb-0 box-border text-12xl">
                              <h1 className="mt-[-15px] m-0 relative text-inherit font-medium font-inherit inline-block min-w-[66px] shrink-0 mq750:text-6xl mq450:text-lgi">
                                MEN
                              </h1>
                            </div>
                          </div>
                        </div>
                        <div className="w-[1302px] flex flex-col items-end justify-start gap-[114px] max-w-full text-4xl mq750:gap-[57px] mq450:gap-[28px]">
                          <div className="self-stretch flex flex-col items-end justify-start gap-[51px] max-w-full mq750:gap-[25px]">
                            <div className="self-stretch flex flex-row items-start justify-start gap-[54px] max-w-full mq750:gap-[27px]">
                              <a className="[text-decoration:none] relative font-medium text-[inherit] whitespace-nowrap z-[2]">
                                BOOT FINDER
                              </a>
                              <div className="flex-1 flex flex-col items-start justify-start pt-[5px] px-0 pb-0 box-border max-w-full text-lg text-royalblue">
                                <div className="self-stretch flex flex-row items-start justify-between max-w-full gap-[20px] z-[2]">
                                  <div className="w-[502px] flex flex-row items-start justify-start relative gap-[39px] max-w-full mq450:gap-[19px] mq1250:hidden">
                                    <a className="[text-decoration:none] relative font-medium text-[inherit] inline-block min-w-[53px]">
                                      HOME
                                    </a>
                                    <FormControl
                                      className="h-[27px] w-[70px] font-poppins font-medium text-lg text-black"
                                      variant="standard"
                                      sx={{
                                        borderTopWidth: "0px",
                                        borderRightWidth: "0px",
                                        borderBottomWidth: "0px",
                                        borderLeftWidth: "0px",
                                        borderRadius: "0px 0px 0px 0px",
                                        width: "70px",
                                        height: "27px",
                                        m: 0,
                                        p: 0,
                                        "& .MuiInputBase-root": {
                                          m: 0,
                                          p: 0,
                                          minHeight: "27px",
                                          justifyContent: "center",
                                          display: "inline-flex",
                                        },
                                        "& .MuiInputLabel-root": {
                                          m: 0,
                                          p: 0,
                                          minHeight: "27px",
                                          display: "inline-flex",
                                        },
                                        "& .MuiMenuItem-root": {
                                          m: 0,
                                          p: 0,
                                          height: "27px",
                                          display: "inline-flex",
                                        },
                                        "& .MuiSelect-select": {
                                          m: 0,
                                          p: 0,
                                          height: "27px",
                                          alignItems: "center",
                                          display: "inline-flex",
                                        },
                                        "& .MuiInput-input": { m: 0, p: 0 },
                                        "& .MuiInputBase-input": {
                                          color: "#000",
                                          fontSize: 18,
                                          fontWeight: "Medium",
                                          fontFamily: "Poppins",
                                          textAlign: "left",
                                          p: "0 !important",
                                        },
                                      }}
                                    >
                                      <InputLabel color="primary" />
                                      <Select
                                        color="primary"
                                        disableUnderline
                                        displayEmpty
                                        IconComponent={() => (
                                          <img
                                            width="14px"
                                            height="7px"
                                            src="/vector.svg"
                                            style={{}}
                                          />
                                        )}
                                      >
                                        <MenuItem>SHOP</MenuItem>
                                      </Select>
                                      <FormHelperText />
                                    </FormControl>
                                    <FormControl
                                      className="h-[27px] w-[69px] font-poppins font-medium text-lg text-black"
                                      variant="standard"
                                      sx={{
                                        borderTopWidth: "0px",
                                        borderRightWidth: "0px",
                                        borderBottomWidth: "0px",
                                        borderLeftWidth: "0px",
                                        borderRadius: "0px 0px 0px 0px",
                                        width: "69px",
                                        height: "27px",
                                        m: 0,
                                        p: 0,
                                        "& .MuiInputBase-root": {
                                          m: 0,
                                          p: 0,
                                          minHeight: "27px",
                                          justifyContent: "center",
                                          display: "inline-flex",
                                        },
                                        "& .MuiInputLabel-root": {
                                          m: 0,
                                          p: 0,
                                          minHeight: "27px",
                                          display: "inline-flex",
                                        },
                                        "& .MuiMenuItem-root": {
                                          m: 0,
                                          p: 0,
                                          height: "27px",
                                          display: "inline-flex",
                                        },
                                        "& .MuiSelect-select": {
                                          m: 0,
                                          p: 0,
                                          height: "27px",
                                          alignItems: "center",
                                          display: "inline-flex",
                                        },
                                        "& .MuiInput-input": { m: 0, p: 0 },
                                        "& .MuiInputBase-input": {
                                          color: "#000",
                                          fontSize: 18,
                                          fontWeight: "Medium",
                                          fontFamily: "Poppins",
                                          textAlign: "left",
                                          p: "0 !important",
                                        },
                                      }}
                                    >
                                      <InputLabel color="primary" />
                                      <Select
                                        color="primary"
                                        disableUnderline
                                        displayEmpty
                                        IconComponent={() => (
                                          <img
                                            width="14px"
                                            height="7px"
                                            src="/vector-1.svg"
                                            style={{}}
                                          />
                                        )}
                                      >
                                        <MenuItem>BLOG</MenuItem>
                                      </Select>
                                      <FormHelperText />
                                    </FormControl>
                                    <FormControl
                                      className="h-[27px] w-[141px] font-poppins font-medium text-lg text-black"
                                      variant="standard"
                                      sx={{
                                        borderTopWidth: "0px",
                                        borderRightWidth: "0px",
                                        borderBottomWidth: "0px",
                                        borderLeftWidth: "0px",
                                        borderRadius: "0px 0px 0px 0px",
                                        width: "28.087649402390436%",
                                        height: "27px",
                                        m: 0,
                                        p: 0,
                                        "& .MuiInputBase-root": {
                                          m: 0,
                                          p: 0,
                                          minHeight: "27px",
                                          justifyContent: "center",
                                          display: "inline-flex",
                                        },
                                        "& .MuiInputLabel-root": {
                                          m: 0,
                                          p: 0,
                                          minHeight: "27px",
                                          display: "inline-flex",
                                        },
                                        "& .MuiMenuItem-root": {
                                          m: 0,
                                          p: 0,
                                          height: "27px",
                                          display: "inline-flex",
                                        },
                                        "& .MuiSelect-select": {
                                          m: 0,
                                          p: 0,
                                          height: "27px",
                                          alignItems: "center",
                                          display: "inline-flex",
                                        },
                                        "& .MuiInput-input": { m: 0, p: 0 },
                                        "& .MuiInputBase-input": {
                                          color: "#000",
                                          fontSize: 18,
                                          fontWeight: "Medium",
                                          fontFamily: "Poppins",
                                          textAlign: "left",
                                          p: "0 !important",
                                        },
                                      }}
                                    >
                                      <InputLabel color="primary" />
                                      <Select
                                        color="primary"
                                        disableUnderline
                                        displayEmpty
                                        IconComponent={() => (
                                          <img
                                            width="14px"
                                            height="7px"
                                            src="/vector-2.svg"
                                            style={{}}
                                          />
                                        )}
                                      >
                                        <MenuItem>OTHER PAGES</MenuItem>
                                      </Select>
                                      <FormHelperText />
                                    </FormControl>
                                    <a className="[text-decoration:none] absolute !m-[0] top-[0px] right-[-28px] font-medium text-black inline-block min-w-[41px] whitespace-nowrap">{`SALE `}</a>
                                  </div>
                                  <div className="w-[215px] flex flex-col items-start justify-start pt-[5px] px-0 pb-0 box-border text-3xs text-white">
                                    <div className="self-stretch h-[30px] relative">
                                      <div className="absolute top-[0px] left-[0px] w-[204.9px] flex flex-row items-start justify-between gap-[20px]">
                                        <div className="flex flex-row items-start justify-start gap-[44px]">
                                          <img
                                            className="h-[18px] w-4 relative min-h-[18px]"
                                            loading="lazy"
                                            alt=""
                                            src="/group-5.svg"
                                          />
                                          <img
                                            className="h-[18.2px] w-[20.9px] relative min-h-[18px]"
                                            alt=""
                                            src="/vector-3.svg"
                                          />
                                          <img
                                            className="h-[18px] w-[18px] relative min-h-[18px]"
                                            loading="lazy"
                                            alt=""
                                            src="/group-6.svg"
                                          />
                                        </div>
                                        <img
                                          className="h-5 w-[18px] relative min-h-[20px]"
                                          alt=""
                                          src="/group-8.svg"
                                        />
                                      </div>
                                      <img
                                        className="absolute top-[10px] left-[195px] w-5 h-5 z-[1]"
                                        alt=""
                                        src="/group-8-1.svg"
                                      />
                                      <a className="[text-decoration:none] absolute top-[12px] left-[202px] font-medium text-[inherit] inline-block min-w-[7px] z-[2]">
                                        0
                                      </a>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="w-[1218px] flex flex-row items-start justify-end py-0 px-[50px] box-border max-w-full text-29xl mq1250:pl-[25px] mq1250:pr-[25px] mq1250:box-border">
                              <div className="flex-1 flex flex-col items-start justify-start gap-[161.5px] max-w-full mq750:gap-[40px] mq450:gap-[20px] mq1250:gap-[81px]">
                                <div className="w-[942px] flex flex-row items-end justify-start gap-[28px] max-w-full mq1100:flex-wrap">
                                  <div className="h-[286.5px] flex flex-col items-start justify-start min-w-[307px] mq1100:flex-1">
                                    <div className="flex flex-col items-start justify-start gap-[43px] mq450:gap-[21px]">
                                      <h1 className="m-0 relative text-inherit font-medium font-inherit z-[1] mq750:text-19xl mq450:text-10xl">
                                        BOOT FINDER
                                      </h1>
                                      <div className="w-40 flex flex-col items-start justify-start gap-[22px] text-9xl">
                                        <h1 className="m-0 relative text-inherit font-light font-inherit z-[1] mq450:text-3xl">
                                          FIND IT HERE
                                        </h1>
                                        <Button
                                          className="self-stretch h-12 z-[1]"
                                          endIcon={
                                            <img
                                              width="14px"
                                              height="14px"
                                              src="/group-13.svg"
                                            />
                                          }
                                          disableElevation
                                          variant="contained"
                                          sx={{
                                            textTransform: "none",
                                            color: "#fff",
                                            fontSize: "18",
                                            background: "#2555d1",
                                            borderRadius: "0px 0px 0px 0px",
                                            "&:hover": {
                                              background: "#2555d1",
                                            },
                                            height: 48,
                                          }}
                                        >
                                          SHOP NOW
                                        </Button>
                                      </div>
                                    </div>
                                  </div>
                                  <img
                                    className="h-[466.5px] flex-1 relative max-w-full overflow-hidden object-cover min-w-[395px] z-[3] mq750:min-w-full"
                                    loading="lazy"
                                    alt=""
                                    src="/image-11@2x.png"
                                  />
                                </div>
                                <div className="self-stretch flex flex-row items-start justify-end max-w-full text-24xl">
                                  <div className="w-[1052px] flex flex-col items-end justify-start gap-[55px] max-w-full mq750:gap-[27px]">
                                    <div className="w-[351px] h-[209px] relative bg-aliceblue max-w-full" />
                                    <div className="self-stretch flex flex-row items-start justify-start max-w-full">
                                      <div className="w-[843px] flex flex-row items-start justify-between gap-[20px] max-w-full mq450:flex-wrap">
                                        <div className="flex flex-col items-start justify-start gap-[2px]">
                                          <div className="relative font-semibold inline-block min-w-[106px] z-[3] mq750:text-15xl mq450:text-7xl">
                                            2024
                                          </div>
                                          <h2 className="m-0 relative text-5xl font-light font-inherit z-[3] mq450:text-lgi">
                                            NEW COLLECTION
                                          </h2>
                                          <Button
                                            className="w-40 h-12 z-[1]"
                                            endIcon={
                                              <img
                                                width="14px"
                                                height="14px"
                                                src="/group-13-1.svg"
                                              />
                                            }
                                            disableElevation
                                            variant="contained"
                                            sx={{
                                              textTransform: "none",
                                              color: "#fff",
                                              fontSize: "18",
                                              background: "#2555d1",
                                              borderRadius: "0px 0px 0px 0px",
                                              "&:hover": {
                                                background: "#2555d1",
                                              },
                                              width: 160,
                                              height: 48,
                                            }}
                                          >
                                            SHOP NOW
                                          </Button>
                                        </div>
                                        <div className="flex flex-col items-start justify-start pt-3.5 px-0 pb-0 text-xl">
                                          <div className="flex flex-col items-start justify-start z-[4]">
                                            <h3 className="m-0 relative text-inherit font-light font-inherit inline-block min-w-[38px] shrink-0 mq450:text-base">
                                              FOR
                                            </h3>
                                            <div className="h-8 flex flex-row items-start justify-start pt-0 px-0 pb-0 box-border text-12xl">
                                              <h1 className="mt-[-15px] m-0 relative text-inherit font-medium font-inherit inline-block min-w-[122px] shrink-0 mq750:text-6xl mq450:text-lgi">
                                                WOMEN
                                              </h1>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="w-[1183px] flex flex-row items-start justify-end py-0 px-[50px] box-border max-w-full text-10xl text-white mq1250:pl-[25px] mq1250:pr-[25px] mq1250:box-border">
                            <div className="flex-1 flex flex-row flex-wrap items-start justify-start gap-[19px] max-w-full">
                              <div className="w-[234px] flex flex-col items-start justify-start pt-3.5 px-0 pb-0 box-border">
                                <div className="flex flex-col items-start justify-start gap-[16px]">
                                  <div className="flex flex-row items-start justify-start relative">
                                    <img
                                      className="h-[413px] w-[260px] absolute !m-[0] right-[-86px] bottom-[-311px] object-cover"
                                      alt=""
                                      src="/new-arrivals-background@2x.png"
                                    />
                                    <h1 className="m-0 relative text-inherit font-semibold font-inherit z-[1] mq450:text-4xl">
                                      <p className="m-0">NEW</p>
                                      <p className="m-0">ARRIVALS</p>
                                    </h1>
                                  </div>
                                  <div className="relative text-mid inline-block min-w-[107px] z-[1]">
                                    JUST IN NOW
                                  </div>
                                </div>
                              </div>
                              <div className="h-[340px] flex-1 relative min-w-[172px] z-[3]">
                                <div className="absolute top-[0px] left-[0px] w-full h-full">
                                  <div className="absolute top-[0px] left-[0px] w-full h-full">
                                    <div className="absolute top-[0px] left-[0px] w-full h-full">
                                      <div className="absolute top-[0px] left-[0px] bg-aliceblue w-full h-full" />
                                      <img
                                        className="absolute top-[105px] left-[10px] w-[234px] h-[129.1px] object-contain z-[1]"
                                        loading="lazy"
                                        alt=""
                                        src="/image-37@2x.png"
                                      />
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="flex-1 flex flex-col items-start justify-start pt-4 px-0 pb-0 box-border min-w-[172px]">
                                <div className="self-stretch flex flex-row items-start justify-start relative">
                                  <div className="h-[340px] w-[264px] absolute !m-[0] bottom-[-60px] left-[-3px] bg-aliceblue" />
                                  <img
                                    className="h-[264px] w-[264px] relative object-contain z-[1]"
                                    loading="lazy"
                                    alt=""
                                    src="/image-14@2x.png"
                                  />
                                </div>
                              </div>
                              <div className="h-[340px] flex-1 relative bg-aliceblue min-w-[172px]" />
                            </div>
                          </div>
                        </div>
                        <img
                          className="w-[217px] h-[162.7px] absolute !m-[0] right-[177px] bottom-[1729.3px] object-contain z-[1]"
                          loading="lazy"
                          alt=""
                          src="/image-27@2x.png"
                        />
                        <img
                          className="w-56 h-[167.9px] absolute !m-[0] right-[170px] bottom-[1220.1px] object-contain z-[1]"
                          loading="lazy"
                          alt=""
                          src="/image-28@2x.png"
                        />
                        <div className="w-[1368px] flex flex-row items-start justify-center pt-0 px-5 pb-[348px] box-border max-w-full text-12xl mq750:pb-24 mq750:box-border mq1100:pb-[147px] mq1100:box-border mq1250:pb-[226px] mq1250:box-border">
                          <div className="w-[1136px] flex flex-col items-end justify-start gap-[94px] max-w-full mq750:gap-[23px] mq1250:gap-[47px]">
                            <div className="self-stretch flex flex-col items-end justify-start gap-[47px] max-w-full mq750:gap-[23px]">
                              <div className="w-[1118px] flex flex-row items-start justify-start relative max-w-full">
                                <img
                                  className="h-[294px] flex-1 relative max-w-full overflow-hidden object-cover"
                                  alt=""
                                  src="/best-sellers-title-background@2x.png"
                                />
                                <Button
                                  className="h-12 w-40 !m-[0] absolute bottom-[64px] left-[calc(50%_-_80px)] z-[1]"
                                  endIcon={
                                    <img
                                      width="14px"
                                      height="14px"
                                      src="/group-13-2.svg"
                                    />
                                  }
                                  disableElevation
                                  variant="contained"
                                  sx={{
                                    textTransform: "none",
                                    color: "#fff",
                                    fontSize: "18",
                                    background: "#2555d1",
                                    borderRadius: "0px 0px 0px 0px",
                                    "&:hover": { background: "#2555d1" },
                                    width: 160,
                                    height: 48,
                                  }}
                                >
                                  SHOP NOW
                                </Button>
                              </div>
                              <div className="w-[1118px] flex flex-col items-start justify-start pt-0 px-0 pb-[18px] box-border gap-[36px] max-w-full mq750:gap-[18px]">
                                <h1 className="m-0 relative text-inherit font-medium font-inherit mq750:text-6xl mq450:text-lgi">
                                  BEST SELLERS
                                </h1>
                                <div className="self-stretch flex flex-row flex-wrap items-start justify-start gap-[39px] text-smi mq750:gap-[19px]">
                                  <div className="h-[361px] flex-1 relative bg-aliceblue min-w-[229px] max-w-[249px]" />
                                  <div className="flex-1 flex flex-col items-start justify-start gap-[13px] min-w-[187px] max-w-[249px]">
                                    <div className="self-stretch h-[361px] relative bg-aliceblue" />
                                    <div className="relative">
                                      Nike React Hyperser LE
                                    </div>
                                  </div>
                                  <div className="flex-1 flex flex-col items-start justify-start py-0 pr-[5px] pl-0 box-border min-w-[190px] max-w-[254px]">
                                    <div className="self-stretch h-[361px] relative bg-aliceblue" />
                                  </div>
                                  <div className="flex-1 flex flex-col items-start justify-start gap-[13px] min-w-[187px] max-w-[249px]">
                                    <div className="self-stretch h-[361px] relative bg-aliceblue" />
                                    <div className="relative inline-block min-w-[118px]">
                                      Netburner Ballistic
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="self-stretch flex flex-row flex-wrap items-start justify-start gap-[39px] max-w-full text-smi mq750:gap-[19px]">
                                <div className="flex-1 flex flex-row items-end justify-start gap-[21px] min-w-[361px] max-w-full mq750:flex-wrap mq750:min-w-full">
                                  <div className="flex-1 flex flex-col items-start justify-start gap-[94px] min-w-[185px] mq450:gap-[47px]">
                                    <div className="self-stretch flex flex-row items-start justify-start relative">
                                      <div className="h-[431px] w-[249px] absolute !m-[0] bottom-[-82px] left-[calc(50%_-_124.5px)] bg-aliceblue" />
                                      <img
                                        className="h-[285px] w-[285px] relative object-contain z-[1]"
                                        loading="lazy"
                                        alt=""
                                        src="/image-22@2x.png"
                                      />
                                    </div>
                                    <div className="flex flex-row items-start justify-start py-0 px-[18px]">
                                      <div className="relative inline-block min-w-[75px]">
                                        Nike UNISEX
                                      </div>
                                    </div>
                                  </div>
                                  <div className="h-[463px] w-[249px] flex flex-col items-start justify-end pt-0 px-0 pb-8 box-border min-w-[249px] mq750:flex-1">
                                    <div className="self-stretch flex-1 relative bg-aliceblue" />
                                  </div>
                                </div>
                                <div className="h-[431px] w-[254px] flex flex-col items-start justify-start py-0 pr-[5px] pl-0 box-border">
                                  <div className="self-stretch flex-1 relative bg-aliceblue" />
                                </div>
                                <div className="h-[464px] w-[249px] flex flex-col items-start justify-start gap-[13px]">
                                  <div className="self-stretch flex-1 relative bg-aliceblue" />
                                  <div className="relative">
                                    ASICS Netburner Men's Indoor Shoes
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="w-[1119px] flex flex-row items-start justify-end py-0 px-px box-border max-w-full text-6xl">
                              <div className="flex-1 flex flex-row items-end justify-between max-w-full gap-[20px] mq1100:flex-wrap">
                                <div className="h-[237px] w-[249px] flex flex-col items-start justify-start gap-[24px] min-w-[249px] mq1100:flex-1">
                                  <h2 className="m-0 relative text-inherit font-semibold font-inherit mq450:text-xl">
                                    LATEST BLOG
                                  </h2>
                                  <img
                                    className="self-stretch flex-1 relative max-w-full overflow-hidden max-h-full object-cover"
                                    loading="lazy"
                                    alt=""
                                    src="/rectangle-18@2x.png"
                                  />
                                </div>
                                <div className="w-[541px] flex flex-row items-start justify-start gap-[169px] min-w-[541px] max-w-full text-lg text-royalblue mq750:flex-wrap mq750:gap-[84px] mq750:min-w-full mq450:gap-[42px] mq1100:flex-1">
                                  <div className="flex-1 flex flex-col items-start justify-start pt-[76px] px-0 pb-0 box-border min-w-[162px]">
                                    <img
                                      className="self-stretch h-[175px] relative max-w-full overflow-hidden shrink-0 object-cover"
                                      loading="lazy"
                                      alt=""
                                      src="/rectangle-23@2x.png"
                                    />
                                  </div>
                                  <div className="flex flex-row items-start justify-start gap-[10px]">
                                    <h3 className="m-0 relative text-inherit font-normal font-inherit inline-block min-w-[99px]">
                                      VIEW MORE
                                    </h3>
                                    <div className="flex flex-col items-start justify-start pt-[7px] px-0 pb-0">
                                      <img
                                        className="w-3.5 h-3.5 relative"
                                        loading="lazy"
                                        alt=""
                                        src="/group-19.svg"
                                      />
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="w-[1073px] flex flex-row items-start justify-center py-0 px-5 box-border max-w-full text-mid">
                          <div className="w-[805px] flex flex-col items-start justify-start gap-[65px] max-w-full mq450:gap-[16px] mq1100:gap-[32px]">
                            <div className="self-stretch flex flex-row items-start justify-between gap-[20px] z-[1] mq750:flex-wrap">
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
                              <div className="h-[109px] flex flex-col items-start justify-start">
                                <div className="flex flex-col items-start justify-start gap-[42px] z-[1]">
                                  <div className="relative font-medium">
                                    Shopping With Us
                                  </div>
                                  <div className="flex flex-col items-start justify-start gap-[1px] text-smi">
                                    <div className="relative font-medium inline-block min-w-[124px]">{`Return & Exchange `}</div>
                                    <div className="relative font-medium inline-block min-w-[73px]">
                                      Size Charts
                                    </div>
                                  </div>
                                </div>
                                <div className="relative text-smi font-medium mt-[-62px]">
                                  Shipping Information
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
                              <div className="h-[44.2px] w-[121px] relative opacity-[0.7] z-[1]">
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
                              <div className="flex flex-col items-start justify-start pt-3 px-0 pb-0">
                                <div className="flex flex-row items-start justify-start gap-[2px] z-[1]">
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
                        </div>
                      </div>
                      <div className="absolute !m-[0] top-[1654px] left-[449px] font-semibold inline-block min-w-[40px] whitespace-nowrap z-[1]">
                        $100
                      </div>
                      <div className="absolute !m-[0] top-[1654px] right-[653px] font-semibold inline-block min-w-[58px] whitespace-nowrap z-[1]">
                        $93.36
                      </div>
                      <div className="absolute !m-[0] top-[1654px] right-[365px] font-semibold inline-block min-w-[60px] whitespace-nowrap z-[1]">
                        $88.66
                      </div>
                      <div className="absolute !m-[0] bottom-[1583px] left-[161px] font-semibold inline-block min-w-[58px] whitespace-nowrap z-[1]">
                        $74.96
                      </div>
                      <div className="absolute !m-[0] bottom-[1054px] left-[161px] font-semibold inline-block min-w-[40px] whitespace-nowrap z-[1]">
                        $100
                      </div>
                      <div className="absolute !m-[0] bottom-[1054px] left-[449px] font-semibold inline-block min-w-[40px] whitespace-nowrap z-[1]">
                        $150
                      </div>
                      <div className="absolute !m-[0] right-[645px] bottom-[1054px] font-semibold inline-block min-w-[58px] whitespace-nowrap z-[1]">
                        $79.96
                      </div>
                      <div className="absolute !m-[0] right-[352px] bottom-[1054px] font-semibold inline-block min-w-[58px] whitespace-nowrap z-[1]">
                        $47.63
                      </div>
                      <div className="absolute !m-[0] bottom-[1583px] left-[449px] font-semibold inline-block min-w-[59px] whitespace-nowrap z-[1]">
                        $85.43
                      </div>
                      <div className="absolute !m-[0] right-[645px] bottom-[1583px] font-semibold inline-block min-w-[58px] whitespace-nowrap z-[1]">
                        $54.32
                      </div>
                      <div className="absolute !m-[0] right-[351px] bottom-[1583px] font-semibold inline-block min-w-[59px] whitespace-nowrap z-[1]">
                        $98.42
                      </div>
                      <div className="!m-[0] absolute top-[1680px] right-[161px] flex flex-row items-start justify-start z-[1] text-4xs text-white font-inter">
                        <div className="flex flex-row items-start justify-start pt-1 pb-[5px] pr-[5px] pl-1.5 relative whitespace-nowrap">
                          <div className="h-full w-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] bg-royalblue" />
                          <b className="relative inline-block min-w-[63px] z-[1]">
                            ADD TO CART
                          </b>
                        </div>
                      </div>
                      <div className="!m-[0] absolute top-[1680px] right-[447px] flex flex-row items-start justify-start z-[1] text-4xs text-white font-inter">
                        <div className="flex flex-row items-start justify-start pt-1 pb-[5px] pr-[5px] pl-1.5 relative whitespace-nowrap">
                          <div className="h-full w-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] bg-royalblue" />
                          <b className="relative inline-block min-w-[63px] z-[1]">
                            ADD TO CART
                          </b>
                        </div>
                      </div>
                      <div className="!m-[0] absolute right-[161px] bottom-[1563px] flex flex-row items-start justify-start z-[1] text-4xs text-white font-inter">
                        <div className="flex flex-row items-start justify-start pt-1 pb-[5px] pr-[5px] pl-1.5 relative whitespace-nowrap">
                          <div className="h-full w-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] bg-royalblue" />
                          <b className="relative inline-block min-w-[63px] z-[1]">
                            ADD TO CART
                          </b>
                        </div>
                      </div>
                      <div className="!m-[0] absolute right-[466px] bottom-[1563px] flex flex-row items-start justify-start z-[1] text-4xs text-white font-inter">
                        <div className="flex flex-row items-start justify-start pt-1 pb-[5px] pr-[5px] pl-1.5 relative whitespace-nowrap">
                          <div className="h-full w-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] bg-royalblue" />
                          <b className="relative inline-block min-w-[63px] z-[1]">
                            ADD TO CART
                          </b>
                        </div>
                      </div>
                      <div className="!m-[0] absolute bottom-[1563px] left-[624px] flex flex-row items-start justify-start z-[1] text-4xs text-white font-inter">
                        <div className="flex flex-row items-start justify-start pt-1 pb-[5px] pr-[5px] pl-1.5 relative whitespace-nowrap">
                          <div className="h-full w-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] bg-royalblue" />
                          <b className="relative inline-block min-w-[63px] z-[1]">
                            ADD TO CART
                          </b>
                        </div>
                      </div>
                      <div className="!m-[0] absolute bottom-[1563px] left-[336px] flex flex-row items-start justify-start z-[1] text-4xs text-white font-inter">
                        <div className="flex flex-row items-start justify-start pt-1 pb-[5px] pr-[5px] pl-1.5 relative whitespace-nowrap">
                          <div className="h-full w-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] bg-royalblue" />
                          <b className="relative inline-block min-w-[63px] z-[1]">
                            ADD TO CART
                          </b>
                        </div>
                      </div>
                      <div className="!m-[0] absolute bottom-[1034px] left-[336px] flex flex-row items-start justify-start z-[1] text-4xs text-white font-inter">
                        <div className="flex flex-row items-start justify-start pt-1 pb-[5px] pr-[5px] pl-1.5 relative whitespace-nowrap">
                          <div className="h-full w-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] bg-royalblue" />
                          <b className="relative inline-block min-w-[63px] z-[1]">
                            ADD TO CART
                          </b>
                        </div>
                      </div>
                      <div className="!m-[0] absolute bottom-[1034px] left-[624px] flex flex-row items-start justify-start z-[1] text-4xs text-white font-inter">
                        <div className="flex flex-row items-start justify-start pt-1 pb-[5px] pr-[5px] pl-1.5 relative whitespace-nowrap">
                          <div className="h-full w-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] bg-royalblue" />
                          <b className="relative inline-block min-w-[63px] z-[1]">
                            ADD TO CART
                          </b>
                        </div>
                      </div>
                      <div className="!m-[0] absolute right-[457px] bottom-[1034px] flex flex-row items-start justify-start z-[1] text-4xs text-white font-inter">
                        <div className="flex flex-row items-start justify-start pt-1 pb-[5px] pr-[5px] pl-1.5 relative whitespace-nowrap">
                          <div className="h-full w-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] bg-royalblue" />
                          <b className="relative inline-block min-w-[63px] z-[1]">
                            ADD TO CART
                          </b>
                        </div>
                      </div>
                      <div className="!m-[0] absolute right-[161px] bottom-[1034px] flex flex-row items-start justify-start z-[1] text-4xs text-white font-inter">
                        <div className="flex flex-row items-start justify-start pt-1 pb-[5px] pr-[5px] pl-1.5 relative whitespace-nowrap">
                          <div className="h-full w-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] bg-royalblue" />
                          <b className="relative inline-block min-w-[63px] z-[1]">
                            ADD TO CART
                          </b>
                        </div>
                      </div>
                      <div className="!m-[0] absolute top-[1680px] left-[639px] flex flex-row items-start justify-start z-[1] text-4xs text-white font-inter">
                        <div className="flex flex-row items-start justify-start pt-1 pb-[5px] pr-[5px] pl-1.5 relative whitespace-nowrap">
                          <div className="h-full w-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] bg-royalblue" />
                          <b className="relative inline-block min-w-[63px] z-[1]">
                            ADD TO CART
                          </b>
                        </div>
                      </div>
                      <img
                        className="h-[271px] w-[271px] absolute !m-[0] bottom-[1209px] left-[438px] object-contain z-[1]"
                        alt=""
                        src="/image-45@2x.png"
                      />
                      <div className="w-[370px] !m-[0] absolute bottom-[579px] left-[calc(50%_-_185px)] flex flex-col items-start justify-start gap-[10px] max-w-full z-[1] text-5xl">
                        <div className="self-stretch flex flex-row items-start justify-center py-0 pr-[21px] pl-5">
                          <img
                            className="h-[41px] w-[41px] relative object-cover"
                            loading="lazy"
                            alt=""
                            src="/image-46@2x.png"
                          />
                        </div>
                        <div className="self-stretch flex flex-row items-start justify-start max-w-full">
                          <div className="flex-1 flex flex-col items-start justify-start max-w-full">
                            <div className="self-stretch h-[34px] flex flex-row items-start justify-start py-0 pr-[30px] pl-[29px] box-border">
                              <h2 className="m-0 relative text-inherit font-medium font-inherit shrink-0 mq450:text-lgi">
                                FOLOW US ON INSTAGRAM
                              </h2>
                            </div>
                            <div className="relative text-smi font-light shrink-0">
                              <span>{`Shop our favorites and share yours! `}</span>
                              <span className="text-royalblue">
                                #Tending shoes Style
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <h1 className="!m-[0] absolute top-[1829px] left-[369px] text-33xl font-black font-inherit z-[1] mq750:text-23xl mq450:text-12xl">
                        PROMOTION SALE 30% OFF
                      </h1>
                      <div className="h-[31px] w-8 absolute !m-[0] top-[606px] left-[161px] z-[1]">
                        <div className="absolute top-[0px] left-[0px] bg-black w-full h-full" />
                        <img
                          className="absolute h-[41.94%] w-[20.31%] top-[29.03%] right-[39.06%] bottom-[29.03%] left-[40.63%] max-w-full overflow-hidden max-h-full z-[1]"
                          alt=""
                          src="/vector-4.svg"
                        />
                      </div>
                      <div className="h-[31px] w-8 absolute !m-[0] top-[606px] left-[205px] z-[1]">
                        <div className="absolute top-[0px] left-[0px] bg-black w-full h-full" />
                        <img
                          className="absolute h-[41.94%] w-[20.31%] top-[29.03%] right-[39.06%] bottom-[29.03%] left-[40.63%] max-w-full overflow-hidden max-h-full z-[1]"
                          alt=""
                          src="/vector-5.svg"
                        />
                      </div>
                      <h2 className="!m-[0] absolute top-[1787px] left-[612px] text-3xl font-medium font-inherit z-[1] mq450:text-lg">
                        THE SEASON BEGINS
                      </h2>
                    </div>
                    <div className="absolute !m-[0] right-[541px] bottom-[1617px] z-[2]">
                      Nike Navy/Lime Sneakers
                    </div>
                    <div className="absolute !m-[0] bottom-[1617px] left-[161px] z-[2]">
                      Women's GEL-ROCKET 11 
                    </div>
                    <div className="absolute !m-[0] right-[469px] bottom-[1088px] z-[2]">
                      Nike G.T. Cut Cross Basketball Shoes
                    </div>
                    <div className="absolute !m-[0] top-[1635px] right-[535px] z-[2]">
                      Nike Men's Volleyball Shoes
                    </div>
                    <div className="!m-[0] absolute top-[1635px] left-[448px] flex flex-row items-start justify-start z-[2]">
                      <div className="flex flex-row items-start justify-start">
                        <div className="flex flex-row items-start justify-start">
                          <div className="flex flex-row items-start justify-start">
                            <div className="relative">
                              Nike React HyperSet SE
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="absolute !m-[0] top-[1635px] right-[229px] z-[2]">
                      ASICS Metarise Men volleyball 
                    </div>
                    <div className="absolute !m-[0] bottom-[1088px] left-[448px] z-[2]">
                      Nike Air Zoom Hyperace SE White
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute !m-[0] bottom-[870px] left-[430px] font-medium z-[1]">
                <p className="m-0">{`Diehard Swoosh fans who are in need of `}</p>
                <p className="m-0">
                  comfy and supportive kicks for walking need not
                </p>
                <p className="m-0">
                  look far. But, because we tested many Nike walking
                </p>
                <p className="m-0">
                  shoes, you can expect to find the best of them here
                </p>
                <p className="m-0">in our review.</p>
              </div>
              <div className="absolute !m-[0] right-[148px] bottom-[887px] font-medium text-gray-300 z-[1]">
                <p className="m-0 text-smi">Gera Creations -</p>
                <p className="m-0">Offering White Nike Air Zoom Pegasus 37</p>
                <p className="m-0">
                  Running Shoes at Rs 2499/pair in Faridabad,
                </p>
                <p className="m-0">
                  Haryana. Get Nike Running Shoes at lowest price|...
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

GroupComponent.propTypes = {
  className: PropTypes.string,
};

export default GroupComponent;
