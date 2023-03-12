import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vitest/config';

export default defineConfig({
	plugins: [sveltekit()],
	build: {
		chunkSizeWarningLimit: 1000
	},
	test: {
		include: ['src/**/*.{test,spec}.{js,ts}'],
		threads: false,
		globals: true,
		environment: 'jsdom',
		setupFiles: ['./src/setupTest.ts'],
		coverage: {
			provider: 'istanbul',
			reporter: ['text', 'json', 'html']
		}
	}
});
