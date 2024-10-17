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
        sans: ["Roboto", ...defaultTheme.fontFamily.sans],
        serif: ["Old Standard TT", ...defaultTheme.fontFamily.serif],
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      colors: {
        "merino": "#F5EFE6",
        "almond": "#E8DFCA",
        "sage": "#739072",
        "cactus": "#4F6F52",
        "everglade": "#1A4D2E",
        "accent": "#B5BFA6", // sage
        "bright": "#FFF7F0",
        "dim": "#2B3027",
        "light": "#EDDED1", // almond
        "dark": "#21251F", // eerie black
        "night": "#151514",
        "walnut": "#5F5449",
        "taupe": "#423A32",
        "persianorange": "#DC965A",
        "peachyellow": "#F7DBA7",
      },
      keyframes: {
        "accordion-down": {
          from: {
            height: "0",
          },
          to: {
            height: "var(--radix-accordion-content-height)",
          },
        },
        "accordion-up": {
          from: {
            height: "var(--radix-accordion-content-height)",
          },
          to: {
            height: "0",
          },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate"), require("flowbite/plugin")],
};
