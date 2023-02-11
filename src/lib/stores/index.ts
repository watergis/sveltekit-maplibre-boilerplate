import type { Map } from 'maplibre-gl';
import { writable } from 'svelte/store';

// map store for maplibre-gl object
function createMap() {
	const { subscribe, set } = writable<Map>(undefined);

	return {
		subscribe: subscribe,
		set: async (map: Map) => {
			set(map);
		}
	};
}
export const map = createMap();
