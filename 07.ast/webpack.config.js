const path = require("path");

module.exports = {
  mode: "development",
  entry: {
    main: "./src/index.js",
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].js",
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: [
          {
            loader: "babel-loader",
            options: {
              plugins: [
                [
                  path.resolve(__dirname, "babel-plugin-import"),
                  { libraryName: "lodash" },
                ],
              ],
            },
          },
        ],
      },
    ],
  },
};
