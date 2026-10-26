// Resolve an HTTP request path to a file inside the served directory.
//
// The local servers in check-lighthouse.mjs and check-mobile-overflow.mjs
// serve public/. join() alone lets "/../package.json" or "/%2e%2e/..."
// resolve outside it, so every request goes through this guard.
import { resolve, sep } from "node:path";

/**
 * @param {string} root absolute path of the served directory
 * @param {string} requestUrl the request's path, with or without a query
 * @returns {string | null} the absolute file path, or null when it would
 *   fall outside root or the path is not valid percent-encoding
 */
export function resolvePublicPath(root, requestUrl) {
  let path;
  try {
    path = decodeURIComponent(requestUrl.split("?")[0]);
  } catch {
    return null;
  }
  const base = resolve(root);
  const file = resolve(base, `.${sep}${path}`);
  return file === base || file.startsWith(base + sep) ? file : null;
}
