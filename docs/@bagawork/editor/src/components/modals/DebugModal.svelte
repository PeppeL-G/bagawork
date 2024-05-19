<script>
	
	export let showModal
	export let pageId
	
	import CodeEditor from '../CodeEditor.svelte'
	import { app, editorSettings, pages } from '../../stores.js'
	import Modal from './Modal.svelte'
	import { getFrameworkApp } from '../../functions/get-framework-app.js'
	import ViewSinglePageFrameworkApp from '../ViewSinglePageFrameworkApp.svelte'
	
	$: page = $pages.find(p => p.id == pageId)
	
	let commandsToExecute = []
	let okToContinueResolve = null
	
	let appHasCrashed = false
	
	const runtimeSettings = {
		isPreview: false,
		onError(errorMessage){
			appHasCrashed = true
		},
		okToContinue(commandToExecute, continuesImmediately){
			
			commandsToExecute.unshift(commandToExecute)
			commandsToExecute = commandsToExecute
			
			if(!continuesImmediately){
				return new Promise(resolve => {
					okToContinueResolve = () => {
						resolve()
						okToContinueResolve = null
					}
				})
			}
		},
	}
	
	$: frameworkApp = getFrameworkApp(
		$app,
		$pages,
		page,
		runtimeSettings,
	)
	
	$: appVariables = (commandsToExecute.length, getAppVariables())
	$: pageVariables = (commandsToExecute.length, getPageVariables())
	
	function getAppVariables(){
		
		let appVariables = {}
		
		if(frameworkApp?.app){
			appVariables = JSON.parse(
				JSON.stringify(
					frameworkApp.app,
				),
			)
		}
		
		return Object.entries(appVariables)
		
	}
	
	function getPageVariables(){
		
		let pageVariables = {}
		
		if(frameworkApp?.frameworkPage?.page){
			pageVariables = JSON.parse(
				JSON.stringify(
					frameworkApp.frameworkPage.page,
				),
			)
		}
		
		return Object.entries(pageVariables)
		
		
	}
	
</script>

<Modal bind:showModal>
	<div class="debug-modal">
		
		<div class="left">
			
			<div
				class="app-component"
				style:width={`${$editorSettings.codeScreen.widthInMm}mm`}
				style:height={`${$editorSettings.codeScreen.heightInMm}mm`}
			>
				<ViewSinglePageFrameworkApp
					{frameworkApp}
				/>
				{#if okToContinueResolve }
					<div class="overlay"></div>
				{/if}
			</div>
			
			<div class="executedCommands">
				
				<table border="1">
					<thead>
						<tr>
							<th></th>
							<th>Next command to execute</th>
							<th>Action</th>
						</tr>
					</thead>
					<tbody>
						{#each commandsToExecute as commandToExecute, i (i)}
							<tr>
								<td>{commandsToExecute.length - i}</td>
								<td><div>{commandToExecute}</div></td>
								<td>
									{#if i != 0}
										Executed
									{:else if okToContinueResolve}
										<button
											on:click={okToContinueResolve}
											disabled={appHasCrashed}
										>
											Execute
										</button>
									{/if}
								</td>
							</tr>
						{/each}
					</tbody>
				</table>
				
			</div>
			
		</div>
		
		<div class="app-values">
			<table border="1">
				<thead>
					<tr>
						<th>App Variable</th>
						<th>Value</th>
					</tr>
				</thead>
				<tbody>
					{#if appVariables.length == 0}
						<td colspan="2">None</td>
					{:else}
						{#each appVariables as [variable, value]}
							<tr>
								<td>a.{variable}</td>
								<td>{JSON.stringify(value, null, `  `)}</td>
							</tr>
						{/each}
					{/if}
				</tbody>
			</table>
		</div>
		
		<div class="app-code">
			<CodeEditor
				code={$app.code}
				isReadOnly
			/>
		</div>
		
		<div class="page-values">
			<table border="1">
				<thead>
					<tr>
						<th>Page Variable</th>
						<th>Value</th>
					</tr>
				</thead>
				<tbody>
					{#if pageVariables.length == 0}
						<td colspan="2">None</td>
					{:else}
						{#each pageVariables as [variable, value]}
							<tr>
								<td>p.{variable}</td>
								<td>{JSON.stringify(value, null, `  `)}</td>
							</tr>
						{/each}
					{/if}
				</tbody>
			</table>
		</div>
		
		<div class="page-code">
			<CodeEditor
				code={page.code}
				isReadOnly
			/>
		</div>
		
	</div>
</Modal>

<style>

.debug-modal{
	margin: 0 auto;
	padding: 0.5em;
	background-color: maroon;
	border-radius: 1em;
	display: grid;
	grid-template-columns: auto auto 1fr;
	grid-template-rows: 1fr 1fr;
	gap: 0.5em;
	place-items: center;
	height: 100%;
	overflow: auto;
}

.left{
	grid-row: 1 / span 2;
	grid-column: 1;
	height: 100%;
	display: grid;
	grid-template-rows: 1fr auto;
	grid-template-columns: 100%;
	place-items: center;
}

.left .app-component{
	grid-column: 1;
	grid-row: 1;
	background-color: aqua;
	border: 5px solid black;
	position: relative;
	
	& .overlay{
		position: absolute;
		width: 100%;
		height: 100%;
		top: 0;
		background-color: rgba(0, 0, 0, 0.25);
	}
	
}

.left .executedCommands{
	grid-column: 1;
	grid-row: 2;
	height: 30vh;
	overflow: auto;
	max-width: 100%;
	
	& table{
		background-color: silver;
		max-width: 100%;
		table-layout: fixed;
	}
	
	& th{
		position: sticky;
		top: 0;
		background-color: silver;
		border-bottom: 1px solid black;
	}
	
	& td:first-child{
		text-align: right;
	}
	
	& td:nth-child(2){
		
		max-width: 10em;
		
		& div{
			width: 100%;
			overflow: auto;
			white-space: nowrap;
			scrollbar-width: none; /* Firefox, Chrome */
			
			&::-webkit-scrollbar { 
				display: none; /* Safari */
			}
			
		}
		
	}
	
}

.app-values{
	grid-column: 2;
	grid-row: 1;
	max-height: 100%;
	overflow: auto;
	min-width: 25vw;
	
	& table{
		background-color: yellow;
		margin: 0 auto;
		
		& th{
			position: sticky;
			top: 0;
			background-color: yellow;
			border-bottom: 1px solid black;
		}
		
		& td{
			
			white-space: pre;
			
			& [colspan]{
				text-align: center;
				white-space: pre;
			}
			
		}
		
	}
	
}

.app-code{
	grid-column: 3;
	grid-row: 1;
	height: 100%;
	width: 100%;
}

.page-values{
	grid-column: 2;
	grid-row: 2;
	min-width: 25vw;
	max-height: 100%;
	overflow: auto;
	
	& table{
		background-color: yellow;
		margin: 0 auto;
		
		& td{
			
			white-space: pre;
			
			& [colspan]{
				text-align: center;
				white-space: pre;
			}
			
		}
		
		& th{
			position: sticky;
			top: 0;
			background-color: yellow;
			border-bottom: 1px solid black;
		}
		
	}
	
}

.page-code{
	grid-column: 3;
	grid-row: 2;
	height: 100%;
	width: 100%;
}

</style>