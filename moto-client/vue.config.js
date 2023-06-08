const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  publicPath: process.env.NODE_ENV === 'production' ? './' : './',
  outputDir: 'dist',
  indexPath: 'index.html',
  lintOnSave: false,
  transpileDependencies: true,
  devServer:{
    port: 9002,
    open: true
  },
  chainWebpack: config => {
    config.plugin('define').tap(definitions => {
      Object.assign(definitions[0]['process.env'], {
        //NODE_HOST: '"http://localhost:8888"',
        NODE_HOST: '"http://82.156.135.173:9001"',
      });
      return definitions;
    });
  }
})

module.exports = {
  publicPath: process.env.NODE_ENV === 'production' ? './' : './',
  outputDir: 'dist',
  indexPath: 'index.html',
  lintOnSave: false,
  devServer: {
    port: 9002,
    // 这个地方的代理只适合本地开发环境，上线后nginx要和这里保持一致，名字要一样
    proxy: {
      "/vue-project": { // 代理接口前缀为/bpi的请求
        "target": 'http://82.156.135.173:8088/', // 对应的代理地址
        //"target": process.env.DR_APP_API_URL,
        // "target": 'http://localhost:8088/',
        "secure": false, // 接受运行在https上，默认不接受
        "changeOrigin": true, // 如果设置为true,那么本地会虚拟一个服务器接收你的请求并代你发送该请求，这样就不会有跨域问题（只适合开发环境）
        "pathRewrite": { //重写路径 比如'/apis/aaa/ccc'重写为'/aaa/ccc'
          '^/vue-project': ""
        }
      },
      "/vue-huawei": { // 代理接口前缀为/bpi的请求
        "target": 'http://82.156.135.173:8089/', // 对应的代理地址
        "secure": false, // 接受运行在https上，默认不接受
        "changeOrigin": true, // 如果设置为true,那么本地会虚拟一个服务器接收你的请求并代你发送该请求，这样就不会有跨域问题（只适合开发环境）
        "pathRewrite": { //重写路径 比如'/apis/aaa/ccc'重写为'/aaa/ccc'
          '^/vue-huawei': ""
        }
      },
    }
  }
}