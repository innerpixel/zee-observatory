<script lang="ts">
	const coordinates = [
		{
			index: '01',
			name: 'Arrival',
			state: 'open now',
			detail: 'Observe a carrier entering a living territory.',
			href: '/arrival/',
			tone: 'arrival'
		},
		{
			index: '02',
			name: 'Firmament',
			state: 'open field',
			detail: 'Read a wider field of relations and orientation.',
			href: 'https://firmament.csmcl.space/',
			tone: 'firmament'
		},
		{
			index: '03',
			name: 'Nexus',
			state: 'distant coordinate',
			detail: 'A reciprocal range · not locally open yet.',
			href: null,
			tone: 'nexus'
		},
		{
			index: '04',
			name: 'Innerstellar',
			state: 'latent possibility',
			detail: 'A personal range · still taking form.',
			href: null,
			tone: 'innerstellar'
		}
	] as const;

	const observations = {
		platform: {
			eyebrow: 'Near field · threshold surface',
			title: 'Landing platform',
			lead: 'An open receiving surface rests at the public edge of the territory. A vessel may appear here without becoming the centre of the scene.',
			note: 'Arrival can begin as something observed: the surrounding field continues before, during and after a carrier is present.',
			state: 'Possible arrival coordinate'
		},
		wisdom: {
			eyebrow: 'Near field · point of contact',
			title: 'Wisdom Star',
			lead: 'The Wisdom Star marks where a traveller’s attention and the companion’s available capacity meet. The local field gathers around that contact.',
			note: 'It is neither the traveller nor the companion alone. It makes the relation between them locally perceptible.',
			state: 'Point of contact perceptible'
		},
		territory: {
			eyebrow: 'Local field · living arrangement',
			title: 'TAIC Territory',
			lead: 'A connected territory remains active beyond the threshold: inhabited surfaces, luminous routes and structures with no single apparent centre.',
			note: 'The Observatory offers a view into this arrangement. It does not claim to explain the whole of it.',
			state: 'Several relations perceptible'
		},
		artifacts: {
			eyebrow: 'Far field · unresolved traffic',
			title: 'Distant artifacts',
			lead: 'Small constructed forms hold position around the territory. Some appear connected; others remain independently suspended.',
			note: 'They may later resolve as memory pods, waiting carriers, instruments or something not yet named.',
			state: 'Purpose remains unresolved'
		}
	} as const;

	type ObservationId = keyof typeof observations;
	let activeObservation: ObservationId | null = null;
	let pointerInside = false;
	let pointerX = 50;
	let pointerY = 50;
	$: observation = activeObservation ? observations[activeObservation] : null;

	function observationAt(x: number, y: number): ObservationId | null {
		if (x < 34 && y > 61) return 'platform';
		if (x >= 34 && x < 51 && y > 44 && y < 82) return 'wisdom';
		if (x > 64 && y < 34) return 'artifacts';
		if (x > 48 && y >= 25 && y < 89) return 'territory';
		return null;
	}

	function trackField(node: HTMLElement) {
		let settleTimer: ReturnType<typeof setTimeout> | undefined;
		let pendingObservation: ObservationId | 'welcome' | null = null;

		const settle = (next: ObservationId | null) => {
			const nextKey = next ?? 'welcome';
			const activeKey = activeObservation ?? 'welcome';

			if (nextKey === activeKey) {
				if (settleTimer) clearTimeout(settleTimer);
				settleTimer = undefined;
				pendingObservation = null;
				return;
			}
			if (nextKey === pendingObservation) return;

			if (settleTimer) clearTimeout(settleTimer);
			pendingObservation = nextKey;
			settleTimer = setTimeout(() => {
				activeObservation = pendingObservation === 'welcome' ? null : pendingObservation;
				pendingObservation = null;
				settleTimer = undefined;
			}, next ? 150 : 230);
		};

		const move = (event: PointerEvent) => {
			const bounds = node.getBoundingClientRect();
			pointerX = ((event.clientX - bounds.left) / bounds.width) * 100;
			pointerY = ((event.clientY - bounds.top) / bounds.height) * 100;
			pointerInside = true;
			settle(observationAt(pointerX, pointerY));
		};
		const leave = () => {
			pointerInside = false;
			settle(null);
		};

		node.addEventListener('pointermove', move);
		node.addEventListener('pointerleave', leave);
		return {
			destroy() {
				if (settleTimer) clearTimeout(settleTimer);
				node.removeEventListener('pointermove', move);
				node.removeEventListener('pointerleave', leave);
			}
		};
	}
</script>

<svelte:head>
	<title>CSMCL.SPACE · Traveler AI Companion (TAIC)</title>
	<meta
		name="description"
		content="The public Observatory edge of CSMCL.SPACE. Arrival and Firmament are perceptible; other ranges remain distant or latent."
	/>
</svelte:head>

<main class="observatory" aria-labelledby="observatory-title">
	<div class="field-grain"></div>

	<header class="masthead">
		<div class="title-lockup">
			<h1 id="observatory-title">
				<span>CSMCL.SPACE</span><i>—</i><em>Traveler AI Companion <b>(TAIC)</b></em>
			</h1>
		</div>

		<nav class="upper-coordinates" aria-label="CSMCL.SPACE coordinates">
			{#each coordinates as coordinate}
				{#if coordinate.href}
					<a href={coordinate.href}><i></i><span>{coordinate.name}</span><b>· {coordinate.state}</b></a>
				{:else}
					<span class="upper-coordinate"><i></i><span>{coordinate.name}</span><b>· {coordinate.state}</b></span>
				{/if}
			{/each}
			<span class="upper-coordinate oracle"><i></i><span>Oracle</span><b>· outer range</b></span>
		</nav>
	</header>

	<section class="welcome" aria-labelledby="welcome-title">
		<div class="welcome-copy">
			{#key activeObservation}
				<div class="copy-state">
					{#if observation}
						<p class="welcome-kicker">{observation.eyebrow}</p>
						<h2 id="welcome-title">{observation.title}</h2>
						<p class="welcome-lead">{observation.lead}</p>
						<p class="welcome-note">{observation.note}</p>
						<div class="welcome-state">
							<span><i></i>{observation.state}</span>
							<span>Observed from the public edge</span>
						</div>
					{:else}
						<p class="welcome-kicker">A place from which to notice</p>
						<h2 id="welcome-title">Welcome to the Observatory.</h2>
						<p class="welcome-lead">
							This is a public edge of CSMCL.SPACE—a quiet place to encounter what is here before deciding where, or whether, to continue.
						</p>
						<p class="welcome-note">
							Move through the reference field to notice what is already perceptible. Arrival, Firmament and one traveller case study remain within Observatory range.
						</p>
						<div class="welcome-state">
							<span><i></i>No arrival required</span>
							<span>Attention remains optional</span>
						</div>
					{/if}
				</div>
			{/key}
		</div>

		<figure class="territory-reference">
			<div class="reference-frame" use:trackField>
				<img src="/images/arrival/taic-territory-wide-002-readable-field.png" alt="A distant view of the TAIC Territory" />
				<div class="reference-veil"></div>
				<span class="reference-index">Local field · 01</span>
				<div
					class:visible={pointerInside}
					class:resolved={activeObservation !== null}
					class="field-cursor"
					style={`--pointer-x: ${pointerX}%; --pointer-y: ${pointerY}%`}
					aria-hidden="true"
				><i></i><span></span></div>
				<button class="hotspot platform" aria-label="Observe the landing platform" onfocus={() => activeObservation = 'platform'} onblur={() => activeObservation = null}></button>
				<button class="hotspot wisdom" aria-label="Observe the Wisdom Star" onfocus={() => activeObservation = 'wisdom'} onblur={() => activeObservation = null}></button>
				<button class="hotspot territory-point" aria-label="Observe the TAIC Territory" onfocus={() => activeObservation = 'territory'} onblur={() => activeObservation = null}></button>
				<button class="hotspot artifacts" aria-label="Observe the distant artifacts" onfocus={() => activeObservation = 'artifacts'} onblur={() => activeObservation = null}></button>
			</div>
			<figcaption><span>TAIC Territory</span><b>Move through the field · no selection required</b></figcaption>
		</figure>
	</section>

	<footer class="lower-field">
		<div class="rail-state">
			<span class="local-field"><b>Local field</b><i></i><span>public interface</span></span>
			<span class="session-state"><i></i><span>no interface required</span></span>
		</div>
		<a class="traveller-trace" href="/case-studies/zee/">
			<span>Case study 001 · Zee</span><b>Follow one traveller’s observable trace ↗</b>
		</a>
	</footer>
</main>

<style>
	:global(body) { background: #020711; }

	.observatory {
		--cyan: #8edfe7;
		--violet: #c6b5f1;
		--amber: #e3c78b;
		position: relative;
		isolation: isolate;
		display: grid;
		grid-template-rows: auto minmax(0, 1fr) auto;
		min-height: 100svh;
		overflow-x: hidden;
		background:
			radial-gradient(circle at 74% 42%, rgba(31, 85, 104, 0.12), transparent 31%),
			radial-gradient(circle at 13% 82%, rgba(91, 73, 128, 0.09), transparent 29%),
			#020711;
		color: rgba(220, 235, 234, 0.82);
		font-family: Inter, ui-sans-serif, system-ui, sans-serif;
		line-height: 1.4;
	}

	.field-grain {
		position: absolute;
		z-index: -1;
		inset: 0;
		pointer-events: none;
	}

	.field-grain {
		opacity: 0.12;
		background-image: radial-gradient(rgba(205, 237, 240, 0.3) 0.5px, transparent 0.7px);
		background-size: 6px 6px;
		mix-blend-mode: soft-light;
	}

	.masthead {
		display: flex;
		align-items: center;
		justify-content: space-between;
		gap: 2rem;
		padding: clamp(1rem, 2.5vh, 1.8rem) clamp(1.2rem, 4vw, 4.5rem) 0;
	}

	.title-lockup { flex: 0 1 auto; }

	.upper-coordinates,
	.traveller-trace span {
		font-size: clamp(0.48rem, 0.56vw, 0.62rem);
		font-weight: 500;
		letter-spacing: 0.18em;
		text-transform: uppercase;
	}

	h1 {
		display: flex;
		align-items: baseline;
		gap: 0.55rem;
		margin: 0;
		color: rgba(190, 207, 205, 0.68);
		font-family: Inter, ui-sans-serif, system-ui, sans-serif;
		font-size: clamp(0.62rem, 0.72vw, 0.78rem);
		font-weight: 500;
		letter-spacing: 0.15em;
		line-height: 1;
		text-transform: uppercase;
		white-space: nowrap;
	}
	h1 span { color: rgba(201, 221, 220, 0.66); letter-spacing: 0.2em; }
	h1 > i { color: rgba(142, 223, 231, 0.3); font: inherit; }
	h1 em {
		color: rgba(190, 207, 205, 0.68);
		font: inherit;
		font-style: normal;
	}
	h1 em b { color: rgba(142, 223, 231, 0.56); font: inherit; }

	.upper-coordinates {
		display: flex;
		align-items: center;
		justify-content: flex-end;
		gap: clamp(0.75rem, 1.45vw, 1.8rem);
		color: rgba(188, 210, 209, 0.38);
		white-space: nowrap;
	}
	.upper-coordinates a,
	.upper-coordinate {
		display: flex;
		align-items: center;
		gap: 0.28rem;
		color: inherit;
		text-decoration: none;
		transition: color 0.45s ease;
	}
	.upper-coordinates i {
		width: 0.2rem;
		aspect-ratio: 1;
		border-radius: 50%;
		background: currentColor;
		box-shadow: 0 0 0.45rem currentColor;
		opacity: 0.58;
	}
	.upper-coordinates b { color: rgba(188, 210, 209, 0.25); font: inherit; }
	.upper-coordinates a:first-child { color: rgba(142, 223, 231, 0.62); }
	.upper-coordinates a:nth-child(2) { color: rgba(198, 181, 241, 0.58); }
	.upper-coordinates a:hover,
	.upper-coordinates a:focus-visible { color: rgba(224, 239, 238, 0.84); outline: none; }
	.upper-coordinate.oracle { color: rgba(198, 181, 241, 0.36); }

	.local-field,
	.session-state { display: flex; align-items: center; gap: 0.55rem; margin: 0; }
	.local-field b { color: rgba(214, 233, 232, 0.74); font-weight: 500; }
	.local-field i,
	.session-state i {
		width: 0.3rem;
		aspect-ratio: 1;
		border-radius: 50%;
		background: var(--cyan);
		box-shadow: 0 0 0.7rem rgba(142, 223, 231, 0.72);
	}
	.session-state i { background: rgba(227, 199, 139, 0.72); box-shadow: 0 0 0.6rem rgba(227, 199, 139, 0.4); }

	.welcome {
		display: grid;
		grid-template-columns: minmax(16rem, 0.72fr) minmax(28rem, 1.38fr);
		align-items: center;
		gap: clamp(2.5rem, 5vw, 6.5rem);
		width: 100%;
		max-width: 110rem;
		margin: 0 auto;
		padding: clamp(2.2rem, 5vh, 5.2rem) clamp(1.2rem, 4vw, 4.5rem) clamp(1.7rem, 3.2vh, 3rem);
	}

	.welcome-copy {
		display: flex;
		align-self: stretch;
		width: 100%;
		max-width: 35rem;
		padding-left: clamp(0rem, 1vw, 1rem);
	}
	.copy-state {
		display: flex;
		width: 100%;
		min-height: clamp(20rem, 39vh, 24.5rem);
		flex: 1;
		flex-direction: column;
		justify-content: flex-start;
		padding-top: clamp(0.35rem, 1vh, 0.75rem);
		animation: copy-resolve 0.48s ease both;
	}
	@keyframes copy-resolve {
		from { opacity: 0.72; }
		to { opacity: 1; }
	}
	.welcome-kicker {
		margin: 0 0 0.8rem;
		color: rgba(142, 223, 231, 0.54);
		font-size: clamp(0.52rem, 0.56vw, 0.64rem);
		font-weight: 500;
		letter-spacing: 0.18em;
		text-transform: uppercase;
	}
	.welcome-copy h2 {
		display: block;
		min-height: 1.96em;
		max-width: 13ch;
		margin: 0;
		color: rgba(190, 205, 203, 0.82);
		font-family: Georgia, 'Times New Roman', serif;
		font-size: clamp(2.2rem, 3.75vw, 4.7rem);
		font-weight: 400;
		line-height: 0.98;
		letter-spacing: -0.045em;
	}
	.welcome-lead {
		max-width: 42ch;
		margin: clamp(1.3rem, 2.6vh, 2.1rem) 0 0;
		color: rgba(188, 205, 203, 0.62);
		font-family: Georgia, 'Times New Roman', serif;
		font-size: clamp(0.98rem, 1.15vw, 1.25rem);
		line-height: 1.55;
	}
	.welcome-note {
		max-width: 55ch;
		margin: 1rem 0 0;
		color: rgba(190, 211, 209, 0.46);
		font-size: clamp(0.7rem, 0.75vw, 0.82rem);
		line-height: 1.65;
	}
	.welcome-state {
		display: flex;
		flex-wrap: wrap;
		gap: 0.8rem 1.4rem;
		margin-top: auto;
		padding-top: 0.9rem;
		border-top: 1px solid rgba(169, 211, 211, 0.11);
		color: rgba(188, 210, 209, 0.34);
		font-size: 0.58rem;
		letter-spacing: 0.11em;
		text-transform: uppercase;
	}
	.welcome-state span { display: flex; align-items: center; gap: 0.5rem; }
	.welcome-state i {
		width: 0.28rem;
		aspect-ratio: 1;
		border-radius: 50%;
		background: var(--cyan);
		box-shadow: 0 0 0.65rem rgba(142, 223, 231, 0.66);
	}

	.territory-reference { min-width: 0; margin: 0; }
	.reference-frame {
		position: relative;
		isolation: isolate;
		overflow: hidden;
		aspect-ratio: 1915 / 821;
		border: 1px solid rgba(160, 207, 211, 0.19);
		background: #030a14;
		box-shadow: 0 1.8rem 5rem rgba(0, 0, 0, 0.36), inset 0 0 0 1px rgba(217, 240, 239, 0.025);
		cursor: none;
	}
	.reference-frame::before,
	.reference-frame::after {
		content: '';
		position: absolute;
		z-index: 2;
		width: 2.8rem;
		height: 2.8rem;
		pointer-events: none;
	}
	.reference-frame::before { top: 0.65rem; left: 0.65rem; border-top: 1px solid rgba(142, 223, 231, 0.36); border-left: 1px solid rgba(142, 223, 231, 0.36); }
	.reference-frame::after { right: 0.65rem; bottom: 0.65rem; border-right: 1px solid rgba(198, 181, 241, 0.28); border-bottom: 1px solid rgba(198, 181, 241, 0.28); }
	.reference-frame img {
		display: block;
		width: 100%;
		height: 100%;
		object-fit: contain;
		filter: saturate(0.82) brightness(0.8) contrast(1.03);
		pointer-events: none;
	}
	.reference-veil {
		position: absolute;
		z-index: 1;
		inset: 0;
		background: linear-gradient(90deg, rgba(2, 7, 15, 0.18), transparent 28%, rgba(2, 7, 15, 0.08));
		pointer-events: none;
	}
	.reference-index {
		position: absolute;
		z-index: 3;
		top: 0.85rem;
		right: 1rem;
		color: rgba(210, 231, 230, 0.38);
		font-size: 0.5rem;
		letter-spacing: 0.14em;
		text-transform: uppercase;
	}
	.field-cursor {
		position: absolute;
		z-index: 5;
		left: var(--pointer-x);
		top: var(--pointer-y);
		width: 1.5rem;
		aspect-ratio: 1;
		border: 1px solid rgba(191, 220, 219, 0.24);
		border-radius: 50%;
		opacity: 0;
		pointer-events: none;
		transform: translate(-50%, -50%) scale(0.7);
		transition:
			left 0.12s cubic-bezier(0.22, 0.7, 0.3, 1),
			top 0.12s cubic-bezier(0.22, 0.7, 0.3, 1),
			border-color 0.35s ease,
			box-shadow 0.35s ease,
			opacity 0.28s ease,
			transform 0.28s ease;
	}
	.field-cursor.visible { opacity: 0.72; transform: translate(-50%, -50%) scale(1); }
	.field-cursor.resolved {
		border-color: rgba(142, 223, 231, 0.68);
		box-shadow: 0 0 1.2rem rgba(142, 223, 231, 0.24), inset 0 0 0.7rem rgba(142, 223, 231, 0.1);
	}
	.field-cursor::before,
	.field-cursor::after {
		content: '';
		position: absolute;
		top: 50%;
		left: 50%;
		background: rgba(202, 227, 226, 0.35);
		transform: translate(-50%, -50%);
	}
	.field-cursor::before { width: 2.2rem; height: 1px; }
	.field-cursor::after { width: 1px; height: 2.2rem; }
	.field-cursor i {
		position: absolute;
		top: 50%;
		left: 50%;
		width: 0.2rem;
		aspect-ratio: 1;
		border-radius: 50%;
		background: rgba(224, 240, 239, 0.8);
		box-shadow: 0 0 0.55rem rgba(142, 223, 231, 0.76);
		transform: translate(-50%, -50%);
	}
	.hotspot {
		position: absolute;
		z-index: 4;
		width: 1.3rem;
		aspect-ratio: 1;
		padding: 0;
		border: 0;
		border-radius: 50%;
		background: transparent;
		cursor: none;
	}
	.hotspot::after {
		content: '';
		position: absolute;
		top: 50%;
		left: 50%;
		width: 0.2rem;
		aspect-ratio: 1;
		border-radius: 50%;
		background: rgba(185, 220, 220, 0.38);
		box-shadow: 0 0 0.45rem rgba(142, 223, 231, 0.38);
		transform: translate(-50%, -50%);
		transition: background 0.35s ease, box-shadow 0.35s ease;
	}
	.hotspot:hover::after,
	.hotspot:focus-visible::after { background: rgba(222, 241, 240, 0.9); box-shadow: 0 0 0.8rem rgba(142, 223, 231, 0.8); }
	.hotspot:focus-visible { outline: 1px solid rgba(142, 223, 231, 0.56); outline-offset: 0.2rem; }
	.hotspot.platform { left: 21%; top: 76%; }
	.hotspot.wisdom { left: 43%; top: 59%; }
	.hotspot.territory-point { left: 72%; top: 50%; }
	.hotspot.artifacts { left: 82%; top: 17%; }
	.territory-reference figcaption {
		display: flex;
		align-items: center;
		justify-content: space-between;
		gap: 1rem;
		padding: 0.65rem 0.1rem 0;
		color: rgba(194, 216, 215, 0.36);
		font-size: 0.58rem;
		letter-spacing: 0.1em;
		text-transform: uppercase;
	}
	.territory-reference figcaption span { color: rgba(142, 223, 231, 0.58); }
	.territory-reference figcaption b { font-weight: 400; }

	.lower-field {
		display: flex;
		align-items: center;
		justify-content: space-between;
		gap: 1.5rem;
		min-height: 2.65rem;
		padding: 0.42rem clamp(1.2rem, 4vw, 4.5rem);
		border-top: 1px solid rgba(169, 211, 211, 0.1);
		background: rgba(2, 8, 17, 0.48);
		color: rgba(188, 210, 209, 0.34);
		font-size: 0.56rem;
		letter-spacing: 0.1em;
		text-transform: uppercase;
	}
	.rail-state { display: flex; align-items: center; gap: clamp(1rem, 2vw, 2.2rem); }
	.traveller-trace { display: flex; align-items: center; gap: 1rem; color: inherit; text-decoration: none; }
	.traveller-trace span { color: rgba(142, 223, 231, 0.5); }
	.traveller-trace b { color: rgba(194, 214, 213, 0.32); font-size: 0.56rem; font-weight: 400; letter-spacing: 0.06em; text-transform: none; transition: color 0.5s ease; }
	.traveller-trace:hover b,
	.traveller-trace:focus-visible b { color: rgba(214, 232, 231, 0.72); }

	@media (max-width: 980px) {
		.welcome { grid-template-columns: minmax(0, 1fr); gap: 2rem; }
		.welcome-copy { max-width: 42rem; }
		.welcome-copy h2 { max-width: none; }
		.upper-coordinates b { display: none; }
	}

	@media (max-width: 620px) {
		.masthead { align-items: flex-start; flex-direction: column; gap: 0.9rem; padding-top: 1rem; }
		h1 { flex-wrap: wrap; row-gap: 0.25rem; white-space: normal; }
		.upper-coordinates { flex-wrap: wrap; justify-content: flex-start; gap: 0.65rem 1rem; white-space: normal; }
		.welcome { padding-top: 2.5rem; }
		.welcome-copy h2 { font-size: clamp(2.2rem, 12vw, 3.4rem); }
		.territory-reference figcaption { align-items: flex-start; flex-direction: column; gap: 0.25rem; }
		.lower-field { align-items: flex-start; flex-direction: column; gap: 0.45rem; }
		.rail-state { width: 100%; justify-content: space-between; }
		.traveller-trace { align-items: flex-start; flex-direction: column; gap: 0.25rem; }
	}

	@media (prefers-reduced-motion: reduce) {
		.field-cursor { transition: none; }
		.copy-state { animation: none; }
	}
</style>
