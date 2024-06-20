import NextFederationPlugin from '@module-federation/nextjs-mf';

/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config, { isServer }) => {

    config.plugins.push(
      new NextFederationPlugin({
        name: 'portal_web', // Nombre de tu aplicación (puede ser cualquier cadena)
        filename: 'public/remoteEntry.js', // Ruta donde se generará el archivo de entrada remota
        exposes: {
          './Module': './src/pages/_document.tsx',
          './button': './src/components/Button/index.tsx'
          // Define los módulos que deseas exponer a otras aplicaciones
          // Por ejemplo: 'components/Button'
        },
        shared: ['react', 'react-dom']
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
