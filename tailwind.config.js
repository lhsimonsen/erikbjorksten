module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  purge: {
    enabled: true,
    content: ['./**/*.html'],
  },
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
