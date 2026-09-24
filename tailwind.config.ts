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
        rhode: {
          bg: "#EDE8E1",
          light: "#F5F2EC",
          card: "#FAF8F5",
          surface: "#E4DFD6",
          border: "#D8D2C6",
          borderDark: "#2B2824",
          dark: "#22201D",
          charcoal: "#322F2B",
          muted: "#78736A",
          sand: "#C8C1B5",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "-apple-system", "sans-serif"],
        display: ["var(--font-outfit)", "system-ui", "-apple-system", "sans-serif"],
      },
      boxShadow: {
        luxe: "0 15px 35px -10px rgba(34, 32, 29, 0.08)",
        phone: "0 25px 50px -12px rgba(34, 32, 29, 0.25), 0 0 0 1px rgba(34, 32, 29, 0.06)",
      },
    },
  },
  plugins: [],
};

export default config;
