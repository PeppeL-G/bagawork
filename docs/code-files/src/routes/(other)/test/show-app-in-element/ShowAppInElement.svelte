<script>
	
	import { showAppInElement } from "@bagawork/web-components"
	import { getDecompressedProject } from "@bagawork/editor/src/functions/project-compressor.js"
	import { getCreateAppCode } from "@bagawork/editor/src/functions/get-create-app-code.js"
	
	let bagaCode = "eNqFUk1rg0AQ/Ssy9KDEiKE3IYcmh9JDoaQ5tNRAFnfSCLrK7kiTyv73rvHbhPSgzM7Me7Pz3pbA8hyCEqKMIwQQJUwp6/X8lOcWnggFV5aJy1CEVH1RVghCaS0tv0tJZITvxCS9sW+0nbqZJFIhhbWuEVWpyusWFgsDTFFQ09DhmNcOmS2txQjD8V/MfIqRqPBOf7NI065Bu3DIEo5SQfBVQswhWLggWFqpc1kSXMgOB0P6AYHfxp8m1jsXcrPmCFmTvdSHkcgDYTqpq0PZi/pcxFM5N9mP8qJjnHCJwq5LIW0NgUfmZ+8fym45vXc8Ff+ivXDctnOdJUUqVJu/pgrpMuJOPaRVQZSJZuC8n+IdmeCJ0Zl5U6v6G1wRbCqHbpIMvRsSDOMR1ewmzfSp9fA2cpo3oI25J2OVb4w9Q/Dod6ZuMc0TY0ll7k7/AQfvKCA="
	let startState = "null"
	let currentState = null
	
	function ShowAppInElementAction(screenElement, arg){
		
		function update({bagaCode, state}){
			
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
					state: JSON.parse(state),
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
</p>

<p>
	Start state (JSON):
	<textarea bind:value={startState}></textarea>
</p>

<div
	id="screen"
	use:ShowAppInElementAction={{bagaCode, state: startState}}
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