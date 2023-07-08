<script>
	
	export let frameworkApp = null
	
	import { AppElement } from '@bagawork/web-components'
	import { onMount } from 'svelte'
	
	let appDiv
	
	onMount(showApp)
	
	function showApp(){
		const appElement = new AppElement()
		appDiv.appendChild(appElement)
		appElement.showFrameworkApp(frameworkApp)
	}
	
	$: {
		frameworkApp
		if(appDiv){
			appDiv.innerText = ""
			showApp()
		}
	}
	
</script>

<div
	class="app"
	bind:this={appDiv}
/>

<style>

.app{
	width: 100%;
	height: 100%;
}

</style>