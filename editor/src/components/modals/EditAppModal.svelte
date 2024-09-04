<script>
	
	export let showModal
	
	import CodeEditor from '../CodeEditor.svelte'
	import ViewCompleteApp from '../ViewCompleteApp.svelte'
	import { editorSettings, app } from '../../stores.js'
	import Modal from './Modal.svelte'
	import { onDestroy } from 'svelte'
	
	let codeEditor
	let forceRestartAppKey = Math.random()
	
	function save(){
		const newCode = codeEditor.getCode()
		$app.code = newCode
		$app = $app
		forceRestartAppKey = Math.random()
	}
	
	onDestroy(() => {
		save()
	})
	
</script>

<Modal bind:showModal>
	<div class="edit-app-modal">
		
		<div
			class="preview-section"
		>
			
			<div
				class="app-component"
				style:width={`${$editorSettings.codeScreen.widthInMm}mm`}
				style:height={`${$editorSettings.codeScreen.heightInMm}mm`}
			>
				{#key forceRestartAppKey}
					<ViewCompleteApp />
				{/key}
			</div>
			
			<div class="preview-buttons">
				<button on:click={save}>
					Restart
				</button>
			</div>
			
		</div>
		
		<div class="code-editor">
			<CodeEditor
				code={$app.code}
				bind:this={codeEditor}
			/>
		</div>
		
	</div>
</Modal>

<style>

.edit-app-modal{
	margin: 0 auto;
	padding: 1em;
	background-color: lime;
	border-radius: 1em;
	display: grid;
	grid-template-columns: auto 1fr;
	grid-template-rows: 1fr auto;
	align-items: center;
	height: 100%;
	overflow: auto;
	box-sizing: border-box;
}

.preview-section{
	grid-row: 1;
	grid-column: 1;
	padding: 0.5em;
	position: sticky;
	top: 0;
}

.preview-buttons{
	text-align: center;
	
	& button{
		display: block;
		margin: 0 auto;
		margin-top: 1em;
	}
	
}

.code-editor{
	grid-row: 1;
	grid-column: 2;
	height: 100%;
}

.app-component{
	margin: 0 auto;
	background-color: aqua;
	border: 5px solid black;
	resize: both;
	overflow: hidden;
}

</style>