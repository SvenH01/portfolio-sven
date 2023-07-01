import { type Config } from "tailwindcss";


// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment,@typescript-eslint/no-var-requires
const defaultTheme = require('tailwindcss/defaultTheme');
export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    darkMode: 'class',
    extend: {
      fontFamily: {
        // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment,@typescript-eslint/no-unsafe-member-access
        "Josefin": ["Josefin Sans", ...defaultTheme.fontFamily.sans],
        // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment,@typescript-eslint/no-unsafe-member-access
        "Oswald": ["Oswald", ...defaultTheme.fontFamily.sans]
      },
    },
  },
  plugins: [
    require('tailwindcss-animated')
  ],
} satisfies Config;
