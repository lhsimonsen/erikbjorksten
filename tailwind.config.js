module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  purge: ['./layouts/**/*.html', './content/**/*.md', './content/**/*.html'],
  theme: {
    extend: {
      maxWidth: {
        860: '860px',
        640: '640px',
        500: '500px',
      },
    },
  },
  variants: {},
  plugins: [],
}
