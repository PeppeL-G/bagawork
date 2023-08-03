import adapter from '@sveltejs/adapter-static'
import { mdsvex } from 'mdsvex'
import remarkParsePlugin from 'remark-parse'
import remarkDirectivePlugin from 'remark-directive'
import customContainerPlugin from "remark-custom-container/dist/esm/index.js"
import { createBagaworkProjectPlugin } from './plugins/create-bagawork-project-plugin.js'
import { createOnlineEditorPlugin } from './plugins/create-online-editor-plugin.js'
import rehypeExternalLinks from 'rehype-external-links'
import { createDocsPlugin } from './plugins/create-docs-plugin.js'

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter(),
	},
	extensions: ['.svelte', '.md'],
	preprocess: [
		mdsvex({
			smartypants: false,
			extensions: ['.md'],
			remarkPlugins: [
				customContainerPlugin,
				remarkParsePlugin,
				remarkDirectivePlugin,
				createBagaworkProjectPlugin,
				createOnlineEditorPlugin,
				createDocsPlugin,
			],
			rehypePlugins: [
				[rehypeExternalLinks, {rel: ['nofollow'], target: "_blank"}],
			],
		}),
	],
}

export default config
