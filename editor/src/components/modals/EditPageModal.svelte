<script>
	
	export let showModal
	export let pageId
	
	import CodeEditor from '../CodeEditor.svelte'
	import ViewApp from '../ViewApp.svelte'
	import { editorSettings, app, pages } from '../../stores.js'
	import Modal from './Modal.svelte'
	import { onDestroy } from 'svelte'
	import EditAppModal from './EditAppModal.svelte'
	import DebugModal from './DebugModal.svelte'
	import { getCreateAppCode } from '../../functions/get-create-app-code.js'
	
	$: page = $pages.find(p => p.id == pageId)
	
	let showEditAppModal = false
	let showDebugModal = false
	
	let codeEditor
	
	function save(){
		const newCode = codeEditor.getCode()
		page.code = newCode
		$pages = $pages
	}
	
	function remove(){
		
		if(!confirm("Really delete?")){
			return
		}
		
		const pageIndex = $pages.findIndex(
			p => p.id == pageId
		)
		
		$pages.splice(pageIndex, 1)
		$pages = $pages
		
		showModal = false
		
	}
	
	onDestroy(() => {
		save()
	})
	
</script>

<Modal bind:showModal>
	<div class="edit-page-modal">
		
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
						page,
					)}
				/>
			</div>
			
			<div class="preview-buttons">
				<button on:click={save}>
					Refresh
				</button>
				<button on:click={() => (save(), showDebugModal = true)}>
					Debug
				</button>
			</div>
			
		</div>
		
		<div class="code-editor">
			<CodeEditor
				code={page.code}
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
				Delete this page
			</button>
		</div>
		
	</div>
</Modal>

{#if showEditAppModal}
	<EditAppModal
		bind:showModal={showEditAppModal}
	/>
{/if}

{#if showDebugModal}
	<DebugModal
		bind:showModal={showDebugModal}
		{pageId}
	/>
{/if}

<style>

.edit-page-modal{
	margin: 0 auto;
	padding: 1em;
	background-color: aqua;
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
	text-align: left;
	padding: 0.5em;
}

.app-component{
	margin: 0 auto;
	background-color: aqua;
	border: 5px solid black;
}

</style>