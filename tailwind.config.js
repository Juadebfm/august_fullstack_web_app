/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        figtree: ["Figtree", "serif"],
      },
      colors: {
        main_blue: "#2027C6",
        main_blue_light: "#3038E5",
        text_gray: "#9397B3",
        main_black: "#1E2240",
        disabled_btn_text_gray: "#A5A7B3",
        disabled_btn_bg: "#D9E0F6",
        input_seperator_line: "#EDEEF7",
      },
    },
  },
  plugins: [],
};
