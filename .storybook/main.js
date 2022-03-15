module.exports = {
  stories: ["../src/**/*.stories.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    {
      name: "@storybook/preset-scss",
      options: {
        cssLoaderOptions: {
          modules: {
            localIdentName: "[name]__[local]--[hash:base64:5]",
          },
        },
      },
    },
  ],
  framework: "@storybook/react",
  core: {
    builder: "webpack5",
  },
};
