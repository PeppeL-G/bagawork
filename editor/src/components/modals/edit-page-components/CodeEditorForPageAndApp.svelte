<script>
	
	export let pageId = 0
	export let monaco = null
	export let state = {}
	export let onEditorModeChanged = (em) => null
	
	import { getClassName } from '../../../functions/get-class-name.js'
	import { app, pages } from '../../../stores.js'
	import PageAppCodeEditor from './PageAppCodeEditor.svelte'
	import StateEditor from './StateEditor.svelte'
	
	function getPage(pages){
		return pages.find(
			p => p.id == pageId,
		)
	}
	
	let editor = null
	
	let selectedFileIndex = 0
	const STATE_INDEX = -1
	
	$:{
		onEditorModeChanged(
			selectedFileIndex == STATE_INDEX ? `state` : `code`,
		)
	}
	
	function getTabNames(pages, app){
		
		const page = getPage(pages)
		
		return [
			getClassName(page.code),
			getClassName(app.code),
		]
		
	}
	
	export function getModifiedState(){
		return editor.getModifiedState()
	}
	
	export function save(){
		editor.save()
	}
	
</script>

<div class="code-editor-with-tabs">
	
	<div class="tab-names-child">
		
		{#each getTabNames($pages, $app) as name, i}
			<button
				on:click={() => selectedFileIndex = i}
				disabled={i == selectedFileIndex}
			>
				{name}
			</button>
		{/each}
		
		<div class="space"></div>
		
		<button
			on:click={() => selectedFileIndex = STATE_INDEX}
			disabled={selectedFileIndex == STATE_INDEX}
		>
			State
		</button>
		
	</div>
	
	<div class="code-editor-child2">
		{#if selectedFileIndex == STATE_INDEX}
			<StateEditor
				{monaco}
				{state}
				bind:this={editor}
			/>
		{:else}
			<PageAppCodeEditor
				{monaco}
				{pageId}
				{selectedFileIndex}
				bind:this={editor}
			/>
		{/if}
	</div>
	
</div>

<style>
	
	.code-editor-with-tabs{
		
		width: 100%;
		height: 100%;
		
		display: grid;
		grid-template-rows: min-content 1fr;
		grid-template-columns: 100%;
		
	}
	
	.tab-names-child{
		
		display: flex;
		
		& .space{
			flex: 1;
		}
		
	}
	
	.code-editor-child2{
		grid-row: 2;
	}
	
</style>