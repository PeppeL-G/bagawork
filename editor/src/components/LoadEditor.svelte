<script>
	export let mainMenuOptions = {
		showCopyLinkButton: true,
		showFileButtons: true,
		extraOptions: [],
	}

	import Editor from "./Editor.svelte"
	import { app, folders, pages, pageTemplates } from "../stores.js";
	import { onMount } from "svelte";
	import { getDecompressedProject } from "../functions/project-compressor.js";
	import { defaultProject } from '../default-project.js'
	
	let isDoneLoading = false
	
	onMount(() => {
		// If a compressed project is provided in the hash of the URL,
		// load the project from it.
		if (location.hash) {
			// Remove the # character.
			const compressedProject = location.hash.substring(1);

			try {
				const project = getDecompressedProject(compressedProject);

				$app = project.app;
				$folders = project.folders;
				$pages = project.pages;
				$pageTemplates = project.pageTemplates;
				
			} catch (error) {
				console.log(error);

				alert("The information about the project in the link is invalid.");
			}
		}
		
		// If couldn't load project from hash, go with default project.
		if(!$app?.code){
			$app = defaultProject.app;
			$folders = defaultProject.folders;
			$pages = defaultProject.pages;
			$pageTemplates = defaultProject.pageTemplates;
		}else if($pageTemplates.length == 0){
			$pageTemplates = defaultProject.pageTemplates;
		}
		
		isDoneLoading = true
		
	})
	
</script>

{#if isDoneLoading}
	<Editor {mainMenuOptions} />
{/if}

<style>
	
</style>
