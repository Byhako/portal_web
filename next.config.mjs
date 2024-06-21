import NextFederationPlugin from '@module-federation/nextjs-mf';

/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config, { isServer }) => {

    config.plugins.push(
      new NextFederationPlugin({
        name: 'portal_web',
        filename: 'public/remoteEntry.js',
        library:{ type: "var", name: "portal_web" },
        exposes: {
          './Module': './src/pages/_document.tsx',
          './button': './src/components/Button/index.tsx',
          './web-components': './_app.tsx',
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
