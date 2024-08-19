<script>
	export let project
	
	import { getCreateAppCode } from '@bagawork/editor/src/functions/get-create-app-code.js'
	import { showAppInElement } from '@bagawork/framework'
	import { browser } from '$app/environment'
	
	function showApp(screenElement) {
		
		const createAppCode = getCreateAppCode(
			project.app,
			project.pages,
		)
		
		showAppInElement(
			createAppCode,
			screenElement,
		)
		
	}
	
</script>

{#if browser}
	<div
		use:showApp
		class="screen"
		translate="no"
	/>
{/if}

<style>
	.screen {
		width: 200px;
		height: 300px;
		border: 5px solid black;
		margin: 0 auto;
		overflow: auto;
		resize: both;
	}
</style>
