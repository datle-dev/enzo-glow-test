import { z, defineCollection } from 'astro:content';

const faqCollection = defineCollection({
  type: 'content',
  schema: z.object({
    question: z.string(),
    category: z.string(),
    order: z.number(),
  }),
});

const servicesCollection = defineCollection({
  type: 'content',
  schema: ({ image }) => z.object({
    title: z.string(),
    summary: z.string(),
    category: z.string(),
    cost: z.number(),
    deposit: z.number().optional(),
    duration: z.number(),
    imgSrc: image(),
    imgAlt: z.string(),
  }),
});

export const collections = {
  'faq': faqCollection,
  'services': servicesCollection,
};
