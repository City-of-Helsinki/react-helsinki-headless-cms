const path = require('path');

module.exports = {
  stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],

  webpackFinal: async (config) => {
    config.resolve.fallback.crypto = require.resolve('crypto-browserify');
    return config;
  },

  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    '@storybook/addon-viewport',
    {
      name: '@storybook/preset-scss',
      options: {
        cssLoaderOptions: {
          modules: {
            localIdentName: '[name]__[local]--[hash:base64:5]',
          },
        },
        sassLoaderOptions: {
          sassOptions: {
            includePaths: [path.join(__dirname, '..', 'src/common/styles')],
          },
        },
      },
    },
  ],

  framework: {
    name: '@storybook/react-webpack5',
    options: {}
  },

  staticDirs: ['../static', '../public'],

  docs: {
    autodocs: true
  }
};
