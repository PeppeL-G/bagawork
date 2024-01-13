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
		
		if (bagaCode != "") {
			
			try {
				
				const project = getDecompressedProject(bagaCode)
				
				$editorSettings = project.editorSettings
				$app = project.app
				$folders = project.folders
				$pages = project.pages
				$pageTemplates = project.pageTemplates
				
			} catch (error) {
				console.log(error)
				alert("The baga code given to the editor is invalid. The default project will be loaded instead.")
			}
		}
		
		// Whatever that failed to load, load from default.
		if(!$editorSettings?.screen){
			$editorSettings = defaultProject.editorSettings
		}
		if(!$app?.code){
			$app = defaultProject.app
		}
		if(!$folders?.length){
			$folders = defaultProject.folders
		}
		if(!$pages.length){
			$pages = defaultProject.pages
		}
		if(!$pageTemplates.length){
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
