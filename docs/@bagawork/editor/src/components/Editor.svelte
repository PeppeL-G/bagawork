<script>
	export let mainMenuOptions = {
		showCopyLinkButton: true,
		showFileButtons: true,
		extraOptions: [],
	}

	import MainMenuModal from "./modals/MainMenuModal.svelte";
	import EditAppModal from "./modals/EditAppModal.svelte";
	import EditFolderModal from "./modals/EditFolderModal.svelte";
	import Folder from "./Folder.svelte";
	import { app, folders } from "../stores.js";
	import { getClassName } from "../functions/get-class-name.js";

	let selectedFolderId = $folders[0].id;

	let showMainMenuModal = false;
	let showEditAppModal = false;
	let showEditFolderModal = false;

	// When deleting a folder, change selectedFolderId to an existing one.
	$: {
		if (!$folders.find((f) => f.id == selectedFolderId)) {
			selectedFolderId = $folders[0].id;
		}
	}

	function addFolder() {
		const newFolderId = $folders.at(-1).id + 1;

		$folders.push({
			id: newFolderId,
			name: "New folder",
			offsetX: 0,
			offsetY: 0,
		});
		$folders = $folders;

		selectedFolderId = newFolderId;
		showEditFolderModal = true;
	}
</script>

<div class="app">
	<div class="folder">
		<Folder folderId={selectedFolderId} />
	</div>

	<div class="header">
		<button
			class="editAppButton"
			on:click={() => showEditAppModal = true}
		>
			{getClassName($app.code)}
		</button>

		<div class="folder-titles">
			{#each $folders as folder (folder.id)}
				<button
					on:click={() => {
						if (selectedFolderId == folder.id) {
							showEditFolderModal = true;
						} else {
							selectedFolderId = folder.id;
						}
					}}
					class:current={selectedFolderId == folder.id}
				>
					{folder.name}
				</button>
			{/each}

			<button class="create-folder" on:click={addFolder}> + </button>
		</div>
	</div>

	<button class="main-menu-button" on:click={() => (showMainMenuModal = true)}>
		☰
	</button>
</div>

{#if showMainMenuModal}
	<MainMenuModal bind:showModal={showMainMenuModal} options={mainMenuOptions} />
{/if}

{#if showEditAppModal}
	<EditAppModal bind:showModal={showEditAppModal} />
{/if}

{#if showEditFolderModal}
	<EditFolderModal
		folderId={selectedFolderId}
		bind:showModal={showEditFolderModal}
	/>
{/if}

<style>
	.app {
		box-sizing: border-box;
		height: 100vh;
		width: 100%;
		position: relative;
		all: initial;
	}

	.header {
		position: absolute;
		top: 0;
		right: 0;
		background-color: rgb(160, 160, 160);
		z-index: 2;
		text-align: center;
		padding: 0.5em;
		border: 5px solid black;
		border-top: none;
		border-right: none;
		border-bottom-left-radius: 1em;
	}

	.header > button {
		font-weight: bold;
		padding: 0.5em;
		display: inline-block;
		color: black;
	}
	
	.header > .editAppButton{
		background-color: lime;
	}

	.header .folder-titles {
		display: block;
	}

	.header .folder-titles button {
		display: inline-block;
		background-color: yellow;
		padding: 0.5em;
		color: black;
		font-weight: bold;
	}

	.header .folder-titles button.create-folder {
		margin-right: 0;
		text-decoration: none;
	}

	.header .folder-titles button.current {
		border: 3px solid black;
	}

	.folder {
		width: 100%;
		height: 100%;
		position: absolute;
	}

	.main-menu-button {
		position: absolute;
		right: 0.75em;
		bottom: 0.75em;
		display: inline-flex;
		align-items: center;
		background-color: rgb(75, 75, 255);
		padding: 1em;
		border-radius: 100%;
		font-size: 1em;
		aspect-ratio: 1 / 1;
	}
</style>
