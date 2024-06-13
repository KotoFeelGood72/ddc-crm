const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  filenameHashing: false,
  publicPath: '/wp-content/themes/manager/vue/dist/'
})
