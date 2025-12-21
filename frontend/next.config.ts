import type { NextConfig } from "next";
const NODE_ENV = process.env.NODE_ENV || "development";

export const basePath =
  process.env.GITHUB_REPOSITORY?.split("/")[1] ||
  process.env.NEXT_PUBLIC_REPO ||
  "";

const isGithubPages = !!basePath;

const nextConfig: NextConfig = {
  reactStrictMode: true,
  output: "export",
  basePath: isGithubPages ? `/${basePath}` : "",
  assetPrefix: isGithubPages ? `/${basePath}` : "",
  images: {
    unoptimized: true,
  },
};

const withPWA = require("next-pwa")({
  dest: "public",
  scope: basePath ? `/${basePath}/` : "/",
  disable: NODE_ENV === "development",
});

export default withPWA(nextConfig);
