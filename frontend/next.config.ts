import type { NextConfig } from "next";
const NODE_ENV = process.env.NODE_ENV || "development";

const repo = process.env.GITHUB_REPOSITORY?.split("/")[1] || "";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  output: "export",
  basePath: repo ? `/${repo}` : "",
  assetPrefix: repo ? `/${repo}` : "",
  images: {
    unoptimized: true,
  },
};

const withPWA = require("next-pwa")({
  dest: "public",
  disable: NODE_ENV === "development",
});

export default withPWA(nextConfig);
