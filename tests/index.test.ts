import { expect, test } from '@playwright/test';

test.describe('index page test', () => {
	test('index page has expected title', async ({ page }) => {
		await page.goto('/');
		await expect(page).toHaveTitle('Sveltekit Maplibre boilerplate');
	});

	test('index page has expected map container', async ({ page }) => {
		await page.goto('/');
		const mapContainer = page.locator('.map');
		await expect(mapContainer).toBeTruthy();
		await expect(mapContainer).toHaveCount(1);
	});
});
