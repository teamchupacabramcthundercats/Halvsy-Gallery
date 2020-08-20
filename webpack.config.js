/* eslint-disable no-unused-vars */
const path = require('path');

const INPUT = path.join(__dirname, 'client', 'src', 'App.jsx');
const OUTPUT = path.join(__dirname, 'public');

module.exports = {
  entry: INPUT,
  output: {
    path: OUTPUT,
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [
          'style-loader',
          'css-loader',
        ],
      },
      {
        test: /\.jsx?/,
        exclude: /(node_modules|bower_components)/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env', '@babel/preset-react'],
            },
          },
        ],
      },
    ],
  },
  mode: 'development',
  resolve: {
    extensions: ['.js', '.jsx'],
  },
};
