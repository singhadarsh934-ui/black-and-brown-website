import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/app/**/*.{ts,tsx}",
    "./src/components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: { DEFAULT: "#0E0C0B", soft: "#1B1714" },
        espresso: {
          50: "#F6F1EC", 100: "#EADFD2", 200: "#D3BBA1", 300: "#B99A79",
          400: "#9C7A57", 500: "#7C5C3E", 600: "#5E4530", 700: "#4A3524",
          800: "#3A2A1C", 900: "#2A1E14",
        },
        ivory: { DEFAULT: "#FBF8F4", deep: "#F3EDE4" },
        gold: { DEFAULT: "#B08D57", light: "#C9A66B", dark: "#8C6E3F" },
      },
      fontFamily: {
        display: ["var(--font-display)", "serif"],
        sans: ["var(--font-sans)", "sans-serif"],
      },
      letterSpacing: { widest2: "0.25em" },
      boxShadow: {
        luxury: "0 20px 60px -15px rgba(14,12,11,0.25)",
        card: "0 8px 30px rgba(14,12,11,0.08)",
      },
      maxWidth: { "8xl": "1440px" },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
      },
      animation: {
        fadeUp: "fadeUp 0.8s cubic-bezier(0.22,1,0.36,1) forwards",
        shimmer: "shimmer 2.5s linear infinite",
      },
      transitionTimingFunction: { luxury: "cubic-bezier(0.22, 1, 0.36, 1)" },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
export default config;
