const path = require('path');
const SkeletonWebpackPlugin = require('vue-skeleton-webpack-plugin');

const resolve = dir => path.join(__dirname, dir);

module.exports = {
  // 基本路径
  publicPath: './',
  lintOnSave: false,
  configureWebpack: {
    plugins: [
      new SkeletonWebpackPlugin({
        webpackConfig: {
          entry: {
            app: path.join(__dirname, './src/assets/js/skeleton.js'),
          },
        },
        minimize: true,
        quiet: true,
      }),
    ],
  },
  css: {
    extract: false,
  },
  // 生产环境是否生成 sourceMap 文件
  productionSourceMap: false,
  // 服务器端口号
  devServer: {
    port: 1234,
  },
  chainWebpack: (config) => {
    config.resolve.alias
      .set('@$', resolve('src'))
      .set('components', resolve('src/components'))
      .set('pages', resolve('src/pages'))
      .set('assets', resolve('src/assets'));
  },
};
