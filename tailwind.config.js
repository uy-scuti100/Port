/** @type {import('tailwindcss').Config} */
export default {
  mode: "jit", // Add this line to enable JIT mode
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        brown: "#C0A062",
        black: "#161616 ",
        white: "#ffffff ",
        ash: "#ccc ",
        whiter: "#ffffffda",
      },
      transitionProperty: {
        colors: "all 1s ease-in-out",
      },
    },
  },
  plugins: [],
};
