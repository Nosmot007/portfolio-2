/** @type {import('tailwindcss').Config} */
module.exports = {
	darkMode: ["class"],
	content: [
	  "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
	  "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
	  "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
	  container: {
		center: true,
		padding: "15px",
	  },
	  screens: {
		sm: "640px",
		md: "768px",
		lg: "690px",
		xl: "1200px",
	  },
	  fontFamily: {
		primary: ["var(--font-jetbrainsMono)"],
	  },
	  extend: {
		colors: {
		  background: "var(--background)",
		  foreground: "var(--foreground)",
		  primary: "#3490dc", 
		  accent:{
			DEFAULT:"#00ff99",
			hover:"#00e187",
		  },

		},
		borderRadius: {
		  lg: "var(--radius)",
		  md: "calc(var(--radius) - 2px)",
		  sm: "calc(var(--radius) - 4px)",
		},
	  },
	},
	plugins: [require("tailwindcss-animate")],
  };
  