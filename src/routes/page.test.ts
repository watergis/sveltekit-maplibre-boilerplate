import { afterEach, describe, expect, it, vi } from 'vitest';
import { render } from '@testing-library/svelte';
import TopPage from './+page.svelte';

describe('+page.svelte test', () => {
	afterEach(() => {
		vi.clearAllMocks();
	});

	it('shoud show map element', () => {
		const { container } = render(TopPage);
		expect(container.getElementsByClassName('map'));
	});
});
