/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
    content: ["*",
        "./src/**/*.{js,jsx,ts,tsx}",
        "./node_modules/flowbite/**/*.js"
    ],
    theme: {
        extend: {},
        fontFamily: {
            roboto: ["Roboto", "sans"],
            poppins: ['Poppins'],
            montserrat: ['Montserrat'],

        }
    },
    plugins: [
        require('flowbite/plugin')({
            charts: true,
        }),
    ],
});