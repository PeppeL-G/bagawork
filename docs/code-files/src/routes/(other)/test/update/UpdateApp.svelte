<script>
	
	import { showAppInElement } from "@bagawork/web-components"
	import { getDecompressedProject } from "@bagawork/editor/src/functions/project-compressor.js"
	import { getCreateAppCode } from "@bagawork/editor/src/functions/get-create-app-code.js"
	
	let bagaCode = "eNrFU2Fr2zAQ/StCDGZT1zjZxoKhDKcbo4xuoy1sZSlExOcmTJGMdGbNgv/7pDhKrMRJs33ZhwTpfPd07967JWVlSdMlncgcaEonnGlNrhdZWRJ4QhC5Jua8HIkR2t9EVgJBkQuSbEIKGMItMoVf2SMEYZOMCrBSgnzhuQ3bWO1KZsIUzUHgZQO3qWGxe+DsgvS8mhyerTnfrVGg4Uj+msQ6vaZ1RAvJc1Capj+WdJbTtBdRweZ2MiuCNKKyKAzod5om7nxvzvVDREtD06tswK6aizfgdU92MJsx28tmziiH8B44IJguUVXggp+gxFZIMZHLuQlcM5zGzS0IfWk+VrNdUW7kLx1PpjOeKxBB82mEd6aVGM1fMH6x3IypHoexnv2GoBdGLvNS8moutIvvQ41w9cSR7yMcVoaRWD94vn0lnhoa3CjG4l3Rtx3sAdxYrTtB2i5oA7TPHtRZJ8yuabfl7hR6borokxE+MTZZ0PRVktRRY4z+MWOst6XbFFZnA+iuUgyhkGq7cZ73D2rvUV252tC13g1argw9LCmyor1C+zxfvx2sePYHA7cKdzAvuWnBWwmPbKZ/XhVZXnE8zPkfSXYb/LZkE4g67J4pIAtZkZUuBI3opDd4N95K7Fc6+3fY2k/cMdZn6UYtKs7b/jtadg/6tLouIz6jXsuVnjYfrBOyR/jfynybMnyprTiKmNcPa+JNrJd0D8xPenNCUv8UpP4BpHaHf6PJQ/0HeWrCKA=="
	let startStateString = JSON.stringify(
		null,
		null,
		"\t",
	)
	let runtimeSettingsString = JSON.stringify(
		{version: 1},
		null,
		"\t",
	)
	let currentState = null
	
	function showAppInElementAction(screenElement, args){
		
		function update({bagaCode, startStateString, runtimeSettingsString}){
			
			screenElement.innerText = ""
			
			try{
				
				const project = getDecompressedProject(bagaCode)
				const createAppCode = getCreateAppCode(
					project.app,
					project.pages,
				)
				
				const runtimeSettings = JSON.parse(runtimeSettingsString)
				runtimeSettings.onStateChange = (newState) => {
					currentState = newState
				}
				runtimeSettings.state = JSON.parse(startStateString)
				
				showAppInElement(
					createAppCode,
					screenElement,
					runtimeSettings
				)
				
			}catch(error){
				alert("Error while trying to start the app from the provided BagaCode, start state or runtime settings. See the console for details.")
				console.log(error)
			}
			
		}
		
		update(args)
		
		return {
			update,
		}
		
	}
	
</script>

<p>The app will restart with the new values you enter below as soon as you change them.</p>

<p>
	BagaCode:
	<input bind:value={bagaCode}>
	<a
		href="/editor#{bagaCode}"
		target="_blank"
	>
		Open in editor
	</a>
</p>

<p>
	Start state (JSON):
	<textarea bind:value={startStateString}></textarea>
</p>

<p>
	Runtime settings (JSON):
	<textarea bind:value={runtimeSettingsString}></textarea>
</p>

<div
	id="screen"
	use:showAppInElementAction={{
		bagaCode,
		startStateString,
		runtimeSettingsString,
	}}
></div>

<h2>Current state (JSON)</h2>
<div id="currentState">
	{JSON.stringify(currentState, null, "\t")}
</div>

<style>
	
	#screen{
		height: 400px;
		width: 250px;
		border: 3px solid black;
	}
	
	#currentState{
		white-space: pre;
	}
	
</style>