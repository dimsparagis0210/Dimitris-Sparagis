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
    screens: {
      'xs': '420px',
      '2xs' : '375px',
      '3xs' : '320px',
      '3xl' : '2560px',
      ...defaultTheme.screens,
    },
    colors: {
      'beige': '#A8A38C',
      'myBlack':'#3E3D38',
          ...colors
    }
  },
  plugins: [],
};
export default config;
