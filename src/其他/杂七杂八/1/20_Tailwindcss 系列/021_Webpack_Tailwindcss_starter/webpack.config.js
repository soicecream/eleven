const path = require('path')
const { resolve } = require('path')

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    path: resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  devServer: {
    static: {
      directory: resolve(__dirname, 'dist'),
    },
    port: 3000,
    open: true,
    hot: true,
    compress: true, // 启用 gzip
    historyApiFallback: true, // 不存在的路径自动跳转到首页
  },
  module: {
    rule: [
      {
        test: /\.css$/i,
        include: { path: resolve(__dirname, 'src') },
        /* style-loader 把 CSS 插入到 DOM 中。 */
        /* css-loader 会对 @import 和 url() 进行处理 */
        use: ['style-loader', 'css-loader', 'postcss-loader'],
      },
    ],
  },
}
