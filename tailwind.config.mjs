/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#11337A",
        dark: "#1F2833",
        middle: "#4D637B",
        light: "#6D8CAD",
      },
    },
  },
  plugins: [require("tailwindcss-rtl")],
};
