import {nextui} from '@nextui-org/theme'

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./component/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  darkMode: "class",
  plugins: [
    nextui({
      themes: {
        custom: {
          extend: "dark",
          colors: {
            foreground: "#f85050",
            background: "#000000",
            footer: "#8A2C2C",
            primary: {
              DEFAULT: "#f489c5",
            },
            secondary: {
              DEFAULT: "#a1a1aa",
            },
          },
        },
        light: {},
      },
    }),
  ],
};
