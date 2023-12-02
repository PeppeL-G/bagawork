<script>
	
	export let runtimeSettings = {}
	
	import { app, pages } from '../stores.js'
	import { AppElement } from '@bagawork/web-components'
	import { getCreateAppCode } from '../functions/get-create-app-code.js'
	
	function showApp(screenDiv, args){
		
		const appElement = new AppElement()
		screenDiv.appendChild(appElement)
		
		function update({createAppCode, runtimeSettings}){
			
			appElement.innerText = ""
			
			appElement.showApp(
				createAppCode,
				runtimeSettings,
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
	use:showApp={{
		createAppCode: getCreateAppCode(
			$app,
			$pages,
		),
		runtimeSettings,
	}}
/>

<style>

.screen{
	width: 100%;
	height: 100%;
}

</style>