import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

// Pages CMS puede dejar vacíos (o a null) los campos que no rellenas.
// Estos ayudantes evitan que un campo en blanco rompa la compilación.
const optStr = z.string().nullish().transform((v) => v ?? '');
const optList = z.array(z.string()).nullish().transform((v) => v ?? []);
const optNum = (def: number) =>
  z.preprocess((v) => (v === '' || v === null ? undefined : v), z.number().default(def));
const optDate = z.preprocess(
  (v) => (v === '' || v === null ? undefined : v),
  z.coerce.date().optional(),
);

const projects = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/projects' }),
  schema: z.object({
    title: z.string(),
    description: optStr,
    tags: optList,
    repo: optStr,
    demo: optStr,
    order: optNum(100),
  }),
});

const posts = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/posts' }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    description: optStr,
    tags: optList,
    draft: z.boolean().nullish().transform((v) => v ?? false),
  }),
});

const experiencia = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/experiencia' }),
  schema: z.object({
    title: z.string(),
    organization: optStr,
    type: z.enum(['trabajo', 'formacion', 'curso']).default('trabajo'),
    start: optDate,
    end: optDate,
    ongoing: z.boolean().nullish().transform((v) => v ?? false),
    url: optStr,
  }),
});

const paginas = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/paginas' }),
  schema: z.object({
    title: z.string(),
  }),
});

export const collections = { projects, posts, experiencia, paginas };
