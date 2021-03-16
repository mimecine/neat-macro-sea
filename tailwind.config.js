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
        'ms-yellow':'var(--ms-yellow)',
        'ms-blue':'var(--ms-blue)',
        'ms-green':'var(--ms-green)',
        'ms-bg':'var(--ms-bg)'
      },
    },
  },
  variants: {
    scrollSnapType: ['responsive'],
  },
  plugins: [require("@tailwindcss/typography"),require('tailwindcss-scroll-snap')],
};
