<script>
	
	export let project
	
	import ViewApp from "@bagawork/editor/src/components/ViewApp.svelte"
	import { getCreateAppCode } from '@bagawork/editor/src/functions/get-create-app-code.js'
	import { browser } from '$app/environment'
	
</script>

<div class="screen" translate="no">
	{#if browser}
		<ViewApp
			createAppCode={
				getCreateAppCode(
					project.app,
					project.pages,
				)
			}
		/>
	{/if}
</div>

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
