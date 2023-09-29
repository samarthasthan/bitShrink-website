/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  webpack(config) {
    config.module.rules.push({
      test: /\.(mov|mp4|webm)$/,
      use: {
        loader: "file-loader",
        options: {
          name: "[name].[ext]",
          publicPath: "/_next/static/videos/",
          outputPath: "static/videos/",
        },
      },
    });

    return config;
  },
  images: {
    domains: ["img.icons8.com"],
  },
};

module.exports = nextConfig;
