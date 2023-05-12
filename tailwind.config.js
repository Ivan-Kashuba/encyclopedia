export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "int-main-black": "#1B1E24",
        "int-black": "#04081E",
        "int-gray-main": "#1F2937",
        "int-gray-secondary": "#354153",
        "int-white-secondary": "#9BA1B2",
        "int-white-main": "#EDF1FD",
        "int-yellow": "#FFD84F",
        "int-grapefruit": "#FF4F66",
        "int-blue-link": "#284CCC",
        "int-green": "#47E273",
        disable: "#29323F",
        input: "#2A3143",
        error: "#FF5F5F",
      },
      fontSize: {
        subtitle: ["18px", "30px"],
        default: ["16px", "16px"],
      },
      fontFamily: {
        MariupolRegular: ["MariupolRegular"],
        MariupolMedium: ["MariupolMedium"],
        MariupolBold: ["MariupolBold"],
      },
      boxShadow: {
        info: "0px 4px 4px rgba(0, 0, 0, 0.25);",
        filters: "0px 4px 35px rgba(12, 13, 16, 0.44);",
        block: "0px 4px 13px rgba(17, 21, 28, 0.55)",
      },
      spacing: {
        "header-height": "60px",
      },
      maxWidth: {
        "container-size": "1440px",
      },
      menuWidth: {
        open: "320px",
        close: "74px",
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
  plugins: [],
};
