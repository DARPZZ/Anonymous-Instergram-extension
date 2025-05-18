const path = require("path");
const CopyWebpackPlugin = require("copy-webpack-plugin");

module.exports = (env) => {
  const browser = env.browser || "chrome";
  const manifestFile =
    browser === "firefox" ? "manifest.firefox.json" : "manifest.chrome.json";

  return {
    mode: "production",
    entry: {
      background: path.resolve(__dirname, "..", "background.ts"),
      content: path.resolve(__dirname, "..", "content.ts"),
    },
    output: {
      path: path.join(__dirname, `../dist/${browser}`),
      filename: "[name].js",
    },
    resolve: {
      extensions: [".ts", ".js"],
    },
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          loader: "ts-loader",
          exclude: /node_modules/,
        },
      ],
    },
    plugins: [
      new CopyWebpackPlugin({
        patterns: [
          {
            from: path.resolve(__dirname, "..", manifestFile),
            to: path.resolve(__dirname, `../dist/${browser}/manifest.json`),
          },
          {
            from: path.resolve(__dirname, "..", "instergram.png"),
            to: path.resolve(__dirname, `../dist/${browser}/instergram.png`),
          },
        ],
      }),
    ],
  };
};
