import { sveltekit } from '@sveltejs/kit/vite';

/** @type {import('vite').UserConfig} */
const config = {
	plugins: [sveltekit()],
	server: {
		host: true,
		port: 8080,
		fs: {
			allow: ['.'] // For the workspace @bagawork folder to work.
		}
	},
}

export default config
