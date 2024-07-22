/** @type {import('tailwindcss').Config} */
import daisyui from "daisyui";
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "apple-silver": "#e6e6e6",
        "apple-gray": "#424245",
        "cultured-white": "#f5f5f7",
        "true-blue": "#0066cc",
        orange: "#f56300",

        "uw-purple": "#4B2E83",
        "uw-gold": "#B7A57A",
        "light-gray": "#F5F5F5 ",
        "dark-gray": "#333333",
        "light-purple": "#7A4E99",

        "yale-blue": "#3d5a80",
        "caroline-blue": "#98c1d9",
        "alice-blue": "#e0fbfc",
        "burnt-sienna": "#ee6c4d",
        gunmetal: "#293241",

        cyberpunkPurple: "#711c91",
        cyberpunkPink: "#ea00d9",
        cyberpunkCyan: "#0abdc6",
        cyberpunkBlue: "#133e7c",
        cyberpunkNavy: "#091833",

        canva_background: "#fdf6ea",
        "canva_primary-font": "#504128",
        "canva_secondary-font": "#fd8c04",
        "canva_third-font": "#484446",
        "canva_footer-background": "#504128",
        "canva_logo-background": "#fdf6ea",

        tsui_heading_font_color: "#edbe68",
        "naivegation-bar-background": "#152429",

        word_pink: "#f19c79",
        Saddle_Brown: "#8B4513",
        bg_blue: "#315763",
        card_bg_color: "#303030",
      },
    },
  },
  plugins: [daisyui],
};
