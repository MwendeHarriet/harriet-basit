import {
  Select,
  InputLabel,
  MenuItem,
  FormHelperText,
  FormControl,
  InputAdornment,
} from "@mui/material";
import PropTypes from "prop-types";

const Main = ({ className = "" }) => {
  return (
    <div
      className={`self-stretch flex flex-row items-start justify-start pt-0 px-0 pb-[17px] box-border top-[0] z-[99] sticky max-w-full ${className}`}
    >
      <header className="h-[106px] flex-1 relative bg-white max-w-full text-left text-3xs text-white font-poppins">
        <div className="absolute top-[0px] left-[0px] bg-white w-full h-full hidden" />
        <img
          className="absolute top-[43px] left-[1347.9px] w-[18px] h-5 z-[1]"
          alt=""
          src="/group-8.svg"
        />
        <div className="absolute top-[43px] left-[1161px] w-[215px] flex flex-row items-start justify-between gap-[20px]">
          <img
            className="h-[18px] w-4 relative z-[1]"
            loading="lazy"
            alt=""
            src="/group-5.svg"
          />
          <img
            className="h-[18.2px] w-[20.9px] relative z-[1]"
            loading="lazy"
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
          <div className="flex flex-col items-start justify-start pt-2.5 px-0 pb-0">
            <div className="flex flex-row items-start justify-start pt-0.5 pb-[3px] pr-1.5 pl-[7px] relative">
              <img
                className="h-full w-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] max-w-full overflow-hidden max-h-full z-[2]"
                loading="lazy"
                alt=""
                src="/group-8-1.svg"
              />
              <a className="[text-decoration:none] relative font-medium text-[inherit] inline-block min-w-[7px] z-[3]">
                0
              </a>
            </div>
          </div>
        </div>
        <div className="absolute top-[32px] left-[65px] w-[760px] flex flex-row items-start justify-between gap-[20px] max-w-full text-4xl text-black">
          <a className="[text-decoration:none] relative font-medium text-[inherit] whitespace-nowrap z-[1]">
            BOOT FINDER
          </a>
          <div className="w-[530px] flex flex-col items-start justify-start pt-1.5 px-0 pb-0 box-border max-w-full text-lg">
            <div className="self-stretch flex flex-row items-start justify-between gap-[20px]">
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
                      src="/vector-1.svg"
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
                      src="/vector-2.svg"
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
                      src="/vector-3.svg"
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
      </header>
    </div>
  );
};

Main.propTypes = {
  className: PropTypes.string,
};

export default Main;
