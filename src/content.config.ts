import { defineCollection, z } from 'astro:content';

const team = defineCollection({
  type: 'content',
  schema: z.object({
    name: z.string(),
    photo: z.string().optional(),
    website: z.string().url().optional(),
    scholar: z.string().url().optional(),
    role: z.enum(['faculty', 'postdoc', 'phd', 'masters', 'undergrad', 'visitor']),
    status: z.enum(['current', 'alumni']),
    researchArea: z.string().optional(),
    startYear: z.number(),
    endYear: z.number().optional(),
    currentPosition: z.string().optional(),
    sortOrder: z.number().optional(),
  }),
});

const projects = defineCollection({
  type: 'content',
  schema: z.object({
    name: z.string(),
    tag: z.string(),
    shortDescription: z.string(),
    tools: z.array(z.object({
      name: z.string(),
      url: z.string().url().optional(),
    })).optional(),
    sortOrder: z.number().optional(),
  }),
});

export const collections = { team, projects };
