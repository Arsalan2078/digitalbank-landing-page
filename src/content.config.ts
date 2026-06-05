import { defineCollection } from "astro:content";
import { file } from "astro/loaders";
import { z } from "astro/zod";

const [features, latestArticles] = [
  defineCollection({
    loader: file("src/content/features.json"),
    schema: z.object({
      id: z.number(),
      icon: z.string(),
      heading: z.string(),
      paragraph: z.string(),
    }),
  }),
  defineCollection({
    loader: file("src/content/latest-articles.json"),
    schema: z.object({
      id: z.number(),
      image: z.object({
        src: z.string(),
        alt: z.string(),
      }),
      author: z.string(),
      heading: z.string(),
      paragraph: z.string(),
    }),
  }),
];

export const collections = { features, latestArticles };
