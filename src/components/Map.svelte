<script lang="ts">
	import { onMount } from 'svelte';
	import {
		Map,
		NavigationControl,
		GeolocateControl,
		ScaleControl,
		AttributionControl
	} from 'maplibre-gl';
	const VITE_MAPTILER_KEY = import.meta.env.VITE_MAPTILER_KEY;

	let map: Map;
	let mapContainer: HTMLDivElement;

	onMount(async () => {
		map = new Map({
			container: mapContainer,
			style: `https://api.maptiler.com/maps/streets/style.json?key=${VITE_MAPTILER_KEY}`,
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
	});
</script>

<div class="map" id="map" bind:this={mapContainer} />

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
