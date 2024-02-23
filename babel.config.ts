module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        alias: {
          src: './src',
          components: './src/components',
          images: './src/images',
          sass: './src/sass',
          page: './src/page',
          types: './src/types',
          component: './src/sass/component',
        },
      },
    ],
  ],
};
