/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
    content: [
        "./resources/**/*.blade.php",
        "./resources/**/*.js",
        "./resources/**/*.jsx",
    ],
    CSS: [],
    theme: {
        extend: {
            fontFamily: {
                sans: ["Poppins", "sans-serif"],
            },
            colors: {
                "custom-blue": "rgb(15,77,134)",
                "custom-light-blue": "rgb(218,242,255)",
                "custom-light-blue2": "rgb(237,248,255)",
            },
            zIndex: {
                0: "0",
                1: "1",
                2: "2",
                3: "3",
                4: "4",
                5: "5",
            },
            height: {
                "500px": "500px",
                "600px": "600px",
                "65vh": "65vh",
                "80vh": "80vh",
                "75vh": "75vh",
                "77vh": "77vh",
                "90vh": "90vh",
            },
            width: {
                "90vw": "90vw",
            },
            inset: {
              '70': '17.4rem',
            }
        },
    },
    plugins: [require("daisyui")],
    daisyui: {
      themes: false,
    },
});
