/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        simpuBlue: "#0065EB",
        simpuBlack: "#1D1D1F",
        simpuGray: "#4D4D4D",
        simpuLightGray: "#F8F8FA",
      },
      backgroundImage: {
        "hero-background": "url('../images/hero-background.png')",
      },
      backgroundSize: {
        300: "300px",
        400: "400px",
        420: "420px",
        600: "600px",
        700: "700px",
        800: "800px",
        900: "900px",
      },
    },
  },
  plugins: [],
};
