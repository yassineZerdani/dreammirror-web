import type { Config } from "tailwindcss";

/**
 * Brand tokens are mirrored from the mobile app's theme so the marketing
 * site visually agrees with the product. See:
 *   ../dreammirror-mobile/src/theme/colors.ts
 *   ../dreammirror-mobile/src/theme/typography.ts
 */
const config: Config = {
  content: ["./src/**/*.{ts,tsx,mdx}"],
  darkMode: "class",
  theme: {
    screens: {
      xs: "360px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
    extend: {
      colors: {
        void: "#080C1C",
        night: "#0B1026",
        deep: "#111A32",
        mist: "#19233F",
        surface: "#19233F",
        line: "#354264",
        moon: "#F4F2FF",
        moondim: "#ADB6D0",
        star: "#ADB6D0",
        glow: "#74DDE7",
        accent: "#B49CFF",
        rose: "#F6A7C8",
        gold: "#F7D58A",
      },
      backgroundImage: {
        lucid: "var(--gradient-lucid)",
        memory: "var(--gradient-memory)",
      },
      fontFamily: {
        serif: ["var(--font-cormorant)", "Cormorant Garamond", "Georgia", "serif"],
        sans: ["var(--font-inter)", "Inter", "system-ui", "sans-serif"],
      },
      maxWidth: {
        prose: "68ch",
        page: "76rem",
      },
      letterSpacing: {
        wider2: "0.18em",
      },
      boxShadow: {
        moon: "0 24px 56px -28px rgba(116, 221, 231, 0.14)",
        soft: "0 16px 48px -22px rgba(0, 0, 0, 0.55)",
      },
      animation: {
        "fade-up": "fadeUp 1s ease-out both",
        "fade-in": "fadeIn 1.4s ease-out both",
        "float-slow": "float 9s ease-in-out infinite",
        "drift": "drift 18s ease-in-out infinite",
        "shimmer": "shimmer 6s ease-in-out infinite",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(14px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-8px)" },
        },
        drift: {
          "0%, 100%": { transform: "translate3d(0, 0, 0)" },
          "50%": { transform: "translate3d(20px, -16px, 0)" },
        },
        shimmer: {
          "0%, 100%": { opacity: "0.35" },
          "50%": { opacity: "0.7" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
