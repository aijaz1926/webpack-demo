const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const webpack = require("webpack");
const {} = require("webpack");
module.exports = {
  entry: path.resolve(__dirname, "./src/js/index.js"),
  output: {
    publicPath: function () {
      return "./";
    },
  },
  module: {
    rules: [
      {
        test: /\.html$/,
        use: ["html-loader"],
      },
      {
        test: /inject\.css$/, //inject into style tag inside head section
        use: ["style-loader", "css-loader"],
      },
      {
        test: /style\.css$/, //add into file and include it in html
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
      {
        test: /\.scss$/, //add into file and include it in html
        use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
      },
      {
        test: /\.(jpe?g|png|svg|gif)$/,
        use: {
          loader: "file-loader",
          options: {
            name: "[name].[hash].[ext]",
            outputPath: "images",
          },
        },
      },
    ],
  },
  plugins: [
    new webpack.ProgressPlugin(),
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "src/index.html"),
      filename: "index.html",
      title: "Webpack Usage",
    }),
    new MiniCssExtractPlugin({
      linkType: false,
      filename: "[name].[contenthash].css",
    }),
  ],
};
