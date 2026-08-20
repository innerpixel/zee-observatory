import { error } from '@sveltejs/kit';import { chapters,publishedSlugs } from '$lib/chapters/registry';import type { EntryGenerator,PageLoad } from './$types';
export const entries:EntryGenerator=()=>publishedSlugs.map(slug=>({slug}));
export const load:PageLoad=({params})=>{const chapter=chapters[params.slug];if(!chapter)error(404,'Transmission not found');return {chapter}};
