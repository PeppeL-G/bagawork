<script>
	
	export let frameworkApp = null
	
	function showApp(screenDiv, frameworkApp){
		
		function update(frameworkApp){
			
			screenDiv.innerText = ``
			
			screenDiv.appendChild(
				frameworkApp.createElement(),
			)
			
		}
		
		update(frameworkApp)
		
		return {
			update,
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