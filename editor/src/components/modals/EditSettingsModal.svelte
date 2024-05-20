<script>
	
	export let showModal = true
	
	import Modal from "./Modal.svelte"
	import { editorSettings } from '../../stores.js'
	
</script>

<Modal bind:showModal>
	<div class="edit-settings-modal">
		
		<h1>Edit settings</h1>
		
		<div class="group">
			
			<h2>Folder screen</h2>
			<p>The size of the preview screens on the folder page, and when selecting a page template.</p>
			
			<div>
				Width in mm:
				<input type="number" min="1" bind:value={$editorSettings.folderScreen.widthInMm}>
			</div>
			
			<div>
				Height in mm:
				<input type="number" min="1" bind:value={$editorSettings.folderScreen.heightInMm}>
			</div>
			
			<div
				class="screen"
				style:width={`${$editorSettings.folderScreen.widthInMm}mm`}
				style:height={`${$editorSettings.folderScreen.heightInMm}mm`}
			>
				Preview folder screen size
			</div>
			
		</div>
		
		<div class="group">
			
			<h2>Code screen</h2>
			<p>The size of the preview screen on the pages where you edit code.</p>
			
			<div>
				Width in mm:
				<input type="number" min="1" bind:value={$editorSettings.codeScreen.widthInMm}>
			</div>
			
			<div>
				Height in mm:
				<input type="number" min="1" bind:value={$editorSettings.codeScreen.heightInMm}>
			</div>
			
			<div
				class="screen"
				style:width={`${$editorSettings.codeScreen.widthInMm}mm`}
				style:height={`${$editorSettings.codeScreen.heightInMm}mm`}
			>
				Preview code screen size
			</div>
			
		</div>
		
	</div>
</Modal>

<style>
	
	.edit-settings-modal{
		width: 80%;
		margin: 0 auto;
		background-color: cornflowerblue;
		border-radius: 2em;
		padding: 2em;
	}
	
	.group{
		padding: 1em;
	}
	
	.screen{
		margin-top: 0.5em;
		margin-left: 1em;
		box-sizing: border-box;
		border: 3px solid black;
		background-color: aqua;
		color: black;
		text-align: center;
		overflow: hidden;
	}
	
</style>
