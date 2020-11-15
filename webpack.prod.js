const path = require("path");
const common = require("./webpack.common");
const { merge } = require("webpack-merge");
const TerserWebpackPlugin = require("terser-webpack-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
module.exports = merge(common, {
  mode: "production",
  output: {
    filename: "bundle.[contenthash].js",
    path: path.resolve(__dirname, "out"),
  },
  optimization: {
    minimize: true,
    minimizer: [new TerserWebpackPlugin(), new CssMinimizerPlugin()],
  },
});
