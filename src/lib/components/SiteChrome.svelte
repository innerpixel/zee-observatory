<script lang="ts">
	let { children } = $props();
</script>

<div class="shell">
	<header class="top">
		<a class="brand" href="/" aria-label="The Observatory home"><b>✦</b>csmcl<span>.space</span></a>
		<nav aria-label="Primary navigation">
			<a href="/">Observatory</a>
			<a href="/archive/">Transmissions</a>
			<a href="/travellers/zee/#instruments">Instruments</a>
		</nav>
		<div class="signal"><i></i> FIELD ONLINE</div>
	</header>
	<main>{@render children()}</main>
	<footer>
		<span>A CSMCL.SPACE FIELD EXPERIMENT</span>
		<nav aria-label="Footer navigation"><a href="/">Observatory</a><a href="/archive/">Field archive</a></nav>
		<span>LISTENING IS A DOOR WE REOPEN</span>
	</footer>
</div>
