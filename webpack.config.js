/* eslint-disable @typescript-eslint/no-var-requires */
const path = require("path");
const webpack = require("webpack");
module.exports = {
  entry: "./src/browser-tests/index.ts",
  mode: "development",
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
    ],
  },
  plugins: [
    new webpack.ProvidePlugin({
      process: "process/browser",
    }),
  ],
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
    alias: {
      // Since this is for running in the browser, we don't include the node context Xrm.WebApi
      config: path.resolve(__dirname, "src/browser-tests/config-browser"),
      "../../../webapi/node/SetupGlobalContext": path.resolve(__dirname, "src/browser-tests/SetupGlobalContext"),
      "../../SetupGlobalContext": path.resolve(__dirname, "src/browser-tests/SetupGlobalContext"),
    },
    fallback: {
      crypto: false,
      path: false,
      https: false,
      fs: false,
      util: false,
      buffer: false,
      querystring: false,
      assert: false,
      http: false,
      tls: false,
      url: false,
      net: false,
      module: false,
      stream: false,
      zlib: false,
      constants: false,
      tunnel: false,
    },
  },

  devtool: "eval-source-map",
  output: {
    path: path.resolve(__dirname, "dist-tests"),
    filename: "browser-tests.js",
    // Set this to your namespace e.g. cds.ClientHooks
    library: ["tests"],
    libraryTarget: "var",
  },
};
