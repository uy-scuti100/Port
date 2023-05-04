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
        ash: "#00000080 ",
        whiter: "#ffffffda",
      },
    },
  },
  plugins: [],
};
