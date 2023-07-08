<script>
	
	export let showModal
	export let pageId
	
	import CodeEditor from '../CodeEditor.svelte'
	import ViewApp from '../ViewApp.svelte'
	import { pages } from '../../stores.js'
	import Modal from './Modal.svelte'
	import { onDestroy } from 'svelte'
	import EditAppModal from './EditAppModal.svelte'
	
	let page
	$: {
		page = $pages.find(p => p.id == pageId)
	}
	
	let showEditAppModal = false
	
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
		
		<div class="code-editor">
			<CodeEditor
				code={page.code}
				bind:this={codeEditor}
			/>
		</div>
		
		<div class="preview-section">
			<div class="app-component">
				<ViewApp
					startPage={page}
				/>
			</div>
		</div>
		
		<div class="buttons-row">
			<input type="button" value="Delete" on:click={remove}>
			<input type="button" value="Edit app" on:click={() => showEditAppModal = true}>
			<input type="button" value="Refresh Preview" on:click={save}>
		</div>
		
	</div>
</Modal>

{#if showEditAppModal}
	<EditAppModal
		bind:showModal={showEditAppModal}
	/>
{/if}

<style>

.edit-page-modal{
	margin: 0 auto;
	padding: 1em;
	background-color: aqua;
	border-radius: 1em;
	display: grid;
	grid-template-columns: 1fr 250px;
	grid-template-rows: 1fr auto;
	align-items: center;
	height: 100%;
	overflow: auto;
}

.code-editor{
	grid-row: 1;
	grid-column: 1;
	max-width: 100%;
	max-height: 100%;
	overflow: auto;
}

.preview-section{
	grid-row: 1;
	grid-column: 2;
	padding: 0.5em;
	position: sticky;
	top: 0;
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