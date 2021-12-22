module.exports = {
  mode: "jit",
  purge: ["./**/*.html", "./src/**/*.{js,jsx,ts,tsx,vue}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors:{
        primary:"#f04935",
        p_color: "rgba(255, 255, 255, 0.8)",
        secondary_clr:"#F7F7F7",
        green_icon:"#48A43F",
        paragraph_color:"#808083",
        blue_icon:"#1E88E5"
        
      },
      fontFamily: {
       inter:["Inter","sans-serif"]
       },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require("daisyui")],
};
