import { DEFAULT_METADATA } from '@/constants/metadata';


import DefaultPostHeroImage from '@/assets/images/default/default-post-hero-image.jpg';
import DefaultProjectHeroImage from '@/assets/images/default/default-project-hero-image.jpg';

export const COLLECTIONS = {
  POST: 'post',
  // PROJECT: 'project',
} as const;

export const TAGS = [
  'next.js',
  'react',
  'astro',
  'node.js',
  'javascript',
  'css',
  'python',
  'devops',
  'self-hosting',
] as const;

/** adjust this later */
export const CATEGORIES = [
  // add color here
  // extract find function
  {
    name: 'test',
    icon: 'tags',
  },
  {
    name: 'ts',
    icon: 'teach',
  },
  {
    name: 'test_1',
    icon: 'lightbulb-outline',
  },
  {
    name: 'news',
    icon: 'announcement-outline',
  },
  {
    name: 'showcases',
    icon: 'presentation',
  },
  {
    name: 'video',
    icon: 'video-outline',
  },
  {
    name: 'tools',
    icon: 'tools',
  },
  {
    name: 'resources',
    icon: 'book-open-variant-outline',
  },
] as const;

// use imported images here
export const DEFAULTS_POST = {
  TITLE: DEFAULT_METADATA.title,
  DESCRIPTION: DEFAULT_METADATA.description,
  NO_HERO: false,
  HERO_IMAGE: DefaultPostHeroImage,
  HERO_ALT: 'Hero image',
  DRAFT: false,
  CATEGORY: CATEGORIES[0].name,
  TOC: true,
} as const;

export const DEFAULTS_PROJECT = {
  TITLE: DEFAULT_METADATA.title,
  DESCRIPTION: DEFAULT_METADATA.description,
  NO_HERO: false,
  HERO_IMAGE: DefaultProjectHeroImage,
  HERO_ALT: 'Hero image',
  DRAFT: false,
  CATEGORY: CATEGORIES[0].name,
  TOC: true,
} as const;
