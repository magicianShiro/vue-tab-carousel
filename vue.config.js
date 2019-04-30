const path = require('path')
function resolve (dir) {
  return path.join(__dirname, dir)
}

module.exports = {
  publicPath: process.env.NODE_ENV === 'production' ? '/vue-tab-carousel/' : '/',
  css: { extract: false },
  chainWebpack: config => {
    const svgIconRule = config.module.rule('svg-icon')
    const svgRule = config.module.rule('svg')
    svgIconRule
      .test(/\.svg$/)
      .include
      .add(resolve('src/icons'))
      .end()
      .use('svg-sprite-loader')
      .loader('svg-sprite-loader')
      .options({
        symbolId: 'icon-[name]'
      })
      .end()
    svgRule
      .exclude
      .add(resolve('src/icons'))

    config.resolve.alias
      .set('example', resolve('example'))
      .set('package', resolve('package'))
    // 扩展 webpack 配置，使 packages 加入编译
    config.module
      .rule('js')
      .include
        .add(/src/)
        .end()
      .use('babel')
        .loader('babel-loader')
        .tap(options => {
          // 修改它的选项...
          return options
        })
  }
}
