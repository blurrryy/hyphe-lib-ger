const path = require("path");

module.exports = {
  mode: "production",
  entry: "./lib/hyphe-lib-ger.js",
  output: {
    path: path.resolve(__dirname, "browser-package"),
    filename: "hyphelibger.js",
    library: "HypheLib"
  },
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"]
          }
        }
      }
    ]
  }
};
