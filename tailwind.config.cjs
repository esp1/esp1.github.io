// [Tailwind CSS](https://tailwindcss.com) configuration file
// - https://tailwindcss.com/docs/configuration

const plugin = require('tailwindcss/plugin')

/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily: {
				'quicksand': ['Quicksand', 'sans-serif'],
			}
		},
	},
	plugins: [],
}
