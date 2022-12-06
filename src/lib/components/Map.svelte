<script lang="ts">
	import { onMount } from 'svelte';
	import {
		Map,
		NavigationControl,
		GeolocateControl,
		ScaleControl,
		AttributionControl
	} from 'maplibre-gl';
	import { map } from '$lib/stores';
	import { PUBLIC_MAPTILER_KEY } from '$env/static/public';

	let mapContainer: HTMLDivElement;

	onMount(async () => {
		const _map = new Map({
			container: mapContainer,
			style: `https://api.maptiler.com/maps/streets/style.json?key=${PUBLIC_MAPTILER_KEY}`,
			center: [37.138, 0.414],
			zoom: 6,
			hash: true,
			attributionControl: false
		});
		_map.addControl(new NavigationControl({}), 'top-right');
		_map.addControl(
			new GeolocateControl({
				positionOptions: { enableHighAccuracy: true },
				trackUserLocation: true
			}),
			'top-right'
		);
		_map.addControl(new ScaleControl({ maxWidth: 80, unit: 'metric' }), 'bottom-left');
		_map.addControl(new AttributionControl({ compact: true }), 'bottom-right');

		map.update(() => _map);
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
