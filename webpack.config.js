const webpack = require('webpack');

const config = {
  mode: 'development',
  devtool: 'source-map',
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx'],
  }
};

const nextConfig = {
  webpack: config,
};

module.exports = nextConfig;
