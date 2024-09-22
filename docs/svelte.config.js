import adapter from '@sveltejs/adapter-static'
import { mdsvex } from 'mdsvex'
import remarkParsePlugin from 'remark-parse'
import remarkDirectivePlugin from 'remark-directive'
import customContainerPlugin from "remark-custom-container/dist/esm/index.js"
import { createBagaworkProjectLeafPlugin } from './markdown-plugins/create-bagawork-project-leaf-plugin.js'
import { createBagaCodeFencePlugin } from './markdown-plugins/create-baga-code-fence-plugin.js'
import { createOnlineEditorPlugin } from './markdown-plugins/create-online-editor-plugin.js'
import rehypeExternalLinks from 'rehype-external-links'
import { createDocsPlugin } from './markdown-plugins/create-docs-plugin.js'
import { createHintPlugin } from './markdown-plugins/create-hint-plugin.js'
import { createRehypeTransformPlugin } from './rehype-plugins/create-rehype-transform-plugin.js'

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter(),
		alias: {
			'data': 'src/data',
		},
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
				createBagaworkProjectLeafPlugin,
				createBagaCodeFencePlugin,
				createOnlineEditorPlugin,
				createDocsPlugin,
				createHintPlugin,
			],
			rehypePlugins: [
				[rehypeExternalLinks, {rel: ['nofollow'], target: "_blank"}],
				createRehypeTransformPlugin,
			],
		}),
	],
}

export default config
