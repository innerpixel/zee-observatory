<script lang="ts">
	import SiteChrome from '$lib/components/SiteChrome.svelte';
	import { chapterManifest } from '$lib/chapters/manifest';
	import { findings, instruments, zeeProfile } from '$lib/observatory/data';

	const latest = chapterManifest.find((entry) => entry.status === 'published');
</script>

<svelte:head>
	<title>Zee · Traveller Trace 001 · CSMCL.SPACE Observatory</title>
	<meta
		name="description"
		content="Zee’s field observations of human listening, emotional weather, and encounters from the blue planet."
	/>
</svelte:head>

<SiteChrome>
	<div class="observatory-page">
		<section class="observatory-hero" aria-labelledby="observatory-title">
			<img src="/images/09-observatory-hero.webp" alt="Zee records observations while Earth fills the Observatory window" />
			<div class="observatory-shade"></div>
			<div class="hero-copy">
				<p class="eyebrow">Traveller trace 001 · Blue planet field station</p>
				<h1 id="observatory-title">The<br /><em>Observatory</em></h1>
				<p>{zeeProfile.arrival}</p>
				<div class="hero-actions">
					{#if latest}<a class="primary" href={`/chapter/${latest.slug}/`}>Enter latest transmission →</a>{/if}
					<a class="quiet-link" href="#meet-zee">Meet the observer ↓</a>
				</div>
			</div>
			<div class="hero-status"><i></i><span>OBSERVATORY ONLINE</span><b>EARTH · ORBIT 03</b></div>
		</section>

		<section class="observer-intro" id="meet-zee">
			<div class="section-index"><span>01</span><i></i><b>THE OBSERVER</b></div>
			<div class="observer-grid">
				<div>
					<p class="eyebrow">{zeeProfile.designation}</p>
					<h2>Meet Zee.</h2>
				</div>
				<div class="prose-large">
					<p>{zeeProfile.mission}</p>
					<p>Zee did not come to correct humans. Zee came because human interaction produces something the instruments cannot fully explain.</p>
				</div>
			</div>
		</section>

		<section class="homeworld" id="homeworld">
			<div class="homeworld-orbit" aria-hidden="true"><i></i><i></i><span>≋</span></div>
			<div class="homeworld-copy">
				<p class="eyebrow">A fragment from Zee’s world</p>
				<h2>Feelings rarely remain entirely inside the beings who feel them.</h2>
				<p>They gather between participants like weather. Grief lowers the ceiling. Urgency moves like wind. Embarrassment creates a warm violet fog everyone politely pretends is atmospheric.</p>
				<p>Earth is different. Humans carry entire climates beneath the skin.</p>
				<blockquote>“Zee initially considered this a design defect. Mara called it privacy.”</blockquote>
			</div>
		</section>

		<section class="latest-finding" id="findings">
			<div class="section-index"><span>02</span><i></i><b>FINDINGS FROM THE BLUE PLANET</b></div>
			{#each findings as finding}
				<article class="finding-card">
					<div class="finding-number">F–{finding.id}</div>
					<div><p class="eyebrow">Verified through encounter</p><h2>{finding.title}</h2><p>{finding.summary}</p></div>
					<a href={`/chapter/${finding.chapterSlug}/`}>Revisit the encounter ↗</a>
				</article>
			{/each}
		</section>

		<section class="instrument-section" id="instruments">
			<div class="section-index"><span>03</span><i></i><b>FIELD INSTRUMENTS</b></div>
			<div class="instrument-heading"><h2>Tools for noticing what words leave invisible.</h2><p>The instruments do not measure goodness, intelligence, or truth. They help Zee remain curious about what a conversation permits next.</p></div>
			<div class="instrument-grid">
				{#each instruments as instrument, index}
					<article><span class="instrument-symbol">{instrument.symbol}</span><small>INSTRUMENT 0{index + 1}</small><h3>{instrument.name}</h3><p>{instrument.description}</p></article>
				{/each}
			</div>
		</section>

		<section class="expedition-cta">
			<div><p class="eyebrow">The study continues</p><h2>Humans are unfinished listeners.</h2><p>Follow the completed encounters, developing signals, and questions Zee has not yet learned how to ask.</p></div>
			<a class="primary" href="/archive/">Open the expedition log →</a>
		</section>
	</div>
</SiteChrome>
