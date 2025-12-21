import type { NextConfig } from "next";
import { BASE_PATH } from "./constants/CONSTANTS";
const NODE_ENV = process.env.NODE_ENV || "development";

const isGithubPages = !!BASE_PATH;

const nextConfig: NextConfig = {
  reactStrictMode: true,
  output: "export",
  basePath: isGithubPages ? `/${BASE_PATH}` : "",
  assetPrefix: isGithubPages ? `/${BASE_PATH}` : "",
  images: {
    unoptimized: true,
  },
};

const withPWA = require("next-pwa")({
  dest: "public",
  scope: BASE_PATH ? `/${BASE_PATH}/` : "/",
  disable: NODE_ENV === "development",
});

export default withPWA(nextConfig);
