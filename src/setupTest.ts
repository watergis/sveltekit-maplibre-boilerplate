// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import matchers from '@testing-library/jest-dom/matchers';
import { expect, vi } from 'vitest';
expect.extend(matchers);

// create mock of Map object for test
// please add maplibre's properties which are used in test
vi.mock('maplibre-gl', () => {
	return {
		Map: vi.fn(() => ({
			addControl: vi.fn(),
			on: vi.fn(),
			once: vi.fn(),
			remove: vi.fn(),
			getStyle: vi.fn(),
			getPaintProperty: vi.fn(),
			setPaintProperty: vi.fn(),
			getLayoutProperty: vi.fn(),
			setLayoutProperty: vi.fn()
		})),
		GeolocateControl: vi.fn(),
		NavigationControl: vi.fn(),
		ScaleControl: vi.fn(),
		AttributionControl: vi.fn()
	};
});
