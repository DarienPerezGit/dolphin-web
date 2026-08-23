import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        paper: {
          DEFAULT: "var(--paper)",
          warm: "var(--paper-warm)",
          light: "var(--paper-light)",
        },
        surface: {
          DEFAULT: "var(--surface)",
          raised: "var(--surface-raised)",
          sunken: "var(--surface-sunken)",
        },
        foreground: {
          DEFAULT: "var(--foreground)",
          muted: "var(--foreground-muted)",
          faded: "var(--foreground-faded)",
        },
        border: {
          DEFAULT: "var(--border)",
          strong: "var(--border-strong)",
          subtle: "var(--border-subtle)",
        },
        ink: {
          DEFAULT: "#1C1917",
          light: "#292524",
          muted: "#78716C",
          faded: "#A8A29E",
        },
        editorial: {
          terracotta: "#B94732",
          "terracotta-bg": "#F9ECE9",
          sage: "#3D6047",
          "sage-bg": "#EEF4F0",
          ochre: "#9E782F",
          "ochre-bg": "#F8F3E8",
          lavender: "#535E7E",
          "lavender-bg": "#EFF1F7",
        },
      },
      fontFamily: {
        serif: [
          "Newsreader",
          "Charter",
          "Iowan Old Style",
          "Baskerville",
          "Georgia",
          "Cambria",
          "serif",
        ],
        sans: ["var(--font-geist-sans)", "Inter", "-apple-system", "BlinkMacSystemFont", "Segoe UI", "Roboto", "sans-serif"],
        mono: ["var(--font-geist-mono)", "JetBrains Mono", "SF Mono", "Menlo", "Consolas", "monospace"],
      },
      boxShadow: {
        paper: "0 4px 20px -2px rgba(28, 25, 23, 0.05), 0 1px 3px 0 rgba(28, 25, 23, 0.03)",
        card: "0 1px 3px 0 rgba(28, 25, 23, 0.04), 0 1px 2px -1px rgba(28, 25, 23, 0.03)",
      },
      animation: {
        marquee: "marquee 40s linear infinite",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translate3d(0, 0, 0)" },
          "100%": { transform: "translate3d(-50%, 0, 0)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
