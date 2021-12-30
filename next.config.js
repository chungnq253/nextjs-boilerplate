const path = require("path");
const nextBuildId = require("next-build-id");

module.exports = {
  // https://nextjs.org/docs/api-reference/next.config.js/configuring-the-build-id
  generateBuildId: () => nextBuildId({ dir: __dirname }),
  reactStrictMode: true,
  env: {
  },
  images: {
    domains: process.env.NEXT_IMAGE_HOSTNAME.split(','),
  },
};
