const path = require('path');
const {getDefaultConfig, mergeConfig} = require('@react-native/metro-config');

const projectRoot = __dirname;

const extraNodeModules = {
  '@app': path.resolve(projectRoot, 'src/app'),
  '@shared': path.resolve(projectRoot, 'src/shared'),
  '@screens': path.resolve(projectRoot, 'src/screens'),
  '@widgets': path.resolve(projectRoot, 'src/widgets'),
  '@features': path.resolve(projectRoot, 'src/features'),
  '@entities': path.resolve(projectRoot, 'src/entities'),
  '@navigation': path.resolve(projectRoot, 'src/navigation'),
};

const config = {
  resolver: {
    extraNodeModules,
  },
  watchFolders: [path.resolve(projectRoot, 'src')],
};

module.exports = mergeConfig(getDefaultConfig(projectRoot), config);
