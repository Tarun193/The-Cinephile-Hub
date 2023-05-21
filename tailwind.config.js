/** @type {import('tailwindcss').Config} */
const plugins = require("tailwindcss/plugin");
module.exports = {
  content: ["./src/**/*.{html,jsx}", "./*.html"],
  theme: {
    extend: {},
  },
  plugins: [
    plugins(function ({ addUtilities }) {
      addUtilities({
        ".no-scrollbar::-webkit-scrollbar": {
          display: "none",
        },
        ".no-scrollbar": {
          "-ms-overflow-style": "none",
          "scrollbar-width": "none",
        },
      });
    }),
  ],
};
