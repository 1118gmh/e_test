const { defineConfig } = require('@vue/cli-service')
// const isDevelopment = process.env.NODE_ENV === 'development'

console.log(process.env.NODE_ENV)
module.exports = defineConfig({
  publicPath: '',
  outputDir: 'dist',
  assetsDir: '',
  indexPath: 'index.html',
  filenameHashing: false,
  lintOnSave: false,
  productionSourceMap: false,
  transpileDependencies: true
})
