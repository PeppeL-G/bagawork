<script>
	import { getDecompressedProject } from '@bagawork/editor/src/functions/project-compressor.js'
	import { getCreateAppCode } from "@bagawork/editor/src/functions/get-create-app-code.js"
	import { showAppInElement } from "@bagawork/web-components"
	
	const contentSecurityPolicyValue = [
		`default-src 'none';`,
		`form-action 'none';`,
		`connect-src 'none';`,
		`img-src *;`,
		`script-src 'self' 'unsafe-inline' 'unsafe-eval';`,
		`style-src-attr 'self' 'unsafe-inline';`,
		`style-src-elem 'self' 'unsafe-inline';`,
	].join(` `)
	
	function showApp(screenDiv) {
		
		const hashStartToRemove = "#"
		
		const bagaCode = location.hash.substring(
			hashStartToRemove.length,
		)
		
		const project = getDecompressedProject(bagaCode)
		
		const createAppCode = getCreateAppCode(
			project.app,
			project.pages,
		)
		
		const runtimeSettings = {}
		
		showAppInElement(
			createAppCode,
			screenDiv,
			runtimeSettings,
		)
		
	}
	
</script>

<svelte:head>
	<meta
		http-equiv="Content-Security-Policy"
		content={contentSecurityPolicyValue}
	/>
</svelte:head>

<div
	use:showApp
	class="screen"
/>

<style>
	
	.screen {
		width: 100vw;
		height: 100vh;
	}
	
	:global(html, body){
		margin: 0;
		padding: 0;
	}
	
</style>