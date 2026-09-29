// vue.config.js
'use strict'

module.exports = {
  // 1. 用正则匹配所有带 vue-router 的路径
  transpileDependencies: [/vue-router/],

  lintOnSave: false,

  devServer: {
    port: 10010,
    proxy: {
      '/api': {
        target: 'http://localhost:10024',
        changeOrigin: true,
        pathRewrite: { '^/api': '' }
      }
    }
  }
}