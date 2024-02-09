const {getDefaultConfig, mergeConfig} = require('@react-native/metro-config');

/**
 * Metro configuration
 * https://facebook.github.io/metro/docs/configuration
 *
 * @type {import('metro-config').MetroConfig}
 */
const config = {
        resolver: {
          assetExts: [
            'obj',
            'mtl',
            'jpg',
            'vrx',
            'hdr',
            'gltf',
            'glb',
            'bin',
            'arobject',
            'png',
          ],
        },
        transformer: {
          getTransformOptions: async () => ({
            transform: {
              experimentalImportSupport: false,
              inlineRequires: false,
            },
          }),
        },
};

module.exports = mergeConfig(getDefaultConfig(__dirname), config);
