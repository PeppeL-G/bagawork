<script>
	
	import { showAppInElement } from "@bagawork/framework"
	import { getDecompressedProject } from "@bagawork/editor/src/functions/project-compressor.js"
	import { getCreateAppCode } from "@bagawork/editor/src/functions/get-create-app-code.js"
	
	let bagaCode = "eNrFk29r2zAQxr+KEIPZ1DV2xmAYynDLGH3RMdpCV+ZChH1uzGzJSGfWLPi7T47/ynWy9NVeJEjyPXe653faUVaWNNjRWCRAAxrnTClysw3LksALAk8U0etdxCNsfrGoOIIkF8QbjiQwhDtkEr+zZ7DsNhglYCU5uWoVzafmvO5lGdfCAjh2AYOOuX2RswviG5oE/qk5n2skKDgS3zXShde0dmgq8gSkosHPHc0SGvgO5axo3Nk3SR0q0lQn/UEDr18/6nX95NBSt2ko22TX7cYweWLMYHWzGbyWjCei0De8Ybhx251lm7Z/rbK54bfit3LjTZYnErjVforwXpdwUf9Z63e7of16bbsq+wOWbzt95JXIq4Kr/vx1qgj3JY58j/CyQhS8K3g+VnE3uo1ck2DuHOZ4g1cJbhuGi0mmdKcJpmsj1dlimvkwjvJ+ZXdTUmv8Lxqmp9FvafDBG7DfQ1HmGomB3yAeql/XaZhUOR6GLvglpEKOz8gY5jdCvytZDM7CCIQSyFZUZD+cBLURxP/0eT22bSr7kVhAbQbOzP4mtNuNNxav8nzK5KjsEdRpujmc3sIwnT722ftu2axmbL402MNn+N9kHjYM36sGjiS6+mEmhmO+t2yYGfTxhKDVKZlWBzJNb/gWJk/1Xw8hYXc="
	let startStateString = "null"
	let currentState = null
	
	function showAppInElementAction(screenElement, arg){
		
		function update({bagaCode, startStateString}){
			
			screenElement.innerText = ""
			
			try{
				
				const project = getDecompressedProject(bagaCode)
				const createAppCode = getCreateAppCode(
					project.app,
					project.pages,
				)
				
				const runtimeSettings = {
					onStateChange(newState){
						currentState = newState
					},
					state: JSON.parse(startStateString),
				}
				
				showAppInElement(
					createAppCode,
					screenElement,
					runtimeSettings
				)
				
			}catch(error){
				alert("Error while trying to start the app from the provided BagaCode and start state. See the console for details.")
				console.log(error)
			}
			
		}
		
		update(arg)
		
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

<div
	id="screen"
	use:showAppInElementAction={{
		bagaCode,
		startStateString,
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