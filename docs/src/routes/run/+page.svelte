<script>
	import { getDecompressedProject } from '@bagawork/editor/src/functions/project-compressor.js'
	import { getCreateAppCode } from "@bagawork/editor/src/functions/get-create-app-code.js"
	import { showAppInElement } from "@bagawork/framework"
	
	const contentSecurityPolicyValue = [
		`default-src 'none';`,
		`form-action 'none';`,
		`connect-src 'none';`,
		`img-src *;`,
		`script-src 'self' 'unsafe-inline' 'unsafe-eval';`,
		`style-src-attr 'self' 'unsafe-inline';`,
		`style-src-elem 'self' 'unsafe-inline';`,
	].join(` `)
	
	let errorOccurred = false
	let bagaCode = ``
	let errorObject = {}
	
	function showApp(screenDiv) {
		
		const hashStartToRemove = "#"
		
		bagaCode = location.hash.substring(
			hashStartToRemove.length,
		)
		
		try{
			
			const project = getDecompressedProject(bagaCode)
			
			const createAppCode = getCreateAppCode(
				project.app,
				project.pages,
			)
			
			const runtimeSettings = {
				onIconCreated(iconAsSvgString){
					
					let link = document.querySelector(`link[rel='icon']`)
					
					link.type = "image/svg+xml"
					
					link.href = `data:image/svg+xml;charset=utf-8,${
						encodeURIComponent(iconAsSvgString)
					}`
					
				}
			}
			
			showAppInElement(
				createAppCode,
				screenDiv,
				runtimeSettings,
			)
			
		}catch(error){
			
			errorOccurred = true
			errorObject = error
			
		}
		
	}
	
</script>

<svelte:head>
	<meta
		http-equiv="Content-Security-Policy"
		content={contentSecurityPolicyValue}
	/>
</svelte:head>

{#if errorOccurred}
	
	<div class="error">
		
		<h1>An error occurred 😢</h1>
		<p>We're sorry, but an error occurred while trying to decompress the app provided in the URL. Therefore, the app can't be started. Most likely, some parts of the URL is missing, or maybe an extra character has been added somewhere by mistake, making it impossible to decompress the app.</p>
		
		<p>If you have copy-pasted the URL somewhere, maybe some parts of it has been lost. For example, Firefox for Android limits how many characters you can enter in a URL, so if you copy-paste a long URL there, Firefox will remove some of its end (causing this poor developer to spend 3-4 hours on debugging why some things didn't work on Firefox for Android... 🤣).</p>
		
		<p>Here is some debug information:</p>
		
		<dl>
			
			<dt>BagaCode:</dt>
			<dd>{bagaCode}</dd>
			
			<dt>Error:</dt>
			<dd>{errorObject.toString()}</dd>
			
		</dl>
		
	</div>
	
{:else}
	<div
		use:showApp
		class="screen"
	/>
{/if}

<style>
	
	.screen {
		width: 100vw;
		height: 100vh;
	}
	
	:global(html, body){
		margin: 0;
		padding: 0;
	}
	
	.error{
		padding: 1em;
	}
	
</style>