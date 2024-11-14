module.exports = {
  darkMode: "class", // Enable dark mode based on class
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      animation: {
        grid: "grid 15s linear infinite",
        "border-beam": "border-beam calc(var(--duration)*1s) infinite linear",
      },
      keyframes: {
        grid: {
          "0%": { transform: "translateY(-50%)" },
          "100%": { transform: "translateY(0)" },
        },
        "border-beam": {
          "100%": {
            "offset-distance": "100%",
          },
        },
      },
      colors: {
        galaxy: "#1a1a2e", // Dark theme background
        lightGalaxy: "#e0e0e0", // Light theme background
        lightText: "#ffffff", // White text color in light mode
        darkText: "#9b4d96", // Purple text color in dark mode (can be adjusted)
      },
    },
  },
  plugins: [],
};
