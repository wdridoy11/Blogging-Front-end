/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  darkMode:"media",
  theme: {
    extend: {
      
    },
  },
  plugins: [require("daisyui")],
};
