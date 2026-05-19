export type Lang = 'zh-CN' | 'en';

export const SUPPORTED_LANGS: Lang[] = ['zh-CN', 'en'];
export const DEFAULT_LANG: Lang = 'zh-CN';

export const ui = {
  'zh-CN': {
    brand_l: '中转',
    brand_r: '站',
    site_name: '中转站',
    site_tagline: 'Claude / Codex / Gemini 中转站全集',
    meta_title_home: '中转站 — Claude / Codex / Gemini 中转站全集',
    meta_desc_home: 'Claude / Codex / Gemini 中转站全集。汇总公开模型清单、价格与活动信息，一站对比，一键打开。',
    meta_title_suffix: '· 中转站',
    nav_stations: '全部',
    nav_submit: '提交收录',
    nav_submit_subject: '提交中转站收录',
    nav_submit_body: `请按以下字段填写（带 * 必填）：

* 站点名称：
* 站点 URL：
* 主要模型（如 Claude / GPT / Gemini）：
* 计费方式（按量付费 / 订阅制 / 混合）：
* 一句话介绍：
价格说明（可选）：
优惠活动（可选）：
联系方式（可选）：
上线时间（可选）：

补充说明：
`,
    nav_lang_switch: 'English',
    hero_q_pre: 'Claude / Codex / Gemini 中转站',
    hero_q_emph: '全集',
    hero_q_post: '。',
    hero_desc: '模型、价格、活动一目了然。',
    filter_label: '按模型筛选',
    filter_all: '全部',
    card_models: '模型',
    card_price: '定价',
    card_prices_label: '价格',
    price_unknown: '见站内',
    price_login: '登录查看',
    billing_payg: '按量付费',
    billing_subscription: '订阅制',
    billing_hybrid: '混合计费',
    card_since: '上线',
    card_models_count: '个模型',
    card_register: '前往 →',
    footer_disclaimer: '仅聚合公开信息，不对任何中转站作背书。请自行甄别站点资质与风险。',
    empty: '暂无匹配的中转站',
  },
  en: {
    brand_l: 'Relay',
    brand_r: 'Stations',
    site_name: 'Relay Stations',
    site_tagline: 'The full index of Claude / Codex / Gemini relay stations',
    meta_title_home: 'Relay Stations — The Full Index of Claude / Codex / Gemini Relays',
    meta_desc_home: 'The full index of Claude / Codex / Gemini relay stations. Public model lists, pricing and promotions — compare side by side, click to open.',
    meta_title_suffix: '· Relay Stations',
    nav_stations: 'Stations',
    nav_submit: 'Submit',
    nav_submit_subject: 'Submit a relay station',
    nav_submit_body: `Please fill in the following fields (* required):

* Station name:
* Station URL:
* Main models (e.g. Claude / GPT / Gemini):
* Billing (pay-as-you-go / subscription / hybrid):
* One-line description:
Pricing notes (optional):
Promotion (optional):
Contact (optional):
Online since (optional):

Additional notes:
`,
    nav_lang_switch: '中文',
    hero_q_pre: 'The ',
    hero_q_emph: 'full index',
    hero_q_post: ' of Claude / Codex / Gemini relay stations.',
    hero_desc: 'Models, pricing and promotions at a glance.',
    filter_label: 'Filter by model',
    filter_all: 'All',
    card_models: 'Models',
    card_price: 'Price',
    card_prices_label: 'Price',
    price_unknown: 'see site',
    price_login: 'login to view',
    billing_payg: 'Pay-as-you-go',
    billing_subscription: 'Subscription',
    billing_hybrid: 'Hybrid',
    card_since: 'Since',
    card_models_count: 'models',
    card_register: 'Visit →',
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
  priceNote_zh?: string;
  priceNote_en?: string;
  promo_zh?: string;
  promo_en?: string;
}

export function pickName(d: StationLocalizable, lang: Lang): string {
  if (lang === 'en' && d.name_en) return d.name_en;
  return d.name;
}

export function pickPriceNote(d: StationLocalizable, lang: Lang): string | undefined {
  if (lang === 'en') return d.priceNote_en ?? d.priceNote_zh;
  return d.priceNote_zh ?? d.priceNote_en;
}

export function pickPromo(d: StationLocalizable, lang: Lang): string | undefined {
  if (lang === 'en') return d.promo_en ?? d.promo_zh;
  return d.promo_zh ?? d.promo_en;
}

interface StationPricesShape {
  prices_zh?: Record<string, string>;
  prices_en?: Record<string, string>;
}

export function pickPrices(d: StationPricesShape, lang: Lang): Record<string, string> | undefined {
  if (lang === 'en') return d.prices_en ?? d.prices_zh;
  return d.prices_zh ?? d.prices_en;
}

export function formatSupportedCount(lang: Lang, n: number): string {
  return lang === 'zh-CN' ? `${n} 家支持` : `${n} supported`;
}
