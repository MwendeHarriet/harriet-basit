/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        gray: {
          "100": "rgba(0, 0, 0, 0.8)",
          "200": "rgba(0, 0, 0, 0.5)",
          "300": "rgba(0, 0, 0, 0.7)",
        },
        black: "#000",
        white: "#fff",
        royalblue: "#2555d1",
        aliceblue: "#e4eef0",
        gainsboro: "#d9d9d9",
      },
      spacing: {},
      fontFamily: {
        poppins: "Poppins",
        inter: "Inter",
      },
    },
    fontSize: {
      "2xs": "11px",
      smi: "13px",
      "3xl": "22px",
      lg: "18px",
      "33xl": "52px",
      "23xl": "42px",
      "12xl": "31px",
      "5xl": "24px",
      lgi: "19px",
      "4xs": "9px",
      mid: "17px",
      xs: "12px",
      "6xl": "25px",
      xl: "20px",
      "10xl": "29px",
      "4xl": "23px",
      base: "16px",
      "24xl": "43px",
      "15xl": "34px",
      "7xl": "26px",
      "9xl": "28px",
      "29xl": "48px",
      "19xl": "38px",
      "3xs": "10px",
      inherit: "inherit",
    },
    screens: {
      mq1250: {
        raw: "screen and (max-width: 1250px)",
      },
      lg: {
        max: "1200px",
      },
      mq1100: {
        raw: "screen and (max-width: 1100px)",
      },
      mq1050: {
        raw: "screen and (max-width: 1050px)",
      },
      mq1025: {
        raw: "screen and (max-width: 1025px)",
      },
      mq975: {
        raw: "screen and (max-width: 975px)",
      },
      mq750: {
        raw: "screen and (max-width: 750px)",
      },
      mq725: {
        raw: "screen and (max-width: 725px)",
      },
      mq450: {
        raw: "screen and (max-width: 450px)",
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
};
