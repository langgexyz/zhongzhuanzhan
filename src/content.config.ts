import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const stations = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/stations' }),
  schema: z.object({
    name: z.string(),
    name_en: z.string().optional(),
    url: z.string().url(),
    affiliate: z.string().url().optional(),
    logo: z.string().optional(),
    models: z.array(z.string()).default([]),
    priceNote_zh: z.string().optional(),
    priceNote_en: z.string().optional(),
    promo_zh: z.string().optional(),
    promo_en: z.string().optional(),
    short_zh: z.string().optional(),
    short_en: z.string().optional(),
    tags: z.array(z.string()).default([]),
    status: z.enum(['active', 'unstable', 'down']).default('active'),
    contact: z.string().optional(),
    since: z.string().optional(),
    featured: z.boolean().default(false),
  }),
});

export const collections = { stations };
