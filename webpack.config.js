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
      name: 'portal_web', // Nombre de tu aplicación (puede ser cualquier cadena)
      filename: 'static/chunks/remoteEntry.js', // Ruta donde se generará el archivo de entrada remota
      exposes: {
        // Define los módulos que deseas exponer a otras aplicaciones
        // Por ejemplo: 'components/Button'
      },
      shared: {
        // Define las dependencias compartidas entre aplicaciones
        // Por ejemplo: 'react', 'react-dom'
      }
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
