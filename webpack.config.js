const path = require('path');
const ShebangPlugin = require('webpack-shebang-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const RemovePlugin = require('remove-files-webpack-plugin');

const dist = path.resolve(__dirname, 'dist');

module.exports = {
  entry: './src/bin/index.js',
  output: {
    path: dist,
  },
  resolve: {
    modules: ['node_modules'],
  },
  target: 'node',
  plugins: [
    // Clean /build folder
    new CleanWebpackPlugin(),
    new CopyPlugin({
      patterns: [{ from: 'src' }],
    }),
    // Preserve shebang in index.js
    new ShebangPlugin(),
    new RemovePlugin({
      after: {
        root: './dist',
        include: ['main.js'],
        trash: true,
      },
    }),
  ],
};
