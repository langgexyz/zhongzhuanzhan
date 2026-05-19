import type { Lang } from './i18n';

/**
 * Map of raw model id → canonical family label.
 * Multiple raw ids collapse to the same family (e.g. gpt-5.5, gpt-5.4-mini, gpt-5-codex → "GPT").
 * Unknown ids fall through to their raw id (so new models still appear instead of being hidden).
 */
const FAMILY_RULES: Array<{ test: RegExp; family: string }> = [
  { test: /^claude/i, family: 'Claude' },
  { test: /^gpt-image/i, family: 'Image' },
  { test: /^gpt|^codex|^o\d/i, family: 'GPT' },
  { test: /^gemini/i, family: 'Gemini' },
  { test: /^deepseek/i, family: 'DeepSeek' },
  { test: /^kimi/i, family: 'Kimi' },
  { test: /^glm/i, family: 'GLM' },
  { test: /^qwen/i, family: 'Qwen' },
  { test: /^minimax/i, family: 'MiniMax' },
  { test: /^grok/i, family: 'Grok' },
  { test: /^llama/i, family: 'Llama' },
  { test: /^mistral/i, family: 'Mistral' },
];

export interface FamilyBrand {
  letter: string;
  bg: string;
  fg: string;
}

export const FAMILY_BRANDS: Record<string, FamilyBrand> = {
  Claude:   { letter: 'C',  bg: '#d97757', fg: '#ffffff' },
  GPT:      { letter: 'G',  bg: '#10a37f', fg: '#ffffff' },
  Gemini:   { letter: 'G',  bg: '#4285f4', fg: '#ffffff' },
  DeepSeek: { letter: 'D',  bg: '#4d6bfe', fg: '#ffffff' },
  Kimi:     { letter: 'K',  bg: '#6366f1', fg: '#ffffff' },
  GLM:      { letter: 'GLM',bg: '#0ea5e9', fg: '#ffffff' },
  Qwen:     { letter: 'Q',  bg: '#ee7c46', fg: '#ffffff' },
  MiniMax:  { letter: 'M',  bg: '#7c3aed', fg: '#ffffff' },
  Image:    { letter: 'I',  bg: '#475569', fg: '#ffffff' },
  Grok:     { letter: 'X',  bg: '#1d1d1f', fg: '#ffffff' },
  Llama:    { letter: 'L',  bg: '#2563eb', fg: '#ffffff' },
  Mistral:  { letter: 'M',  bg: '#ff7000', fg: '#ffffff' },
};

export function normalizeModel(raw: string, _lang: Lang = 'zh-CN'): string {
  for (const r of FAMILY_RULES) if (r.test.test(raw)) return r.family;
  return raw;
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
 * Build sorted list of family labels with the count of stations supporting each.
 * Sort: count desc, then a stable family order (Claude / GPT / Gemini first).
 */
const FAMILY_ORDER = ['Claude', 'GPT', 'Gemini', 'DeepSeek', 'Kimi', 'Qwen', 'GLM', 'MiniMax', 'Grok', 'Llama', 'Mistral', 'Image'];

export function buildModelIndex(stations: StationLike[], lang: Lang): ModelCount[] {
  const counts = new Map<string, number>();
  for (const s of stations) {
    const labels = stationModelLabels(s.data.models, lang);
    for (const l of labels) counts.set(l, (counts.get(l) ?? 0) + 1);
  }
  return Array.from(counts.entries())
    .map(([label, count]) => ({ label, count }))
    .sort((a, b) => {
      if (b.count !== a.count) return b.count - a.count;
      const ia = FAMILY_ORDER.indexOf(a.label);
      const ib = FAMILY_ORDER.indexOf(b.label);
      if (ia !== -1 || ib !== -1) return (ia === -1 ? 999 : ia) - (ib === -1 ? 999 : ib);
      return a.label.localeCompare(b.label);
    });
}
