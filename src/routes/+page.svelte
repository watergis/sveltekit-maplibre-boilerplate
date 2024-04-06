<script lang="ts">
	import { createMapStore, MAPSTORE_CONTEXT_KEY } from '$lib/stores';
	import Map from '$lib/components/Map.svelte';
	import { setContext } from 'svelte';

	const mapStore = createMapStore();
	setContext(MAPSTORE_CONTEXT_KEY, mapStore);

	const title = 'Sveltekit Maplibre boilerplate';
</script>

<sveltekit:head>
	<title>{title}</title>
</sveltekit:head>

<div>
	<Map />
</div>
