<script>
	export let showModal
	export let folderId
	export let createAtX
	export let createAtY
	
	import Modal from './Modal.svelte'
	import { app, editorSettings, pageTemplates, pages } from '../../stores.js'
	import EditPageTemplateModal from './EditPageTemplateModal.svelte'
	import { getCreateAppCode } from '../../functions/get-create-app-code.js'
	import ViewApp from '../ViewApp.svelte'
	
	let showEditPageTemplateModal = false
	let selectedPageTemplateId = -1
	
	function addPage(template){
		
		const x = createAtX
		const y = createAtY
		
		const name = prompt("Enter page name:")
		
		if(!name){
			return
		}
		
		const code = template.code.replace(
			/class \w+ extends/,
			`class ${name} extends`
		)
		
		$pages.push({
			id: ($pages.at(-1)?.id ?? 0) + 1,
			folderId,
			code,
			x,
			y,
		})
		$pages = $pages
		
		showModal = false
		
	}
	
	function createNewPageTemplate(){
		
		const id = ($pageTemplates.at(-1)?.id ?? 0) + 1
		
		$pageTemplates.push({
			id,
			title: "New Template",
			code: `
class MyPage extends Page{
	
	createGui(){
		return Rows.children(
			Space,
			Text.text(\`Is this a new template?\`),
			Space,
			Columns.children(
				Space,
				Button.text(\`No\`),
				Space,
				Button.text(\`Yes\`),
				Space,
			)
		)
	}
	
}
			`.trim()
		})
			
		showEditPageTemplateModal = true
		selectedPageTemplateId = id
		
	}
	
</script>

<Modal bind:showModal>
	<div class="create-page-modal">
		
		<h1>Create Page (choose template)</h1>
		
		<div class="page-template-boxes">
			
			{#each $pageTemplates as pageTemplate (pageTemplate.id)}
				
				<div class="page-template-box">
					
					<!-- svelte-ignore a11y-click-events-have-key-events -->
					<div
						class="page-template"
						style:width={`${$editorSettings.folderScreen.widthInMm}mm`}
						style:height={`${$editorSettings.folderScreen.heightInMm}mm`}
						on:click|stopPropagation={() => addPage(pageTemplate)}
					>
						<ViewApp
							createAppCode={getCreateAppCode(
								$app,
								$pages,
								{code: pageTemplate.code},
								true,
							)}
						/>
						<div class="overlay"></div>
					</div>
					
					<button
						class="edit-page-button"
						on:click|stopPropagation={() => {
							selectedPageTemplateId = pageTemplate.id
							showEditPageTemplateModal = true
						}}
					>
						Edit
					</button>
					
				</div>
				
			{/each}
			
		</div>
		
		<button
			class="new-page-template-button"
			on:click={createNewPageTemplate}
		>
			Create new page template
		</button>
		
	</div>
</Modal>

{#if showEditPageTemplateModal}
	<EditPageTemplateModal
		bind:showModal={showEditPageTemplateModal}
		pageTemplateId={selectedPageTemplateId}
	/>
{/if}

<style scoped>

.create-page-modal{
	background-color: orange;
	padding: 2em;
	border-radius: 3em;
}

.create-page-modal > h1{
	margin-top: 0;
}

.page-template-boxes{
	display: flex;
	flex-wrap: wrap;
	align-items: center;
	justify-content: center;
	flex-direction: row;
}

.page-template-box{
	margin: 0.5em;
}

.page-template{
	border: 0.3em solid black;
	position: relative;
}

.overlay{
	position: absolute;
	left: 0;
	top: 0;
	width: 100%;
	height: 100%;
	cursor: pointer;
}

.edit-page-button{
	display: grid;
	margin: auto;
	margin-top: 0.25em;
}

.new-page-template-button{
	display: grid;
	margin: 0 auto;
	margin-top: 2em;
}

</style>
