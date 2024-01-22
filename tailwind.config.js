/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
	theme: {
		extend: {
			colors: {
				primary: {
					DEFAULT: '#6b9a9b',
				},
			},
		},
	},
	plugins: [],
};
