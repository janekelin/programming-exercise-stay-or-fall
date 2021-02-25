const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const ShebangPlugin = require('webpack-shebang-plugin');

const dist = path.resolve(__dirname, 'dist');

module.exports = {
  entry: './src/bin/index.js',
  output: {
    filename: 'bin/index.js',
    path: dist,
  },
  plugins: [
    // Clean /build folder
    new CleanWebpackPlugin(),
    new ShebangPlugin(),
  ],
  module: {
    rules: [
      // Transform js files
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [['@babel/preset-env', { targets: 'defaults' }]],
          },
        },
      },
    ],
  },
};
