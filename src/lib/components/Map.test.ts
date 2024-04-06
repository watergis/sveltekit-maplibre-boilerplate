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
});
