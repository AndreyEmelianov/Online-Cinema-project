import type { Config } from 'tailwindcss';

const colors = require('tailwindcss/colors');
const plugin = require('tailwindcss/plugin');

const primary = '#e30b13';

const config: Config = {
	content: ['./pages/**/*.{js,ts,jsx,tsx,mdx}', './app/components/**/*.{js,ts,jsx,tsx,mdx}'],
	theme: {
		colors: {
			primary,
			black: colors.black,
			white: colors.white,
		},
		extend: {
			backgroundImage: {
				'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
				'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
			},
		},
	},
	plugins: [],
};
export default config;
