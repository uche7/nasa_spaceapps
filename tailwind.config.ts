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
        hackathoneSFProDisplay: ["var(--font-sf-pro-display)"],
        hackathoneCabinetGrotesk: ["var(--font-cabinet-grotesk)"],
      },
      colors: {
        "hackathone-background-grey": "#DEDEDE4F",
        "hackathone-background-white": "#F8FDFF",
        "hackathone-background-light-grey": "#E4E4E7",
        "hackathone-background-dark-blue": "#07173F",
        "hackathone-border-grey": "#C6C6C6",
        "hackathone-border-light-green": "#77DEB2",
        "hackathone-font-rocket-red": "#eafe07",
        "hackathone-font-martin-red": "#07173F",
        "hackathone-font-light-grey": "#52525B",
        "hackathone-font-dark-blue": "#07173F",
      },
      screens: {
        sm: "640px",
        // => @media (min-width: 640px) { ... }

        md: "768.1px",
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
