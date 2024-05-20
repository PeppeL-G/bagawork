<script>
	export let mainMenuOptions = {
		showCopyLinkButton: true,
		showFileButtons: true,
		extraOptions: [],
	}
	
	export let bagaCode = ""

	import Editor from "./Editor.svelte"
	import { editorSettings, app, folders, pages, pageTemplates } from "../stores.js";
	import { onMount } from "svelte";
	import { getDecompressedProject } from "../functions/project-compressor.js";
	import { defaultProject } from '../default-project.js'
	
	let isDoneLoading = false
	
	onMount(() => {
		
		let loadedEditorSettings
		let loadedApp
		let loadedFolders
		let loadedPages
		let loadedPageTemplates
		
		if (bagaCode != "") {
			
			try {
				
				const project = getDecompressedProject(bagaCode)
				
				loadedEditorSettings = project.editorSettings
				loadedApp = project.app
				loadedFolders = project.folders
				loadedPages = project.pages
				loadedPageTemplates = project.pageTemplates
				
			} catch (error) {
				console.log(error)
				alert("The baga code given to the editor is invalid. The default project will be loaded instead.")
			}
			
		}
		
		// Whatever that failed to load, load from default.
		$editorSettings = loadedEditorSettings ?? defaultProject.editorSettings
		$app = loadedApp ?? defaultProject.app
		$folders = loadedFolders ?? defaultProject.folders
		$pages = loadedPages ?? defaultProject.pages
		$pageTemplates = loadedPageTemplates ?? defaultProject.pageTemplates
		
		isDoneLoading = true
		
	})
	
</script>

{#if isDoneLoading}
	<Editor {mainMenuOptions} />
{/if}

<style>
	
</style>
