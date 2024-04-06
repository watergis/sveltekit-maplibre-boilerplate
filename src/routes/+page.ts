import type { PageLoad } from './$types';

export const load: PageLoad = async () => {
	const title = 'Sveltekit Maplibre boilerplate';
	const site_name = '@watergis/sveltekit-maplibre-boilerplate';
	const site_description = 'This is sveltekit boilerplate for building Maplibre GL JS website.';

	return {
		title,
		site_name,
		site_description
	};
};
