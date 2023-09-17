module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        'module-resolver',
        {
          alias: {
            '@/@types': './src/@types',
            '@/data': './src/data',
            '@/databases': './src/databases',
            '@/domain': './src/domain',
            '@/helpers': './src/helpers',
            '@/infra': './src/infra',
            '@/main': './src/main',
            '@/routes': './src/routes',
            '@/services': './src/services',
            '@/shared': './src/shared',
            '@/ui': './src/ui',
          },
        },
      ],
      'react-native-reanimated/plugin',
    ],
  };
};
