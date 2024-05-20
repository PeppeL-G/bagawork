<script>
	
	export let showModal
	export let pageId
	
	import CodeEditor from '../CodeEditor.svelte'
	import ViewApp from '../ViewApp.svelte'
	import { editorSettings, app, pages } from '../../stores.js'
	import Modal from './Modal.svelte'
	import { onDestroy } from 'svelte'
	import EditAppModal from './EditAppModal.svelte'
	import EditStateModal from './EditStateModal.svelte'
	import DebugModal from './DebugModal.svelte'
	import { getCreateAppCode } from '../../functions/get-create-app-code.js'
	
	$: page = $pages.find(p => p.id == pageId)
	
	let showEditAppModal = false
	let showDebugModal = false
	let showEditStateModal = false
	let forceRestartAppKey = Math.random()
	
	let appState = null
	const runtimeSettings = {
		onStateChange(newState){
			appState = newState
		},
	}
	
	let codeEditor
	
	function save(){
		const newCode = codeEditor.getCode()
		page.code = newCode
		$pages = $pages
		forceRestartAppKey = Math.random()
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
		
		<div class="preview-child">
			
			<div
				class="app-component"
				style:width={`${$editorSettings.codeScreen.widthInMm}mm`}
				style:height={`${$editorSettings.codeScreen.heightInMm}mm`}
			>
				{#key forceRestartAppKey}
					<ViewApp
						createAppCode={getCreateAppCode(
							$app,
							$pages,
							page,
						)}
						{runtimeSettings}
					/>
				{/key}
			</div>
			
			<div class="preview-buttons">
				<button on:click={save}>
					Restart
				</button>
			</div>
			
		</div>
		
		<div class="menu-child">
			
			<div class="title">Menu</div>
			
			<ul>
				<li>
					<button
						on:click={() => (save(), showDebugModal = true)}
					>
						Debug
					</button>
				</li>
				<li>
					<button
						on:click={() => (save(), showEditAppModal = true)}
					>
						Edit app
					</button>
				</li>
				<li>
					<button
						on:click={() => (save(), showEditStateModal = true)}
					>
						Edit state
					</button>
				</li>
				<li>
					<button on:click={remove}>
						Delete page
					</button>
				</li>
			</ul>
			
		</div>
		
		<div class="code-editor-child">
			<CodeEditor
				code={page.code}
				bind:this={codeEditor}
			/>
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

{#if showEditStateModal}
	<EditStateModal
		bind:showModal={showEditStateModal}
		initialState={appState}
	/>
{/if}

<style>

.edit-page-modal{
	
	margin: 0 auto;
	padding: 1em;
	background-color: aqua;
	border-radius: 1em;
	display: grid;
	grid-template-columns: auto 1fr;
	grid-template-rows: 1fr auto;
	align-items: center;
	height: 100%;
	overflow: auto;
	box-sizing: border-box;
	
	& .preview-child{
		
		grid-row: 1;
		grid-column: 1;
		padding: 0.5em;
		
		& .app-component{
			margin: 0 auto;
			background-color: aqua;
			border: 5px solid black;
		}
		
		& .preview-buttons{
			text-align: center;
			
			& button{
				display: block;
				margin: 0 auto;
				margin-top: 1em;
			}
			
		}
		
	}
	
	& .menu-child{
		
		grid-row: 2;
		grid-column: 1;
		text-align: center;
		padding: 0.5em;
		
		& .title{
			font-weight: bold;
			text-decoration: underline;
			margin-top: 1em;
			font-size: 1.25em;
		}
		
		& ul{
			list-style-type: none;
			padding: 0;
			margin: 0;
			
			& li{
				margin-block: 0.5em;
				
				&:last-child{
					margin-bottom: 0;
				}
				
			}
			
		}
		
	}
	
	& .code-editor-child{
		grid-row: 1 / span 2;
		grid-column: 2;
		height: 100%;
	}
	
}

</style>