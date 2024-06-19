/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config, { isServer }) => {
    // ...configuraciones de Webpack...

    return config;
  },
};

export default nextConfig;
