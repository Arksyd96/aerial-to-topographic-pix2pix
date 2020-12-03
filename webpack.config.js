const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const pathJoin = (subPath) => path.join(__dirname, subPath);

module.exports = {
  entry: pathJoin("src/index.jsx"),
  output: {
    filename: "bundle.js",
    path: pathJoin("dist"),
    publicPath: "/",
  },
  resolve: {
    extensions: [".js", ".jsx"],
  },
  devServer: {
    hot: true,
    open: true,
    historyApiFallback: true,
    headers: {
      accepts: "application/json",
    },
    proxy: {
      "/api": "http://0.0.0.0:5000",
    },
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        use: "babel-loader",
        exclude: /node_modules/,
      },
      { test: /\.css$/, use: ["style-loader", "css-loader"] },
      {
        test: /\.s[ac]ss$/,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: pathJoin("src/index.html"),
    }),
  ],
};
