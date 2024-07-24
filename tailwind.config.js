/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'xs': "450px",
        'tablet': '768px',  
        'laptop': '1024px',
        'desktop': '1920px',
      },
      colors: {
        transparent: "transparent",
        current: "currentColor",
        bgColor: "rgba(255, 250, 255, 1)",
        navItem: "#ffffff80",
        logoColor: "#9D0AFF",
        headingColor: "#151531",
        subHeadingColor: "rgba(21, 21, 49, 0.8)",
      },
      gridTemplateColumns : {
        autofit: "repeat(auto-fit, minmax(270px, 1fr));"
      },
      fontFamily: {
        tahoma: ["tahoma"],
        montserrat: ["montserrat"],
        inter: ["inter"],
        drglitch: ["drglitch"]
      },
      boxShadow: {
        card: "0px 35px 120px -15px #211e35",
      },
      backgroundImage: {
        headerBG: "url('/src/Assets/background/homebg.jpg')",
      },
    },
  },
  plugins: [
    require("tailwind-scrollbar")
  ],
}