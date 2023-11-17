<script>
	
	export let bagaCode = ""
	
	import { AppElement } from '@bagawork/web-components'
	import { projectToCreateAppCode } from '../functions/project-to-create-app-code.js'
	import { getDecompressedProject } from '../functions/project-compressor.js'
	
	function showApp(appDiv, bagaCode){
		
		const appElement = new AppElement()
		appDiv.appendChild(appElement)
		
		function parseAndShowApp(bagaCode){
			
			try{
				
				const project = getDecompressedProject(bagaCode)
				
				const createAppCode = projectToCreateAppCode(
					project.app,
					project.pages,
				)
				
				appElement.showApp(
					createAppCode,
				)
				
			}catch(error){
				appElement.innerText = `<ViewBagaApp /> - Failed to load the project from the provided bagaCode "${bagaCode}".`
			}
			
		}
		
		parseAndShowApp(bagaCode)
		
		return {
			update: parseAndShowApp,
		}
		
	}
	
</script>

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