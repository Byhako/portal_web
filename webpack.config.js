const webpack = require('webpack');
const next = require('next');

const config = {
  mode: 'development',
  devtool: 'source-map',
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx'],
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: 'ts-loader',
        options: {
          transpileOnly: true,
        },
      },
      {
        test: /\.scss$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              modules: true,
              localIdentName: '[name]__[hash:base64:5]',
            },
          },
          'sass-loader',
        ]
      }
    ],
  },
};

const nextConfig = {
  webpack: config,
};

module.exports = nextConfig;
