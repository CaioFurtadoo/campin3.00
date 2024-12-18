/** @type {import('tailwindcss').Config} */
export default {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        screens: {
            large: { max: "1250px" },
            small: { max: "650px" },
            micro: { max: "375px" },
        },
        extend: {
            colors: {
                textBase: "#afb6c2",
                textTitle: "#d4ccb6",
                background: "#191816",
                formBackground: "#24221f",
                primaryColor: "#ffc632",
            },
        },
    },
    plugins: [],
};
