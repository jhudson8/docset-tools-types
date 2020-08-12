import { join, normalize } from "path";

export function normalizePath(path: string) {
  if (!path) {
    return path;
  }
  if (
    !path.match(/^[a-zA-Z]+:/) &&
    !path.startsWith("/") &&
    !path.startsWith("\\")
  ) {
    // append cwd
    path = join(process.cwd(), path);
  }
  return normalize(path);
}
