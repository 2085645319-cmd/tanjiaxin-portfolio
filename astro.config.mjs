import { defineConfig } from 'astro/config';

// GitHub Pages 项目站必须配置 base=/仓库名，否则页面空白、资源 404
// 换用 Cloudflare Pages 等根路径：构建前设置环境变量 ASTRO_SITE、ASTRO_BASE（ASTRO_BASE=/）
const site = process.env.ASTRO_SITE ?? 'https://2085645319-cmd.github.io';

let base = process.env.ASTRO_BASE ?? '/tanjiaxin-portfolio';
if (!base || base === '/') {
  base = '/';
} else {
  if (!base.startsWith('/')) base = `/${base}`;
  base = base.replace(/\/+$/, '');
}

export default defineConfig({
  site: 'https://2085645319-cmd.github.io',
  base: '/tanjiaxin-portfolio/',
});
