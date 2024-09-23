import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      screens: {
        xs: "320px",
        sm: "425px",
        md: "768px",
        xl: "1280px",
        "2xl": "1440px",
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
          lg: "2.5rem",
        },
      },
    },
  },
  plugins: [],
};
export default config;
