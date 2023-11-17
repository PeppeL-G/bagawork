<script>
	
	export let createAppCode = ""
	
	import { AppElement } from '@bagawork/web-components'
	
	function showApp(appDiv, createAppCode){
		
		const appElement = new AppElement()
		appDiv.appendChild(appElement)
		appElement.showApp(createAppCode)
		
		return {
			update(createAppCode){
				appElement.innerText = ""
				appElement.showApp(createAppCode)
			}
		}
		
	}
	
</script>

<div
	class="app"
	use:showApp={createAppCode}
/>

<style>

.app{
	width: 100%;
	height: 100%;
}

</style>