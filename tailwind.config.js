module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    transitionDuration: {
      DEFAULT: "250ms",
    },
    extend: {
      colors: {
        clrPrimaryDark: "#026110",
        clrPrimaryMedium: "#7ebc33",
        clrTextDark: "#292524",
        clrTextMedium: "#57534e",
        clrBaseLight: "#f5f5f4",
        clrBaseLightHover: "#ffffff",
        clrBaseLightActive: "#d6d3d1",
        clrBorder: "#a8a29e",
      },
      backgroundImage: {
        hospital: "url('/images/slider2.jpg')",
      },
    },
  },
  plugins: [],
};
