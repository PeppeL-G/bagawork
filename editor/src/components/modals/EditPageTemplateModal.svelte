<script>
	
	export let showModal
	export let pageTemplateId
	
	import CodeEditor from '../CodeEditor.svelte'
	import { editorSettings, app, pageTemplates, pages } from '../../stores.js'
	import Modal from './Modal.svelte'
	import { onDestroy } from 'svelte'
	import EditAppModal from './EditAppModal.svelte'
	import ViewApp from '../ViewApp.svelte'
	import { getCreateAppCode } from '../../functions/get-create-app-code.js'
	
	let pageTemplate
	
	$: pageTemplate = $pageTemplates.find(pt => pt.id == pageTemplateId)
	
	let showEditAppModal = false
	
	let codeEditor
	
	function save(){
		const newCode = codeEditor.getCode()
		pageTemplate.code = newCode
		$pageTemplates = $pageTemplates
	}
	
	function remove(){
		
		if(!confirm("Really delete?")){
			return
		}
		
		const pageTemplateIndex = $pageTemplates.findIndex(
			pt => pt.id == pageTemplateId
		)
		
		$pageTemplates.splice(pageTemplateIndex, 1)
		
		showModal = false
		
	}
	
	onDestroy(save)
	
</script>

<Modal bind:showModal>
	<div class="edit-page-template-modal">
		
		<div class="preview-section">
			
			<div
				class="app-component"
				style:width={`${$editorSettings.codeScreen.widthInMm}mm`}
				style:height={`${$editorSettings.codeScreen.heightInMm}mm`}
			>
				<ViewApp
					createAppCode={getCreateAppCode(
						$app,
						$pages,
						{code: pageTemplate.code},
					)}
				/>
			</div>
			
			<div class="preview-buttons">
				<button on:click={save}>
					Refresh
				</button>
			</div>
			
		</div>
		
		<div class="code-editor">
			<CodeEditor
				code={pageTemplate.code}
				bind:this={codeEditor}
			/>
		</div>
		
		<button
			class="edit-app-button"
			on:click={() => (save(), showEditAppModal = true)}
		>
			Edit app
		</button>
		
		<div class="buttons-row">
			<button on:click={remove}>
				Delete this page template
			</button>
		</div>
		
		
	</div>
</Modal>

{#if showEditAppModal}
	<EditAppModal
		bind:showModal={showEditAppModal}
	/>
{/if}

<style>

.edit-page-template-modal{
	margin: 0 auto;
	padding: 1em;
	background-color: orange;
	border-radius: 1em;
	display: grid;
	grid-template-columns: auto 1fr auto;
	grid-template-rows: auto 1fr auto;
	align-items: center;
	height: 100%;
	overflow: auto;
}

.preview-section{
	grid-row: 1 / span 3;
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

.edit-app-button{
	grid-row: 1;
	grid-column: 3;
	z-index: 1000000;
	background-color: lime;
	border-radius: 0.5em;
	padding: 0.5em;
	transform: translate(1em, -1em);
	font-weight: bold;
}

.code-editor{
	grid-row: 1 / span 2;
	grid-column: 2 / span 2;
	height: 100%;
}

.buttons-row{
	grid-row: 3;
	grid-column: 2 / span 2;
	text-align: center;
	padding: 0.5em;
}

.app-component{
	margin: 0 auto;
	background-color: aqua;
	border: 5px solid black;
}

</style>