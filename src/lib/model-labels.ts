import type { Lang } from './i18n';

const IMAGE_TOKEN = '__image_gpt__';

/**
 * Map of raw model id → canonical display label.
 * Multiple raw ids can map to the same label (e.g. gpt-5.5 + gpt-5.5-pro → "GPT-5.5").
 * Unknown ids fall through to themselves.
 */
const MODEL_LABELS: Record<string, string> = {
  // OpenAI GPT
  'gpt-5.5': 'GPT-5.5',
  'gpt-5.5-pro': 'GPT-5.5',
  'gpt-5.4': 'GPT-5.4',
  'gpt-5.4-pro': 'GPT-5.4',
  'gpt-5.4-mini': 'GPT-5.4 mini',
  'gpt-5.3-codex': 'Codex',
  'gpt-5.3-codex-spark': 'Codex',
  'gpt-5-codex': 'Codex',
  'gpt-5.2': 'GPT-5.2',
  'gpt-5': 'GPT-5',
  'gpt-4o': 'GPT-4o',
  'gpt-4o-mini': 'GPT-4o mini',

  // Anthropic Claude
  'claude-opus-4-7': 'Opus 4.7',
  'claude-opus-4-6': 'Opus 4.6',
  'claude-sonnet-4-7': 'Sonnet 4.7',
  'claude-sonnet-4-6': 'Sonnet 4.6',
  'claude-sonnet-4-5': 'Sonnet 4.5',
  'claude-haiku-4-5': 'Haiku 4.5',

  // Google Gemini
  'gemini-3.1-pro-preview': 'Gemini 3.1',
  'gemini-3-pro-preview': 'Gemini 3',
  'gemini-2.5-pro': 'Gemini 2.5',

  // DeepSeek
  'deepseek-v4-pro': 'DeepSeek V4',
  'deepseek-v4-flash': 'DeepSeek V4',
  'deepseek-v4-flash-h': 'DeepSeek V4',
  'deepseek-v4-flash-l': 'DeepSeek V4',
  'deepseek-v4': 'DeepSeek V4',
  'deepseek-v3': 'DeepSeek V3',

  // Others
  'kimi-k2.6': 'Kimi K2.6',
  'kimi-k2': 'Kimi K2',
  'glm5.1': 'GLM 5.1',
  'glm-4.5': 'GLM 4.5',
  'Qwen3.6-35B-A3B': 'Qwen 3.6',
  'qwen3-coder': 'Qwen3 Coder',
  'minimax-m2.7': 'MiniMax M2.7',

  // Image gen — localized at render time
  'gpt-image-1': IMAGE_TOKEN,
  'gpt-image-1.5': IMAGE_TOKEN,
  'gpt-image-2': IMAGE_TOKEN,
};

export function normalizeModel(raw: string, lang: Lang = 'zh-CN'): string {
  const label = MODEL_LABELS[raw];
  if (label === IMAGE_TOKEN) return lang === 'en' ? 'Image (GPT)' : '图像 (GPT)';
  return label ?? raw;
}

export function stationModelLabels(models: string[], lang: Lang): string[] {
  const set = new Set<string>();
  for (const m of models) set.add(normalizeModel(m, lang));
  return Array.from(set);
}

export interface ModelCount {
  label: string;
  count: number;
}

interface StationLike {
  data: { models: string[] };
}

/**
 * Build sorted list of model labels with the count of stations supporting each.
 * Sort: count desc, then alphabetical.
 */
export function buildModelIndex(stations: StationLike[], lang: Lang): ModelCount[] {
  const counts = new Map<string, number>();
  for (const s of stations) {
    const labels = stationModelLabels(s.data.models, lang);
    for (const l of labels) counts.set(l, (counts.get(l) ?? 0) + 1);
  }
  return Array.from(counts.entries())
    .map(([label, count]) => ({ label, count }))
    .sort((a, b) => (b.count - a.count) || a.label.localeCompare(b.label));
}
