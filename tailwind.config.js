/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      usm: "330px",
      sm: "640px",

      md: "778px",

      lg: "1024px",

      xl: "1280px",
      "2xl": "1536px",
    },
    extend: {
      colors: {
        primary: "#19f1f3",
        secondary: "rgb(0,0,0)",
      },
      boxShadow: {
        subsystemcardshadow:
          "0 3px 6px rgba(0, 0, 0, 0.05),0 8px 15px rgba(0, 0, 0, 0.1),0 0 0 1px rgba(255, 255, 255, 0.1)",
        hoversubsystemcardboxshadow:
          "0px 3px 6px rgba(0, 0, 0, 0.04), 0px 5px 10px rgba(0, 0, 0, 0.3), 0 0 0 1px rgba(255, 255, 255, 0.2)",
      },

      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",

        cardshinegradient:
          "conic-gradient(from 205deg at 50% 50%,rgba(224, 0, 104, 0) 0deg,  #19f1f3 20deg,  #19f1f3 60deg,  rgba(16, 185, 129, 0.18) 190deg,  rgba(16, 185, 129, 0) 360deg)",
      },

      animation: {
        cardTile: "tile 8s ease infinite",
        transitionIn: "transitionIn 0.5s linear",
        flicker: "flicker 1.5s infinite",
        blinkSoft: "blinker 2.0s linear infinite",
      },

      keyframes: {
        tile: {
          "0%, 12.5%, 100%": { opacity: "1" },
          "25%,  82.5%": { opacity: "0" },
        },
        transitionIn: {
          "0%": {
            opacity: "0",
            transform: "translateX(-20px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateX(0px)",
          },
        },
        flicker: {
          "0%, 19.999%, 22%, 62.999%, 64%, 64.999%, 70%, 100%": {
            opacity: "0.99",
          },
          "20%, 21.999%, 63%, 63.999%, 65%, 69.999%": {
            opacity: "0.4",
          },
        },
        blinker: {
          "50%": { opacity: "0" },
        },
      },
    },
  },
  plugins: [],
};
