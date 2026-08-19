<script lang="ts">
	import { onMount } from 'svelte';

	type FieldView = 'presence' | 'carrier' | 'station' | 'approach';

	const observations = {
		carrier: {
			label: 'Passive reception · local carrier',
			title: 'A signal crosses the field.',
			copy: 'The smaller vessel transmits continuously. The carrier is not addressed to this position.',
			facts: [
				['carrier', 'active'],
				['destination', 'not supplied'],
				['reply requested', 'no']
			]
		},
		station: {
			label: 'Optical return · receiving structure',
			title: 'One port remains awake.',
			copy: 'Traffic passes through the structure’s orbit. No approach path is presently assigned.',
			facts: [
				['relative motion', 'stable'],
				['receiving ports', 'one active'],
				['approach path', 'unassigned']
			]
		},
		approach: {
			label: 'Observatory response · local vector',
			title: 'A path appears beside what is already there.',
			copy: 'The receiving port changes state. Other traffic continues without altering course.',
			facts: [
				['approach vector', 'stable'],
				['identity exchange', 'none'],
				['departure route', 'open']
			]
		}
	} as const;

	let view = $state<FieldView>('presence');
	let signalAvailable = $state(false);
	let stillnessAcknowledged = $state(false);

	let current = $derived(
		view === 'presence'
			? signalAvailable
				? {
						label: 'Passive observation · faint carrier',
						title: 'The quiet contains a signal.',
						copy: 'A small vessel continues transmitting while the Observatory holds its orbit.',
						facts: [
							['local motion', 'stable'],
							['open carriers', 'one faint'],
							['action required', 'none']
						]
					}
				: {
						label: 'Passive observation · uncharted structure',
						title: 'A place holds above the blue planet.',
						copy: 'Distant traffic crosses its orbit. One receiving port remains lit.',
						facts: [
							['relative motion', 'stable'],
							['immediate threat', 'none detected'],
							['action required', 'none']
						]
					}
			: observations[view]
	);

	onMount(() => {
		const timer = window.setTimeout(() => {
			signalAvailable = true;
		}, 5200);

		return () => window.clearTimeout(timer);
	});

	function observe(target: 'carrier' | 'station') {
		if (target === 'carrier') signalAvailable = true;
		view = target;
	}

	function remain() {
		view = 'presence';
		stillnessAcknowledged = true;
	}

	function resetField() {
		view = 'presence';
		signalAvailable = false;
		stillnessAcknowledged = false;
		window.setTimeout(() => (signalAvailable = true), 1800);
	}
</script>

<svelte:head>
	<title>Legacy Arrival Study · The CSMCL.SPACE Observatory</title>
	<meta
		name="description"
		content="A quiet exterior arrival at the CSMCL.SPACE Observatory. Observe, listen, approach, or remain."
	/>
	<meta name="theme-color" content="#02050a" />
</svelte:head>

<main class="arrival" class:signal-visible={signalAvailable} class:approaching={view === 'approach'}>
	<div class="field" aria-hidden="true">
		<img class="station-base" src="/images/arrival/observatory-station-base.png" alt="" />
		<img class="vessel-overlay" src="/images/arrival/zee-pod-vessel.png" alt="" />
		<div class="field-shade"></div>
		<div class="grain"></div>

		<div class="ambient-traffic traffic-one"><i></i></div>
		<div class="ambient-traffic traffic-two"><i></i></div>
		<div class="ambient-traffic traffic-three"><i></i></div>

		<div class="carrier-path"></div>
		<div class="approach-path"><i></i></div>
		<div class="receiving-port"></div>
	</div>

	<header class="arrival-mark">
		<a href="/arrival/" aria-label="The CSMCL.SPACE Observatory arrival">
			<i></i>
			<span>CSMCL.SPACE</span>
			<b>Observatory</b>
		</a>
		<nav aria-label="Arrival navigation">
			<span>Exterior threshold · 001</span>
			<a href="/travellers/zee/"><span class="existing-label">Zee </span>field station ↗</a>
		</nav>
	</header>

	<div class="local-status" aria-hidden="true">
		<i></i>
		<span>{view === 'approach' ? 'approach vector held' : 'holding position'}</span>
	</div>

	<button
		class="field-target station-target"
		class:selected={view === 'station' || view === 'approach'}
		type="button"
		onclick={() => observe('station')}
		aria-label="Inspect the Observatory"
	>
		<span>receiving structure</span>
	</button>

	<button
		class="field-target vessel-target"
		class:selected={view === 'carrier'}
		type="button"
		onclick={() => observe('carrier')}
		tabindex={signalAvailable ? 0 : -1}
		aria-hidden={!signalAvailable}
		aria-label="Listen to the faint vessel carrier"
	>
		<span>faint carrier</span>
	</button>

	<section class="observation" aria-labelledby="observation-title" aria-live="polite">
		<div class="observation-summary">
			<p class="observation-label">{current.label}</p>
			<h1 id="observation-title">{current.title}</h1>
		</div>

		<div class="observation-reading">
			<p class="observation-copy">{current.copy}</p>
			{#if stillnessAcknowledged && view === 'presence'}
				<p class="stillness-note">Nothing closes because you remain.</p>
			{/if}
		</div>

		<div class="observation-response">
			<dl>
				{#each current.facts as fact}
					<div><dt>{fact[0]}</dt><dd>{fact[1]}</dd></div>
				{/each}
			</dl>

			<div class="observation-actions">
				{#if view === 'presence'}
					{#if signalAvailable}
						<button class="primary-action" type="button" onclick={() => observe('carrier')}>Listen to carrier</button>
					{/if}
					<button type="button" onclick={() => observe('station')}>Inspect Observatory</button>
					<button type="button" onclick={remain}>Remain here</button>
				{:else if view === 'carrier'}
					<button type="button" onclick={() => observe('station')}>Inspect Observatory</button>
					<button type="button" onclick={remain}>Keep listening</button>
				{:else if view === 'station'}
					<button class="primary-action" type="button" onclick={() => (view = 'approach')}>Request approach</button>
					{#if signalAvailable}<button type="button" onclick={() => observe('carrier')}>Return to carrier</button>{/if}
					<button type="button" onclick={remain}>Remain outside</button>
				{:else}
					<button class="primary-action" type="button" onclick={remain}>Hold position</button>
					<button type="button" onclick={resetField}>Reset field</button>
				{/if}
			</div>
		</div>
	</section>

	<p class="prototype-note">Release 001 · temporary visual field</p>
</main>

<style>
	:global(body) {
		background: #02050a;
	}

	.arrival {
		--arrival-ink: #cbd5d0;
		--arrival-muted: #8f9c97;
		--arrival-dim: #66726e;
		--arrival-cyan: #79dfe2;
		--arrival-violet: #aa98ef;
		--arrival-amber: #ddb97f;
		--arrival-line: rgba(176, 225, 224, 0.22);
		position: relative;
		isolation: isolate;
		width: 100%;
		max-width: 100vw;
		min-height: 100svh;
		overflow: hidden;
		background: #02050a;
		color: var(--arrival-ink);
		font-family: var(--mono);
	}

	.field,
	.station-base,
	.field-shade,
	.grain {
		position: absolute;
		inset: 0;
	}

	.field {
		z-index: -4;
		background: #02050a;
	}

	.station-base {
		width: 100%;
		height: 100%;
		object-fit: contain;
		object-position: center;
		filter: brightness(0.88) saturate(0.84);
		transform: scale(1);
		transition: filter 1.4s ease, transform 7s ease;
	}

	.approaching .station-base {
		filter: brightness(0.96) saturate(0.92);
		transform: scale(1.01);
	}

	.vessel-overlay {
		position: absolute;
		z-index: 2;
		top: 35%;
		left: -2.5vw;
		width: min(34vw, 32rem);
		height: auto;
		filter: brightness(0.72) saturate(0.78) drop-shadow(0 0 1.2rem rgba(91, 106, 194, 0.16));
		pointer-events: none;
		transform-origin: center;
		animation: vessel-hover 13s ease-in-out infinite;
	}

	.field-shade {
		background:
			linear-gradient(90deg, rgba(1, 4, 8, 0.34), rgba(1, 4, 8, 0.03) 48%, rgba(1, 4, 8, 0.08)),
			linear-gradient(0deg, rgba(1, 3, 7, 0.46), transparent 30%),
			radial-gradient(circle at 64% 36%, transparent 12%, rgba(1, 3, 7, 0.02) 52%, rgba(1, 3, 7, 0.2));
	}

	.grain {
		opacity: 0.045;
		background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 180 180' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.9' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='.34'/%3E%3C/svg%3E");
		pointer-events: none;
	}

	.arrival-mark {
		position: absolute;
		z-index: 20;
		top: 0;
		left: 0;
		right: 0;
		display: flex;
		align-items: center;
		justify-content: space-between;
		min-height: 4.4rem;
		padding: 0 clamp(1rem, 3vw, 2.8rem);
		border-bottom: 1px solid rgba(255, 255, 255, 0.09);
		background: linear-gradient(rgba(2, 5, 9, 0.54), transparent);
		font-size: 0.58rem;
		letter-spacing: 0.15em;
		text-transform: uppercase;
	}

	.arrival-mark a {
		color: inherit;
		text-decoration: none;
	}

	.arrival-mark > a {
		display: flex;
		align-items: center;
		gap: 0.65rem;
	}

	.arrival-mark > a i,
	.local-status i {
		width: 0.38rem;
		height: 0.38rem;
		border-radius: 50%;
		background: var(--arrival-cyan);
		box-shadow: 0 0 0.8rem var(--arrival-cyan);
	}

	.arrival-mark > a span {
		color: rgba(233, 240, 236, 0.86);
	}

	.arrival-mark > a b {
		color: var(--arrival-dim);
		font-weight: 400;
	}

	.arrival-mark nav {
		display: flex;
		gap: clamp(1rem, 3vw, 2.6rem);
		color: rgba(233, 240, 236, 0.42);
	}

	.arrival-mark nav a {
		color: rgba(233, 240, 236, 0.62);
	}

	.arrival-mark nav a:hover,
	.arrival-mark nav a:focus-visible {
		color: var(--arrival-cyan);
	}

	.local-status {
		position: absolute;
		z-index: 10;
		top: 5.5rem;
		left: clamp(1rem, 3vw, 2.8rem);
		display: flex;
		align-items: center;
		gap: 0.6rem;
		color: rgba(233, 240, 236, 0.48);
		font-size: 0.54rem;
		letter-spacing: 0.14em;
		text-transform: uppercase;
	}

	.local-status i {
		width: 0.3rem;
		height: 0.3rem;
		animation: breathe 3.2s ease-in-out infinite;
	}

	.observation {
		position: absolute;
		z-index: 20;
		left: clamp(1rem, 2.2vw, 2.2rem);
		right: clamp(1rem, 2.2vw, 2.2rem);
		bottom: clamp(1rem, 2.2vh, 1.6rem);
		display: grid;
		grid-template-columns: minmax(14rem, 0.82fr) minmax(16rem, 1fr) minmax(27rem, 1.25fr);
		gap: clamp(1rem, 2.4vw, 2.4rem);
		align-items: center;
		width: auto;
		min-width: 0;
		padding: clamp(0.85rem, 1.5vw, 1.2rem) clamp(1rem, 2vw, 1.8rem);
		border: 1px solid rgba(176, 225, 224, 0.1);
		background: linear-gradient(105deg, rgba(3, 9, 14, 0.44), rgba(3, 8, 13, 0.26));
		box-shadow: 0 1rem 3rem rgba(0, 0, 0, 0.12);
		backdrop-filter: blur(7px) saturate(0.86);
	}

	.observation-label,
	.prototype-note {
		margin: 0;
		color: rgba(121, 223, 226, 0.78);
		font-size: 0.55rem;
		letter-spacing: 0.17em;
		text-transform: uppercase;
	}

	.observation-summary,
	.observation-reading {
		min-width: 0;
		padding-right: clamp(1rem, 2vw, 2rem);
		border-right: 1px solid rgba(176, 225, 224, 0.11);
	}

	.observation-summary {
		display: flex;
		min-height: 4.65rem;
		flex-direction: column;
		justify-content: center;
	}

	.observation h1 {
		margin: 0.48rem 0 0;
		max-width: 29rem;
		color: #82a99d;
		font: 400 clamp(1.28rem, 1.55vw, 1.55rem) / 1.08 var(--serif);
		letter-spacing: -0.03em;
	}

	.observation-copy {
		margin: 0;
		max-width: 27rem;
		color: #929f9a;
		font: 400 clamp(0.92rem, 1.15vw, 1.02rem) / 1.46 var(--serif);
		overflow-wrap: anywhere;
	}

	.observation dl {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		gap: 0;
		margin: 0;
		padding: 0;
		border: 0;
	}

	.observation dl div {
		min-width: 0;
		padding-right: 0.7rem;
	}

	.observation dt,
	.observation dd {
		margin: 0;
		font-size: 0.52rem;
		line-height: 1.6;
		letter-spacing: 0.08em;
		text-transform: uppercase;
	}

	.observation dt {
		color: var(--arrival-dim);
	}

	.observation dd {
		color: #aebbb5;
	}

	.observation-actions {
		display: flex;
		flex-wrap: wrap;
		gap: 0.45rem;
		margin-top: 0.72rem;
	}

	.observation-actions button {
		padding: 0.58rem 0.76rem;
		border: 1px solid rgba(121, 223, 226, 0.27);
		border-radius: 100px;
		background: rgba(3, 11, 16, 0.52);
		color: #98a59f;
		cursor: pointer;
		font-size: 0.55rem;
		letter-spacing: 0.1em;
		text-transform: uppercase;
		transition: border-color 180ms ease, color 180ms ease, background 180ms ease;
	}

	.observation-actions button:hover,
	.observation-actions button:focus-visible {
		border-color: var(--arrival-cyan);
		color: var(--arrival-cyan);
		outline: none;
	}

	.observation-actions .primary-action {
		border-color: rgba(121, 223, 226, 0.52);
		background: rgba(121, 223, 226, 0.09);
		color: var(--arrival-cyan);
	}

	.stillness-note {
		margin: 0.48rem 0 0;
		color: var(--arrival-dim);
		font: italic 0.86rem var(--serif);
	}

	.field-target {
		position: absolute;
		z-index: 8;
		border: 1px solid transparent;
		border-radius: 50%;
		background: transparent;
		color: var(--arrival-cyan);
		cursor: pointer;
		transition: border-color 300ms ease, box-shadow 300ms ease, opacity 500ms ease;
	}

	.field-target::before,
	.field-target::after {
		position: absolute;
		width: 0.8rem;
		height: 0.8rem;
		border-color: currentColor;
		border-style: solid;
		content: '';
		opacity: 0;
		transition: opacity 240ms ease;
	}

	.field-target::before {
		top: -1px;
		left: -1px;
		border-width: 1px 0 0 1px;
	}

	.field-target::after {
		right: -1px;
		bottom: -1px;
		border-width: 0 1px 1px 0;
	}

	.field-target span {
		position: absolute;
		display: none;
		padding: 0.3rem 0.45rem;
		background: rgba(2, 6, 10, 0.78);
		font-size: 0.5rem;
		letter-spacing: 0.13em;
		text-transform: uppercase;
		white-space: nowrap;
	}

	.field-target:hover,
	.field-target:focus-visible,
	.field-target.selected {
		border-color: rgba(121, 223, 226, 0.46);
		box-shadow: 0 0 2.5rem rgba(121, 223, 226, 0.1);
		outline: none;
	}

	.field-target:hover::before,
	.field-target:hover::after,
	.field-target:focus-visible::before,
	.field-target:focus-visible::after,
	.field-target.selected::before,
	.field-target.selected::after,
	.field-target:hover span,
	.field-target:focus-visible span,
	.field-target.selected span {
		display: block;
		opacity: 1;
	}

	.station-target {
		top: 19%;
		right: 7%;
		width: 50%;
		height: 49%;
	}

	.station-target span {
		top: 8%;
		right: 8%;
	}

	.vessel-target {
		top: 43%;
		left: 4%;
		width: 23%;
		height: 28%;
		color: var(--arrival-violet);
		opacity: 0;
		pointer-events: none;
	}

	.signal-visible .vessel-target {
		opacity: 1;
		pointer-events: auto;
	}

	.vessel-target span {
		top: -1.6rem;
		left: 7%;
		color: var(--arrival-violet);
	}

	.carrier-path {
		position: absolute;
		z-index: 2;
		top: 49%;
		left: 20%;
		width: 44%;
		height: 1px;
		background: linear-gradient(90deg, var(--arrival-violet), transparent 48%, var(--arrival-cyan));
		box-shadow: 0 0 0.7rem rgba(121, 223, 226, 0.3);
		opacity: 0;
		transform: rotate(-7deg) scaleX(0.72);
		transform-origin: left;
		transition: opacity 1s ease, transform 2.2s ease;
	}

	.signal-visible .carrier-path {
		opacity: 0.54;
		transform: rotate(-7deg) scaleX(1);
	}

	.receiving-port {
		position: absolute;
		z-index: 4;
		top: 45%;
		right: 14%;
		width: 0.48rem;
		height: 0.48rem;
		border-radius: 50%;
		background: var(--arrival-amber);
		box-shadow: 0 0 1rem var(--arrival-amber);
		transition: background 600ms ease, box-shadow 600ms ease, transform 600ms ease;
	}

	.approaching .receiving-port {
		background: var(--arrival-cyan);
		box-shadow: 0 0 2rem var(--arrival-cyan);
		transform: scale(1.45);
	}

	.approach-path {
		position: absolute;
		z-index: 3;
		top: 57%;
		left: 45%;
		width: 38%;
		height: 13%;
		border-top: 1px solid rgba(121, 223, 226, 0.7);
		border-radius: 50%;
		opacity: 0;
		transform: rotate(-12deg) scaleX(0.6);
		transform-origin: right;
		transition: opacity 900ms ease, transform 1.5s ease;
	}

	.approach-path i {
		position: absolute;
		top: -0.25rem;
		left: 0;
		width: 0.4rem;
		height: 0.4rem;
		border-radius: 50%;
		background: var(--arrival-cyan);
		box-shadow: 0 0 1rem var(--arrival-cyan);
	}

	.approaching .approach-path {
		opacity: 0.72;
		transform: rotate(-12deg) scaleX(1);
	}

	.ambient-traffic {
		position: absolute;
		z-index: 2;
		width: 8rem;
		height: 1px;
		background: linear-gradient(90deg, transparent, rgba(166, 196, 209, 0.5), transparent);
		opacity: 0.32;
		animation: drift 16s linear infinite;
	}

	.ambient-traffic i {
		position: absolute;
		top: -1px;
		left: 48%;
		width: 3px;
		height: 3px;
		border-radius: 50%;
		background: #d9e9e9;
		box-shadow: 0 0 0.5rem #d9e9e9;
	}

	.traffic-one {
		top: 17%;
		left: 13%;
		animation-delay: -4s;
	}

	.traffic-two {
		top: 31%;
		left: 55%;
		animation-delay: -11s;
		animation-duration: 22s;
	}

	.traffic-three {
		top: 74%;
		left: 73%;
		animation-delay: -7s;
		animation-duration: 19s;
	}

	.prototype-note {
		position: absolute;
		z-index: 20;
		top: 5.25rem;
		right: clamp(1rem, 3vw, 2.8rem);
		color: rgba(233, 240, 236, 0.3);
		font-size: 0.48rem;
	}

	@keyframes breathe {
		50% { opacity: 0.3; }
	}

	@keyframes drift {
		from { transform: translateX(-10vw); }
		to { transform: translateX(42vw); }
	}

	@keyframes vessel-hover {
		0%, 100% { transform: translate3d(0, 0, 0) rotate(-0.25deg); }
		50% { transform: translate3d(0.45rem, -0.35rem, 0) rotate(0.25deg); }
	}

	@media (max-width: 1080px) {
		.observation {
			grid-template-columns: minmax(14rem, 0.78fr) minmax(18rem, 1.22fr);
		}

		.observation-reading {
			border-right: 0;
		}

		.observation-response {
			display: grid;
			grid-column: 1 / -1;
			grid-template-columns: minmax(18rem, 1fr) auto;
			gap: 1rem;
			align-items: center;
			padding-top: 0.75rem;
			border-top: 1px solid rgba(176, 225, 224, 0.1);
		}

		.observation-actions {
			margin-top: 0;
		}
	}

	@media (max-width: 760px) {
		.arrival {
			min-height: max(100svh, 46rem);
		}

		.station-base {
			object-fit: cover;
			object-position: 58% center;
		}

		.vessel-overlay {
			top: 36%;
			left: -18vw;
			width: 72vw;
		}

		.field-shade {
			background:
				linear-gradient(0deg, rgba(1, 4, 8, 0.56), transparent 48%),
				radial-gradient(circle at 58% 32%, transparent 8%, rgba(1, 3, 7, 0.06) 52%, rgba(1, 3, 7, 0.28));
		}

		.arrival-mark nav span {
			display: none;
		}

		.arrival-mark nav .existing-label {
			display: none;
		}

		.arrival-mark > a b {
			display: none;
		}

		.local-status {
			top: 4.9rem;
		}

		.observation {
			left: 0.75rem;
			right: 0.75rem;
			bottom: 0.75rem;
			width: auto;
			max-width: calc(100% - 1.5rem);
			padding: 1rem;
			grid-template-columns: 1fr;
			gap: 0.7rem;
		}

		.observation-summary,
		.observation-reading {
			padding-right: 0;
			border-right: 0;
		}

		.observation-response {
			display: block;
			grid-column: auto;
			padding-top: 0.7rem;
		}

		.observation h1 {
			font-size: clamp(1.35rem, 6vw, 1.65rem);
			overflow-wrap: anywhere;
		}

		.observation-summary {
			min-height: 4.15rem;
		}

		.observation dl {
			grid-template-columns: 1fr;
			gap: 0.2rem;
		}

		.observation dl div {
			display: flex;
			justify-content: space-between;
			gap: 1rem;
		}

		.observation-actions button {
			padding: 0.52rem 0.62rem;
			font-size: 0.5rem;
		}

		.observation-actions {
			margin-top: 0.72rem;
		}

		.field-target,
		.prototype-note {
			display: none;
		}
	}

	@media (max-width: 430px) {
		.arrival-mark nav a {
			max-width: 7.6rem;
			text-align: right;
		}

		.observation-copy {
			font-size: 0.96rem;
		}
	}

	@media (prefers-reduced-motion: reduce) {
		.station-base,
		.carrier-path,
		.receiving-port,
		.approach-path,
		.observation-actions button {
			transition: none;
		}

		.ambient-traffic,
		.vessel-overlay,
		.local-status i {
			animation: none;
		}
	}
</style>
