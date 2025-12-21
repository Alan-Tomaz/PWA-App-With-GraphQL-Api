import type { NextConfig } from "next";
const NODE_ENV = process.env.NODE_ENV || "development";

const repo =
  process.env.GITHUB_REPOSITORY?.split("/")[1] ||
  process.env.NEXT_PUBLIC_REPO ||
  "";

const isGithubPages = !!repo;

const nextConfig: NextConfig = {
  reactStrictMode: true,
  output: "export",
  basePath: isGithubPages ? `/${repo}` : "",
  assetPrefix: isGithubPages ? `/${repo}` : "",
};

const withPWA = require("next-pwa")({
  dest: "public",
  scope: repo ? `/${repo}/` : "/",
  disable: NODE_ENV === "development",
});

export default withPWA(nextConfig);
