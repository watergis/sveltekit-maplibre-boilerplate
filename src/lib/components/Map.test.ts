import { afterEach, describe, expect, it, vi } from 'vitest';
import { render, screen } from '@testing-library/svelte';
import Map from './Map.svelte';

describe('Map.svelte test', () => {
	afterEach(() => {
		vi.clearAllMocks();
	});

	it('shoud create map class', () => {
		render(Map);
		expect(screen.getAllByTestId('map')).toBeTruthy();
	});

	it('should add maplibre navigation control', () => {
		const { container } = render(Map);
		expect(container.getElementsByClassName('maplibregl-control-container')).toBeTruthy();
		expect(container.getElementsByClassName('maplibregl-ctrl-zoom-in')).toBeTruthy();
		expect(container.getElementsByClassName('maplibregl-ctrl-zoom-out')).toBeTruthy();
		expect(container.getElementsByClassName('maplibregl-ctrl-compass')).toBeTruthy();
	});

	it('should add maplibre geolocate control', () => {
		const { container } = render(Map);
		expect(container.getElementsByClassName('maplibregl-control-container')).toBeTruthy();
		expect(container.getElementsByClassName('maplibregl-ctrl-geolocate')).toBeTruthy();
	});

	it('should add maplibre scale control', () => {
		const { container } = render(Map);
		expect(container.getElementsByClassName('maplibregl-control-container')).toBeTruthy();
		expect(container.getElementsByClassName('maplibregl-ctrl-scale')).toBeTruthy();
		expect(container.getElementsByClassName('maplibregl-compact')).toBeTruthy();
	});

	it('should add maplibre attribution control', () => {
		const { container } = render(Map);
		expect(container.getElementsByClassName('maplibregl-control-container')).toBeTruthy();
		expect(container.getElementsByClassName('maplibregl-ctrl-attrib')).toBeTruthy();
	});
});
