/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      screens: {
        xs: "320px",
        sm: "375px",
        sml: "500px",
        md: "667px",
        mdl: "768px",
        lg: "960px",
        lgl: "1024px",
        xl: "1280px",
      },
      fontFamily: {
        bodyFont: ["Poppins", "sans-serif"],
        titleFont: ["Montserrat", "sans-serif"],
      },
      colors: {
        bodyColor: "#070F2B", /* Dark Blue */
        lightText: "#9290C3", /* Light Purple */
        boxBg: "linear-gradient(145deg, #070F2B, #1B1A55)", /* Gradient */
        designColor: "#ff014f", /* Pink Accent */
        primary: "rgb(7, 15, 43)", /* RGB Dark Blue */
        secondary: "rgb(27, 26, 85)", /* RGB Dark Purple */
        tertiary: "rgb(83, 92, 145)", /* RGB Medium Blue */
        quaternary: "rgb(146, 144, 195)", /* RGB Light Purple */
      },
      boxShadow: {
        shadowOne: "10px 10px 19px #1c1e22, -10px -10px 19px #262a2e",
      },
    },
  },
  plugins: [],
};
