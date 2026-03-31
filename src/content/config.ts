import { defineCollection, z } from 'astro:content';

const SECTIONS    = ['ItsJustTech', 'ItsJustInnovation', 'ItsJustPeople', 'ItsJustLife'] as const;
const SUBTOPICS   = ['ItsJustAI', 'ItsJustDev', 'ItsJustData', 'ItsJustFuture',
                     'ItsJustStartups', 'ItsJustScience', 'ItsJustLeaders',
                     'ItsJustTeams', 'ItsJustWork', 'ItsJustSociety'] as const;
const STATUS_VALUES = ['draft', 'review', 'approved', 'published'] as const;
export type ArticleStatus = typeof STATUS_VALUES[number];

export const PUBLIC_ARTICLE_STATUSES = new Set<ArticleStatus>(['approved', 'published']);
export function isPublicArticleStatus(status: ArticleStatus): boolean {
  return PUBLIC_ARTICLE_STATUSES.has(status);
}

export const SECTION_SLUG: Record<typeof SECTIONS[number], string> = {
  ItsJustTech:       'tech',
  ItsJustInnovation: 'innovation',
  ItsJustPeople:     'people',
  ItsJustLife:       'life',
};

export const SUBTOPIC_SLUG: Record<typeof SUBTOPICS[number], string> = {
  ItsJustAI:       'ai',
  ItsJustDev:      'dev',
  ItsJustData:     'data',
  ItsJustFuture:   'future',
  ItsJustStartups: 'startups',
  ItsJustScience:  'science',
  ItsJustLeaders:  'leaders',
  ItsJustTeams:    'teams',
  ItsJustWork:     'work',
  ItsJustSociety:  'society',
};

type ArticleLike = { id: string; data?: { slug?: string } };

export function normalizeArticleSlug(value: string): string {
  return value.replace(/\.mdx$/i, '').replace(/^\/+|\/+$/g, '');
}

export function getArticleSlug(article: ArticleLike): string {
  return normalizeArticleSlug(article.data?.slug ?? article.id);
}

const articles = defineCollection({
  type: 'content',
  schema: z.object({
    title:       z.string(),
    description: z.string(),
    status:      z.enum(STATUS_VALUES),
    date:        z.coerce.date(),
    updated:     z.coerce.date().optional(),
    tags:        z.array(z.string()).default([]),
    section:     z.enum(SECTIONS),
    subtopic:    z.enum(SUBTOPICS),
    slug:        z.string().optional(),
    cover:       z.string().optional(),
    video:       z.string().optional(),  // YouTube video ID
    resources:   z.array(z.object({
      title:  z.string(),
      url:    z.string().url(),
      source: z.string().optional(),
    })).default([]),
    deepdive:    z.array(z.object({
      title:       z.string(),
      url:         z.string().url(),
      type:        z.enum(['youtube', 'podcast', 'newsletter', 'course', 'article']).optional(),
      description: z.string().optional(),
      author:      z.string().optional(),
    })).default([]),
  }),
});

export const collections = { articles };
