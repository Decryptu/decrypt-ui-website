/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors: {
      transparent: "transparent",
      current: "currentColor",
      decrypt: {
        400: "#757678",
        500: "#27292B",
        600: "#1E1F22",
        700: "#191A1D",
        800: "#0E0F10",
        900: "#050506",
      },
      blue: "#7BD0F5",
      pink: "#F9C",
      white: "#FFF",
      black: "#000",
    },
    extend: {},
  },
  plugins: [],
};
