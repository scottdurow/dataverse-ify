/* eslint-disable @typescript-eslint/no-var-requires */
const path = require("path");

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
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
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
