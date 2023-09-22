import type { Config } from "tailwindcss";
const defaultTheme = require("tailwindcss/defaultTheme");
const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./layout/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      "1xs": "320px",
      ...defaultTheme.screens,
    },
    extend: {
      fontFamily: {
        avenir: ["var(--font-avenir)"],
        montserratBold: ["var(--font-montserratBold)"],
        montserratRegular: ["var(--font-montserratRegular)"],
        oswaldSemiBold: ["var(--font-oswaldSemiBold)"],
      },
      colors: {
        titleUnderLine: "#b7b6b9",
        instagram: "#c69b95",
      },
    },
  },
  plugins: [],
};
export default config;
