<script>
	export let showModal;
	export let options;

	import Modal from "./Modal.svelte";
	import { getClassName } from "../../functions/get-class-name.js";
	import { app, folders, pages, pageTemplates } from "../../stores.js";
	import { getCompressedProject, getDecompressedProject } from "../../functions/project-compressor.js";

	function getProject(){
		return {
			app: $app,
			folders: $folders,
			pages: $pages,
			pageTemplates: $pageTemplates,
		}
	}

	async function copyLink() {
		const compressedProjectString = getCompressedProject(getProject());

		const currentUrlWithoutHash = location.href.split("#")[0];
		
		const link = `${currentUrlWithoutHash}#${compressedProjectString}`

		navigator.clipboard.writeText(link);
	}

	function saveToFile() {
		const compressedProjectString = getCompressedProject(getProject());

		const a = document.createElement("a");
		a.href =
			"data:application/octet-stream," + encodeURIComponent(compressedProjectString);
		a.download = `${getClassName($app.code)}.baga`;
		a.click();
	}

	function openFromFile(event) {
		const files = event.target.files;

		if (files.length == 0) {
			return;
		}

		const file = files[0];

		const reader = new FileReader();

		reader.readAsText(file);

		reader.addEventListener("load", (event) => {
			try {
				const project = getDecompressedProject(event.target.result);

				if (
					project.app &&
					project.folders &&
					project.pages &&
					project.pageTemplates
				) {
					$app = project.app;
					$folders = project.folders;
					$pages = project.pages;
					$pageTemplates = project.pageTemplates;

					showModal = false;
				} else {
					alert("Error: The BAGA file could be parsed, but didn't contain all expected data.");
				}
			} catch (error) {
				alert("Error: The file is not a valid BAGA file.");
			}
		});
	}
</script>

<Modal bind:showModal>
	<div class="main-menu-modal">
		<h1>Main menu</h1>

		<div>
			<button on:click={copyLink}>
				Copy project to clipboard as recreational link
			</button>
		</div>

		<div>
			<button on:click={saveToFile}>
				Save project to BAGA file 
			</button>
		</div>

		<div>
			<input
				type="file"
				id="file"
				style="display: none;"
				on:change={openFromFile}
				accept=".baga"
			/>
			<button class="open-button">
				<label for="file">Load project from BAGA file</label>
			</button>
		</div>

		{#each options as option}
			<div>
				<button on:click={option.onClick}>
					{option.text}
				</button>
			</div>
		{/each}
	</div>
</Modal>

<style>
	.main-menu-modal {
		text-align: center;
		max-width: 600px;
		border-radius: 3em;
		margin: 0 auto;
		background-color: silver;
		padding: 1em;
	}

	.main-menu-modal h1 {
		margin-top: 0;
	}
</style>
