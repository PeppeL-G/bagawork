<script>
	export let mainMenuOptions = {
		showCopyLinkButton: true,
		showFileButtons: true,
		extraOptions: [],
	}
	
	export let bagaCode = ""

	import Editor from "./Editor.svelte"
	import { app, folders, pages, pageTemplates } from "../stores.js";
	import { onMount } from "svelte";
	import { getDecompressedProject } from "../functions/project-compressor.js";
	import { defaultProject } from '../default-project.js'
	
	let isDoneLoading = false
	
	onMount(() => {
		
		if (bagaCode != "") {
			
			try {
				
				const project = getDecompressedProject(bagaCode)
				
				$app = project.app
				$folders = project.folders
				$pages = project.pages
				$pageTemplates = project.pageTemplates
				
				// If the project contains no page templates, add default ones.
				if(project.pageTemplates.length == 0){
					$pageTemplates = defaultProject.pageTemplates
				}
				
			} catch (error) {
				console.log(error)
				alert("The baga code given to the editor is invalid. Loading the default project instead.")
			}
		}
		
		// If no project is loaded from the baga code, load default project.
		if(!$app?.code){
			$app = defaultProject.app
			$folders = defaultProject.folders
			$pages = defaultProject.pages
			$pageTemplates = defaultProject.pageTemplates
		}
		
		isDoneLoading = true
		
	})
	
</script>

{#if isDoneLoading}
	<Editor {mainMenuOptions} />
{/if}

<style>
	
</style>
