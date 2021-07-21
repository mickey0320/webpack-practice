const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const FileManagerWebpackPlugin = require("filemanager-webpack-plugin");

module.exports = {
  mode: "development",
  devtool: 'hidden-source-map',
  entry: {
    main: "./src/index.js",
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].js",
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
    new FileManagerWebpackPlugin({
      events: {
        onEnd: {
          copy: [
            {
              source: "./dist/main.js.map",
              destination: "./sourcemap/main.js.map",
            },
          ],
          delete: ["./dist/main.js.map"],
        },
      },
    }),
  ],
};
