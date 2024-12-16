<script>
	
	export let frameworkApp = null
	
	function showApp(iframe, frameworkApp){
		
		iframe.addEventListener(
			`load`,
			() => update(frameworkApp),
		)
		iframe.srcdoc = ``
		
		function update(frameworkApp){
		
			const iframeBody = iframe.contentDocument.body
			iframeBody.style.width = `100vw`
			iframeBody.style.height = `100vh`
			iframeBody.style.margin = `0`
			
			iframeBody.replaceChildren(
				frameworkApp.createElement(),
			)
			
		}
		
		return {
			update,
		}
		
	}
	
</script>

<iframe
	title="Preview of App"
	use:showApp={frameworkApp}
></iframe>

<style>

iframe{
	display: block;
	width: 100%;
	height: 100%;
	border: none;
	pointer-events: none;
}

</style>