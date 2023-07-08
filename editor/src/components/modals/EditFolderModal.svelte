<script>
	
	export let folderId
	export let showModal
	
	import Modal from "./Modal.svelte"
	import { folders, pages } from "../../stores.js"
	
	$: folder = $folders.find(f => f.id == folderId)
	
	function deleteFolder(){
		
		const folderIndex = $folders.findIndex(
			f => f.id == folder.id
		)
		
		$folders.splice(folderIndex, 1)
		
		$pages = $pages.filter(
			p => p.folderId != folderId,
		)
		$folders = $folders
		
		showModal = false
		
	}
	
</script>

<Modal bind:showModal>
	<div class="edit-folder-modal">
		
		<h1>Edit Folder</h1>
		
		<div>
			Name: <input type="text" bind:value={folder.name}>
		</div>
		
		<div>
			<button
				on:click={deleteFolder}
				disabled={$folders.length == 1}
			>
				Delete
			</button>
		</div>
		
	</div>
</Modal>

<style>

.edit-folder-modal{
	width: 90%;
	margin: 0 auto;
	padding: 2em;
	background-color: yellow;
	border-radius: 3em;
}


.edit-folder-modal h1{
	margin-top: 0;
}

</style>