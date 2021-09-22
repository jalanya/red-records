const { merge } = require('webpack-merge');
const commonConfig = require('./webpack.common');

const prodConfig = {
  mode: 'production',
  output: {
    filename: '[name].[contenthash].js',
    publicPath: '/',
  },
  devServer: {
    port: 8080,
    historyApiFallback: true,
  },
};

module.exports = merge(commonConfig, prodConfig);
