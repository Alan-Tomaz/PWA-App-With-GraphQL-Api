import type { NextConfig } from "next";
const NODE_ENV = process.env.NODE_ENV || "development";

const nextConfig: NextConfig = {
  reactStrictMode: true,
};

const withPWA = require("next-pwa")({
  dest: "public",
  register: true,
  skipWaiting: true,
  disable: NODE_ENV === "development",
});

export default withPWA(nextConfig);
