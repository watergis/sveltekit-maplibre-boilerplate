import type { PlaywrightTestConfig } from '@playwright/test';

const config: PlaywrightTestConfig = {
	testDir: './tests',
	webServer: {
		command: 'pnpm build && pnpm preview',
		port: 4173
	}
};

export default config;
