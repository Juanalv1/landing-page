/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        "black": "#263238",
        "d-grey": "#4D4D4D",
        "grey": "#717171",
        "l-grey": "#89939E",
        "grey-blue": "#ABBED1",
        "silver": "#F5F7FA ",
        "primary": "#28CB8B",
        "secondary": "#263238",
        "info": "#2194f3 ",
      },
      fontFamily: {
        Inter: ["Inter", "sans-serif"],
      }
    },
  },
  plugins: [require('@shrutibalasa/tailwind-grid-auto-fit'),],
};
