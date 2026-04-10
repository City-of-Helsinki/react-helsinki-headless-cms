const path = require('path');
const webpack = require('webpack');

module.exports = {
  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],

  webpackFinal: async (config) => {
    config.resolve.fallback.crypto = require.resolve('crypto-browserify');
    config.plugins ??= [];
    config.plugins.push(
      new webpack.EnvironmentPlugin({
        CMS_GRAPHQL_ENDPOINT: null,
        EVENTS_GRAPHQL_ENDPOINT: null,
        LINKED_EVENTS_ENDPOINT: null,
      }),
    );
    return config;
  },

  addons: [
    '@storybook/addon-a11y',
    '@storybook/addon-links',
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
    '@storybook/addon-webpack5-compiler-babel',
    '@storybook/addon-docs',
  ],

  framework: {
    name: '@storybook/react-webpack5',
    options: {},
  },

  staticDirs: ['../static', '../public'],

  docs: {},

  typescript: {
    reactDocgen: 'react-docgen-typescript',
  },
};
