module.exports = {
  purge: {
    mode: "layers",
    content: ["./**/*.html"],
    options: {
      whitelist: [],
    },
  },
  theme: {
    container: {
      center: true,
    },
    extend: {
      colors: {
        'ms-yellow':'#F9D44D',
        'ms-blue':'#3FBEF8',
        'ms-green':'#50E986',
      },
    },
  },
  variants: {},
  plugins: [require("@tailwindcss/typography")],
};
