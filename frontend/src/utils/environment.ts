export const IS_SERVER = typeof window === "undefined";
export const IS_BROWSER =
  typeof window !== "undefined" && typeof window?.document !== "undefined";
