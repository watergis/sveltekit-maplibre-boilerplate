<script lang="ts">
	import { PUBLIC_MAPTILER_KEY } from '$env/static/public';
	import { MAPSTORE_CONTEXT_KEY, type MapStore } from '$lib/stores';
	import {
		AttributionControl,
		GeolocateControl,
		Map,
		NavigationControl,
		ScaleControl
	} from 'maplibre-gl';
	import { getContext, onMount } from 'svelte';

	let mapStore: MapStore = getContext(MAPSTORE_CONTEXT_KEY);

	let mapContainer: HTMLDivElement;

	onMount(() => {
		const map = new Map({
			container: mapContainer,
			style: `https://api.maptiler.com/maps/streets/style.json?key=${PUBLIC_MAPTILER_KEY}`,
			center: [37.138, 0.414],
			zoom: 6,
			hash: true,
			attributionControl: false
		});
		map.addControl(new NavigationControl({}), 'top-right');
		map.addControl(
			new GeolocateControl({
				positionOptions: { enableHighAccuracy: true },
				trackUserLocation: true
			}),
			'top-right'
		);
		map.addControl(new ScaleControl({ maxWidth: 80, unit: 'metric' }), 'bottom-left');
		map.addControl(new AttributionControl({ compact: true }), 'bottom-right');

		mapStore?.set(map);
	});
</script>

<div class="map" data-testid="map" bind:this={mapContainer} />

<style>
	@import 'maplibre-gl/dist/maplibre-gl.css';

	.map {
		position: absolute;
		top: 0;
		bottom: 0;
		width: 100%;
		z-index: 1;
	}
</style>
