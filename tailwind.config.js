/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        primary: "#1b5b31",
        secondary: "#DCC1AB",
      },
    },
    screens: {
      phablet: "820px",
      tablet: "1120px",
    },
  },
  plugins: [],
};
