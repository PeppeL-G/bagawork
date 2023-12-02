<script>
	
	export let initialState = {}
	export let showModal = false
	
	import JsonCodeEditor from '../JsonCodeEditor.svelte'
	import ViewCompleteApp from '../ViewCompleteApp.svelte'
	import { editorSettings } from '../../stores.js'
	import Modal from './Modal.svelte'
	
	let codeEditor
	
	let stateToEditor = initialState
	
	const runtimeSettings = {
		state: initialState,
		onStateChange(newState){
			stateToEditor = newState
		},
	}
	
	function loadStateFromEditor(){
		try{
			runtimeSettings.state = JSON.parse(codeEditor.getCode())
		}catch(error){
			alert("Invalid JSON code in the editor. The app is not restarted.")
		}
	}
	
</script>

<Modal bind:showModal>
	<div class="edit-page-modal">
		
		<div class="preview-child">
			
			<div
				class="screen"
				style:width={`${$editorSettings.codeScreen.widthInMm}mm`}
				style:height={`${$editorSettings.codeScreen.heightInMm}mm`}
			>
				<ViewCompleteApp
					{runtimeSettings}
				/>
			</div>
			
			<div class="buttons">
				
				<button
					on:click={loadStateFromEditor}
				>
					Restart with state
				</button>
				
			</div>
			
		</div>
		
		<div class="code-editor-child">
			<JsonCodeEditor
				code={JSON.stringify(stateToEditor, null, "\t")}
				bind:this={codeEditor}
			/>
		</div>
		
	</div>
</Modal>

<style>

.edit-page-modal{
	
	margin: 0 auto;
	padding: 1em;
	background-color: purple;
	border-radius: 1em;
	display: grid;
	grid-template-columns: auto 1fr;
	grid-template-rows: 100%;
	align-items: center;
	height: 100%;
	overflow: auto;
	box-sizing: border-box;
	
	& .preview-child{
		grid-row: 1;
		grid-column: 1;
		padding: 0.5em;
		
		& > .screen{
			margin: 0 auto;
			background-color: aqua;
			border: 5px solid black;
		}
		
		& > .buttons{
			margin-top: 0.5em;
			text-align: center;
		}
		
	}
	
	& .code-editor-child{
		grid-row: 1;
		grid-column: 2;
		height: 100%;
	}
	
}

</style>