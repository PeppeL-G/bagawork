<script>
	
	export let createAppCode = ""
	export let runtimeSettings = {}
	
	import { showAppInElement } from '@bagawork/framework'
	
	function showApp(screenDiv, args){
		
		function update({createAppCode, runtimeSettings}){
			
			showAppInElement(
				createAppCode,
				screenDiv,
				runtimeSettings
			)
			
		}
		
		update(args)
		
		return {
			update,
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