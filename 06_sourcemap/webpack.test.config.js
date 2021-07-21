const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const FileManagerWebpackPlugin = require("filemanager-webpack-plugin");
const webpack = require("webpack");

module.exports = {
  mode: "development",
  devtool: false,
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
    new webpack.SourceMapDevToolPlugin({
      filename: "[name].js.map",
      append: `//# sourceMappingURL=http://localhost:8080/sourcemap/[url]`,
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
