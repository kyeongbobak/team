import type { Config } from "tailwindcss";

export default {
  content: ["./src/pages/**/*.{js,ts,jsx,tsx,mdx}", "./src/components/*.{js,ts,jsx,tsx,mdx}", "./src/app/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        background: "#171717",
        foreground: "#ededed",
        main: "#0bbef2",
        orange: "#f7aa00",
        white: "#f5f7fa",
        blue: "#223b5d",
        min: "var(--min)",
        base: "var(--base)",
        md: "var(--md)",
        lg: "var(--lg)",
        max: "var(--max)",
      },
      fontSize: {
        xs: "1.3rem",
        sm: "1.4rem",
        base: "1.5rem",
        md: "1.6rem",
        regular: "1.8rem",
        lg: "2rem",
        xl: "2.2rem",
        "2xl": "2.4rem",
        "3xl": "5.5rem",
      },
    },
  },
  plugins: [],
} satisfies Config;
