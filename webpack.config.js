const webpack = require('webpack');
const next = require('next');
const NextFederationPlugin = require('@module-federation/nextjs-mf');

const config = {

  mode: 'development',
  devtool: 'source-map',
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx'],
  },
  plugins: [
    new NextFederationPlugin({
      name: 'mfe-fastStore',
      filename: 'remoteEntry.js'
    })
  ],
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
