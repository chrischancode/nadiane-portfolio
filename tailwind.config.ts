import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  // Touch devices fake :hover on tap and leave it stuck. Gate every hover:
  // utility behind (hover: hover) so phones only get :active feedback.
  future: {
    hoverOnlyWhenSupported: true,
  },
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
          muted: "#6E695F",
          sand: "#C8C1B5",
        },
        // Warm darks for the closing contact block, so it stays in the
        // same stone family instead of jumping to cool neutral grays.
        ink: {
          950: "#1A1816",
          900: "#22201D",
          850: "#2A2724",
          800: "#33302C",
          700: "#46423C",
          500: "#8A847A",
          300: "#C9C3B8",
          100: "#F1EDE6",
        },
      },
      fontFamily: {
        sans: ["var(--font-geist-sans)", "system-ui", "-apple-system", "sans-serif"],
        display: ["var(--font-geist-sans)", "system-ui", "-apple-system", "sans-serif"],
        mono: ["var(--font-geist-mono)", "ui-monospace", "SFMono-Regular", "monospace"],
      },
      letterSpacing: {
        display: "-0.045em",
      },
      boxShadow: {
        luxe: "0 18px 40px -16px rgba(58, 48, 36, 0.18)",
        phone: "0 30px 60px -20px rgba(58, 48, 36, 0.45), 0 0 0 1px rgba(34, 32, 29, 0.06)",
      },
      transitionTimingFunction: {
        "out-expo": "cubic-bezier(0.16, 1, 0.3, 1)",
      },
      zIndex: {
        nav: "40",
        overlay: "50",
        grain: "60",
      },
    },
  },
  plugins: [],
};

export default config;
