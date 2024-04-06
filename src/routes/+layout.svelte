<script lang="ts">
	import { afterNavigate } from '$app/navigation';
	import { page } from '$app/stores';

	let title = $page.data.title;
	let site_name = $page.data.site_name;
	let site_description = $page.data.site_description;
	let socialImage = {
		image: '/favicon.png',
		width: '200',
		height: '200'
	};

	afterNavigate(() => {
		title = $page.data.title;
		site_name = $page.data.site_name;
		site_description = $page.data.site_description;
	});
</script>

<svelte:head>
	<title>{title}</title>
	<meta property="og:site_name" content={site_name} />
	<meta property="og:type" content="article" />
	<meta name="description" content={site_description} />
	<meta property="og:description" content={site_description} />
	<meta name="twitter:description" content={site_description} />
	<meta property="og:title" content={title} />
	<meta property="og:image" content={socialImage.image} />
	<meta property="og:image:width" content={socialImage.width} />
	<meta property="og:image:height" content={socialImage.height} />
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content={title} />
	<meta name="twitter:image" content={socialImage.image} />

	<style>
		html,
		body {
			margin: 0;
			padding: 0;
			min-height: 100vh;
			/* mobile viewport bug fix */
			min-height: -webkit-fill-available;
			font-family: ProximaNova, sans-serif;
		}

		html {
			height: -webkit-fill-available;
		}
	</style>
</svelte:head>

<slot />
