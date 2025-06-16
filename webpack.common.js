const path = require("path");

const HtmlWebpackPlugin = require("html-webpack-plugin");
const { rules } = require("eslint-config-prettier");

module.exports = {
  entry: {
    app: "./src/index.js",
  },

  plugins: [
    new HtmlWebpackPlugin({
      title: "Production",
      template: "./src/template.html",
    }),
  ],

  output: {
    filename: "battleship.bundle.js",

    path: path.resolve(__dirname, "dist"),

    clean: true,
  },

  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
};
