import type { Config } from "tailwindcss";
import defaultTheme from "tailwindcss/defaultTheme";
import animate from "tailwindcss-animate";

const config: Config = {
  darkMode: ["class"],

  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./data/**/*.{js,ts,jsx,tsx,mdx}",
  ],

  theme: {
    container: {
      center: true,
      padding: "1.5rem",
      screens: {
        "2xl": "1440px",
      },
    },

    extend: {
      fontFamily: {
        sans: ["var(--font-inter)", ...defaultTheme.fontFamily.sans],
      },

      colors: {
        border: "#1f2937",
        input: "#1f2937",
        ring: "#D4AF37",

        background: "#050816",
        foreground: "#F8FAFC",

        primary: {
          DEFAULT: "#D4AF37",
          foreground: "#050816",
        },

        secondary: {
          DEFAULT: "#C0C0C0",
          foreground: "#050816",
        },

        accent: {
          DEFAULT: "#FFD700",
          foreground: "#050816",
        },

        luxury: {
          gold: "#D4AF37",
          silver: "#C0C0C0",
          platinum: "#E5E4E2",
          bronze: "#CD7F32",
        },

        smartverse: {
          black: "#050816",
          navy: "#0B1120",
          blue: "#2563EB",
          cyan: "#06B6D4",
          emerald: "#10B981",
          purple: "#7C3AED",
          pink: "#EC4899",
        },
      },

      borderRadius: {
        lg: "16px",
        md: "12px",
        sm: "8px",
      },

      boxShadow: {
        glow: "0 0 30px rgba(212,175,55,0.35)",
        card: "0 20px 50px rgba(0,0,0,.25)",
        soft: "0 10px 30px rgba(0,0,0,.15)",
      },

      backgroundImage: {
        "hero-gradient":
          "linear-gradient(135deg,#050816 0%,#0B1120 45%,#111827 100%)",
        "gold-gradient":
          "linear-gradient(90deg,#D4AF37,#FFD700,#F8E08E)",
        "silver-gradient":
          "linear-gradient(90deg,#C0C0C0,#E5E4E2,#F8FAFC)",
      },

      keyframes: {
        float: {
          "0%,100%": {
            transform: "translateY(0px)",
          },
          "50%": {
            transform: "translateY(-12px)",
          },
        },

        shimmer: {
          "0%": {
            backgroundPosition: "-200% 0",
          },
          "100%": {
            backgroundPosition: "200% 0",
          },
        },

        glow: {
          "0%,100%": {
            opacity: "1",
          },
          "50%": {
            opacity: ".6",
          },
        },

        fadeUp: {
          "0%": {
            opacity: "0",
            transform: "translateY(25px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)",
          },
        },

        pulseSlow: {
          "0%,100%": {
            opacity: "1",
          },
          "50%": {
            opacity: ".75",
          },
        },
      },

      animation: {
        float: "float 6s ease-in-out infinite",
        shimmer: "shimmer 2.5s linear infinite",
        glow: "glow 2.5s ease-in-out infinite",
        fadeUp: "fadeUp .8s ease forwards",
        pulseSlow: "pulseSlow 3s infinite",
      },
    },
  },

  plugins: [animate],
};

export default config;
