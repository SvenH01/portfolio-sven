import { type Config } from "tailwindcss";


// @ts-check
const defaultTheme = require('tailwindcss/defaultTheme');
export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    darkMode: 'class',
    extend: {
      fontFamily: {
        "Josefin": ["Josefin Sans", ...defaultTheme.fontFamily.sans],
        "Oswald": ["Oswald", ...defaultTheme.fontFamily.sans]
      },
    },
  },
  plugins: [
    require('tailwindcss-animated')
  ],
} satisfies Config;
