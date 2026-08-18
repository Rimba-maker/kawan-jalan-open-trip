/**
 * Prefixes a root-relative path ("/nusantara", "/#faq", "/favicon.svg") with
 * Astro's configured base path. Locally BASE_URL is "/", so this is a no-op;
 * on GitHub Pages it's "/kawan-jalan-open-trip/", so links keep working
 * under the repo subpath instead of resolving to the domain root.
 */
export function withBase(path: string): string {
  const base = import.meta.env.BASE_URL.replace(/\/$/, "");
  return path.startsWith("/") ? base + path : `${base}/${path}`;
}
