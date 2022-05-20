module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: false,
  theme: {
    screens: {
      sm: "576px",
      md: "768px",
      lg: "992px",
      xl: "1200px",
    },
    container: {
      center: true,
      padding: "1rem",
    },
    extend: {
      fontFamily: {
        poppins: "'Poppins',sans-serif",
        roboto: "'Roboto', sans-serif",
      },
      colors: {
        primary: "#FD3057",
      },
    },
  },
  plugins: [],
};
