export const BASE_PATH =
  process.env.GITHUB_REPOSITORY?.split("/")[1] ||
  process.env.NEXT_PUBLIC_REPO ||
  "";
