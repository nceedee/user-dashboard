/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      roboto: "Roboto, sans-serif",
    },
    extend: {
      colors: {
        secondary: "#003366",
        primary: "#DDDDDD",
        accent: "#009999",
      },
      screens: {
        sm: "320px",
        md: "991px",
        lg: "1024px",
        xl: "1280px",
      },
    },
  },
  plugins: [],
};
