const path = require("path");
const webpack = require("webpack");

const common = require('./webpack.common.js');
const { merge } = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = merge(common, {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    contentBase: path.join(__dirname, "dist"),
    port: 3000,
    publicPath: "/",
    hot: true
  },
  plugins: [new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      filename: path.resolve(__dirname, 'dist/index.html'),
      template: path.resolve(__dirname, 'public/index.dev.html'),
    }),    
  ]
});