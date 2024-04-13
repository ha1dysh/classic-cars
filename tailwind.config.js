/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["index.html", "index.js"],
	theme: {
		extend: {
			fontFamily: {
				Unbounded: ["Unbounded", "Sans-serif"],
			},
			colors: {
				main: "#3A3C35",
			},
			maxWidth: {
				"10xl": "1920px",
			},
		},
	},
	plugins: [],
};
