const path = require("path");
const webpack = require("webpack");

const common = require('./webpack.common.js');
const { merge } = require('webpack-merge');


module.exports = merge(common, {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    contentBase: path.join(__dirname, "public/"),
    port: 3000,
    publicPath: "http://localhost:3000/dist/",
    hot: true
  },
  plugins: [new webpack.HotModuleReplacementPlugin()]
});