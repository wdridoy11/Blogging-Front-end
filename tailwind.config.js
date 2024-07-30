/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  darkMode:"class",
  theme: {
   
    extend: {
      colors:{
        'turquoise':'#29C8E6'
      },
    },
  },
  plugins: [require("daisyui")],
};
