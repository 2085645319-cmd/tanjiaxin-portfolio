# tanjiaxin-portfolio

谭佳欣（**tanjiaxin**）的个人视频作品集（Astro 静态站）。页面为中文；视频托管在第三方平台，本站用 iframe 嵌入并展示宣传图。

## 本地运行

```bash
npm install
npm run dev
```

终端里会给出本地地址；本项目为 GitHub Pages 配置了子路径 **`base`**，开发时一般为 **`http://localhost:4321/tanjiaxin-portfolio/`**（末尾可有或无 `/`，以终端为准）。

## 图片文件

请把三张图片放到 [`public/images/`](public/images/)，文件名需一致：

| 文件 | 用途 |
|------|------|
| `profile.jpg` | 关于页个人照片 |
| `shanhai-baize.jpg` | 《山海经先导片——白泽》宣传图 |
| `jingmo-fadian.jpg` | 《静默法典》宣传图 |

说明见同目录下的 [`public/images/IMAGES.txt`](public/images/IMAGES.txt)。使用 PNG 时请改扩展名，并同步修改 `src/pages/about.astro` 与 `src/data/works.ts` 中的路径。

## 编辑作品与链接

编辑 [`src/data/works.ts`](src/data/works.ts)：

- **`period`**：列表与详情页展示的时间说明（任意字符串，例如 `2025.09至今`）。
- **`embedUrl`**：平台「分享 → 嵌入」里 iframe 的 `src`。
- **`watchUrl`**：原站播放页链接（用于「在原平台打开」）。
- **`poster`**：宣传图路径（`/images/...`）。
- **`platformBadge`**：列表角标文案（例如「待发布」→ 上线后可改为「B站」等）。

平台参考：YouTube / Vimeo / B站 等均使用官方嵌入代码中的 iframe 地址。

## 站点 URL（`astro.config.mjs`）

默认按 **GitHub Pages 项目站** 配置：`site` 为 `https://2085645319-cmd.github.io`，`base` 为 `/tanjiaxin-portfolio`。上线地址应为：

**https://2085645319-cmd.github.io/tanjiaxin-portfolio/**

若以后改用 **Cloudflare Pages** 等根路径部署，在对应平台的构建环境里设置环境变量 **`ASTRO_SITE`**（你的站点根 URL）和 **`ASTRO_BASE=/`**（根路径），或在本地构建前设置后再 `npm run build`。

## GitHub Pages（页面空白时请检查）

1. 仓库 **Settings → Pages**：**Source** 选 **GitHub Actions**（不要选 Deploy from a branch 除非你明确在用分支发布）。
2. 推送代码后，打开 **Actions** 标签页，确认 **Deploy to GitHub Pages** 工作流已成功（绿勾）。
3. 本站已包含 [`public/.nojekyll`](public/.nojekyll)，避免 GitHub 误用 Jekyll 忽略 `_astro` 等目录。
4. 首次部署可能等待 1～2 分钟后再刷新浏览器。

工作流文件：[`.github/workflows/deploy.yml`](.github/workflows/deploy.yml)。

## 免费部署

构建产物目录为 `dist`（`npm run build`）。

- **Cloudflare Pages**：连接 Git，构建命令 `npm run build`，输出目录 `dist`。
- **Netlify**：仓库根目录已含 `netlify.toml`，导入仓库后一般可自动识别构建与发布目录。
- **Vercel**：框架选 Astro 或手动填写构建 `npm run build`、输出 `dist`。

HTTPS 由平台提供。

## License

个人作品集，按需修改即可。
