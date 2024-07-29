const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          100: '#f7e6e6',
          200: '#e8bcbc',
          300: '#d99090',
          400: '#cc6a6a',
          500: '#c42124',
          600: '#ad1d20',
          700: '#96191c',
        },
        secondary: '#f4e4e4'
      },
    },
  },
  plugins: [],
});
