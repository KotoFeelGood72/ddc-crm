const { defineConfig } = require('@vue/cli-service');
const path = require('path');

module.exports = defineConfig({
  transpileDependencies: true,
  filenameHashing: false,
  publicPath: process.env.VUE_APP_PUBLIC_PATH || '/',
  outputDir: path.resolve(__dirname, './dist'),
  css: {
    extract: true
  },
  chainWebpack: config => {
    const svgRule = config.module.rule('svg');

    // Clear all existing loaders.
    svgRule.uses.clear();

    // Add vue-svg-loader
    svgRule
      .use('vue-svg-loader')
      .loader('vue-svg-loader');
  },
  configureWebpack: {
    output: {
      filename: 'js/[name].js',
      chunkFilename: 'js/[name].js',
    },
  },
});
