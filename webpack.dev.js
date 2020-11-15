const path = require("path");
const common = require("./webpack.common");
const { merge } = require("webpack-merge");
module.exports = merge(common, {
  mode: "development",
  devtool: "inline-source-map",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "out"),
  },
  devServer: {
    port: 3000,
    open: true,
  },
});
