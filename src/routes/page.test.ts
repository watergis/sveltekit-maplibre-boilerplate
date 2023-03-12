import { afterEach, describe, expect, it, vi } from 'vitest';
import { render } from '@testing-library/svelte';
import TopPage from './+page.svelte';

describe('+page.svelte test', () => {
	afterEach(() => {
		vi.clearAllMocks();
	});

	it('shoud show top page', () => {
		const { getAllByText } = render(TopPage);
		expect(getAllByText('Sveltekit Maplibre boilerplate'));
	});
});
