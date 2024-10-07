<script>
	
	export let showModal
	export let pageId
	
	import ViewApp from '../ViewApp.svelte'
	import { editorSettings, app, pages } from '../../stores.js'
	import Modal from './Modal.svelte'
	import { getCreateAppCode } from '../../functions/get-create-app-code.js'
	import TabLog from './edit-page-components/TabLog.svelte'
	import TabMenu from './edit-page-components/TabMenu.svelte'
	import CodeEditorForPageAndApp from '../CodeEditorForPageAndApp.svelte'
	import MonacoLoader from '../MonacoLoader.svelte'
	import TabModes from './edit-page-components/TabModes.svelte'
	import CodeEditorForState from '../CodeEditorForState.svelte'
	
	$: page = $pages.find(p => p.id == pageId)
	
	let forceRestartAppKey = Math.random()
	let appState
	
	const secondaryTabNames = [`Menu`, `Mode`, `Log`]
	let selectedSecondaryTabName = secondaryTabNames[0]
	
	let loggedItems = []
	let codeEditorForPageAndApp = null
	let codeEditorForState = null
	
	const tabMenuItems = [{
		text: `Delete`,
		onClick(){
			
			if(!confirm("Do you really want to delete this page?")){
				return
			}
			
			const pageIndex = $pages.findIndex(
				p => p.id == pageId
			)
			
			$pages.splice(pageIndex, 1)
			$pages = $pages
			
			showModal = false
			
		},
	} ,{
		text: `Close`,
		onClick(){
			showModal = false
		},
	}]
	
	const tabModes = [{
		name: `Code`,
		explanation: `In the CODE mode you can edit the code for the selected page and the app. Your changes to the code will be saved when you close this modal or click on the RESTART button.`,
	}, {
		name: `State`,
		explanation: `In the STATE mode you can view the state of your app (the values of all the variables). You can also change the state and then click on the RESTART WITH STATE button to restart the app with the new state, instead of starting it from scratch.`,
	}]
	let selectedMode = tabModes[0]
	
	const runtimeSettings = {
		onStateChange(newState){
			appState = newState
		},
		onLog(type, value){
			loggedItems.push({
				type,
				value,
			})
			loggedItems = loggedItems
		},
		onError(errorMessage){
			loggedItems.push({
				type: `error`,
				value: errorMessage,
			})
			loggedItems = loggedItems
		},
		state: null,
		version: 1,
	}
	
	// This is a function, so the HTML-code doesn't re-render
	// when it uses runtimeSettings (so the app only restarts)
	// when forceRestartAppKey changes value.
	function getRuntimeSettings(){
		return runtimeSettings
	}
	
	async function restart(){
		
		loggedItems = []
		
		// Wait a little, so the log is empty and scrollTop=0
		// before we run the app and add more log items.
		await new Promise(r => setTimeout(r, 1))
		
		runtimeSettings.state = null
		runtimeSettings.version = 1
		
		codeEditorForPageAndApp.save()
		
		forceRestartAppKey = Math.random()
		
	}
	
	async function restartWithState(){
		
		loggedItems = []
		
		// Wait a little, so the log is empty and scrollTop=0
		// before we run the app and add more log items.
		await new Promise(r => setTimeout(r, 1))
		
		runtimeSettings.state = codeEditorForState.getModifiedState()
		
		// Apply some logic to enable update triggers
		// by changing the version in the state.
		const oldVersion = appState.version
		const newVersion = runtimeSettings.state.version
		
		if(oldVersion != newVersion){
			runtimeSettings.state.version = oldVersion
			runtimeSettings.version = newVersion
		}
		
		forceRestartAppKey = Math.random()
		
	}
	
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
						runtimeSettings={getRuntimeSettings()}
					/>
				{/key}
			</div>
			
			<div class="preview-buttons">
				
				{#if selectedMode.name == `State`}
					<button on:click={restartWithState}>
						Restart with state
					</button>
				{:else}
					<button on:click={restart}>
						Restart
					</button>
				{/if}
			</div>
			
		</div>
		
		<div class="secondary-child">
			
			<div class="tab-names">
				{#each secondaryTabNames as tabName}
					<button
						on:click={() => selectedSecondaryTabName = tabName}
						disabled={selectedSecondaryTabName == tabName}
					>
						{tabName}
					</button>
				{/each}
			</div>
			
			{#if selectedSecondaryTabName == `Menu`}
				<TabMenu
					items={tabMenuItems}
				/>
			{:else if selectedSecondaryTabName == `Mode`}
				<TabModes
					modes={tabModes}
					selectedMode={selectedMode}
					onSelectedChange={ m => selectedMode = m }
				/>
			{:else if selectedSecondaryTabName == `Log`}
				<TabLog
					{loggedItems}
				/>
			{/if}
			
		</div>
		
		<div class="code-editor-child">
			<MonacoLoader let:monaco>
				
				{#if selectedMode.name == `Code`}
					<CodeEditorForPageAndApp
						{pageId}
						{monaco}
						bind:this={codeEditorForPageAndApp}
					/>
				{:else if selectedMode.name == `State`}
					<CodeEditorForState
						state={appState}
						{monaco}
						bind:this={codeEditorForState}
					/>
				{/if}
				
			</MonacoLoader>
		</div>
		
	</div>
</Modal>

<style>

.edit-page-modal{
	
	margin: 0 auto;
	padding: 1em;
	background-color: aqua;
	border-radius: 1em;
	display: grid;
	grid-template-columns: min-content 1fr;
	grid-template-rows: auto 1fr;
	align-items: center;
	height: 100%;
	overflow: auto;
	box-sizing: border-box;
	
	& .preview-child{
		
		grid-row: 1;
		grid-column: 1;
		padding: 0.5em;
		margin-bottom: 1em;
		
		& .app-component{
			margin: 0 auto;
			background-color: aqua;
			border: 5px solid black;
			resize: both;
			overflow: hidden;
		}
		
		& .preview-buttons{
			text-align: center;
			
			& button{
				display: block;
				margin: 0 auto;
				margin-top: 0.5em;
			}
			
		}
		
	}
	
	& .secondary-child{
		
		grid-row: 2;
		grid-column: 1;
		padding: 0.5em;
		height: 100%;
		max-height: 100%;
		overflow: auto;
		background-color: silver;
		border-radius: 1em;
		margin: 1em;
		
		& .tab-names{
			
			text-align: center;
			
			& > button{
				
				font-size: 1.25em;
				margin-top: 0.25em;
				
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