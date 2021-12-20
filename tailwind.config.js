module.exports = {
  mode: "jit",
  purge: ["./**/*.html", "./src/**/*.{js,jsx,ts,tsx,vue}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors:{
        primary:"#f04935",
        p_color: "rgba(255, 255, 255, 0.8)"
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require("daisyui")],
};
