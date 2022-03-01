const plugin = require("tailwindcss/plugin");

module.exports = {
  content: [
    "./node_modules/tw-elements/dist/js/*.js",
    "./assets/js/*.js",
    "./view/**/**/*.html",
    "./view/**/*.html",
    "./*.html",
  ],
  theme: {
    extend: {
      colors: {
        transparent: "transparent",
        current: "currentColor",
        primary: "#1E386B",
        secondary: "#A9ACAF",
        success: "#188035",
        danger: "#D64A4A",
        warning: "#F2B124",
        info: "#9CADD3",
        light: "#F8F8F8",
        dark: "#241B1B",
        black: {
          50: "#43464D",
          100: "#241B1B",
        },
        gray: {
          50: "#F8F8F8",
          100: "#A6B0C0",
          200: "#A9ACAF",
          300: "#778090",
          600: "#273A5A",
        },
        blue: {
          50: "#F2F5F9",
          100: "#D3D9E3",
          200: "#BBC9E8",
          300: "#9CADD3",
          400: "#6F84AD",
          500: "#2B4A86",
          600: "#1E386B",
          700: "#192A4B",
          900: "#04142F",
        },
        yellow: {
          50: "#FEF7EA",
          100: "#FBD47F",
          200: "#FFBE32",
          300: "#F2B124",
          400: "#E7AB2B",
        },
        green: {
          50: "#E4FFEC",
          100: "#188035",
        },
        red: {
          50: "#FFEAEA",
          100: "#D64A4A",
        },
        status: {
          primary: "#D2D7E1",
          secondary: "#EFF0F0",
          success: "#E7F2EA",
          danger: "#FBEDED",
          warning: "#FEF7E9",
          info: "#E3E9F5",
          light: "#F5F5F5",
          dark: "#F1F1F1",
        },
      },
      fontFamily: {
        "bevietnam-pro": ["Be Vietnam Pro", "sans-serif"],
        montserrat: ["Montserrat", "sans-serif"],
      },
      letterSpacing: {
        tight: "-0.03em",
      },
      spacing: {
        18: "72px",
      },
      zIndex: {
        px: "1",
        min: "500",
        base: "1050",
        half: "2550",
        "2xl": "5050",
      },
      screens: {
        "2xl": "1440px",
        "max-sm": {
          max: "640px",
        },
        "max-md": {
          max: "768px",
        },
        "max-lg": {
          max: "1024px",
        },
        "max-xl": {
          max: "1280px",
        },
        "max-2xl": {
          max: "1440px",
        },
      },
    },
  },
  plugins: [
    require("tailwindcss"),
    require("autoprefixer"),
    require("@tailwindcss/forms"),
    require("tw-elements/dist/plugin"),

    ({ addVariant }) => {
      addVariant("hocus", ["&:hover", "&:focus"]);
    },

    ({ addComponents, theme }) => {
      addComponents({
        ".container": {
          padding: "0 16px",
          margin: "0 auto",
          width: "100%",
          maxWidth: "100%",

          "@screen sm": [
            {
              padding: "0 0",
              maxWidth: "640px",
            },
          ],
          "@screen md": {
            maxWidth: "722px",
          },
          "@screen lg": {
            maxWidth: "958px",
          },
          "@screen xl": {
            maxWidth: "1149px",
          },
          "@screen 2xl": {
            maxWidth: "1200px",
          },
        },
      });

      addComponents({
        ".img-cver": {
          backgroundRepeat: "no-repeat",
          backgroundSize: theme("backgroundSize.cover"),
          backgroundPosition: "center",
          objectFit: "cover",
          objectPosition: theme("objectPosition.center"),
        },
      });

      addComponents({
        ".bg-gradient-danger": {
          color: theme("textColor.white"),
          background: "linear-gradient(90deg, #D00000 0%, #FC5B5B 102.94%)",
        },
        ".bg-gradient-warning": {
          color: theme("textColor.white"),
          background: "linear-gradient(90deg, #FED22A 0%, #F86614 100%)",
        },
        ".bg-gradient-info": {
          color: theme("textColor.white"),
          background: "linear-gradient(90deg, #004ED0 0%, #5B97FC 102.94%)",
        },
      });

      addComponents({
        ".btn": {
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: "4px",
          fontFamily: theme("fontFamily.bevietnam-pro"),
          fontSize: theme("fontSize.base"),
          fontWeight: theme("fontWeight.medium"),
          outline: "none",
          paddingTop: theme("padding.3"),
          paddingBottom: theme("padding.3"),
          width: theme("width.max"),
        },
        ".btn-block": {
          width: theme("width.full"),
        },
        ".btn-sm": {
          fontSize: theme("fontSize.sm"),
          paddingTop: theme("padding.3"),
          paddingBottom: theme("padding.3"),
          paddingLeft: theme("padding.4"),
          paddingRight: theme("padding.4"),
        },
        ".btn-base": {
          fontSize: theme("fontSize.base"),
          paddingTop: theme("padding.4"),
          paddingBottom: theme("padding.4"),
          paddingLeft: theme("padding.6"),
          paddingRight: theme("padding.6"),
        },
        ".btn-lg": {
          fontSize: theme("fontSize.base"),
          paddingTop: theme("padding.6"),
          paddingBottom: theme("padding.6"),
          paddingLeft: theme("padding.6"),
          paddingRight: theme("padding.6"),
        },
        ".btn-pill": {
          borderRadius: theme("borderRadius.full"),
        },
        ".btn-square": {
          borderRadius: theme("borderRadius.none"),
        },
        ".btn-gradient-danger": {
          color: theme("textColor.white"),
          background: "linear-gradient(90deg, #D00000 0%, #FC5B5B 102.94%)",
        },
        ".btn-gradient-warning": {
          color: theme("textColor.white"),
          background: "linear-gradient(90deg, #FED22A 0%, #F86614 100%)",
        },
        ".btn-gradient-info": {
          color: theme("textColor.white"),
          background: "linear-gradient(90deg, #004ED0 0%, #5B97FC 102.94%)",
        },
      });

      addComponents({
        ".form-label": {
          color: theme("textColor.white"),
          fontFamily: theme("fontFamily.bevietnam-pro"),
        },
      });
    },
  ],
};
