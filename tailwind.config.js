/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        main: "#03AC0E",
        main2: "#2BA248",
        bg: "#FFFFFF",
        abu: "#919aa5",
        abu1: "#5d646f",
      },
    },
  },

  plugins: [require("flowbite/plugin")],
};
