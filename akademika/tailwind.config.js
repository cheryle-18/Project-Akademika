/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: [
    "./resources/**/*.blade.php",
    "./resources/**/*.js",
    "./resources/**/*.jsx",
  ],
  theme: {
    extend: {
        fontFamily: {
            sans: ["Poppins", "sans-serif"]
          },
    },
  },
  plugins: [require("daisyui")],
})
