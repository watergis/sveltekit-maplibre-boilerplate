<script lang="ts">
	import Map from '$lib/components/Map.svelte';

	const title = 'Sveltekit Maplibre boilerplate';
</script>

<sveltekit:head>
	<title>{title}</title>
</sveltekit:head>

<div>
	<Map />
</div>
