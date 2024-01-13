<script>
	
	export let bagaCode = ""
	
	import ViewApp from './ViewApp.svelte';
	import { projectToCreateAppCode } from '../functions/project-to-create-app-code.js'
	import { getDecompressedProject } from '../functions/project-compressor.js'
	
	function getCreateAppCode(bagaCode){
		
		try{
			
			const project = getDecompressedProject(bagaCode)
			
			const createAppCode = projectToCreateAppCode(
				project.app,
				project.pages,
			)
			
			return createAppCode
			
		}catch(error){
			
			// TODO: Fix this better.
			alert("Invalid baga code!")
			return ``
			
		}
		
	}
	
</script>

<ViewApp
	createAppCode={getCreateAppCode(bagaCode)}
/>

<div
	class="app"
	use:showApp={bagaCode}
/>

<style>

.app{
	width: 100%;
	height: 100%;
}

</style>