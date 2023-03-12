# svelte-maplibre-boilerplate

![license](https://img.shields.io/github/license/watergis/sveltekit-maplibre-boilerplate)
[![Netlify Status](https://api.netlify.com/api/v1/badges/be68de24-2ebe-48ef-bc7a-a5f27544f551/deploy-status)](https://app.netlify.com/sites/sveltekit-maplibre-boilerplace/deploys)
[![CI](https://github.com/watergis/sveltekit-maplibre-boilerplate/actions/workflows/ci.yml/badge.svg)](https://github.com/watergis/sveltekit-maplibre-boilerplate/actions/workflows/ci.yml)

This is a simple and smart boilerplate to integrate maplibre project by using sveltekit.

## Usage

### Environmental variables

```bash
cp .env.example
vi .env
```

Add your own API key `PUBLIC_MAPTILER_KEY` for maptiler. The key can be created at maptiler website [here](https://cloud.maptiler.com/account/keys/). You probably need to sign up first.

### Installation

```bash
npm i -g pnpm
pnpm i
```

### Developing

Once you've created a project and installed dependencies with `pnpm install`, start a development server:

```bash
pnpm dev

# or start the server and open the app in a new browser tab
npm run dev -- --open
```

### Building

To create a production version of your app:

```bash
pnpm build
```

You can preview the production build with `npm run preview`.

> To deploy your app, you may need to install an [adapter](https://kit.svelte.dev/docs/adapters) for your target environment.

In this repository, it uses Netlify to build and deploy demo website.

## License

[MIT License](./LICENSE)
