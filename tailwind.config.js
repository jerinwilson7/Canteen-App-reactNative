/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx,ts,tsx}",
    "./Screens/**/*.{js,jsx,ts,tsx}",
    "./Components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      borderRadius: {
        log: "40px",
      },
      colors: {
        inchWorm: "#C5ED70",
        raisingBlack: "#161621",
        celadon: "#A3F3B0",
        paleSilver: "#F2F4F4",
        mediumGrey: "#94979A",
        seaGreen: "#37BD6B",
        paleOrange: "#FEAC56",
        chineseBlack: "#171215",
        mistBlue: "#6A6D7C",
        cyanGreen:"#00CCBB"
      },
      fontFamily: {
        gilroyRegular: "gilroyRegular",
        gilroyBold: "gilroyBold",
        gilroyMedium: "gilroyMedium",
        gilroySemiBold: "gilroySemiBold",
        interBold: "Inter_700Bold",
        interRegular: "Inter_400Regular",
        interMedium: "Inter_500Medium",
      },
    },
  },
  plugins: [],
};
