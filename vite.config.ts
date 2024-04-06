import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vitest/config';

export default defineConfig({
	plugins: [sveltekit()],
	build: {
		chunkSizeWarningLimit: 1000
	},
	ssr: {
		noExternal: ['maplibre-gl']
	},
	test: {
		include: ['src/**/*.{test,spec}.{js,ts}'],
		globals: true,
		environment: 'jsdom',
		setupFiles: ['./src/setupTest.ts'],
		coverage: {
			provider: 'istanbul',
			reporter: ['text', 'json', 'html']
		}
	}
});
