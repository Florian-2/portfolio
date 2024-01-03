import type { Config } from "tailwindcss";

const config: Config = {
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			colors: {
				background: "hsl(var(--background))",
				border: "hsl(var(--border))",
				card: "hsl(var(--card))",
			},
			fontSize: {
				md: "0.938rem",
			},
			keyframes: {
				deformation: {
					"0%": { "border-radius": "60% 40% 30% 70%/60% 30% 70% 40%" },
					"50%": { "border-radius": "30% 60% 70% 40%/50% 60% 30% 60%" },
					"100%": { "border-radius": "60% 40% 30% 70%/60% 30% 70% 40%" },
				},
			},
			animation: {
				deformation: "deformation 4s ease-in-out alternate infinite",
			},
		},
	},
	plugins: [],
};

export default config;
