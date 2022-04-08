const { merge } = require("webpack-merge");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const commonConfig = require("./webpack.common");
const packageJson = require("../package.json");

const domain = process.env.PRODUCTION_DOMAIN;

const prodConfig = {
  mode: "production",
  output: {
    publicPath: "/dist/",
  },
  // output: {
  //   filename: "[name].[contenthash].js",
  //   publicPath: "/StylesApp/latest/",
  // },

  // plugins: [
  //   new ModuleFederationPlugin({
  //     name: "styles",
  //     filename: "remoteEntry.js",
  //     exposes: {
  //       "./StylesApp": "./src/bootstrap",
  //     },
  //     shared: packageJson.dependencies,
  //   }),
  // ],
};

module.exports = merge(commonConfig, prodConfig);

// use: [
//   // Creates `style` nodes from JS strings
//   "style-loader",
//   // Translates CSS into CommonJS
//   "css-loader",
//   // Compiles Sass to CSS
//   "sass-loader",
// ],
