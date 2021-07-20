const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  mode: "development",
  entry: {
    main: "./src/index.js",
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].js",
    // 统一指定打包的图片的路径和名称
    // assetModuleFilename: 'imgs/[name][ext]'
  },
  module: {
    rules: [
      {
        test: /\.css?/,
        use: ["style-loader", "css-loader"],
      },
      //   {
      //     test: /\.(jpe?g|gif|png|svg)$/,
      //     use: [
      //       {
      //         loader: "file-loader",
      //         options: {
      //           name: "imgs/[name].[ext]",
      //         },
      //       },
      //     ],
      //   },
      {
        test: /\.(jpe?g|gif|png|svg)$/,
        // file-loader
        type: "asset/resource",
        generator: {
          filename: "imgs/[name][ext]",
        },
        parser: {
          dataUrlCondition: {
            // 类似url-loader的limit值
            maxSize: 100 * 1024,
          },
        },
        // type: 'asset/inline',// base64方式,不能和generator选项一起用
        // type: 'asset/source',// raw-loader
        // type: 'asset'// url-loader和limit
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
    new MiniCssExtractPlugin({
      filename: "[name].css",
    }),
  ],
};
