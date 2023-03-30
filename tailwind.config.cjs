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
            manrope: "Manrope, serif",
        },
        extend: {
            backgroundImage: {
                "hero-pattern": "url('./src/assets/images/Mainhero.svg')",
            },
        },
    },
    plugins: [require("flowbite/plugin")],
};
