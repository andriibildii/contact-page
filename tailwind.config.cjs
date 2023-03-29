/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
        "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
        fontFamily: {
            poppins: "Poppins, serif",
            inter: "Inter, serif",
        },
    },
    plugins: [require("flowbite/plugin")],
};
