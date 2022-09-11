import type { PlaywrightTestConfig } from '@playwright/test';

const config: PlaywrightTestConfig = {
	webServer: {
		// if kit.paths.base is not set in production, the following settings can be used.
		// command: 'npm run build && npm run preview',
		// port: 4173,
		// if Github page is used as production, use the following settings
		command: 'npm run dev',
		port: 5173
	}
};

export default config;
