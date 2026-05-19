/**
 * The site only covers families that need a relay for users in CN:
 * Claude / GPT / Gemini. Models from other families (DeepSeek, Kimi, Qwen,
 * GLM, MiniMax, image-gen, ...) are intentionally dropped — those upstreams
 * are reachable directly and don't motivate visiting a relay station listing.
 */
export const ALLOWED_FAMILIES = ['Claude', 'GPT', 'Gemini'] as const;
export type AllowedFamily = typeof ALLOWED_FAMILIES[number];

const FAMILY_RULES: Array<{ test: RegExp; family: AllowedFamily }> = [
  { test: /^claude/i, family: 'Claude' },
  { test: /^gemini/i, family: 'Gemini' },
  // GPT family covers gpt-*, codex-*, o1/o3/o4 (OpenAI naming variants).
  // Image-gen models (gpt-image-*) also fall under GPT here; the site keeps
  // them grouped rather than maintaining a separate Image family.
  { test: /^(gpt|codex|o\d)/i, family: 'GPT' },
];

export interface FamilyBrand {
  letter: string;
  bg: string;
  fg: string;
}

export const FAMILY_BRANDS: Record<AllowedFamily, FamilyBrand> = {
  Claude: { letter: 'C', bg: '#d97757', fg: '#ffffff' },
  GPT:    { letter: 'G', bg: '#10a37f', fg: '#ffffff' },
  Gemini: { letter: 'G', bg: '#4285f4', fg: '#ffffff' },
};

export function normalizeModel(raw: string): AllowedFamily | undefined {
  for (const r of FAMILY_RULES) if (r.test.test(raw)) return r.family;
  return undefined;
}

export function stationModelLabels(models: string[]): AllowedFamily[] {
  const set = new Set<AllowedFamily>();
  for (const m of models) {
    const fam = normalizeModel(m);
    if (fam) set.add(fam);
  }
  return Array.from(set);
}

export interface ModelCount {
  label: AllowedFamily;
  count: number;
}

interface StationLike {
  data: { models: string[] };
}

/**
 * Build sorted list of family labels with the count of stations supporting each.
 * Sort: count desc, then by ALLOWED_FAMILIES order (Claude / GPT / Gemini).
 */
export function buildModelIndex(stations: StationLike[]): ModelCount[] {
  const counts = new Map<AllowedFamily, number>();
  for (const s of stations) {
    for (const l of stationModelLabels(s.data.models)) {
      counts.set(l, (counts.get(l) ?? 0) + 1);
    }
  }
  return Array.from(counts.entries())
    .map(([label, count]) => ({ label, count }))
    .sort((a, b) => {
      if (b.count !== a.count) return b.count - a.count;
      return ALLOWED_FAMILIES.indexOf(a.label) - ALLOWED_FAMILIES.indexOf(b.label);
    });
}
