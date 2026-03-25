module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        accent: "var(--accent)",
        dark: "var(--dark)",
        light: "var(--light)",
        /* Semantic tokens for UI components (FAQ accordion) — supports /opacity */
        primary: {
          DEFAULT: "#74060D",
          foreground: "#F7F3EA",
        },
        secondary: {
          DEFAULT: "#E6D3A3",
          foreground: "#0F0D0C",
        },
        muted: {
          DEFAULT: "#ebe4d9",
          foreground: "#5a4a4a",
        },
        background: "#F7F3EA",
        foreground: "#1a1a1a",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
      fontFamily: {
        brand: ["Montserrat", "Poppins", "Inter", "sans-serif"],
      },
      boxShadow: {
        premium: "0 25px 65px rgba(12, 2, 3, 0.3)",
      },
    },
  },
  plugins: [],
};
