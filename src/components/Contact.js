import { TextField, InputAdornment, Icon, IconButton } from "@mui/material";
import PropTypes from "prop-types";

const Contact = ({ className = "" }) => {
  return (
    <div
      className={`w-[548px] flex flex-col items-start justify-start gap-[6px] max-w-full text-left text-lg text-black font-poppins ${className}`}
    >
      <TextField
        className="[border:none] bg-[transparent] self-stretch h-[92px] font-poppins font-semibold text-lg text-black"
        placeholder="Email"
        variant="outlined"
        sx={{
          "& fieldset": { border: "none" },
          "& .MuiInputBase-root": {
            height: "92px",
            borderRadius: "0px 0px 0px 0px",
            fontSize: "18px",
          },
          "& .MuiInputBase-input": { color: "#000" },
        }}
      />
      <div className="self-stretch flex flex-col items-start justify-start pt-0 px-0 pb-[3px] box-border max-w-full">
        <div className="relative font-semibold inline-block min-w-[58px] z-[2]">
          Phone
        </div>
        <div className="self-stretch flex flex-row items-start justify-start pt-0 px-0 pb-[5px] box-border max-w-full">
          <TextField
            className="[border:none] bg-[transparent] h-[55px] flex-1 relative max-w-full z-[1]"
            variant="outlined"
            sx={{
              "& fieldset": { borderColor: "#000" },
              "& .MuiInputBase-root": {
                height: "55px",
                borderRadius: "0px 0px 0px 0px",
              },
            }}
          />
        </div>
        <div className="flex flex-row items-start justify-start py-0 px-px text-mid text-gray-200">
          <div className="flex flex-row items-start justify-start gap-[9px]">
            <input className="m-0 h-5 w-4" type="checkbox" />
            <div className="relative z-[1]">Ship To A Different Address?</div>
          </div>
        </div>
      </div>
      <div className="flex flex-row items-start justify-start py-0 px-px text-mid text-gray-200">
        <div className="flex flex-row items-start justify-start gap-[12px]">
          <input className="m-0 h-5 w-4" type="checkbox" />
          <div className="relative z-[1]">Create An Accounts</div>
        </div>
      </div>
      <div className="self-stretch flex flex-col items-start justify-start gap-[4px]">
        <div className="relative font-semibold inline-block min-w-[109px] z-[1]">
          Order Notes
        </div>
        <textarea
          className="bg-[transparent] h-[154px] w-auto [outline:none] self-stretch relative box-border z-[1] border-[1px] border-solid border-black"
          rows={8}
          cols={27}
        />
      </div>
    </div>
  );
};

Contact.propTypes = {
  className: PropTypes.string,
};

export default Contact;
