/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable no-undef */
const merge = require("webpack-merge");
const baseConfig = require("./webpack.common.cjs");

module.exports = merge(baseConfig, {
  devServer: {
    open: true,
    port: 8004,
  },
  mode: "development",
  output: {
    filename: "[name].js",
  },
});
