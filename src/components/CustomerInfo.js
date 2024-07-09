import {
  TextField,
  InputAdornment,
  Icon,
  IconButton,
  Button,
} from "@mui/material";
import PersonalInfo from "./PersonalInfo";
import PropTypes from "prop-types";

const CustomerInfo = ({ className = "" }) => {
  return (
    <div
      className={`self-stretch flex flex-row flex-wrap items-end justify-start pt-0 px-0 pb-[9px] box-border gap-[89px] max-w-full text-left text-lg text-black font-poppins lg:gap-[44px] mq750:gap-[22px] ${className}`}
    >
      <div className="flex-1 flex flex-col items-start justify-start gap-[16px] min-w-[356px] max-w-full mq750:min-w-full">
        <PersonalInfo />
        <div className="self-stretch h-[82px] flex flex-col items-start justify-start">
          <div className="relative font-semibold inline-block min-w-[92px] z-[2]">
            Company
          </div>
          <div className="self-stretch flex-1 relative z-[1] border-[1px] border-solid border-black" />
        </div>
        <TextField
          className="[border:none] bg-[transparent] self-stretch h-[82px] font-poppins font-semibold text-lg text-black"
          placeholder="Country"
          variant="outlined"
          sx={{
            "& fieldset": { border: "none" },
            "& .MuiInputBase-root": {
              height: "82px",
              borderRadius: "0px 0px 0px 0px",
              fontSize: "18px",
            },
            "& .MuiInputBase-input": { color: "#000" },
          }}
        />
        <div className="self-stretch h-[83px] flex flex-col items-start justify-start gap-[1px]">
          <div className="relative font-semibold inline-block min-w-[127px] z-[1]">
            Address Line 1
          </div>
          <div className="self-stretch flex-1 relative z-[1] border-[1px] border-solid border-black" />
        </div>
        <div className="self-stretch h-[83px] flex flex-col items-start justify-start gap-[1px]">
          <div className="relative font-semibold z-[1]">Address Line 2</div>
          <div className="self-stretch flex-1 relative z-[1] border-[1px] border-solid border-black" />
        </div>
        <div className="self-stretch flex flex-row items-start justify-start gap-[32px] mq750:flex-wrap mq750:gap-[16px]">
          <div className="flex-1 flex flex-col items-start justify-start min-w-[168px]">
            <div className="flex flex-row items-start justify-start py-0 px-px">
              <div className="relative font-semibold inline-block min-w-[37px] z-[2]">
                City
              </div>
            </div>
            <div className="self-stretch h-[55px] relative box-border z-[1] border-[1px] border-solid border-black" />
          </div>
          <div className="flex-1 flex flex-col items-start justify-start min-w-[168px]">
            <div className="relative font-semibold z-[2]">Postal/Zip code</div>
            <div className="self-stretch h-[55px] relative box-border z-[1] border-[1px] border-solid border-black" />
          </div>
        </div>
      </div>
      <div className="flex-1 flex flex-col items-start justify-end pt-0 px-0 pb-[13px] box-border min-w-[356px] max-w-full text-5xl mq750:min-w-full">
        <div className="self-stretch flex flex-col items-start justify-start gap-[55px] mq750:gap-[27px]">
          <div className="relative z-[1] mq450:text-lgi">Payment Details</div>
          <div className="self-stretch flex flex-col items-start justify-start gap-[16px] text-lg">
            <div className="self-stretch h-[82px] flex flex-col items-start justify-start">
              <div className="relative font-semibold inline-block min-w-[92px] z-[2]">
                Company
              </div>
              <div className="self-stretch flex-1 relative z-[1] border-[1px] border-solid border-black" />
            </div>
            <div className="self-stretch h-[82px] flex flex-col items-start justify-start">
              <div className="relative font-semibold inline-block min-w-[92px] z-[2]">
                Company
              </div>
              <div className="self-stretch flex-1 relative z-[1] border-[1px] border-solid border-black" />
            </div>
            <PersonalInfo />
          </div>
          <Button
            className="self-stretch h-[55px] z-[1] mq450:pl-5 mq450:pr-5 mq450:box-border"
            disableElevation
            variant="contained"
            sx={{
              textTransform: "none",
              color: "#fff",
              fontSize: "18",
              background: "#2555d1",
              borderRadius: "0px 0px 0px 0px",
              "&:hover": { background: "#2555d1" },
              height: 55,
            }}
          >
            PLACE ORDER
          </Button>
        </div>
      </div>
    </div>
  );
};

CustomerInfo.propTypes = {
  className: PropTypes.string,
};

export default CustomerInfo;
