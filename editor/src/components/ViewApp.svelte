<script>
	
	export let createAppCode = ""
	export let runtimeSettings = {}
	
	import { showAppInElement } from '@bagawork/framework'
	
	function showApp(iframe, args){
		
		let stopApp = null
		
		iframe.addEventListener(
			`load`,
			() => update(args),
		)
		iframe.srcdoc = ``
		
		async function update({createAppCode, runtimeSettings}){
			
			const iframeBody = iframe.contentDocument.body
			iframeBody.style.width = `100vw`
			iframeBody.style.height = `100vh`
			iframeBody.style.margin = `0`
			
			stopApp = await showAppInElement(
				createAppCode,
				iframeBody,
				runtimeSettings
			)
			
		}
		
		return {
			update,
			destroy(){
				stopApp?.()
			}
		}
		
	}
	
</script>

<iframe
	title="Preview Run of App"
	use:showApp={{createAppCode, runtimeSettings}}
></iframe>

<style>

iframe{
	display: block;
	width: 100%;
	height: 100%;
	border: none;
	margin: 0;
	padding: 0;
}

</style>