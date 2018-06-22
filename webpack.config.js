const path = require("path");

module.exports = {
  entry: "./browser.js",
  output: {
    path: path.resolve(__dirname, "browser-package"),
    filename: "hyphelibger.js",
    library: "HypheLib"
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: "babel-loader",
        query: {
          presets: ["env", "stage-2"]
        }
      }
    ]
  }
};
