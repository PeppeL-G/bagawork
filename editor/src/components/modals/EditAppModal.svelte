<script>
	
	export let showModal
	
	import CodeEditor from '../CodeEditor.svelte'
	import ViewApp from '../ViewApp.svelte'
	import { app } from '../../stores.js'
	import Modal from './Modal.svelte'
	import { onDestroy } from 'svelte'
	
	let codeEditor
	
	function save(){
		const newCode = codeEditor.getCode()
		$app.code = newCode
		$app = $app
	}
	
	onDestroy(() => {
		save()
	})
	
</script>

<Modal bind:showModal>
	<div class="edit-app-modal">
		
		<div class="preview-section">
			<div class="app-component">
				<ViewApp />
			</div>
		</div>
		
		<div class="code-editor">
			<CodeEditor
				code={$app.code}
				bind:this={codeEditor}
			/>
		</div>
		
		<div class="buttons-row">
			<input type="button" value="Refresh Preview" on:click={save}>
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
	grid-template-columns: 250px 1fr;
	grid-template-rows: 1fr auto;
	align-items: center;
	height: 100%;
	overflow: auto;
}

.preview-section{
	grid-row: 1;
	grid-column: 1;
	padding: 0.5em;
	position: sticky;
	top: 0;
}

.code-editor{
	grid-row: 1;
	grid-column: 2;
	height: 100%;
}

.buttons-row{
	grid-row: 2;
	grid-column: 1 / 3;
	text-align: center;
	padding: 0.5em;
}

.app-component{
	margin: 0 auto;
	background-color: aqua;
	border: 5px solid black;
	aspect-ratio: 9 / 16;
}

</style>