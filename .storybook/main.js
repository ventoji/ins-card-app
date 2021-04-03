const path = require('path'); 

// const custom = require('../config/webpack.dev');

module.exports = {
  "stories": [
    "../src/**/*.stories.mdx",
    "../src/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-links",
    {
      name: '@storybook/preset-scss',
      options: {
        cssLoaderOptions: {
           modules: true,
           localIdentName: '[name]__[local]--[hash:base64:5]',
        }
      }
    },
    "@storybook/addon-jest",
    "@storybook/addon-essentials",
    "@storybook/addon-a11y",
    "@storybook/addon-knobs/register"
  ],
  // webpackFinal: (config) => {
  //   return { ...config, module: { ...config.module, rules: custom.module.rules } };
  // }

}

/*  webpackFinal: async (config, { configType }) => {
    // `configType` has a value of 'DEVELOPMENT' or 'PRODUCTION'
    // You can change the configuration based on that.
    // 'PRODUCTION' is used when building the static version of storybook.

  //  config.plugins.push(new MiniCssExtractPlugin())
    // Make whatever fine-grained changes you need
    config.module.rules.push({
      test: /.*\.(?:c|sc)ss$/,
      use: [
          'style-loader', 
      //    MiniCssExtractPlugin.loader,
          'css-loader', 
          'sass-loader'
        ]
    });

    // Return the altered config
    return config;
  }*/