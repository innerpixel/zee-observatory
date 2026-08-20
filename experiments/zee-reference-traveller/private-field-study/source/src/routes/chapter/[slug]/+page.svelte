<script lang="ts">
	import { tick } from 'svelte';
	import SiteChrome from '$lib/components/SiteChrome.svelte';
	import Encounter from '$lib/components/Encounter.svelte';
	import ChoicePanel from '$lib/components/ChoicePanel.svelte';
	import FieldAnalysis from '$lib/components/FieldAnalysis.svelte';
	import type { ChoicePath } from '$lib/types/chapter';

	let { data } = $props();
	let selected = $state<ChoicePath | null>(null);

	async function revisitDecision() {
		selected = null;
		await tick();
		const decision = document.getElementById('decision-point');
		decision?.scrollIntoView({ behavior: 'smooth', block: 'start' });
		decision?.focus({ preventScroll: true });
	}
</script>

<svelte:head><title>{data.chapter.title} · Alien Guide</title></svelte:head>

<SiteChrome>
	<div class="route-orientation"><a href="/">← Observatory</a><i></i><a href="/archive/">Expedition log</a></div>
	{#if selected}
		<FieldAnalysis chapter={data.chapter} choice={selected} onretry={revisitDecision} />
	{:else}
		<section class="chapter-page">
			<Encounter chapter={data.chapter}>
				<ChoicePanel choices={data.chapter.choices} onselect={(choice) => (selected = choice)} />
			</Encounter>
		</section>
	{/if}
</SiteChrome>
