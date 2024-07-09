import {
  Select,
  InputLabel,
  MenuItem,
  FormHelperText,
  FormControl,
  InputAdornment,
} from "@mui/material";
import GroupComponent1 from "./GroupComponent1";
import PropTypes from "prop-types";

const FrameComponent = ({ className = "" }) => {
  return (
    <div
      className={`self-stretch flex flex-col items-start justify-start gap-[22px] max-w-full text-left text-smi text-black font-poppins ${className}`}
    >
      <header className="self-stretch flex flex-row items-end justify-between pt-[29px] pb-9 pr-[109px] pl-5 box-border sticky top-[0] z-[99] gap-[20px] max-w-full text-left text-4xl text-black font-poppins mq725:pr-[54px] mq725:box-border">
        <GroupComponent1 />
        <div className="w-[760px] flex flex-col items-start justify-end pt-0 px-0 pb-1.5 box-border max-w-full">
          <div className="self-stretch flex flex-row items-start justify-between max-w-full gap-[20px]">
            <a className="[text-decoration:none] relative font-medium text-[inherit] whitespace-nowrap z-[1]">
              BOOT FINDER
            </a>
            <div className="w-[530px] flex flex-col items-start justify-start pt-1.5 px-0 pb-0 box-border max-w-full text-lg mq975:w-0">
              <div className="self-stretch flex flex-row items-start justify-between gap-[20px] mq975:hidden">
                <a className="[text-decoration:none] relative font-medium text-[inherit] inline-block min-w-[53px] z-[1]">
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
                        src="/icons.svg"
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
                    width: "26.60377358490566%",
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
                <a className="[text-decoration:none] relative font-medium text-[inherit] inline-block min-w-[41px] whitespace-nowrap z-[1]">{`SALE `}</a>
              </div>
            </div>
          </div>
        </div>
        <div className="w-[215px] flex flex-row items-start justify-start gap-[44px] text-3xs text-white">
          <img
            className="h-[18px] w-4 relative z-[1]"
            loading="lazy"
            alt=""
            src="/group-5.svg"
          />
          <img
            className="h-[18.2px] w-[20.9px] relative z-[1]"
            alt=""
            src="/vector-3.svg"
          />
          <div className="w-[26.1px] flex flex-col items-start justify-start py-0 pr-2 pl-0 box-border">
            <img
              className="w-[18px] h-[18px] relative z-[1]"
              loading="lazy"
              alt=""
              src="/group-6.svg"
            />
          </div>
          <div className="flex-1 flex flex-col items-start justify-start pt-2.5 px-0 pb-0">
            <div className="flex flex-row items-start justify-start pt-0.5 pb-[3px] pr-1.5 pl-[7px] relative">
              <img
                className="h-5 w-[18px] absolute !m-[0] top-[-10px] left-[-8.1px] z-[1]"
                alt=""
                src="/group-8.svg"
              />
              <img
                className="h-full w-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] max-w-full overflow-hidden max-h-full z-[2]"
                alt=""
                src="/group-8-1.svg"
              />
              <a className="[text-decoration:none] relative font-medium text-[inherit] inline-block min-w-[7px] z-[3]">
                0
              </a>
            </div>
          </div>
        </div>
      </header>
      <div className="w-[442px] flex flex-row items-start justify-center py-0 px-5 box-border max-w-full">
        <div className="flex flex-col items-start justify-start gap-[6px]">
          <div className="relative font-medium inline-block min-w-[62px]">
            Your Cart
          </div>
          <h2 className="m-0 relative text-10xl font-medium font-inherit mq450:text-4xl">
            Your Cart
          </h2>
        </div>
      </div>
    </div>
  );
};

FrameComponent.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent;
