import { createPreset } from "fumadocs-ui/tailwind-plugin";

/** @type {import('tailwindcss').Config} */
const config = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./content/**/*.{js,ts,jsx,tsx,mdx}",
    "./mdx-components.tsx",
    "./node_modules/fumadocs-ui/dist/**/*.js",
  ],
  presets: [createPreset()],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#EA8303",
          50: "#fef7ed",
          100: "#fdedd3",
          200: "#fbd8a5",
          300: "#f8bc6d",
          400: "#f59e33",
          500: "#EA8303",
          600: "#d16a02",
          700: "#b04f05",
          800: "#8f3f0a",
          900: "#75350c",
          950: "#401a01",
        },
      },
    },
  },
};

export default config;
