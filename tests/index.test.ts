import { expect, test } from '@playwright/test';

test.describe('index page test', () => {
	test('index page has expected title', async ({ page }) => {
		await page.goto('/');
		await expect(page).toHaveTitle('Sveltekit Maplibre boilerplate');
	});
});
