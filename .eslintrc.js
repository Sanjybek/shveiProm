module.exports = {
  settings: {
    'import/resolver': {
      alias: {
        map: [
          ['@components', './src/components'],
          ['@images', './src/images'],
          ['@page', './src/page'],
          ['@sass', './src/sass'],
          ['@types', './src/types'],
        ],
        extensions: ['.ts', '.js', '.jsx', '.json'],
      },
    },
  },
};
