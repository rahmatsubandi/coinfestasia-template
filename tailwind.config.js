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
        ".btn": {
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
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
        ".btn-pill": {
          borderRadius: theme("borderRadius.full"),
        },
        ".btn-square": {
          borderRadius: theme("borderRadius.none"),
        },
        ".btn-warning": {
          color: theme("textColor.white"),
          background: "linear-gradient(90deg, #FED22A 0%, #F86614 100%)",
        },
        ".btn-info": {
          color: theme("textColor.white"),
          background: "linear-gradient(90deg, #004ED0 0%, #5B97FC 102.94%)",
        },
      });
    },
  ],
};
