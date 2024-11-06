<script>
	
	export let createAppCode = ""
	export let runtimeSettings = {}
	
	import { showAppInElement } from '@bagawork/framework'
	
	function showApp(screenDiv, args){
		
		let stopApp = null
		
		async function update({createAppCode, runtimeSettings}){
			
			stopApp = await showAppInElement(
				createAppCode,
				screenDiv,
				runtimeSettings
			)
			
		}
		
		update(args)
		
		return {
			update,
			destroy(){
				stopApp?.()
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