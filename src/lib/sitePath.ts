/** 站内路径，适配 `astro.config` 的 `base`（如 GitHub Pages 子路径部署） */
export function sitePath(path: string): string {
  const base = import.meta.env.BASE_URL;
  const trimmed = path.replace(/^\/+/, '');
  if (!trimmed) return base;
  return `${base}${trimmed}`;
}
