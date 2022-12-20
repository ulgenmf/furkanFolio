/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./node_modules/flowbite-react/**/*.js",
		"./pages/**/*.{js,ts,jsx,tsx}",
		"./components/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		extend: {
			fontFamily: {
				Major: ["Major", "monospace"],
				Motonotn: ["Monoton", " cursive"],
				abc: ["Fuzzy Bubbles", "cursive"],
				hand: ["Arizonia", "cursive"],
				sourceSerif: ["Source Serif Pro", "serif"],
			},
			colors: {
				steam: "#10141F",
			},
		},
	},

	plugins: [require("flowbite/plugin")],
};
