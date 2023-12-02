<script>
	
	export let createAppCode = ""
	export let runtimeSettings = {}
	
	import { AppElement } from '@bagawork/web-components'
	
	function showApp(screenDiv, {createAppCode, runtimeSettings}){
		
		const appElement = new AppElement()
		screenDiv.appendChild(appElement)
		appElement.showApp(
			createAppCode,
			runtimeSettings
		)
		
		return {
			update({createAppCode, runtimeSettings}){
				appElement.innerText = ""
				appElement.showApp(
					createAppCode,
					runtimeSettings,
				)
			}
		}
		
	}
	
</script>

<div
	class="screen"
	use:showApp={{createAppCode, runtimeSettings}}
/>

<style>

.screen{
	width: 100%;
	height: 100%;
}

</style>