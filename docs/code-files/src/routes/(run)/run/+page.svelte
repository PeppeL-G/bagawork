<script>
	import { getDecompressedProject } from '@bagawork/editor/src/functions/project-compressor.js'
	import { projectToAppCreator } from "@bagawork/editor/src/functions/project-to-app-creator.js"
	import { AppElement } from "@bagawork/web-components"
	import { browser } from '$app/environment'
	
	function showApp(appDiv) {
		
		const hashStartToRemove = "#"
		
		const bagaCode = location.hash.substring(
			hashStartToRemove.length,
		)
		
		const project = getDecompressedProject(bagaCode)
		
		const createApp = projectToAppCreator(project.app, null, project.pages)
		
		const appElement = new AppElement()
		appDiv.appendChild(appElement)
		appElement.showApp(createApp, { isPreview: false })
		
	}
	
</script>

{#if browser}
	<div use:showApp class="app" />
{/if}

<style>
	.app {
		width: 100vw;
		height: 100vh;
	}
</style>