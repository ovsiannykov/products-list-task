module.exports = {
  presets: ['@react-native/babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./'],
        alias: {
          '@app': './src/app',
          '@shared': './src/shared',
          '@screens': './src/screens',
          '@widgets': './src/widgets',
          '@features': './src/features',
          '@entities': './src/entities',
          '@navigation': './src/navigation',
        },
      },
    ],
    'react-native-reanimated/plugin',
  ],
}
