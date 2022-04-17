interface ImportMetaEnv {
	readonly VITE_MAPTILER_KEY: string;
	// more env variables...
}

interface ImportMeta {
	readonly env: ImportMetaEnv;
}
