export type VideoPlatform = 'youtube' | 'vimeo' | 'bilibili' | 'other';

export interface Work {
  slug: string;
  title: string;
  description: string;
  category: string;
  /** 列表与详情页展示的时间说明 */
  period: string;
  platform: VideoPlatform;
  /** 列表卡片角标文案（中文） */
  platformBadge: string;
  /** iframe 嵌入地址，暂未发布时留空 */
  embedUrl: string;
  /** 原站播放页链接，暂未发布时留空 */
  watchUrl: string;
  /** 宣传图 / 首帧，位于 public/ */
  poster: string;
  /** 无嵌入时，详情页播放器区域提示（默认由 VideoEmbed 提供） */
  pendingMessage?: string;
  /** 无原站链接时，详情页底部一行提示（默认：观看链接稍后更新） */
  noWatchMessage?: string;
}

export const works: Work[] = [
  {
    slug: 'shanhai-baize',
    title: '山海经先导片——白泽',
    description:
      '白泽知晓天地之事，山海间的万物曾在它的帮助下欣欣向荣，但这份宁静似乎岌岌可危……',
    category: '短片',
    period: '2025.09至今',
    platform: 'bilibili',
    platformBadge: '系列进行中',
    embedUrl: '',
    watchUrl: '',
    poster: '/images/shanhai-baize.jpg',
    pendingMessage: '该系列尚未完成，故未上传至平台',
    noWatchMessage: '该系列尚未完成，故未上传至平台',
  },
  {
    slug: 'jingmo-fadian',
    title: '静默法典',
    description:
      '在噪音逐渐失控的未来，强制声音管理不得不启动。在声音都被压抑的世界里，有人渐渐支撑不下去了。',
    category: '短片',
    period: '2026.03完成',
    platform: 'bilibili',
    platformBadge: '待发布',
    embedUrl: '',
    watchUrl: '',
    poster: '/images/jingmo-fadian.jpg',
  },
];
