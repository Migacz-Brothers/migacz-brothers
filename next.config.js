/** @type {import('next').NextConfig} */
const nextConfig = {
  // As apresentações são lidas do disco em runtime (`presentations/`), então o
  // tracing do build precisa ser avisado para empacotar esses arquivos.
  experimental: {
    outputFileTracingIncludes: {
      '/apresentacao/**': ['./presentations/**/*'],
    },
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.sanity.io',
        port: '',
        pathname: '/images/a395zzsr/production/**',
      },
    ],
  },
};

module.exports = nextConfig;
