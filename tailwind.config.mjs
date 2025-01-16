const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}",
    "./node_modules/flowbite/**/*.js",
  ],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        sans: ["Noto Sans", ...defaultTheme.fontFamily.sans],
        serif: ["Playfair Display", ...defaultTheme.fontFamily.serif],
      },
      colors: {
        "accent": "#B5BFA6", // sage
        "bright": "#FFF7F0", // seashell
        "dim": "#2B3027", // pine tree
        "light": "#EDDED1", // almond
        "dark": "#21251F", // raisin black
        "night": "#151514",
        "walnut": "#5F5449",
        "taupe": "#423A32",
        "enzo-dark-primary": "#1f2c2d",
        "enzo-dark-secondary": "#433932",
        "enzo-darker": "#202728",
        "enzo-light": "#eeded0",
        "enzo-green-dark": "#435e42",
        "enzo-green-light": "#9cb59c",
        "enzo-pink-dark": "#ad6d6d",
        "enzo-pink-light": "#ddc3c3",
      },
    },
  },
  plugins: [
    require("tailwindcss-animate"),
  ],
};
