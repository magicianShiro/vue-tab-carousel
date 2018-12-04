const path = require('path')
function resolve (dir) {
  return path.join(__dirname, dir)
}

module.exports = {
  css: { extract: false },
  chainWebpack: config => {
    config.resolve.alias
      .set('example', resolve('example'))
    // 扩展 webpack 配置，使 packages 加入编译
    config.module
      .rule('js')
      .use('babel')
        .loader('babel-loader')
        .tap(options => {
          // 修改它的选项...
          return options
        })
  }
}
