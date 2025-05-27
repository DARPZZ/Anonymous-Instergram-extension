const path = require('path');
const fs = require('fs');
const CopyPlugin = require('copy-webpack-plugin');

const manifestVersion = process.env.MANIFEST_VERSION === '2' ? 'v2' : 'v3';
const outputDir = path.resolve(__dirname, `../dist-${manifestVersion}`);

module.exports = {
  mode: 'production',
  entry: {
    background: path.resolve(__dirname, '..', 'background.ts'),
    content: path.resolve(__dirname, '..', 'content.ts'),
  },
  output: {
    path: outputDir,
    filename: '[name].js',
  },
  resolve: {
    extensions: ['.ts', '.js'],
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  plugins: [
    new CopyPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, `../manifest.${manifestVersion}.json`),
          to: path.resolve(outputDir, 'manifest.json'),
        },
        {
          from: path.resolve(__dirname, '../instergram.png'),
          to: path.resolve(outputDir, 'instergram.png'),
        },
      ],
    }),
  ],
};
