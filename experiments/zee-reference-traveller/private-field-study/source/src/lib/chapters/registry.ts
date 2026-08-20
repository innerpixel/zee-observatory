import { chapter01 } from './chapter-01';
import type { Chapter } from '$lib/types/chapter';
export const chapters:Record<string,Chapter>={[chapter01.slug]:chapter01};
export const publishedSlugs=Object.keys(chapters);
