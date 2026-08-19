<script lang="ts">
	import { onMount } from 'svelte';

	const channels = {
		auriosynth: {
			eyebrow: '◈ 76.4 · AurioSynth / relational field',
			title: 'A connection is attempting to establish.',
			copy: 'The territory is resolving how the arriving carrier relates to what is already here. The arrival itself remains independently in motion.',
			facts: [['source', 'threshold carrier'], ['relation', 'forming'], ['integrity', 'not yet known']]
		},
		constellary: {
			eyebrow: '❋ 104.2 · Constellary / gathering field',
			title: 'A local constellation is preparing around the arrival.',
			copy: 'Several active points are gathering. The arriving vessel is one relation among them; no centre has been assigned.',
			facts: [['active relations', 'three'], ['latent relations', 'six'], ['centre', 'not assigned']]
		},
		theurgist: {
			eyebrow: '⧖ 41.8 · Theurgist / continuity field',
			title: 'The arrival has entered local continuity.',
			copy: 'A trace is retained while several trajectories remain possible. Holding, approaching, and leaving are all still legible.',
			facts: [['trace', 'new local cycle'], ['next direction', 'unresolved'], ['action required', 'none']]
		}
	} as const;

	type ChannelId = keyof typeof channels;
	type FrequencyState = ChannelId | 'quiet';

	const order = Object.keys(channels) as ChannelId[];
	let active: FrequencyState = 'quiet';
	let activeIndex = -1;
	let changing = false;
	let reducedMotion = false;
	let cycleTimer: ReturnType<typeof setTimeout> | undefined;

	let current = {
		eyebrow: 'Local reception · unresolved spectrum',
		title: 'Several frequencies are present.',
		copy: 'One carrier is near the threshold. Two others remain in local transit. No address has been established.',
		facts: [['near arrival', 'one'], ['distant carriers', 'two'], ['reply required', 'no']] as readonly (readonly [string, string])[]
	};

	function scheduleNext(delay = 17000) {
		if (cycleTimer) clearTimeout(cycleTimer);
		if (reducedMotion) return;
		cycleTimer = setTimeout(() => {
			activeIndex = (activeIndex + 1) % order.length;
			resolveFrequency(order[activeIndex], false);
		}, delay);
	}

	function resolveFrequency(id: ChannelId, chosen = false) {
		activeIndex = order.indexOf(id);
		changing = true;

		setTimeout(() => {
			active = id;
			current = channels[id];
			changing = false;
		}, 460);

		scheduleNext(chosen ? 24000 : 17000);
	}

	onMount(() => {
		reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
		scheduleNext(4800);
		return () => {
			if (cycleTimer) clearTimeout(cycleTimer);
		};
	});
</script>

<svelte:head>
	<title>Arrival · CSMCL.SPACE Observatory</title>
	<meta
		name="description"
		content="Observe an arrival within the living TAIC Territory and tune to several locally perceptible frequencies."
	/>
</svelte:head>

<main class="scene" data-frequency={active} aria-label="An observed arrival in the TAIC Territory">
	<div class="stage" aria-hidden="true">
		<img class="territory" src="/images/arrival/taic-territory-wide-002-readable-field.png" alt="" />

		<svg class="field-relations" viewBox="0 0 1915 821" preserveAspectRatio="none">
			<path class="relation relation-aurio" pathLength="100" d="M 318 610 C 460 574, 650 520, 865 472" />
			<path class="relation relation-theurgist" pathLength="100" d="M -40 508 C 210 430, 495 435, 752 362 S 1120 238, 1420 287" />
		</svg>

		<div class="arrival-constellation">
			<i></i><i></i><i></i><i></i><i></i><i></i><i></i>
		</div>

		<div class="ring-traffic"></div>
		<div class="sail-traffic"><img src="/images/arrival/alien-sail-vessel.png" alt="" /></div>
		<div class="pad-glow"></div>
		<div class="platform-vessel-position">
			<div class="platform-vessel-hover">
				<img class="platform-vessel" src="/images/arrival/zee-pod-vessel.png" alt="" />
			</div>
		</div>
		<div class="scene-tone"></div>
	</div>

	<a class="study-mark" href="/">CSMCL.SPACE · Observatory</a>

	<section class:changing class="receiver" data-active={active} aria-labelledby="receiver-title">
		<header class="receiver-context receiver-dynamic" aria-live="polite">
			<p>{current.eyebrow}</p>
			<h1 id="receiver-title">{current.title}</h1>
		</header>

		<div class="receiver-rail">
			<p class="receiver-copy receiver-dynamic">{current.copy}</p>

			<dl class="receiver-facts receiver-dynamic">
				{#each current.facts as fact}
					<div><dt>{fact[0]}</dt><dd>{fact[1]}</dd></div>
				{/each}
			</dl>

			<nav class="frequencies" aria-label="Locally perceptible frequencies">
				{#each order as id}
					<button class:auriosynth={id === 'auriosynth'} class:constellary={id === 'constellary'} class:theurgist={id === 'theurgist'} type="button" aria-pressed={active === id} onclick={() => resolveFrequency(id, true)}>
						<i></i><span><span>{id === 'auriosynth' ? '76.4' : id === 'constellary' ? '104.2' : '41.8'}</span> {id === 'auriosynth' ? 'AurioSynth' : id === 'constellary' ? 'Constellary' : 'Theurgist'}</span>
					</button>
				{/each}
			</nav>
		</div>
	</section>
</main>

<style>
	:global(body) { background: #020711; }

	.scene {
		--aurio: #8be3c2;
		--constellary: #d8efff;
		--theurgist: #c7adff;
		position: relative;
		isolation: isolate;
		width: 100%;
		height: 100svh;
		overflow: hidden;
		background: #020711;
		color: rgba(232, 241, 240, 0.82);
		font-family: Inter, ui-sans-serif, system-ui, sans-serif;
	}

	.stage {
		position: absolute;
		top: 50%;
		left: 50%;
		width: min(100vw, calc(100vh * 1915 / 821));
		aspect-ratio: 1915 / 821;
		transform: translate(-50%, -50%);
		overflow: hidden;
	}

	.territory,
	.field-relations,
	.arrival-constellation,
	.scene-tone { position: absolute; inset: 0; width: 100%; height: 100%; }
	.territory { z-index: 0; object-fit: fill; user-select: none; }
	.field-relations { z-index: 1; overflow: visible; pointer-events: none; }

	.relation {
		fill: none;
		stroke-linecap: round;
		vector-effect: non-scaling-stroke;
		transition: opacity 1.8s ease, filter 1.8s ease;
	}
	.relation-aurio { stroke: rgba(139, 227, 194, 0.72); stroke-width: 1; stroke-dasharray: 2 12; opacity: 0.1; animation: relation-drift 18s linear infinite; }
	.relation-theurgist { stroke: rgba(199, 173, 255, 0.66); stroke-width: 0.8; stroke-dasharray: 1 18; opacity: 0.08; animation: relation-drift 28s linear infinite reverse; }
	.scene[data-frequency='auriosynth'] .relation-aurio { opacity: 0.62; filter: drop-shadow(0 0 6px rgba(139, 227, 194, 0.45)); }
	.scene[data-frequency='theurgist'] .relation-theurgist { opacity: 0.52; filter: drop-shadow(0 0 6px rgba(199, 173, 255, 0.38)); }

	.arrival-constellation { z-index: 2; pointer-events: none; }
	.arrival-constellation i {
		position: absolute;
		width: 0.18rem;
		aspect-ratio: 1;
		border-radius: 50%;
		background: var(--constellary);
		box-shadow: 0 0 0.7rem rgba(216, 239, 255, 0.8);
		opacity: 0.14;
		animation: constellation-breathe 7s ease-in-out infinite;
		transition: opacity 1.8s ease, transform 2.4s ease;
	}
	.arrival-constellation i:nth-child(1) { left: 12.5%; top: 58%; animation-delay: -1s; }
	.arrival-constellation i:nth-child(2) { left: 16.2%; top: 52%; animation-delay: -3s; }
	.arrival-constellation i:nth-child(3) { left: 20.4%; top: 55%; animation-delay: -5s; }
	.arrival-constellation i:nth-child(4) { left: 23%; top: 63%; animation-delay: -2s; }
	.arrival-constellation i:nth-child(5) { left: 20%; top: 70%; animation-delay: -6s; }
	.arrival-constellation i:nth-child(6) { left: 14.1%; top: 68%; animation-delay: -4s; }
	.arrival-constellation i:nth-child(7) { left: 25.5%; top: 47%; animation-delay: -7s; }
	.scene[data-frequency='constellary'] .arrival-constellation i { opacity: 0.82; transform: scale(1.3); }

	.platform-vessel-position {
		position: absolute;
		z-index: 3;
		left: 20%;
		top: 72.7%;
		width: 19.5%;
		aspect-ratio: 3 / 2;
		transform: translate(-50%, -50%);
		pointer-events: none;
	}
	.platform-vessel-hover { position: absolute; inset: 0; transform-origin: 51% 58%; animation: platform-hover 9s ease-in-out infinite; }
	.platform-vessel { width: 100%; height: 100%; object-fit: contain; filter: brightness(0.87) saturate(0.88) drop-shadow(0 0.35rem 0.7rem rgba(0, 0, 0, 0.64)) drop-shadow(0 0 1rem rgba(108, 193, 232, 0.16)); }

	.pad-glow {
		position: absolute;
		z-index: 2;
		left: 19.7%;
		top: 82.1%;
		width: 8.8%;
		aspect-ratio: 3.2 / 1;
		transform: translate(-50%, -50%);
		border-radius: 50%;
		background: radial-gradient(ellipse, rgba(123, 222, 233, 0.2) 0%, rgba(91, 157, 211, 0.08) 44%, transparent 74%);
		filter: blur(0.32rem);
		mix-blend-mode: screen;
		animation: pad-breathe 9s ease-in-out infinite;
	}

	.sail-traffic { position: absolute; z-index: 2; left: 39%; top: 30%; width: 13%; aspect-ratio: 3 / 2; opacity: 0.54; animation: sail-approach 34s ease-in-out infinite; }
	.sail-traffic img { width: 100%; height: 100%; object-fit: contain; transform: scaleX(-1) rotate(-5deg); filter: brightness(0.7) saturate(0.75); }
	.ring-traffic { position: absolute; z-index: 2; left: 29.5%; top: 18%; width: 2.1%; aspect-ratio: 1; border: 1px solid rgba(213, 187, 123, 0.58); border-radius: 50%; opacity: 0.5; animation: ring-hold 18s ease-in-out infinite; }
	.ring-traffic::before,
	.ring-traffic::after { content: ''; position: absolute; border-radius: 50%; }
	.ring-traffic::before { inset: 27%; background: radial-gradient(circle, #d9f5f5 0 8%, #77cbd9 20%, #163957 48%, transparent 72%); box-shadow: 0 0 0.7rem rgba(116, 215, 226, 0.6); }
	.ring-traffic::after { inset: 42% -24%; border-top: 1px solid rgba(224, 195, 128, 0.78); border-bottom: 1px solid rgba(224, 195, 128, 0.34); transform: rotate(-18deg); }
	.scene-tone { z-index: 4; background: linear-gradient(0deg, rgba(1, 4, 10, 0.25), transparent 26%), linear-gradient(90deg, rgba(0, 3, 9, 0.08), transparent 43%); pointer-events: none; }

	.study-mark {
		position: fixed;
		z-index: 10;
		top: clamp(1rem, 3vh, 2rem);
		right: clamp(1rem, 3vw, 3rem);
		color: rgba(218, 232, 232, 0.44);
		font-size: 0.56rem;
		letter-spacing: 0.22em;
		text-decoration: none;
		text-transform: uppercase;
	}
	.study-mark:hover,
	.study-mark:focus-visible { color: rgba(218, 232, 232, 0.75); }

	.receiver { position: fixed; z-index: 12; inset: 0; color: rgba(232, 241, 240, 0.82); pointer-events: none; }
	.receiver-context { position: absolute; top: clamp(0.8rem, 2.2vh, 1.5rem); right: clamp(20rem, 31vw, 30rem); left: clamp(1rem, 4vw, 4rem); }
	.receiver-context p { min-height: 1rem; margin: 0 0 0.55rem; color: var(--frequency-color, rgba(190, 218, 218, 0.56)); font-size: clamp(0.5rem, 0.55vw, 0.62rem); font-weight: 500; letter-spacing: 0.17em; text-transform: uppercase; }
	.receiver-context h1 { margin: 0; color: rgba(207, 226, 225, 0.62); font-size: clamp(0.62rem, 0.7vw, 0.76rem); font-weight: 400; line-height: 1.3; letter-spacing: 0.11em; text-transform: uppercase; white-space: nowrap; }

	.receiver-rail {
		position: absolute;
		right: clamp(1rem, 3vw, 3rem);
		bottom: clamp(0.7rem, 1.7vh, 1.25rem);
		left: clamp(1rem, 4vw, 4rem);
		display: grid;
		grid-template-columns: minmax(19rem, 1.35fr) minmax(18rem, 0.9fr) auto;
		align-items: center;
		gap: clamp(1rem, 2vw, 2.5rem);
		min-height: 4.8rem;
		padding: 0.7rem 0 0.15rem;
		border-top: 1px solid rgba(163, 211, 213, 0.18);
		background: linear-gradient(90deg, rgba(2, 8, 17, 0.42), rgba(2, 8, 17, 0.1) 72%, transparent);
		backdrop-filter: blur(0.22rem);
		pointer-events: auto;
	}
	.receiver-rail::before { content: ''; position: absolute; top: -1px; left: 0; width: 18%; height: 1px; background: var(--frequency-color, rgba(142, 223, 231, 0.72)); box-shadow: 0 0 0.7rem var(--frequency-color, rgba(142, 223, 231, 0.45)); transition: width 1.2s ease; }
	.receiver[data-active='auriosynth'] { --frequency-color: var(--aurio); }
	.receiver[data-active='constellary'] { --frequency-color: var(--constellary); }
	.receiver[data-active='theurgist'] { --frequency-color: var(--theurgist); }
	.receiver[data-active]:not([data-active='quiet']) .receiver-rail::before { width: 43%; }
	.receiver-dynamic { transition: opacity 0.42s ease, transform 0.42s ease; }
	.receiver.changing .receiver-dynamic { opacity: 0; transform: translateY(0.18rem); }
	.receiver-copy { max-width: 47ch; margin: 0; color: rgba(203, 219, 218, 0.52); font-size: clamp(0.68rem, 0.75vw, 0.82rem); line-height: 1.52; }
	.receiver-facts { display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 0.55rem; margin: 0; padding: 0; }
	.receiver-facts dt,
	.receiver-facts dd { margin: 0; }
	.receiver-facts dt { color: rgba(189, 210, 209, 0.34); font-size: 0.49rem; letter-spacing: 0.13em; text-transform: uppercase; }
	.receiver-facts dd { margin-top: 0.22rem; color: rgba(221, 233, 232, 0.62); font-size: clamp(0.58rem, 0.65vw, 0.7rem); white-space: nowrap; }

	.frequencies { display: flex; justify-content: flex-end; gap: 0.45rem; margin: 0; padding: 0; }
	.frequencies button { --channel: rgba(204, 220, 219, 0.43); display: grid; grid-template-columns: auto 1fr; align-items: center; gap: 0.38rem; min-width: 0; padding: 0.38rem 0.5rem; border: 1px solid rgba(178, 210, 209, 0.13); border-radius: 999px; background: rgba(2, 8, 15, 0.24); color: rgba(204, 220, 219, 0.43); cursor: pointer; font-size: 0.5rem; letter-spacing: 0.09em; text-transform: uppercase; transition: border-color 0.6s ease, color 0.6s ease, background 0.6s ease; }
	.frequencies button > i { width: 0.28rem; aspect-ratio: 1; border-radius: 50%; background: currentColor; box-shadow: 0 0 0.45rem currentColor; }
	.frequencies button span span { opacity: 0.56; }
	.frequencies button.auriosynth { --channel: var(--aurio); }
	.frequencies button.constellary { --channel: var(--constellary); }
	.frequencies button.theurgist { --channel: var(--theurgist); }
	.frequencies button:hover,
	.frequencies button:focus-visible,
	.frequencies button[aria-pressed='true'] { border-color: color-mix(in srgb, var(--channel) 45%, transparent); background: color-mix(in srgb, var(--channel) 7%, transparent); color: var(--channel); outline: none; }

	@keyframes platform-hover { 0%, 100% { transform: translate3d(-0.08rem, 0.14rem, 0) rotate(-0.28deg); } 48% { transform: translate3d(0.15rem, -0.36rem, 0) rotate(0.24deg); } }
	@keyframes pad-breathe { 0%, 100% { opacity: 0.48; transform: translate(-50%, -50%) scale(0.94); } 48% { opacity: 0.74; transform: translate(-50%, -50%) scale(1.05); } }
	@keyframes sail-approach { 0%, 100% { transform: translate3d(-0.45rem, 0.2rem, 0) scale(0.96); opacity: 0.42; } 55% { transform: translate3d(1.4rem, -0.35rem, 0) scale(1); opacity: 0.62; } }
	@keyframes ring-hold { 0%, 100% { transform: translate3d(0, 0.15rem, 0) rotate(-4deg); } 50% { transform: translate3d(0.28rem, -0.25rem, 0) rotate(5deg); } }
	@keyframes relation-drift { to { stroke-dashoffset: -84; } }
	@keyframes constellation-breathe { 0%, 100% { filter: brightness(0.72); } 50% { filter: brightness(1.25); } }

	@media (max-width: 1180px) and (min-width: 761px) {
		.receiver-rail { grid-template-columns: minmax(16rem, 1.2fr) minmax(18rem, 1fr); }
		.frequencies { grid-column: 1 / -1; justify-content: flex-start; }
	}

	@media (max-width: 760px) {
		.study-mark { display: none; }
		.receiver-context { top: 1rem; right: 1rem; left: 1rem; }
		.receiver-context h1 { white-space: normal; }
		.receiver-rail { right: 1rem; bottom: 1rem; left: 1rem; display: block; padding: 0.75rem; background: rgba(2, 8, 17, 0.68); }
		.receiver-facts { margin-top: 0.7rem; }
		.frequencies { flex-wrap: wrap; justify-content: flex-start; margin-top: 0.7rem; }
	}

	@media (prefers-reduced-motion: reduce) {
		.platform-vessel-hover,
		.pad-glow,
		.sail-traffic,
		.ring-traffic,
		.arrival-constellation i,
		.relation { animation: none; }
	}
</style>
