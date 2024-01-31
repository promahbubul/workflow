/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "gray-dark": "#272727",
        primary: "#2F79C3",
        secondary: "#D5D5D5",
        info: "#8BBBE3",
        success: "#71832E",
        "gray-light": "#F7F7F7",
        blue: "#143E6C",
      },
    },
  },
  plugins: [],
};
