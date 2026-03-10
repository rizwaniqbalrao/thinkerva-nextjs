/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      { source: '/index.html', destination: '/', permanent: true },
      { source: '/consultants.html', destination: '/consultants', permanent: true },
      { source: '/privacy-policy.html', destination: '/privacy-policy', permanent: true },
      { source: '/terms.html', destination: '/terms', permanent: true },
    ];
  },
};

module.exports = nextConfig;

