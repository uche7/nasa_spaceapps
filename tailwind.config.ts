import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        sefarvestSFProDisplay: ["var(--font-sf-pro-display)"],
        sefarvestCabinetGrotesk: ["var(--font-cabinet-grotesk)"],
        sefarvestInter: ["var(--font-inter)"],
      },
      colors: {
        "hackathone-green": "#199B6C",
        "hackathone-dark-green": "#1F7959",
        "hackathone-light-green": "#D4F7E4",
        "hackathone-background-grey": "#DEDEDE4F",
        "hackathone-background-white": "#F8FDFF",
        "hackathone-background-light-grey": "#E4E4E7",
        "hackathone-background-green": "#199B6C",
        "hackathone-background-orange": "#F6D6A4",
        "hackathone-border-grey": "#C6C6C6",
        "hackathone-border-light-green": "#77DEB2",
        "hackathone-font-green": "#199B6C",
        "hackathone-font-grey": "#585858",
        "hackathone-font-black": "#18181B",
        "hackathone-font-light-grey": "#52525B",
        "hackathone-font-dark-grey": "#636363",
      },
      screens: {
        sm: "640px",
        // => @media (min-width: 640px) { ... }

        md: "768px",
        // => @media (min-width: 768px) { ... }

        lg: "1024px",
        // => @media (min-width: 1024px) { ... }

        xl: "1280px",
        // => @media (min-width: 1280px) { ... }

        "2xl": "1536px",
        // => @media (min-width: 1536px) { ... }

        MobileScreen: { max: "480.5px" },
        TabletScreen: { min: "480.5px", max: "1024.5px" },
        DesktopScreen: { min: "1024.5px" },
      },
    },
  },
  plugins: [],
};
export default config;
