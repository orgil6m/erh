/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}

module.exports = nextConfig
module.exports = {
  i18n: {
    locales: ['mn', 'en', 'cn'],
    defaultLocale: 'mn',
    localeDetection: false,
  },
  trailingSlash: true,
}