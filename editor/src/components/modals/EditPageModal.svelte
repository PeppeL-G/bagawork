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
	import { getCreateAppCode } from '../../functions/get-create-app-code.js'
	import { fade } from 'svelte/transition'
	
	$: page = $pages.find(p => p.id == pageId)
	
	let showEditAppModal = false
	let showEditStateModal = false
	let forceRestartAppKey = Math.random()
	
	const secondaryTabNames = [`Menu`, `Log`]
	let selectedSecondaryTabName = secondaryTabNames[0]
	let showFrameworkLogItems = false
	
	let appState = null
	let loggedItems = []
	
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
	}
	
	$: logItemsToShow = (
		showFrameworkLogItems ?
		loggedItems :
		loggedItems.filter(
			i => i.type != `framework`,
		)
	)
	
	let codeEditor
	
	async function save(){
		
		loggedItems = []
		
		// When restarting, wait a little, so the log is empty and scrollTop=0.
		await new Promise(r => setTimeout(r, 1))
		
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
	
	function scrollTo(node, enable){
		
		function update(enable){
			if(enable){
				
				if(node.parentNode.parentNode.parentNode.scrollTop != 0){
					
					node.scrollIntoView({
						behavior: `smooth`,
						block: `start`,
					})
					
				}
			}
		}
		
		update(enable)
		
		return {
			update,
		}
		
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
		
		<div class="secondary-child">
			
			<div class="tab-names">
				{#each secondaryTabNames as tabName}
					<button
						class:isSelected={selectedSecondaryTabName == tabName}
						on:click={() => selectedSecondaryTabName = tabName}
					>{tabName}</button>
				{/each}
			</div>
			
			{#if selectedSecondaryTabName == `Menu`}
				
				<div class="tab-menu">
					
					<ul>
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
				
			{:else if selectedSecondaryTabName == `Log`}
				
				<div class="tab-log">
					
					<div class="settings">
						Show framework log:
						<input type="checkbox" bind:checked={showFrameworkLogItems}>
					</div>
					
					<div class="items">
						
						{#each logItemsToShow as item, i}
							<div
								class="item {item.type}"
								in:fade={{delay: 100}}
								use:scrollTo={logItemsToShow.length-1 == i}
							>
								{item.value}
							</div>
						{/each}
					
					</div>
					
				</div>
				
			{/if}
			
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
				
				&.isSelected{
					font-weight: bold;
					text-decoration: underline;
					margin-top: 0.25em;
				}
				
			}
			
		}
		
		& .tab-menu{
			
			text-align: center;
			
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
		
		& .tab-log{
			
			& .settings{
				margin: 0.25em;
				text-align: center;
			}
			
			& > .items{
				
				font-family: 'Courier New', Courier, monospace;
				
				& .item{
					
					margin: 0.5em 0.25em;
					padding: 0.25em;
					border-radius: 3px;
					word-wrap: break-word;
					white-space: pre-wrap;
					font-size: 90%;
					
					&.user{
						background-color: whitesmoke;
					}
					
					&.framework{
						background-color: beige;
					}
					
					&.error{
						background-color: pink;
					}
					
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