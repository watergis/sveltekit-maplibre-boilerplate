import { beforeEach, afterEach, describe, expect, it, vi } from 'vitest';
import { render, screen } from '@testing-library/svelte';
import type { Map as MaplibreMap } from 'maplibre-gl';
import Map from './Map.svelte';
import { map } from '$lib/stores';

describe('Map.svelte test', () => {
	let _map: MaplibreMap;
	beforeEach(() => {
		map.subscribe((value) => (_map = value));
	});

	afterEach(() => {
		vi.clearAllMocks();
	});

	it('shoud save map object in stores', () => {
		render(Map);
		expect(screen.getAllByTestId('map')).toBeTruthy();
		expect(_map).toBeTruthy();
	});
});
