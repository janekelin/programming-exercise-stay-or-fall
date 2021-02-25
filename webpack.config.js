const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const dist = path.resolve(__dirname, 'dist');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'app.js',
    path: dist,
  },
  plugins: [
    // Clean /build folder
    new CleanWebpackPlugin(),
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
