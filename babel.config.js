module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        'module-resolver',
        {
          alias: {
            '@components': './src/components',
            '@screens': './src/screens',
            '@databases': './src/databases',
            '@routes': './src/routes',
            '@styles': './src/styles',
            '@context': './src/context',
            '@hooks': './src/hooks',
            '@services': './src/services',
            '@helpers': './src/helpers',
            '@validations': './src/validations',
          },
        },
      ],
      'react-native-reanimated/plugin',
    ],
  };
};
