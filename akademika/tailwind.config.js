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
                "100px": "100px",
                "200px": "200px",
                "250px": "250px",
                "280px": "280px",
                "300px": "300px",
                "400px": "400px",
                "500px": "500px",
                "600px": "600px",
                "700px": "700px",
                "800px": "800px",
                "900px": "900px",
                "10vh": "10vh",
                "20vh": "20vh",
                "30vh": "30vh",
                "40vh": "40vh",
                "50vh": "50vh",
                "60vh": "60vh",
                "65vh": "65vh",
                "80vh": "80vh",
                "75vh": "75vh",
                "77vh": "77vh",
                "70vh": "70vh",
                "80vh": "80vh",
                "90vh": "90vh",
            },
            width: {
                "100px": "100px",
                "200px": "200px",
                "250px": "250px",
                "280px": "280px",
                "300px": "300px",
                "400px": "400px",
                "500px": "500px",
                "600px": "600px",
                "700px": "700px",
                "800px": "800px",
                "900px": "900px",
                "10vh": "10vh",
                "20vh": "20vh",
                "30vh": "30vh",
                "40vh": "40vh",
                "50vh": "50vh",
                "60vh": "60vh",
                "65vh": "65vh",
                "80vh": "80vh",
                "75vh": "75vh",
                "77vh": "77vh",
                "70vh": "70vh",
                "80vh": "80vh",
                "90vh": "90vh",
            },
            inset: {
                70: "17.4rem",
            },
            minHeight: {
                "100px": "100px",
                "200px": "200px",
                "250px": "250px",
                "280px": "280px",
                "300px": "300px",
                "400px": "400px",
                "500px": "500px",
                "600px": "600px",
                "700px": "700px",
                "800px": "800px",
                "900px": "900px",
                "10vh": "10vh",
                "20vh": "20vh",
                "30vh": "30vh",
                "40vh": "40vh",
                "50vh": "50vh",
                "60vh": "60vh",
                "65vh": "65vh",
                "80vh": "80vh",
                "75vh": "75vh",
                "77vh": "77vh",
                "70vh": "70vh",
                "80vh": "80vh",
                "90vh": "90vh",
            },
        },
    },
    plugins: [require("daisyui")],
    daisyui: {
        themes: false,
    },
});
