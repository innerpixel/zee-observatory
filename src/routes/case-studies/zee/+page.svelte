<script lang="ts">
	const resonanceFields = [
		'listening and receptivity',
		'emotional weather',
		'boundaries and burden',
		'encounters between unfamiliar beings'
	] as const;
</script>

<svelte:head>
	<title>Zee · Reference Traveller 001 · CSMCL.SPACE Observatory</title>
	<meta
		name="description"
		content="An Observatory case study of Zee: one traveller's deliberately limited public projection, resonance interests, and observable arrival trace."
	/>
</svelte:head>

<main class="case-study" aria-labelledby="zee-title">
	<div class="field-grain"></div>

	<header class="masthead">
		<a class="product-lockup" href="/">
			<span>CSMCL.SPACE</span><i>—</i><em>Traveler AI Companion <b>(TAIC)</b></em>
		</a>
		<div class="study-coordinate"><i></i><span>Observatory</span><b>· case study 001</b></div>
	</header>

	<section class="hero">
		<div class="identity">
			<p class="eyebrow">Reference traveller 001 · selected public projection</p>
			<h1 id="zee-title">Zee</h1>
			<p class="designation">Field observer · unfinished listener</p>
			<p class="lead">
				Zee offers one observable example of how a traveller may become perceptible across CSMCL.SPACE without making an entire personal space public.
			</p>
			<p class="context">
				This is an Observatory case study, not a universal profile. Another traveller may choose a completely different public shape—or none at all.
			</p>
			<div class="projection-state">
				<span><i></i>Public trace · limited</span>
				<span>Private field · not observable</span>
			</div>
		</div>

		<figure class="portrait">
			<div class="portrait-frame">
				<img src="/images/09-observatory-hero.webp" alt="Zee making an observation while the blue planet fills the field beyond" />
				<div class="portrait-veil"></div>
				<span class="frame-index">Public fragment · Z–001</span>
			</div>
			<figcaption><span>Zee · observable presence</span><b>Inner environment not exposed</b></figcaption>
		</figure>
	</section>

	<section class="public-field" aria-label="Zee public case-study information">
		<article class="field-panel resonance">
			<p class="panel-index">01 · signals open to resonance</p>
			<h2>What Zee is listening for</h2>
			<ul>
				{#each resonanceFields as field}<li><i></i><span>{field}</span></li>{/each}
			</ul>
		</article>

		<a class="field-panel arrival" href="/arrival/">
			<p class="panel-index">02 · observable trace</p>
			<h2>Arrival</h2>
			<p>A carrier is perceptible near the TAIC threshold. The event continues whether or not it is observed.</p>
			<span class="panel-action">Follow the trace →</span>
		</a>

		<article class="field-panel correspondence">
			<p class="panel-index">03 · distant relation</p>
			<h2>Home-world correspondence</h2>
			<p>Communication beyond the local field exists. Its contents have not been included in this public projection.</p>
			<span class="panel-status">Signal acknowledged · contents private</span>
		</article>

		<article class="field-panel boundary">
			<p class="panel-index">04 · publication boundary</p>
			<h2>What remains Zee’s</h2>
			<p>Working instruments, field notes, unfinished encounters and internal studies remain outside Observatory range.</p>
			<span class="panel-status">Absence here does not imply absence there</span>
		</article>
	</section>

	<footer class="lower-field">
		<a href="/">← Return to the Observatory</a>
		<p>One reference traveller · many other forms remain possible</p>
	</footer>
</main>

<style>
	:global(body) { background: #020711; }

	.case-study {
		--cyan: #8edfe7;
		--violet: #c6b5f1;
		--amber: #e3c78b;
		position: relative;
		isolation: isolate;
		min-height: 100svh;
		overflow-x: hidden;
		background:
			radial-gradient(circle at 76% 30%, rgba(29, 81, 100, 0.12), transparent 32%),
			radial-gradient(circle at 12% 78%, rgba(86, 70, 123, 0.08), transparent 30%),
			#020711;
		color: rgba(194, 214, 212, 0.68);
		font-family: Inter, ui-sans-serif, system-ui, sans-serif;
		line-height: 1.5;
	}

	.field-grain {
		position: absolute;
		z-index: -1;
		inset: 0;
		opacity: 0.11;
		background-image: radial-gradient(rgba(205, 237, 240, 0.3) 0.5px, transparent 0.7px);
		background-size: 6px 6px;
		mix-blend-mode: soft-light;
		pointer-events: none;
	}

	.masthead {
		display: flex;
		align-items: center;
		justify-content: space-between;
		gap: 2rem;
		padding: clamp(1rem, 2.5vh, 1.8rem) clamp(1.2rem, 4vw, 4.5rem) 0;
	}

	.product-lockup,
	.study-coordinate,
	.eyebrow,
	.panel-index,
	.projection-state,
	.portrait figcaption,
	.lower-field {
		font-size: clamp(0.5rem, 0.56vw, 0.62rem);
		font-weight: 500;
		letter-spacing: 0.15em;
		text-transform: uppercase;
	}

	.product-lockup {
		display: flex;
		align-items: baseline;
		gap: 0.55rem;
		color: rgba(190, 207, 205, 0.68);
		font-size: clamp(0.62rem, 0.72vw, 0.78rem);
		text-decoration: none;
		white-space: nowrap;
	}
	.product-lockup span { color: rgba(201, 221, 220, 0.66); letter-spacing: 0.2em; }
	.product-lockup i { color: rgba(142, 223, 231, 0.3); font-style: normal; }
	.product-lockup em { font-style: normal; }
	.product-lockup b { color: rgba(142, 223, 231, 0.56); font: inherit; }

	.study-coordinate { display: flex; align-items: center; gap: 0.35rem; color: rgba(198, 181, 241, 0.46); }
	.study-coordinate i { width: 1.8rem; height: 1px; background: linear-gradient(90deg, transparent, rgba(198, 181, 241, 0.4)); }
	.study-coordinate b { color: rgba(194, 213, 212, 0.28); font: inherit; }

	.hero {
		display: grid;
		grid-template-columns: minmax(18rem, 0.72fr) minmax(31rem, 1.28fr);
		align-items: center;
		gap: clamp(2.5rem, 5vw, 6.5rem);
		max-width: 110rem;
		margin: 0 auto;
		padding: clamp(3.2rem, 7vh, 6.5rem) clamp(1.2rem, 4vw, 4.5rem) clamp(2.3rem, 4.5vh, 4rem);
	}

	.identity { display: flex; min-height: clamp(22rem, 43vh, 28rem); flex-direction: column; justify-content: flex-start; padding: 0.6rem 0 0 clamp(0rem, 1vw, 1rem); }
	.eyebrow { margin: 0 0 0.85rem; color: rgba(142, 223, 231, 0.52); }
	h1 {
		margin: 0;
		color: rgba(193, 208, 206, 0.84);
		font-family: Georgia, 'Times New Roman', serif;
		font-size: clamp(4.4rem, 7.4vw, 8.5rem);
		font-weight: 400;
		line-height: 0.85;
		letter-spacing: -0.06em;
	}
	.designation { margin: 1.2rem 0 0; color: rgba(198, 181, 241, 0.56); font-size: clamp(0.72rem, 0.8vw, 0.88rem); letter-spacing: 0.05em; }
	.lead { max-width: 43ch; margin: 1.6rem 0 0; color: rgba(188, 205, 203, 0.66); font-family: Georgia, 'Times New Roman', serif; font-size: clamp(1rem, 1.2vw, 1.28rem); line-height: 1.55; }
	.context { max-width: 58ch; margin: 1rem 0 0; color: rgba(188, 208, 206, 0.42); font-size: clamp(0.68rem, 0.75vw, 0.82rem); line-height: 1.65; }
	.projection-state { display: flex; flex-wrap: wrap; gap: 0.8rem 1.5rem; margin-top: auto; padding-top: 1rem; border-top: 1px solid rgba(169, 211, 211, 0.11); color: rgba(188, 210, 209, 0.32); }
	.projection-state span { display: flex; align-items: center; gap: 0.5rem; }
	.projection-state i { width: 0.28rem; aspect-ratio: 1; border-radius: 50%; background: var(--cyan); box-shadow: 0 0 0.65rem rgba(142, 223, 231, 0.66); }

	.portrait { min-width: 0; margin: 0; }
	.portrait-frame { position: relative; isolation: isolate; overflow: hidden; aspect-ratio: 16 / 8.7; border: 1px solid rgba(160, 207, 211, 0.18); background: #030a14; box-shadow: 0 1.8rem 5rem rgba(0, 0, 0, 0.34); }
	.portrait-frame::before,
	.portrait-frame::after { content: ''; position: absolute; z-index: 3; width: 2.7rem; height: 2.7rem; pointer-events: none; }
	.portrait-frame::before { top: 0.65rem; left: 0.65rem; border-top: 1px solid rgba(142, 223, 231, 0.34); border-left: 1px solid rgba(142, 223, 231, 0.34); }
	.portrait-frame::after { right: 0.65rem; bottom: 0.65rem; border-right: 1px solid rgba(198, 181, 241, 0.26); border-bottom: 1px solid rgba(198, 181, 241, 0.26); }
	.portrait-frame img { display: block; width: 100%; height: 100%; object-fit: cover; object-position: center 43%; filter: saturate(0.78) brightness(0.7) contrast(1.03); }
	.portrait-veil { position: absolute; z-index: 1; inset: 0; background: linear-gradient(90deg, rgba(2, 7, 15, 0.15), transparent 38%, rgba(2, 7, 15, 0.08)); pointer-events: none; }
	.frame-index { position: absolute; z-index: 4; top: 0.85rem; right: 1rem; color: rgba(210, 231, 230, 0.36); font-size: 0.5rem; letter-spacing: 0.14em; text-transform: uppercase; }
	.portrait figcaption { display: flex; justify-content: space-between; gap: 1rem; padding: 0.65rem 0.1rem 0; color: rgba(194, 216, 215, 0.3); }
	.portrait figcaption span { color: rgba(142, 223, 231, 0.54); }
	.portrait figcaption b { font-weight: 400; }

	.public-field {
		display: grid;
		grid-template-columns: repeat(4, minmax(0, 1fr));
		margin: 0 clamp(1.2rem, 4vw, 4.5rem) clamp(2rem, 4vh, 3.5rem);
		border-top: 1px solid rgba(169, 211, 211, 0.14);
		border-bottom: 1px solid rgba(169, 211, 211, 0.09);
		background: rgba(3, 10, 20, 0.36);
	}
	.field-panel { position: relative; display: flex; min-height: 11rem; min-width: 0; flex-direction: column; padding: clamp(1rem, 1.5vw, 1.45rem); border-right: 1px solid rgba(169, 211, 211, 0.08); color: inherit; text-decoration: none; }
	.field-panel::before { content: ''; position: absolute; top: -1px; left: 0; width: 18%; height: 1px; background: rgba(142, 223, 231, 0.48); box-shadow: 0 0 0.7rem rgba(142, 223, 231, 0.24); }
	.field-panel.arrival::before { background: rgba(198, 181, 241, 0.56); box-shadow: 0 0 0.7rem rgba(198, 181, 241, 0.25); }
	.field-panel.correspondence::before { background: rgba(227, 199, 139, 0.44); }
	.field-panel.boundary::before { background: rgba(151, 201, 224, 0.32); }
	.panel-index { margin: 0; color: rgba(194, 216, 215, 0.29); }
	.field-panel h2 { margin: 1.2rem 0 0.55rem; color: rgba(193, 209, 207, 0.74); font-family: Georgia, 'Times New Roman', serif; font-size: clamp(1rem, 1.25vw, 1.25rem); font-weight: 400; }
	.field-panel p:not(.panel-index) { max-width: 39ch; margin: 0; color: rgba(188, 208, 206, 0.44); font-size: clamp(0.64rem, 0.7vw, 0.76rem); line-height: 1.6; }
	.field-panel ul { display: grid; gap: 0.45rem; margin: 0.35rem 0 0; padding: 0; list-style: none; }
	.field-panel li { display: flex; align-items: center; gap: 0.55rem; color: rgba(188, 208, 206, 0.46); font-size: clamp(0.62rem, 0.68vw, 0.74rem); }
	.field-panel li i { width: 0.18rem; aspect-ratio: 1; border-radius: 50%; background: rgba(142, 223, 231, 0.56); box-shadow: 0 0 0.35rem rgba(142, 223, 231, 0.4); }
	.panel-action,
	.panel-status { margin-top: auto; padding-top: 1rem; color: rgba(142, 223, 231, 0.48); font-size: 0.58rem; letter-spacing: 0.07em; }
	.panel-status { color: rgba(194, 214, 213, 0.3); }
	.arrival { transition: background 0.5s ease, transform 0.5s ease; }
	.arrival:hover,
	.arrival:focus-visible { background: rgba(198, 181, 241, 0.045); outline: none; transform: translateY(-0.12rem); }

	.lower-field { display: flex; justify-content: space-between; gap: 1.5rem; min-height: 2.7rem; padding: 0.55rem clamp(1.2rem, 4vw, 4.5rem); border-top: 1px solid rgba(169, 211, 211, 0.08); color: rgba(188, 210, 209, 0.27); }
	.lower-field a { color: rgba(142, 223, 231, 0.45); text-decoration: none; }
	.lower-field p { margin: 0; }

	@media (max-width: 1050px) {
		.hero { grid-template-columns: minmax(0, 1fr); }
		.identity { min-height: 25rem; max-width: 46rem; }
		.public-field { grid-template-columns: repeat(2, minmax(0, 1fr)); }
	}

	@media (max-width: 640px) {
		.masthead { align-items: flex-start; flex-direction: column; gap: 0.9rem; }
		.product-lockup { flex-wrap: wrap; row-gap: 0.25rem; white-space: normal; }
		.hero { padding-top: 3.5rem; }
		.identity { min-height: 30rem; }
		h1 { font-size: clamp(4.5rem, 26vw, 7rem); }
		.portrait figcaption,
		.lower-field { align-items: flex-start; flex-direction: column; }
		.public-field { grid-template-columns: minmax(0, 1fr); }
		.field-panel { min-height: 10rem; }
	}

	@media (prefers-reduced-motion: reduce) {
		.arrival { transition: none; }
	}
</style>
