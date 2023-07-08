<script>
	export let showModal
	export let folderId
	export let createAtX
	export let createAtY
	
	import ViewApp from '../ViewApp.svelte'
	import Modal from './Modal.svelte'
	import { pageTemplates, pages } from '../../stores.js'
	import EditPageTemplateModal from './EditPageTemplateModal.svelte';
	
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
	
	onBefore(){
		
	}
	
	createGui(){
		return Rows(
			Space,
			Text(\`Is this a new template?\`),
			Space,
			Columns(
				Space,
				Button(\`No\`).page(null),
				Button(\`Yes\`).page(null),
				Space,
			)
		)
	}
	
	onAfter(){
		
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
						on:click|stopPropagation={() => addPage(pageTemplate)}
					>
						<ViewApp
							startPage={{code: pageTemplate.code}}
						/>
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
	width: 150px;
	height: 250px;
	border: 0.3em solid black;
}

.edit-page-button{
	display: grid;
	margin: auto;
}

.new-page-template-button{
	display: grid;
	margin: 0 auto;
	margin-top: 2em;
}

</style>
