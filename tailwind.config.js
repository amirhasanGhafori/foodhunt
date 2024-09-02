/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./src/**/**/*.{js,jsx,ts,tsx}",
    "./src/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      darkMode: "class",
      keyframes: {
        shoot: {
          "0%": { position: "relative" },
          "100%": {
            position: 'fixed',
            top: "3px",
            right: "141px",
            "z-index": 999,
            width: "105px",
            opacity: 0.4,
          },
        },
      },
      animation: {
        shoot:'shoot 1s ease-in-out'
      }
    },
  },
  plugins: [],
};
