/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      colors: {
        "gray-dark": "#070F18",
        "gray-light": "#F5F6FB",
        gray: "#575455",
        blue: "#1F7CFF",
      },
    },
  },
  plugins: [],
};
