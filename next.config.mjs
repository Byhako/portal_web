import NextFederationPlugin from '@module-federation/nextjs-mf';

/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config, { isServer }) => {

    config.plugins.push(
      new NextFederationPlugin({
        name: 'portal_web', // Nombre de tu aplicación (puede ser cualquier cadena)
        filename: 'static/chunks/remoteEntry.js', // Ruta donde se generará el archivo de entrada remota
        exposes: {
          './page': './src/pages/index.tsx',
          // Define los módulos que deseas exponer a otras aplicaciones
          // Por ejemplo: 'components/Button'
        },
        shared: {
          // Define las dependencias compartidas entre aplicaciones
          // Por ejemplo: 'react', 'react-dom'
        }
      })
    )

    config.module.rules.push(
      {
        test: /\.tsx?$/,
        loader: 'ts-loader',
        options: {
          transpileOnly: true,
        }
      }
    )

    return config;
  },
};

export default nextConfig;
