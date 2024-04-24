import type { Config } from "tailwindcss";
import defaultTheme from 'tailwindcss/defaultTheme';
import colors from "tailwindcss/colors";
const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {

    },
    fontFamily: {
      'sans':[
          'Helvetica',
          'sans-serif'
      ],
    },
    screens: {
      'xs': '420px',
      '2xs' : '375px',
      '3xs' : '250px',
      '3xl' : '2560px',
      ...defaultTheme.screens,
    },
    colors: {
      'myBlack':'000000',
      'myWhite':'#F2F2F2',
      'myBrown':'#5F4F4F',
      'myGray':'#D9D9D9',
          ...colors
    }
  },
  plugins: [],
};
export default config;
