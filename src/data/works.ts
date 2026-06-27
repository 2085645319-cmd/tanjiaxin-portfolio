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
    slug: 'yiguijinchen', 
    title: '忆归锦尘',
    description: '2008年5月12日，他站在废墟高处，本来只是来看看。然后他看见了——端热锅冲进废墟的面馆老板，免费拉伤员的出租车司机，用手挖碎石的母亲......一个忘了人间数千年的神，第一次被凡人触动。',
    category: '短片',
    period: '2026.06', // 改成实际完成时间
    platform: 'bilibili',
    platformBadge: '已发布', // 或 '即将上线' 等
    embedUrl: 'https://player.bilibili.com/player.html?isOutside=true&aid=116792659804599&bvid=BV1xu7P6eE7p&cid=39310264318&p=1',
    watchUrl: 'https://www.bilibili.com/video/BV1xu7P6eE7p',
    poster: '/images/xin-shi-pin.png', // 改成实际海报文件名
},
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
    pendingMessage: '该系列尚未完成，故未上传至公开平台',
    noWatchMessage: '该系列尚未完成，故未上传至公开平台',
  },
  {
    slug: 'jingmo-fadian',
    title: '静默法典',
    description:
      '在噪音逐渐失控的未来，强制声音管理不得不启动。在声音都被压抑的世界里，有人渐渐支撑不下去了。',
    category: '短片',
    period: '2026.03完成',
    platform: 'bilibili',
    platformBadge: '已发布',
    embedUrl: 'https://player.bilibili.com/player.html?isOutside=true&aid=116554658219391&bvid=BV1MR5W69EvF&cid=38254151185&p=1',
    watchUrl: 'https://www.bilibili.com/video/BV1MR5W69EvF',
    poster: '/images/jingmo-fadian.jpg',
  },
  {
    slug: 'xiaohongshu-video-1',       // 唯一标识，不能重复
    title: '面霜宣传片',
    description: '面霜诞生记',
    category: '短片',                  // 或你需要的分类
    period: '2025.09',                // 发布时间
    platform: 'other',                // 因为没有专门的 'xiaohongshu' 类型
    platformBadge: '已发布',
    embedUrl: '',                      // 留空，因为无法嵌入
    watchUrl: 'https://www.xiaohongshu.com/explore/68d2235a000000001301f9a3?app_platform=android&ignoreEngage=true&app_version=9.29.0&share_from_user_hidden=true&xsec_source=app_share&type=video&xsec_token=CBpIZkvr4W2Q6aRtTJuPvo1I0hikLUOJ2kcN8IXikH6tA=&author_share=1&shareRedId=ODc5NDdKN082NzUyOTgwNjdJOTo8SDdL&apptime=1778488968&share_id=30d54ec1982e4ded93f5614c8c1c0867&share_channel=copy_link&appuid=61744e3f000000001f038c1b&xhsshare=CopyLink', // 真实链接
    poster: '/images/xiaohongshu1.png', // 封面图，稍后放入
  },
  {
    slug: 'xiaohongshu-video-2',
    title: '面霜宣传片',
    description: '砰一下就变出来了',
    category: '短片',
    period: '2025.09',
    platform: 'other',
    platformBadge: '已发布',
    embedUrl: '',
    watchUrl: 'https://www.xiaohongshu.com/explore/68d5442c000000001301472f?app_platform=android&ignoreEngage=true&app_version=9.29.0&share_from_user_hidden=true&xsec_source=app_share&type=video&xsec_token=CB5q0E_muWD6CuX8IyhBcRLuAE3XV255Ow1V16YgE_5Qk=&author_share=1&xhsshare=&shareRedId=ODcyRkdHPTk2NzUyOTgwNjgzOTlIPjhA&apptime=1778489375&share_id=e4f9ba1785954553a3ae8ec34b4353b7&share_channel=copy_link',
    poster: '/images/xiaohongshu2.png',
  },
];
