/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
    "*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        "text-primary": "hsl(var(--text-primary))",
        "text-secondary": "hsl(var(--text-secondary))",
        "dark-panel": "hsl(var(--dark-panel))",
        "border-gray": "hsl(var(--border-gray))",
        "lime-neon": "hsl(var(--lime-neon))",
        "ralex-blue": "#87CEFA",
        "ralex-orange": "#FFA500",
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      fontFamily: {
        standerd: ["var(--font-dm-sans)", "system-ui", "sans-serif"],
        "space-grotesk": ["var(--font-space-grotesk)", "system-ui", "sans-serif"],
      },
      fontSize: {
        "display-xl": ["6rem", { lineHeight: "1.1", letterSpacing: "-0.02em" }],
        h1: ["4.5rem", { lineHeight: "1.2", letterSpacing: "-0.01em" }],
        h2: ["3.2rem", { lineHeight: "1.2" }],
        h3: ["2rem", { lineHeight: "1.3" }],
        "body-l": ["1.125rem", { lineHeight: "1.5", letterSpacing: "0.02em" }],
        caption: ["0.875rem", { lineHeight: "1.5", letterSpacing: "0.04em" }],
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: 0 },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: 0 },
        },
        fadeIn: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "bounce-slow": "bounce 2s infinite",
        "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "fade-in": "fadeIn 0.4s ease-out",
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            color: "hsl(var(--text-primary))",
            a: {
              color: "hsl(var(--lime-neon))",
              "&:hover": {
                color: "hsl(var(--lime-neon))",
                textDecoration: "underline",
              },
            },
            h1: {
              color: "hsl(var(--text-primary))",
              fontFamily: theme("fontFamily.space-grotesk"),
            },
            h2: {
              color: "hsl(var(--text-primary))",
              fontFamily: theme("fontFamily.space-grotesk"),
            },
            h3: {
              color: "hsl(var(--text-primary))",
              fontFamily: theme("fontFamily.space-grotesk"),
            },
            h4: {
              color: "hsl(var(--text-primary))",
              fontFamily: theme("fontFamily.space-grotesk"),
            },
            code: {
              color: "hsl(var(--lime-neon))",
              backgroundColor: "hsl(var(--dark-panel))",
              padding: "0.2em 0.4em",
              borderRadius: "0.25rem",
            },
            "code::before": {
              content: '""',
            },
            "code::after": {
              content: '""',
            },
            pre: {
              backgroundColor: "hsl(var(--dark-panel))",
              color: "hsl(var(--text-primary))",
              borderRadius: "0.5rem",
            },
          },
        },
      }),
    },
  },
  plugins: [require("tailwindcss-animate"), require("@tailwindcss/typography")],
}
