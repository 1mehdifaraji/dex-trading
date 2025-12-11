import withBundleAnalyzer from "@next/bundle-analyzer";

const withAnalyzer = withBundleAnalyzer({
  enabled: process.env.ANALYZE === "true",
});

const nextConfig = withAnalyzer({
  reactStrictMode: false,
  staticPageGenerationTimeout: 120,
  images: {
    remotePatterns: [{ hostname: "static.okx.com" }],
    domains: [
      "api.dextrading.com",
      "static.okx.com",
      "blog.dextrading.com",
      "static.oklink.com",
      "95.81.93.198",
      "i.pravatar.cc",
      "oin-images.coingecko.com",
    ],
  },
  metadataBase: new URL("https://dextrading.com"),
  compress: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
});

export default nextConfig;
