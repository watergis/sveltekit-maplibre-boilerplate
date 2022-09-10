import { expect, test } from '@playwright/test';

test('index page has expected title', async ({ page }) => {
	await page.goto('/');
	expect(await page.title()).toBe('Sveltekit Maplibre boilerplate');
});
