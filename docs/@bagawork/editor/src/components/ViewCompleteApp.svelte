<script>
	
	export let runtimeSettings = {}
	
	import { app, pages } from '../stores.js'
	import { getCreateAppCode } from '../functions/get-create-app-code.js'
	import ViewApp from './ViewApp.svelte';
	
</script>

<ViewApp
	createAppCode={getCreateAppCode(
		$app,
		$pages,
	)}
	{runtimeSettings}
/>