<script>
	export let project;
	
	import { getCreateAppCode } from '@bagawork/editor/src/functions/get-create-app-code.js'
	import { AppElement } from '@bagawork/web-components'
	import { browser } from '$app/environment'
	
	function showApp(appDiv) {
		
		const createAppCode = getCreateAppCode(
			project.app,
			project.pages,
		)
		
		const appElement = new AppElement()
		appDiv.appendChild(appElement)
		appElement.showApp(createAppCode)
		
	}
</script>

{#if browser}
	<div use:showApp class="app" />
{/if}

<style>
	.app {
		width: 200px;
		height: 300px;
		border: 5px solid black;
		margin: 0 auto;
		overflow: auto;
		resize: both;
	}
</style>
