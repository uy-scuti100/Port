/** @type {import('tailwindcss').Config} */
export default {
	mode: "jit",
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			colors: {
				brown: "#C0A062",
				black: "#161616 ",
				white: "#f5f5f5 ",
				ash: "#ccc ",
				whiter: "#ffffffda",
				blue: "#1999EF",
				red: "#FF0005",
				// background: "var(--background)",
				// foreground: "var(--foreground)",
				// ash: "var(--ash)",
				// brown: "var(--brown)",
				// "custom-shadow": "var(--custom-shadow",
			},
			transitionProperty: {
				colors: "all 1s ease-in-out",
			},
		},
	},
	plugins: [],
};

// brown: "#C0A062",
// black: "#161616 ",
// white: "#f5f5f5 ",
// ash: "#ccc ",
// whiter: "#ffffffda",
