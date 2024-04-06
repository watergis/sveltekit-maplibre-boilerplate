import { describe, expect, it } from 'vitest';
import { createMapStore } from '$lib/stores';

describe('mapStore.ts test', () => {
	const mapStore = createMapStore();

	it('should define mapStore', () => {
		expect(mapStore).toBeTruthy();
	});
});
