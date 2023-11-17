<script>
	
	export let frameworkApp = null
	
	import { AppElement } from '@bagawork/web-components'
	
	function showApp(appDiv, frameworkApp){
		
		const appElement = new AppElement()
		appDiv.appendChild(appElement)
		appElement.showSinglePageFrameworkApp(frameworkApp)
		
		return {
			update(frameworkApp){
				
				appElement.innerText = ``
				
				appElement.showSinglePageFrameworkApp(frameworkApp)
				
			},
		}
		
	}
	
</script>

<div
	class="app"
	use:showApp={frameworkApp}
/>

<style>

.app{
	width: 100%;
	height: 100%;
}

</style>