import { BASE_PATH } from "@/constants/CONSTANTS";

export const pathResolver = (stringPath: string): string => {
  return `${BASE_PATH}${stringPath}`;
};
