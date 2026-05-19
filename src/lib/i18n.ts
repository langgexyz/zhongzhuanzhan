export type Lang = 'zh-CN' | 'en';

export const SUPPORTED_LANGS: Lang[] = ['zh-CN', 'en'];
export const DEFAULT_LANG: Lang = 'zh-CN';

export const ui = {
  'zh-CN': {
    brand_l: '中转站',
    brand_r: '点评',
    site_name: '中转站点评',
    site_tagline: 'AI API 中转站索引',
    meta_title_home: '中转站点评 — AI API 中转站模型、价格、活动一览',
    meta_desc_home: 'AI API 中转站目录：模型清单、价格、活动一目了然，覆盖 GPT-5 / Claude / Gemini 等主流模型转发服务。',
    meta_title_suffix: '· 中转站点评',
    nav_stations: '全部',
    nav_submit: '提交收录',
    nav_about: '关于',
    nav_lang_switch: 'English',
    hero_q_pre: 'AI 中转站，',
    hero_q_emph: '模型与价格',
    hero_q_post: ' 一目了然。',
    hero_desc: '聚合 AI API 中转站的公开信息。模型清单、价格、活动一站对比，一键跳转注册。',
    filter_label: '按模型筛选',
    filter_all: '全部',
    card_models: '模型',
    card_price: '定价',
    card_since: '上线',
    card_detail: '查看详情',
    card_register: '去注册 →',
    status_active: '运行中',
    status_unstable: '不稳定',
    status_down: '已下线',
    featured: '热门',
    detail_back: '← 返回索引',
    detail_register: '去注册 →',
    detail_promo: '当前活动',
    detail_price: '定价',
    detail_contact: '联系方式',
    detail_models: '支持模型',
    detail_tags: '标签',
    detail_since: '上线时间',
    detail_visit: '访问官网',
    detail_overview: '基本信息',
    footer_disclaimer: '仅聚合公开信息，不对任何中转站作背书。请自行甄别站点资质与风险。',
    empty: '暂无匹配的中转站',
  },
  en: {
    brand_l: 'Relay',
    brand_r: 'Reviews',
    site_name: 'Relay Reviews',
    site_tagline: 'AI API relay station directory',
    meta_title_home: 'Relay Reviews — AI API Relay Models, Pricing & Promotions',
    meta_desc_home: 'Directory of AI API relay providers. Compare models, pricing and promotions across GPT-5, Claude, Gemini and more.',
    meta_title_suffix: '· Relay Reviews',
    nav_stations: 'Stations',
    nav_submit: 'Submit',
    nav_about: 'About',
    nav_lang_switch: '中文',
    hero_q_pre: 'AI relay stations — ',
    hero_q_emph: 'models & pricing',
    hero_q_post: ' at a glance.',
    hero_desc: 'Aggregating public information about AI API relay providers. Compare models, pricing and promotions side by side — sign up in one click.',
    filter_label: 'Filter by model',
    filter_all: 'All',
    card_models: 'Models',
    card_price: 'Price',
    card_since: 'Since',
    card_detail: 'Details',
    card_register: 'Sign up →',
    status_active: 'Active',
    status_unstable: 'Unstable',
    status_down: 'Down',
    featured: 'Trending',
    detail_back: '← Back to index',
    detail_register: 'Sign up →',
    detail_promo: 'Current promotion',
    detail_price: 'Pricing',
    detail_contact: 'Contact',
    detail_models: 'Supported models',
    detail_tags: 'Tags',
    detail_since: 'Online since',
    detail_visit: 'Visit website',
    detail_overview: 'Overview',
    footer_disclaimer: 'Aggregated public information. We endorse no provider — verify each one yourself.',
    empty: 'No matching stations',
  },
} as const satisfies Record<Lang, Record<string, string>>;

export type UI = typeof ui['zh-CN'];

export function t(lang: Lang): UI {
  return ui[lang] ?? ui[DEFAULT_LANG];
}

export function localizedPath(lang: Lang, path: string): string {
  const clean = path.startsWith('/') ? path : `/${path}`;
  return lang === DEFAULT_LANG ? clean : `/en${clean}`;
}

export function altLangPath(currentLang: Lang, path: string): { lang: Lang; href: string } {
  const target: Lang = currentLang === 'zh-CN' ? 'en' : 'zh-CN';
  return { lang: target, href: localizedPath(target, path) };
}

interface StationLocalizable {
  name: string;
  name_en?: string;
  short_zh?: string;
  short_en?: string;
  priceNote_zh?: string;
  priceNote_en?: string;
  promo_zh?: string;
  promo_en?: string;
}

export function pickName(d: StationLocalizable, lang: Lang): string {
  if (lang === 'en' && d.name_en) return d.name_en;
  return d.name;
}

export function pickShort(d: StationLocalizable, lang: Lang): string | undefined {
  if (lang === 'en') return d.short_en ?? d.short_zh;
  return d.short_zh ?? d.short_en;
}

export function pickPriceNote(d: StationLocalizable, lang: Lang): string | undefined {
  if (lang === 'en') return d.priceNote_en ?? d.priceNote_zh;
  return d.priceNote_zh ?? d.priceNote_en;
}

export function pickPromo(d: StationLocalizable, lang: Lang): string | undefined {
  if (lang === 'en') return d.promo_en ?? d.promo_zh;
  return d.promo_zh ?? d.promo_en;
}

export function formatSupportedCount(lang: Lang, n: number): string {
  return lang === 'zh-CN' ? `${n} 家支持` : `${n} supported`;
}
