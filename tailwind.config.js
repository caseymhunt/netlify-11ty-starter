module.exports = {
  purge: {
    mode: 'all',
    content: ['./**/*.html'],
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
        gray: {
          1000: '#252525',
        },
      },
    },
  },
  variants: {},
  plugins: [require('@tailwindcss/typography')],
}
