const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  entry: [
    path.resolve('src', 'js', 'app.js'),
    path.resolve('src', 'styles', 'app.css'),
  ],
  output: {
    path: path.resolve('static', 'assets'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'postcss-loader',
        ],
      },
      {
        test: /\.(jpe?g|png|gif|woff|woff2|eot|ttf|svg)(\?[a-z0-9=.]+)?$/,
        use: ['url-loader?limit=100000']
      }
    ],
  },
  plugins: [new MiniCssExtractPlugin()],
};
