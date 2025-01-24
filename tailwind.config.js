/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/components/*.{js,ts,jsx,tsx,mdx}", "./src/app/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      fontFamily: {
        cabin: ["var(--font-cabin)", "sans-serif"],
      },
      colors: {
        background: "#171717",
        foreground: "#ededed",
        main: "#0bbef2",
        orange: "#f7aa00",
        white: "#f5f7fa",
        blue: "#223b5d",
        navy: "#39485D",
        gray: "#697694",
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
      fontWeight: {
        normal: "400",
        medium: "500",
        semibold: "600",
        bold: "700",
      },
      transitionDuration: {
        2000: "2000ms",
      },
    },
  },
  plugins: [],
};
